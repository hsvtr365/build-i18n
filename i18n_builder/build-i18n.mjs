#!/usr/bin/env node
/**
 * build-i18n.mjs (CJS require 강제 버전)
 * - JS AST 파싱 → key === "value" 문자열만 번역
 * - ${} 없는 TemplateLiteral도 번역
 * - URL/경로/BASE_URL/핸들/짧은 토큰 스킵
 * - Google/DeepL/Dict 지원
 *
 * 사용 예:
 *   node build-i18n.mjs --lang ko --in ../metaList.js --provider google --out ./i18n-build
 */

import fs from 'node:fs/promises';
import path from 'node:path';
import process from 'node:process';
import { fileURLToPath } from 'node:url';
import { createRequire } from 'node:module';

// ESM ↔ CJS 꼬임 방지: traverse/generator는 CJS require로 강제 로드
const require = createRequire(import.meta.url);

// @babel/parser는 ESM import OK
import * as babelParser from '@babel/parser';





// CJS 모듈 로드
const traverseMod = require('@babel/traverse');
const generatorMod = require('@babel/generator');

// export 변형 모두 커버
let traverse =
  (typeof traverseMod === 'function' && traverseMod) ||
  (traverseMod && typeof traverseMod.default === 'function' && traverseMod.default) ||
  (traverseMod && typeof traverseMod.traverse === 'function' && traverseMod.traverse) ||
  (traverseMod && traverseMod.default && typeof traverseMod.default.traverse === 'function' && traverseMod.default.traverse) ||
  null;

let generate =
  (typeof generatorMod === 'function' && generatorMod) ||
  (generatorMod && typeof generatorMod.default === 'function' && generatorMod.default) ||
  (generatorMod && generatorMod.default && typeof generatorMod.default === 'function' && generatorMod.default) ||
  null;

if (!traverse) {
  console.error('[fatal] Cannot resolve traverse function from @babel/traverse');
  process.exit(1);
}
if (!generate) {
  console.error('[fatal] Cannot resolve generate function from @babel/generator');
  process.exit(1);
}

const __dirname = path.dirname(fileURLToPath(import.meta.url));

/* ---------------- CLI ---------------- */



function parseArgs(argv) {
  const args = {};
  for (let i = 2; i < argv.length; i++) {
    const a = argv[i];
    if (a.startsWith('--')) {
      const hasEq = a.includes('=');
      const k = a.replace(/^--/, '');
      let v = hasEq ? a.slice(a.indexOf('=') + 1) : argv[i + 1];
      if (hasEq) {
        args[k] = v;
      } else if (v === undefined || (typeof v === 'string' && v.startsWith('--'))) {
        args[k] = true;
      } else {
        args[k] = v; i++;
      }
    } else {
      (args._ ??= []).push(a);
    }
  }
  if (typeof args['in'] === 'string') args['in'] = [args['in']];
  if (!args['in'] && args._) args['in'] = args._;
  return args;
}


// 1) args 파싱/디스트럭처링
const args = parseArgs(process.argv);
const {
  lang = 'ko',
  provider = 'google',
  dict: dictPath,
  out = './i18n-build',
  keepMissing = 'true',
  keys: keysArg,                 // --keys
  ['skip-keys']: skipKeysArg,    // --skip-keys
  protect: protectArg            // --protect   ← 추가
} = args;

if (!args['in'] || args['in'].length === 0) {
  console.error('Error: provide input files via --in <file1> <file2> ...');
  process.exit(1);
}

const PROTECT_PHRASES = (protectArg ? String(protectArg).split(',').map(s => s.trim()).filter(Boolean) : []);

// 2) 번역/스킵 키 집합 (args 파싱 '뒤'에 둔다)
const TRANSLATE_KEYS = new Set(
  (keysArg ? String(keysArg).split(',').map(s => s.trim()).filter(Boolean) : [])
    .concat(['value']) // 기본 value 포함
);

const DEFAULT_SKIP = [
  'robots','ogType','twitterCard','ogLocale',
  'rel','href','hreflang','type','as','crossorigin',
  '@context','@type','@id',
  'inLanguage','url','contentUrl','sameAs','datePublished','dateModified',
  'identifier','isPartOf','thumbnailUrl','logo','mainEntityOfPage','position','item',
  'availability','priceCurrency','price','sku','gtin','brand','aggregateRating','review',
  'offers','author','publisher','breadcrumb'
];

