# i18n-value-builder

Translate only `value:` string literals inside JS config files (e.g., your `metaList.js`)
and build localized copies like `metaList.ko.js`.

## Install
```bash
# inside the folder containing build-i18n.mjs
npm install
```

## Prepare a dictionary (recommended for accuracy)
1) Extract all translatable strings (we generated `/mnt/data/i18n_extract/en.metaList.values.json` in this session).
2) Fill the JSON values with your target language (e.g., Korean).
3) Run the builder:
```bash
node build-i18n.mjs --lang ko --in ./metaList.js --out ./i18n-build --provider dict --dict ./i18n_extract/en.metaList.values.json
```

- Output: `i18n-build/ko/metaList.ko.js`

## Using online providers (optional)
Set env and run one of:

```bash
# DeepL
export DEEPL_API_KEY=...
node build-i18n.mjs --lang ko --in ./metaList.js --provider deepl --out ./i18n-build

# Google Cloud Translate
#김수지 개인 api키 
AIzaSyC2TN-YzE-YYrHFxS5QggE3LgTdDfeMcLQ

#파워쉘
$env:GOOGLE_API_KEY = "여기에_키"

#macOS/Linux:
export GOOGLE_API_KEY='여기에_키'

export GOOGLE_API_KEY=...

node build-i18n.mjs --lang ko --in ./metaList.js --provider google --out ./i18n-build
```

## Notes
- Only touches properties named exactly `value` whose values are plain string literals
  or template literals without `${}` placeholders.
- Skips URLs, BASE_URL references, assets paths, handles, and short tokens.
- Keeps formatting and comments as much as possible.
- Produces new files (does not overwrite originals).




# $env:GOOGLE_API_KEY = "네_API_키"

# ldJsonList.js 돌릴려면?
# 브랜드 보호 + ldJson 번역 + 필드 스킵 동시 적용
node build-i18n.mjs `
  --lang ko `
  --in ../ldJsonList.js `
  --provider google `
  --out ./i18n-build `
  --keys "name,headline,alternativeHeadline,description,articleBody,imageAlt,caption" `
  --skip-keys "ogSiteName,rel,href,hreflang,type,as,crossorigin,inLanguage,url,contentUrl,sameAs,datePublished,dateModified,identifier,isPartOf,thumbnailUrl,logo,mainEntityOfPage,position,item,availability,priceCurrency,price,sku,gtin,brand,aggregateRating,review,offers,author,publisher,breadcrumb" `
  --protect "K-Goods SHOP,K-GoodsShop,K-Goods"