const SKIP_KEYS = new Set(
  (skipKeysArg ? String(skipKeysArg).split(',').map(s => s.trim()).filter(Boolean) : [])
    .concat(DEFAULT_SKIP)
);






/* ---------------- Utils ---------------- */
function isHumanText(s) {
  if (!s) return false;
  const blacklist = ['http://', 'https://', '${BASE_URL}', '/assets', '/landing', '@kgoodsshop', 'mailto:', 'tel:'];
  if (blacklist.some(b => s.includes(b))) return false;
  if (/^[A-Za-z0-9_@#.\-/:%\s]+$/.test(s) && (!s.includes(' ') || s.length < 8)) return false;
  if (!/[A-Za-z]/.test(s)) return false;
  return true;
}

function parseJS(code, filename) {
  return babelParser.parse(code, {
    sourceType: 'module',
    plugins: ['jsx', 'typescript', 'importMeta', 'dynamicImport'],
    allowReturnOutsideFunction: true,
  });
}
const hasTemplateExpr = tpl => tpl.expressions && tpl.expressions.length > 0;

/* ---------------- Translators ---------------- */
class DictTranslator {
  constructor(map, lang, keepMissing = true) {
    this.map = map || {}; this.lang = lang; this.keepMissing = keepMissing;
  }
  async translateMany(texts) {
    return texts.map(t => {
      const v = this.map[t];
      if (typeof v === 'string' && v.trim()) return v;
      return this.keepMissing ? t : '';
    });
  }
}

class DeepLTranslator {
  constructor(lang) { this.lang = lang; this.key = process.env.DEEPL_API_KEY; }
  async translateMany(texts) {
    if (!this.key) throw new Error('DEEPL_API_KEY env is required');
    const out = [];
    for (const text of texts) {
      const params = new URLSearchParams({ text, target_lang: this.lang.toUpperCase() });
      const res = await fetch('https://api.deepl.com/v2/translate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: `auth_key=${encodeURIComponent(this.key)}&${params.toString()}`,
      });
      if (!res.ok) throw new Error(`DeepL HTTP ${res.status}`);
      const data = await res.json();
      out.push(data.translations?.[0]?.text ?? text);
    }
    return out;
  }
}

class GoogleTranslator {
  constructor(lang) { this.lang = lang; this.key = process.env.GOOGLE_API_KEY; }
  async translateMany(texts) {
    if (!this.key) throw new Error('GOOGLE_API_KEY env is required');
    const url = `https://translation.googleapis.com/language/translate/v2?key=${this.key}`;
    const results = [];
    const chunkSize = 100;
    for (let i = 0; i < texts.length; i += chunkSize) {
      const chunk = texts.slice(i, i + chunkSize);
      const payload = { q: chunk, target: this.lang, format: 'text' };
      const res = await fetch(url, {
        method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error(`Google Translate HTTP ${res.status}`);
      const data = await res.json();
      const translated = data?.data?.translations?.map(t => t.translatedText ?? '') ?? [];
      results.push(...translated);
    }
    return results;
  }
}

async function getTranslator() {
  if (provider === 'dict') {
    if (!dictPath) { console.error('Error: provider=dict requires --dict <path-to-json-map>'); process.exit(1); }
    const map = JSON.parse(await fs.readFile(dictPath, 'utf-8'));
    return new DictTranslator(map, lang, keepMissing !== 'false');
  } else if (provider === 'deepl') {
    return new DeepLTranslator(lang);
  } else if (provider === 'google') {
    return new GoogleTranslator(lang);
  }
  throw new Error(`Unknown provider: ${provider}`);
}

/* ---------------- Core ---------------- */
async function translateFile(inputPath, translator, outDir, lang) {
  const src = await fs.readFile(inputPath, 'utf-8');
  const ast = parseJS(src, inputPath);

  // 1) 대상 수집
  const targets = [];
  traverse(ast, {
    ObjectProperty(path) {
      const node = path.node;
     // 현재 프로퍼티 키 이름
     const keyName =
       node.key.type === 'Identifier' ? node.key.name
       : node.key.type === 'StringLiteral' ? node.key.value
       : null;
     if (!keyName) return;

     // 상위 컨테이너 키(예: robots 블록 안의 value 등)
     let containerKey = null;
     const gp = path.parentPath?.parentPath;
     if (gp && gp.node && gp.node.type === 'ObjectProperty') {
       const k = gp.node.key;
       containerKey = k.type === 'Identifier' ? k.name : (k.type === 'StringLiteral' ? k.value : null);
     }
     // 스킵 키(컨테이너/자기자신 중 하나라도 스킵이면 제외)
     if ((containerKey && SKIP_KEYS.has(containerKey)) || SKIP_KEYS.has(keyName)) return;

     // 번역 대상 키: 기본 value + CLI로 받은 keys
     if (!TRANSLATE_KEYS.has(keyName)) return;



      if (node.value.type === 'StringLiteral') {
        const original = node.value.value;
        if (isHumanText(original)) targets.push({ node, original });
      } else if (node.value.type === 'TemplateLiteral' && !hasTemplateExpr(node.value)) {
        const raw = node.value.quasis.map(q => q.value.cooked).join('');
        if (isHumanText(raw)) targets.push({ node, original: raw });
      }
    }
  });

  // 2) 중복 제거 + 번역
  const originals = targets.map(t => t.original);
  const uniqList = Array.from(new Map(originals.map((v, i) => [v, i])).keys());


// originals → uniqList 이후
const maskedList = [];
const maskMaps = [];
for (const s of uniqList) {
  const { masked, map } = maskProtected(s, PROTECT_PHRASES);
  maskedList.push(masked);
  maskMaps.push(map);
}

const translatedMaskedList = await translator.translateMany(maskedList);
const translatedList = translatedMaskedList.map((t, i) => unmaskProtected(t, maskMaps[i]));

const transMap = new Map(uniqList.map((k, idx) => [k, translatedList[idx]]));

  // const translatedList = await translator.translateMany(uniqList);
  // const transMap = new Map(uniqList.map((k, idx) => [k, translatedList[idx]]));

  // 3) AST 갱신
  let changed = 0;
  for (const t of targets) {
    const translated = transMap.get(t.original) ?? t.original;
    if (translated && translated !== t.original) {
      t.node.value = { type: 'StringLiteral', value: translated };
      changed++;
    }
  }

  // 4) 출력
  const { code } = generate(
    ast,
    { retainLines: true, comments: true, jsescOption: { minimal: true } },
    src
  );

  
  const rel = path.relative(process.cwd(), inputPath);
  const fileName = path.basename(rel).replace(/\.js$/, `.${lang}.js`);
  const outFile = path.join(outDir, lang, fileName);
  await fs.mkdir(path.dirname(outFile), { recursive: true });
  await fs.writeFile(outFile, code, 'utf-8');
  return { changed, outFile };
}

/* ---------------- Main ---------------- */
async function main() {
  const translator = await getTranslator();
  const inputs = args['in'];
  const outDir = out;
  let totalChanged = 0;

  for (const inPath of inputs) {
    const abs = path.resolve(inPath);
    try {
      const r = await translateFile(abs, translator, outDir, lang);
      totalChanged += r.changed;
      console.log(`✓ ${path.basename(abs)} → ${path.relative(process.cwd(), r.outFile)} (${r.changed} changes)`);
    } catch (e) {
      console.error(`✗ ${inPath}: ${e.message}`);
      process.exitCode = 1;
    }
  }
  console.log(`Done. total changes: ${totalChanged}`);
}

main().catch(e => {
  console.error(e);
  process.exit(1);
});


function maskProtected(text, phrases) {
  if (!phrases.length) return { masked: text, map: [] };
  let masked = text;
  const map = [];
  phrases.forEach((p, idx) => {
    if (!p) return;
    const token = `__PH${idx}__`;
    // 모든 등장 위치 치환 (단순 include → global replace)
    masked = masked.split(p).join(token);
    map.push({ token, original: p });
  });
  return { masked, map };
}
function unmaskProtected(text, map) {
  let out = text;
  for (const { token, original } of map) {
    out = out.split(token).join(original);
  }
  return out;
}
