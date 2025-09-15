
export const BASE_URL = import.meta.env.VITE_BASE_URL || 'www.myurl.com';

export const metaList = {
  _common: {
    description: {
      value: "Shop from Korean online stores with our proxy service. Korean payment, shopping & shipping for K-POP, K-Beauty, and more.",
      meta: [
        { name: "description" },
        { property: "og:description" },
        { name: "twitter:description" }
      ]
    },
    // keywords: {
    //   value: "Korean proxy service, K-POP, K-Beauty, K-Fashion, Korean online shopping, global shipping",
    //   meta: [{ name: "keywords" }]
    // },
    robots: {
      value: "index, follow",
      meta: [{ name: "robots" }]
    },
    ogSiteName: {
      value: "K-Goods SHOP",
      meta: [{ property: "og:site_name" }]
    },
    ogType: {
      value: "website",
      meta: [{ property: "og:type" }]
    },
    twitterCard: {
      value: "summary_large_image",
      meta: [{ name: "twitter:card" }]
    },
    ogLocale: {
      value: "en_US", // 또는 동적으로 설정
      meta: [{ property: "og:locale" }]
    },
    ogImageAlt: {
      value: "K-Goods SHOP Korean Proxy Service",
      meta: [{ property: "og:image:alt" }]
    },
    twitterImageAlt: {
      value: "K-Goods SHOP Korean Proxy Service",
      meta: [{ name: "twitter:image:alt" }]
    },
    author: {
      value: "K-Goods SHOP",
      meta: [{ name: "author" }]
    },
    ogImage: {
        value: "/assets/img/main_/main_banner.png", // 경로는 상황에 맞게 수정
        meta: [
            { property: "og:image" }
        ]
    },
    ogImageWidth: {
    value: "1200",
    meta: [
        { property: "og:image:width" }
    ]
    },
    ogImageHeight: {
    value: "630",
    meta: [
        { property: "og:image:height" }
    ]
    },
    twitterSite: {
    value: "@kgoodsshop",
    meta: [
        { name: "twitter:site" }
    ]
    },
    twitterCreator: {
    value: "@kgoodsshop",
    meta: [
        { name: "twitter:creator" }
    ]
    },
    themeColor: {
    value: "#ffffff",
    meta: [
        { name: "theme-color" }
    ]
    },
    msTileColor: {
    value: "#ffffff",
    meta: [
        { name: "msapplication-TileColor" }
    ]
    },
    // applicationName: {
    // value: "K-Goods SHOP",
    // meta: [
    //     { name: "application-name" }
    // ]
    // },
    appleMobileWebAppTitle: {
    value: "K-Goods SHOP",
    meta: [
        { name: "apple-mobile-web-app-title" }
    ]
    },
    appleMobileWebAppCapable: {
    value: "yes",
    meta: [
        { name: "apple-mobile-web-app-capable" }
    ]
    },
    appleMobileWebAppStatusBarStyle: {
    value: "default",
    meta: [
        { name: "apple-mobile-web-app-status-bar-style" }
    ]
    },
    mobileWebAppCapable: {
    value: "yes",
    meta: [
        { name: "mobile-web-app-capable" }
    ]
    },
    language: {
    value: "English",
    meta: [
        { name: "language" }
    ]
    }

  },

  // ↓ 이하 페이지별 항목들
  "/landing": {
    title: {
      value: "Use Korean Shopping & Shipping Proxy Service | K-Goods SHOP",
      meta: [
        { name: "title" },
        { property: "og:title" },
        { name: "twitter:title" }
      ]
    },
    description: {
      value: "Use our Korean shopping, shipping, and payment proxy services to buy from Korean online stores. Shop, pay, and ship worldwide easily with K-Goods SHOP.",
      meta: [
        { name: "description" },
        { property: "og:description" },
        { name: "twitter:description" }
      ]
    },
    keywords: {
      value: "Korean proxy service, Korean shopping proxy, Korean payment proxy, Korean shipping proxy, K-POP shopping, K-Beauty shopping, K-Fashion, Korean online shopping, Korea to worldwide shipping, Korean warehouse address",
      meta: [{ name: "keywords" }]
    },
    ogUrl: {
      value: `${BASE_URL}/landing`,
      meta: [{ property: "og:url" }]
    },
    ogImage: {
      value: `${BASE_URL}/assets/img/main_/main_banner.png`,
      meta: [{ property: "og:image" }]
    },
    twitterImage: {
      value: `${BASE_URL}/assets/img/main_/main_banner.png`,
      meta: [{ name: "twitter:image" }]
    }
  },
  "/login": {
    title: {
      value: "Log In for Proxy Shopping & Shipping | K-Goods SHOP",
      meta: [
        { name: "title" },
        { property: "og:title" },
        { name: "twitter:title" }
      ]
    },
    description: {
      value: "Access your K-Goods SHOP account to manage proxy shopping, payment & shipping. Track orders, request services & shop easily from Korean online stores.",
      meta: [
        { name: "description" },
        { property: "og:description" },
        { name: "twitter:description" }
      ]
    }
  },
  "/login/login": {
    title: {
      value: "Secure Login with Email & Password | K-Goods SHOP",
      meta: [
        { name: "title" },
        { property: "og:title" },
        { name: "twitter:title" }
      ]
    },
    description: {
      value: "Log in with email & password to use K-Goods SHOP’s proxy shopping, payment & shipping services. Manage orders and enjoy secure Korean online shopping.",
      meta: [
        { name: "description" },
        { property: "og:description" },
        { name: "twitter:description" }
      ]
    }
  },
  "/login/signup": {
    title: {
      value: "Create Free Account for Proxy Services | K-Goods SHOP",
      meta: [
        { name: "title" },
        { property: "og:title" },
        { name: "twitter:title" }
      ]
    },
    description: {
      value: "Sign up free to access K-Goods SHOP’s proxy shopping, payment & shipping services. Get a Korean address, shop online & ship internationally with ease.",
      meta: [
        { name: "description" },
        { property: "og:description" },
        { name: "twitter:description" }
      ]
    }
  },

"/landing/service/tab/buy": {
    title: {
      value: "Shop with Korean Shopping Proxy Service | K-Goods SHOP",
      meta: [
        { name: "title" },
        { property: "og:title" },
        { name: "twitter:title" }
      ]
    },
    description: {
      value: "Use our Korean shopping proxy service to buy from Bunjang, Daiso, and more Korean online stores—no account needed. Enjoy international shipping from Korea.",
      meta: [
        { name: "description" },
        { property: "og:description" },
        { name: "twitter:description" }
      ]
    },
    keywords: {
      value: "Korean shopping proxy, Korean online stores, Bunjang proxy, Daiso international shipping, Korean proxy shopping service, buy from Korea, Korean marketplace proxy, overseas Korean shopping, Korean goods international",
      meta: [{ name: "keywords" }]
    },
    ogUrl: {
      value: `${BASE_URL}/landing/service/tab/buy`,
      meta: [{ property: "og:url" }]
    },
    ogImage: {
      value: `${BASE_URL}/assets/img/img_/Shopping%20Service_Step1%20Order%20Details.png`,
      meta: [{ property: "og:image" }]
    },
    twitterImage: {
      value: `${BASE_URL}/assets/img/img_/Shopping%20Service_Step1%20Order%20Details.png`,
      meta: [{ name: "twitter:image" }]
    }
  },
  "/landing/service/tab/pay": {
    title: {
      value: "Shop Safely with Korean Payment Proxy Service | K-Goods SHOP",
      meta: [
        { name: "title" },
        { property: "og:title" },
        { name: "twitter:title" }
      ]
    },
    description: {
      value: "Use our Korean payment proxy for Korean online shopping with international cards or virtual accounts. Get secure checkout, free refunds—no Korean bank needed.",
      meta: [
        { name: "description" },
        { property: "og:description" },
        { name: "twitter:description" }
      ]
    },
    keywords: {
      value: "Korean payment proxy, Korean online store payment, international card payment Korea, Korean virtual account, Korean bank transfer, pay Korean websites, Korean payment service, overseas payment Korea",
      meta: [{ name: "keywords" }]
    },
    ogUrl: {
      value: `${BASE_URL}/landing/service/tab/pay`,
      meta: [{ property: "og:url" }]
    },
    ogImage: {
      value: `${BASE_URL}/assets/img/img_/Payment%20Service_Step1%20Transfer%20Details.png`,
      meta: [{ property: "og:image" }]
    },
    twitterImage: {
      value: `${BASE_URL}/assets/img/img_/Payment%20Service_Step1%20Transfer%20Details.png`,
      meta: [{ name: "twitter:image" }]
    }
  },
  "/landing/service/tab/ship": {
    title: {
      value: "Use Our Shipping Proxy Service from Korea | K-Goods SHOP",
      meta: [
        { name: "title" },
        { property: "og:title" },
        { name: "twitter:title" }
      ]
    },
    description: {
      value: "Use our Korean shipping proxy to get a free Korean address and warehouse storage. Ship worldwide at low price with tracking, free returns, and repacking.",
      meta: [
        { name: "description" },
        { property: "og:description" },
        { name: "twitter:description" }
      ]
    },
    keywords: {
      value: "Korean shipping proxy, Korean warehouse address, ship from Korea, Korea to worldwide shipping, package forwarding Korea, Korean shipping service, international shipping Korea, consolidation shipping, package repackaging Korea",
      meta: [{ name: "keywords" }]
    },
    ogUrl: {
      value: `${BASE_URL}/landing/service/tab/ship`,
      meta: [{ property: "og:url" }]
    },
    ogImage: {
      value: `${BASE_URL}/assets/img/img_/Shipping%20Service_Step1%20Shipping%20Address.png`,
      meta: [{ property: "og:image" }]
    },
    twitterImage: {
      value: `${BASE_URL}/assets/img/img_/Shipping%20Service_Step1%20Shipping%20Address.png`,
      meta: [{ name: "twitter:image" }]
    }
  },
  "/landing/pricing": {
    title: {
      value: "Korean Proxy Shopping & Shipping Fees | K-Goods SHOP",
      meta: [
        { name: "title" },
        { property: "og:title" },
        { name: "twitter:title" }
      ]
    },
    description: {
      value: "View Korean proxy shopping & shipping fees. Pay with international cards, store items for free, and enjoy secure global delivery—no hidden charges.",
      meta: [
        { name: "description" },
        { property: "og:description" },
        { name: "twitter:description" }
      ]
    }
  },
    "/landing/calculator/tab/calcost": {
    title: {
      value: "Korean Shipping Proxy Cost Calculator | K-Goods SHOP",
      meta: [
        { name: "title" },
        { property: "og:title" },
        { name: "twitter:title" }
      ]
    },
    description: {
      value: "Use our Korean shipping proxy service to calculate delivery costs. Estimate shipping from Korea and get the best international rates with our cost calculator.",
      meta: [
        { name: "description" },
        { property: "og:description" },
        { name: "twitter:description" }
      ]
    },
    keywords: {
      value: "Korean shipping cost calculator, Korea to international shipping rates, package shipping calculator, Korean proxy shipping cost, international shipping estimate Korea, shipping cost from Korea, package calculator Korea, freight calculator",
      meta: [{ name: "keywords" }]
    },
    ogUrl: {
      value: `${BASE_URL}/landing/calculator/tab/calcost`,
      meta: [{ property: "og:url" }]
    },
    ogImage: {
      value: `${BASE_URL}/assets/img/calculator/shipping-calculator.png`,
      meta: [{ property: "og:image" }]
    },
    twitterImage: {
      value: `${BASE_URL}/assets/img/calculator/shipping-calculator.png`,
      meta: [{ name: "twitter:image" }]
    }
  },
  "/landing/calculator/tab/payment": {
    title: {
      value: "KRW to USD Calculator – Korean Proxy Payment | K-Goods SHOP",
      meta: [
        { name: "title" },
        { property: "og:title" },
        { name: "twitter:title" }
      ]
    },
    description: {
      value: "Use our KRW to USD calculator to convert Korean payment for proxy shopping and shipping. Get real-time exchange rates and estimate your costs instantly.",
      meta: [
        { name: "description" },
        { property: "og:description" },
        { name: "twitter:description" }
      ]
    },
    keywords: {
      value: "KRW to USD calculator, Korean Won to Dollar converter, real-time exchange rate KRW USD, Korean proxy shopping calculator, currency converter Korea, KRW USD exchange rate, Korean payment calculator, proxy shopping costs USD",
      meta: [{ name: "keywords" }]
    },
    ogUrl: {
      value: `${BASE_URL}/landing/calculator/tab/payment`,
      meta: [{ property: "og:url" }]
    }
    // ,
    // ogImage: {
    //   value: `${BASE_URL}/assets/img/calculator/krw-usd-calculator.png`,
    //   meta: [{ property: "og:image" }]
    // },
    // twitterImage: {
    //   value: `${BASE_URL}/assets/img/calculator/krw-usd-calculator.png`,
    //   meta: [{ name: "twitter:image" }]
    // }
  },
  "/how-it-works": {
    title: {
      value: "How to Use Our Korean Proxy Service | K-Goods SHOP",
      meta: [{ name: "twitter:title" }]
    },
    description: {
      value: "Use our Korean proxy shopping, payment & shipping service to buy from Korean online stores. Shop globally—no Korean account or ID needed.",
      meta: [
        { name: "description" },
        { property: "og:description" },
        { name: "twitter:description" }
      ]
    },
    keywords: {
      value: "how to use Korean proxy service, Korean shopping guide, proxy service steps, Korean warehouse address guide, Bunjang shopping guide, Korean shipping tutorial, proxy shopping how to, K-goods shopping guide",
      meta: [{ name: "keywords" }]
    },
    // ogImage: {
    //   value: "${BASE_URL}/assets/img/guide/how-it-works-5-steps.png",
    //   meta: [{ property: "og:image" }]
    // },
    // twitterImage: {
    //   value: "${BASE_URL}/assets/img/guide/how-it-works-5-steps.png",
    //   meta: [{ name: "twitter:image" }]
    // },
    ogUrl: {
      value: "${BASE_URL}/how-it-works",
      meta: [{ property: "og:url" }]
    },
    applicationName: {
      value: "K-Goods SHOP Guide",
      meta: [{ name: "application-name" }]
    },
    appleMobileWebAppTitle: {
      value: "How it Works",
      meta: [{ name: "apple-mobile-web-app-title" }]
    }
  },
  "/international-shipping/tab/partner": {
    title: {
      value: "Shipping from Korea with FedEx, EMS & More | K-Goods SHOP",
      meta: [{ name: "twitter:title" }]
    },
    description: {
      value: "Use our Korean shipping proxy service to calculate delivery costs. Estimate shipping from Korea and get the best international rates with our cost calculator.",
      meta: [
        { name: "description" },
        { property: "og:description" },
        { name: "twitter:description" }
      ]
    },
    keywords: {
      value: "FedEx Korea shipping, EMS Korea international, Korea Post shipping, Korean shipping partners, international shipping from Korea, FedEx EMS Korea Post, Korean courier services, global shipping Korea",
      meta: [{ name: "keywords" }]
    },
    ogImage: {
      value: "${BASE_URL}/assets/img/shipping/korean-shipping-partners.png",
      meta: [{ property: "og:image" }]
    },
    twitterImage: {
      value: "${BASE_URL}/assets/img/shipping/korean-shipping-partners.png",
      meta: [{ name: "twitter:image" }]
    },
    ogUrl: {
      value: "${BASE_URL}/international-shipping/tab/partner",
      meta: [{ property: "og:url" }]
    },
    applicationName: {
      value: "Korean Shipping Partners",
      meta: [{ name: "application-name" }]
    },
    appleMobileWebAppTitle: {
      value: "Shipping Partners",
      meta: [{ name: "apple-mobile-web-app-title" }]
    }
  },
  "/international-shipping/tab/restrict": {
    title: {
      value: "Prohibited & Restricted Korea Shipping Items | K-Goods SHOP",
      meta: [{ name: "twitter:title" }]
    },
    description: {
      value: "Before shipping from Korea, check the list of restricted & prohibited items. Avoid customs delays and stay compliant with international shipping rules.",
      meta: [
        { name: "description" },
        { property: "og:description" },
        { name: "twitter:description" }
      ]
    },
    keywords: {
      value: "prohibited items Korea shipping, restricted items international shipping, banned goods Korea export, customs prohibited items, Korean shipping restrictions, international shipping regulations, prohibited electronics Korea, restricted cosmetics shipping",
      meta: [{ name: "keywords" }]
    },
    ogImage: {
      value: `${BASE_URL}/assets/img/shipping/shipping-restrictions-guide.png`,
      meta: [{ property: "og:image" }]
    },
    twitterImage: {
      value: `${BASE_URL}/assets/img/shipping/shipping-restrictions-guide.png`,
      meta: [{ name: "twitter:image" }]
    },
    ogUrl: {
      value: `${BASE_URL}/international-shipping/tab/restrict`,
      meta: [{ property: "og:url" }]
    },
    applicationName: {
      value: "Shipping Restrictions Guide",
      meta: [{ name: "application-name" }]
    },
    appleMobileWebAppTitle: {
      value: "Shipping Restrictions",
      meta: [{ name: "apple-mobile-web-app-title" }]
    }
  }, 
  "/international-shipping/tab/ship": {
    title: {
      value: "Shipping from Korea to Worldwide Destinations | K-Goods SHOP",
      meta: [{ name: "twitter:title" }]
    },
    description: {
      value: "Ship from Korea to the USA, Europe, Asia & more. Get fast, secure international delivery with trusted couriers and find the best shipping options by country.",
      meta: [
        { name: "description" },
        { property: "og:description" },
        { name: "twitter:description" }
      ]
    },
    keywords: {
      value: "shipping from Korea to USA, Korea to Europe shipping, Korea to Asia shipping, international shipping destinations Korea, ship from Korea worldwide, Korean international delivery, global shipping from Korea",
      meta: [{ name: "keywords" }]
    },
    ogImage: {
      value: `${BASE_URL}/assets/img/shipping/worldwide-shipping-map.png`,
      meta: [{ property: "og:image" }]
    },
    twitterImage: {
      value: `${BASE_URL}/assets/img/shipping/worldwide-shipping-map.png`,
      meta: [{ name: "twitter:image" }]
    },
    ogUrl: {
      value: `${BASE_URL}/international-shipping/tab/ship`,
      meta: [{ property: "og:url" }]
    },
    applicationName: {
      value: "Korean Shipping Destinations",
      meta: [{ name: "application-name" }]
    },
    appleMobileWebAppTitle: {
      value: "Shipping Destinations",
      meta: [{ name: "apple-mobile-web-app-title" }]
    }
  },
    "/international-shipping/shipping-from-korea-to": { // 유동변수 삽입해야 해서 뺌.
    title: {
      value: "Shipping from Korea to {tab} | K-Goods SHOP",
      meta: [
        { name: "title" },
        { property: "og:title" },
        { name: "twitter:title" }
      ]
    },
    description: {
      value: "Ship from Korea to {tab} with fast, secure delivery. Enjoy low-cost international shipping, real-time tracking & free Korean warehouse storage.",
      meta: [
        { name: "description" },
        { property: "og:description" },
        { name: "twitter:description" }
      ]
    }
  },
  "/k-stores/tab/k-pop": {
    title: {
      value: "K-POP Online Stores & Proxy Shopping in Korea | K-Goods SHOP",
      meta: [
        { name: "title" },
        { property: "og:title" },
        { name: "twitter:title" }
      ]
    },
    description: {
      value: "Buy K-POP albums, merch & collectibles from Korean online stores. Use our proxy shopping & shipping service from Korea—no Korean account or ID required.",
      meta: [
        { name: "description" },
        { property: "og:description" },
        { name: "twitter:description" }
      ]
    }
  },
  "/k-stores/tab/k-beauty": {
    title: {
      value: "K-Beauty Online Stores & Proxy Shopping | K-Goods SHOP",
      meta: [
        { name: "title" },
        { property: "og:title" },
        { name: "twitter:title" }
      ]
    },
    description: {
      value: "Buy from K-Beauty online stores for Korean skincare, beauty & cosmetics. Use our proxy shopping, payment & shipping service—no Korean account or ID needed.",
      meta: [
        { name: "description" },
        { property: "og:description" },
        { name: "twitter:description" }
      ]
    }
  },
  "/k-stores/tab/k-fashion": {
    title: {
      value: "K-Fashion Online Stores & Proxy Shopping | K-Goods SHOP",
      meta: [
        { name: "title" },
        { property: "og:title" },
        { name: "twitter:title" }
      ]
    },
    description: {
      value: "Buy Korean fashion, shoes & accessories from K-Fashion online stores. Use our proxy shopping, payment & shipping service—no Korean account or ID needed.",
      meta: [
        { name: "description" },
        { property: "og:description" },
        { name: "twitter:description" }
      ]
    }
  },
  "/k-stores/tab/k-lifestyle": {
    title: {
      value: "K-Lifestyle Online Stores & Proxy Shopping | K-Goods SHOP",
      meta: [
        { name: "title" },
        { property: "og:title" },
        { name: "twitter:title" }
      ]
    },
    description: {
      value: "Shop lifestyle goods, stationery & home items from K-Lifestyle online stores. Use our proxy shopping, payment & shipping service—no Korean account or ID needed.",
      meta: [
        { name: "description" },
        { property: "og:description" },
        { name: "twitter:description" }
      ]
    }
  },
  "/k-stores/tab/k-webtoon": {
    title: {
      value: "K-Webtoon & Manhwa Online Stores with Proxy | K-Goods SHOP",
      meta: [
        { name: "title" },
        { property: "og:title" },
        { name: "twitter:title" }
      ]
    },
    description: {
      value: "Buy K-Webtoon & manhwa merch from Korean online stores. Use our proxy shopping, payment & shipping service for official goods—no Korean account or ID needed.",
      meta: [
        { name: "description" },
        { property: "og:description" },
        { name: "twitter:description" }
      ]
    }
  },
  "/k-stores/tab/k-marketplace": {
    title: {
      value: "Korean Online Marketplaces & Proxy Shopping | K-Goods SHOP",
      meta: [
        { name: "title" },
        { property: "og:title" },
        { name: "twitter:title" }
      ]
    },
    description: {
      value: "Buy from Korean online marketplaces like Bunjang using our proxy shopping, payment & shipping service. No Korean account or ID needed—shop easily worldwide.",
      meta: [
        { name: "description" },
        { property: "og:description" },
        { name: "twitter:description" }
      ]
    }
  },
  "/k-stores/kpop_stores/Weverse": {
    title: {
      value: "Shop from Weverse Shop with Proxy Shopping | K-Goods SHOP",
      meta: [
        { name: "title" },
        { property: "og:title" },
        { name: "twitter:title" }
      ]
    },
    description: {
      value: "Buy BTS, TXT, SEVENTEEN merch from Weverse Shop using our proxy shopping, payment & shipping service. K-Goods SHOP lets you pay easily—no Korean account needed.",
      meta: [
        { name: "description" },
        { property: "og:description" },
        { name: "twitter:description" }
      ]
    }
  },
  "/k-stores/kpop_stores/JYP": {
    title: {
      value: "Shop from JYP Shop with Proxy Shopping | K-Goods SHOP",
      meta: [
        { name: "title" },
        { property: "og:title" },
        { name: "twitter:title" }
      ]
    },
    description: {
      value: "Buy TWICE, Stray Kids, ITZY merch from JYP Shop using our Korean proxy shopping, payment & shipping service. No Korean account needed—shop globally now.",
      meta: [
        { name: "description" },
        { property: "og:description" },
        { name: "twitter:description" }
      ]
    }
  },
  "/k-stores/kpop_stores/YG": {
    title: {
      value: "Shop from YG SELECT with Proxy Shopping | K-Goods SHOP",
      meta: [
        { name: "title" },
        { property: "og:title" },
        { name: "twitter:title" }
      ]
    },
    description: {
      value: "Buy BLACKPINK, TREASURE, WINNER merch from YG SELECT using our Korean proxy shopping, payment & shipping service. Get secure global delivery—no Korean account.",
      meta: [
        { name: "description" },
        { property: "og:description" },
        { name: "twitter:description" }
      ]
    }
  },
  "/k-stores/kpop_stores/SM": {
    title: {
      value: "Shop from SMTOWN&STORE with Proxy Shopping | K-Goods SHOP",
      meta: [
        { name: "title" },
        { property: "og:title" },
        { name: "twitter:title" }
      ]
    },
    description: {
      value: "Buy EXO, NCT, Red Velvet merch from SMTOWN&STORE using our proxy shopping, payment & shipping service. No Korean ID needed—shop from Korea easily.",
      meta: [
        { name: "description" },
        { property: "og:description" },
        { name: "twitter:description" }
      ]
    }
  },
  "/k-stores/kpop_stores/KQ": {
    title: {
      value: "Shop from KQ SHOP with Proxy Shopping | K-Goods SHOP",
      meta: [
        { name: "title" },
        { property: "og:title" },
        { name: "twitter:title" }
      ]
    },
    description: {
      value: "Buy ATEEZ, Xikers merch from KQ SHOP with K-Goods SHOP’s Korean proxy shopping, payment & shipping service. No Korean account needed—ship worldwide.",
      meta: [
        { name: "description" },
        { property: "og:description" },
        { name: "twitter:description" }
      ]
    }
  },
  "/k-stores/kpop_stores/BIZENT": {
    title: {
      value: "Shop from BIZENT with Proxy Shopping | K-Goods SHOP",
      meta: [
        { name: "title" },
        { property: "og:title" },
        { name: "twitter:title" }
      ]
    },
    description: {
      value: "Buy MAMAMOO, ONEUS, KARA merch from BIZENT using our Korean proxy shopping & shipping service. No Korean ID needed—order from Korean stores with ease.",
      meta: [
        { name: "description" },
        { property: "og:description" },
        { name: "twitter:description" }
      ]
    }
  },
  "/k-stores/kpop_stores/FNC": {
    title: {
      value: "Shop from FNC Store with Proxy Shopping | K-Goods SHOP",
      meta: [
        { name: "title" },
        { property: "og:title" },
        { name: "twitter:title" }
      ]
    },
    description: {
      value: "Buy SF9, CNBLUE, P1Harmony merch from FNC Store via Korean proxy shopping & shipping. Shop easily with international cards—no Korean ID or account required.",
      meta: [
        { name: "description" },
        { property: "og:description" },
        { name: "twitter:description" }
      ]
    }
  },



  "/notice/main": {
    title: {
      value: "Notices: Shipping, Service & Events Updates | K-Goods SHOP",
      meta: [{ name: "twitter:title" }]
    },
    description: {
      value: "Check K-Goods SHOP updates on proxy shipping, pricing, services & promos. Stay informed on warehouse, delivery & Korean shopping events.",
      meta: [
        { name: "description" },
        { property: "og:description" },
        { name: "twitter:description" }
      ]
    },
    keywords: {
      value: "K-Goods SHOP announcements, Korean proxy service updates, shipping updates Korea, proxy service news, system maintenance notices, policy updates Korea, service announcements",
      meta: [{ name: "keywords" }]
    },
    ogImage: {
      value: `${BASE_URL}/assets/img/notice/announcements.png`,
      meta: [{ property: "og:image" }]
    },
    twitterImage: {
      value: `${BASE_URL}/assets/img/notice/announcements.png`,
      meta: [{ name: "twitter:image" }]
    },
    ogUrl: {
      value: `${BASE_URL}/notice/tab/announcement`,
      meta: [{ property: "og:url" }]
    },
    applicationName: {
      value: "K-Goods SHOP Announcements",
      meta: [{ name: "application-name" }]
    },
    appleMobileWebAppTitle: {
      value: "Announcements",
      meta: [{ name: "apple-mobile-web-app-title" }]
    }
  },

  "/notice/announcement": {
    title: {
      value: "Notices: Shipping, Service & Events Updates | K-Goods SHOP",
      meta: [{ name: "twitter:title" }]
    },
    description: {
      value: "Check K-Goods SHOP updates on proxy shipping, pricing, services & promos. Stay informed on warehouse, delivery & Korean shopping events.",
      meta: [
        { name: "description" },
        { property: "og:description" },
        { name: "twitter:description" }
      ]
    },
    keywords: {
      value: "K-Goods SHOP announcements, Korean proxy service updates, shipping updates Korea, proxy service news, system maintenance notices, policy updates Korea, service announcements",
      meta: [{ name: "keywords" }]
    },
    ogImage: {
      value: `${BASE_URL}/assets/img/notice/announcements.png`,
      meta: [{ property: "og:image" }]
    },
    twitterImage: {
      value: `${BASE_URL}/assets/img/notice/announcements.png`,
      meta: [{ name: "twitter:image" }]
    },
    ogUrl: {
      value: `${BASE_URL}/notice/tab/announcement`,
      meta: [{ property: "og:url" }]
    },
    applicationName: {
      value: "K-Goods SHOP Announcements",
      meta: [{ name: "application-name" }]
    },
    appleMobileWebAppTitle: {
      value: "Announcements",
      meta: [{ name: "apple-mobile-web-app-title" }]
    }
  },

  // 제거 할거라고 함
  // "/notice/event": {
  //   title: {
  //     value: "Korean Shopping Events & Promotions | K-Goods SHOP",
  //     meta: [{ name: "twitter:title" }]
  //   },
  //   description: {
  //     value: "Discover exclusive Korean shopping events, promotions, and special offers at K-Goods SHOP. Save on Korean proxy shopping, shipping discounts, and limited-time deals for international customers.",
  //     meta: [
  //       { name: "description" },
  //       { property: "og:description" },
  //       { name: "twitter:description" }
  //     ]
  //   },
  //   keywords: {
  //     value: "Korean shopping events, K-Goods SHOP promotions, Korean proxy discounts, shipping promotions, Korean shopping deals, special offers Korea, limited time offers, promotional events, savings on Korean goods",
  //     meta: [{ name: "keywords" }]
  //   },
  //   ogImage: {
  //     value: `${BASE_URL}/assets/img/notice/events-promotions.png`,
  //     meta: [{ property: "og:image" }]
  //   },
  //   twitterImage: {
  //     value: `${BASE_URL}/assets/img/notice/events-promotions.png`,
  //     meta: [{ name: "twitter:image" }]
  //   },
  //   ogUrl: {
  //     value: `${BASE_URL}/notice/tab/event`,
  //     meta: [{ property: "og:url" }]
  //   },
  //   ogImageAlt: {
  //     value: "K-Goods SHOP Korean Shopping Events and Promotions",
  //     meta: [{ property: "og:image:alt" }]
  //   },
  //   twitterImageAlt: {
  //     value: "K-Goods SHOP Promotional Events",
  //     meta: [{ name: "twitter:image:alt" }]
  //   },
  //   applicationName: {
  //     value: "K-Goods SHOP Events",
  //     meta: [{ name: "application-name" }]
  //   },
  //   appleMobileWebAppTitle: {
  //     value: "Shopping Events",
  //     meta: [{ name: "apple-mobile-web-app-title" }]
  //   }
  // },
  // "/notice/service": {
  //   title: {
  //     value: "Korean Proxy Service & Pricing Updates Notice | K-Goods SHOP",
  //     meta: [{ name: "twitter:title" }]
  //   },
  //   description: {
  //     value: "Stay informed about K-Goods SHOP service updates, pricing changes, feature releases, and operational improvements. Get the latest news on Korean proxy shopping, payment, and shipping services.",
  //     meta: [
  //       { name: "description" },
  //       { property: "og:description" },
  //       { name: "twitter:description" }
  //     ]
  //   },
  //   keywords: {
  //     value: "K-Goods SHOP service updates, Korean proxy service changes, pricing updates Korea, shipping service news, payment service updates, feature releases, operational improvements, service notices",
  //     meta: [{ name: "keywords" }]
  //   },
  //   ogImage: {
  //     value: `${BASE_URL}/assets/img/notice/service-updates.png`,
  //     meta: [{ property: "og:image" }]
  //   },
  //   twitterImage: {
  //     value: `${BASE_URL}/assets/img/notice/service-updates.png`,
  //     meta: [{ name: "twitter:image" }]
  //   },
  //   ogUrl: {
  //     value: `${BASE_URL}/notice/tab/service`,
  //     meta: [{ property: "og:url" }]
  //   },
  //   ogImageAlt: {
  //     value: "K-Goods SHOP Service Updates and Pricing Changes",
  //     meta: [{ property: "og:image:alt" }]
  //   },
  //   twitterImageAlt: {
  //     value: "K-Goods SHOP Service Updates",
  //     meta: [{ name: "twitter:image:alt" }]
  //   },
  //   applicationName: {
  //     value: "K-Goods SHOP Service Updates",
  //     meta: [{ name: "application-name" }]
  //   },
  //   appleMobileWebAppTitle: {
  //     value: "Service Updates",
  //     meta: [{ name: "apple-mobile-web-app-title" }]
  //   }
  // },


  "/size-chart/tab/cloth": {
    title: {
      value: "Korean Cloth Size Chart for Online Shopping | K-Goods SHOP",
      meta: [{ name: "twitter:title" }]
    },
    description: {
      value: "Use our Korean cloth size chart to shop Korean fashion. Get the right fit with Korean proxy payment, shopping & shipping services—no Korean account needed.",
      meta: [
        { name: "description" },
        { property: "og:description" },
        { name: "twitter:description" }
      ]
    },
    keywords: {
      value: "Korean clothing size chart, Korean fashion sizes, Korean to US size conversion, Korean to EU size chart, international size comparison, Korean men's clothing sizes, Korean women's clothing sizes, size guide Korea",
      meta: [{ name: "keywords" }]
    },
    ogImage: {
      value: `${BASE_URL}/assets/img/size-chart/korean-clothing-size-chart.png`,
      meta: [{ property: "og:image" }]
    },
    twitterImage: {
      value: `${BASE_URL}/assets/img/size-chart/korean-clothing-size-chart.png`,
      meta: [{ name: "twitter:image" }]
    },
    ogUrl: {
      value: `${BASE_URL}/size-chart/tab/cloth`,
      meta: [{ property: "og:url" }]
    },
    ogImageAlt: {
      value: "Korean Clothing Size Chart - International Comparison",
      meta: [{ property: "og:image:alt" }]
    },
    twitterImageAlt: {
      value: "Korean Clothing Size Chart Guide",
      meta: [{ name: "twitter:image:alt" }]
    },
    applicationName: {
      value: "Size Chart Guide",
      meta: [{ name: "application-name" }]
    },
    appleMobileWebAppTitle: {
      value: "Clothing Size Chart",
      meta: [{ name: "apple-mobile-web-app-title" }]
    },
    chartType: {
      value: "Clothing Size Comparison",
      meta: [{ name: "chart-type" }]
    },
    sizeSystems: {
      value: "Korean, US, EU, UK, Italy, France, Japan",
      meta: [{ name: "size-systems" }]
    },
    genderCoverage: {
      value: "Men and Women",
      meta: [{ name: "gender-coverage" }]
    },
    clothingTypes: {
      value: "Tops, Bottoms",
      meta: [{ name: "clothing-types" }]
    },
    referenceType: {
      value: "International Size Chart",
      meta: [{ name: "reference-type" }]
    },
    chartCategory: {
      value: "Fashion Reference Guide",
      meta: [{ name: "chart-category" }]
    }
  },
  "/size-chart/tab/shoes": {
    title: {
      value: "Korean Shoes Size Chart for Online Shopping | K-Goods SHOP",
      meta: [{ name: "twitter:title" }]
    },
    description: {
      value: "Check our Korean shoes size chart to shop Korean footwear. Get the perfect fit with Korean proxy shopping, payment & shipping—no Korean account needed.",
      meta: [
        { name: "description" },
        { property: "og:description" },
        { name: "twitter:description" }
      ]
    },
    keywords: {
      value: "Korean shoes size chart, Korean footwear sizes, Korean to US shoe size conversion, Korean shoe size guide, international shoe sizes, Korean sneakers sizing, shoe size conversion Korea, Korean mm to US size",
      meta: [{ name: "keywords" }]
    },
    ogImage: {
      value: `${BASE_URL}/assets/img/size-chart/korean-shoes-size-chart.png`,
      meta: [{ property: "og:image" }]
    },
    twitterImage: {
      value: `${BASE_URL}/assets/img/size-chart/korean-shoes-size-chart.png`,
      meta: [{ name: "twitter:image" }]
    },
    ogUrl: {
      value: `${BASE_URL}/size-chart/tab/shoes`,
      meta: [{ property: "og:url" }]
    },
    ogImageAlt: {
      value: "Korean Shoes Size Chart - International Comparison",
      meta: [{ property: "og:image:alt" }]
    },
    twitterImageAlt: {
      value: "Korean Shoes Size Chart Guide",
      meta: [{ name: "twitter:image:alt" }]
    },
    applicationName: {
      value: "Shoes Size Chart",
      meta: [{ name: "application-name" }]
    },
    appleMobileWebAppTitle: {
      value: "Shoe Size Chart",
      meta: [{ name: "apple-mobile-web-app-title" }]
    },
    chartType: {
      value: "Shoes Size Comparison",
      meta: [{ name: "chart-type" }]
    },
    sizeSystems: {
      value: "Korean (mm), US, Japan, UK, China",
      meta: [{ name: "size-systems" }]
    },
    genderCoverage: {
      value: "Men and Women",
      meta: [{ name: "gender-coverage" }]
    },
    measurementUnit: {
      value: "Millimeters (mm)",
      meta: [{ name: "measurement-unit" }]
    },
    sizeRangeMen: {
      value: "245mm-290mm",
      meta: [{ name: "size-range-men" }]
    },
    sizeRangeWomen: {
      value: "225mm-265mm",
      meta: [{ name: "size-range-women" }]
    },
    referenceType: {
      value: "International Shoe Size Chart",
      meta: [{ name: "reference-type" }]
    },
    chartCategory: {
      value: "Footwear Reference Guide",
      meta: [{ name: "chart-category" }]
    }
  },
  "/support/tab/faq": {
    title: {
      value: "Proxy Payment, Shopping & Shipping Help | K-Goods SHOP",
      meta: [{ name: "twitter:title" }]
    },
    description: {
      value: "Get answers about proxy payment, shopping & shipping with K-Goods SHOP. Learn about orders, delivery, fees & Korean online shopping support.",
      meta: [
        { name: "description" },
        { property: "og:description" },
        { name: "twitter:description" }
      ]
    },
    keywords: {
      value: "K-Goods SHOP FAQ, Korean proxy service help, payment FAQ Korea, shopping proxy questions, shipping FAQ, packing questions, proxy service support, Korean shopping help, customer support FAQ",
      meta: [{ name: "keywords" }]
    },
    ogImage: {
      value: `${BASE_URL}/assets/img/support/faq-help-center.png`,
      meta: [{ property: "og:image" }]
    },
    twitterImage: {
      value: `${BASE_URL}/assets/img/support/faq-help-center.png`,
      meta: [{ name: "twitter:image" }]
    },
    ogImageAlt: {
      value: "K-Goods SHOP FAQ Help Center",
      meta: [{ property: "og:image:alt" }]
    },
    twitterImageAlt: {
      value: "K-Goods SHOP FAQ Help Center",
      meta: [{ name: "twitter:image:alt" }]
    },
    ogUrl: {
      value: `${BASE_URL}/support/tab/faq`,
      meta: [{ property: "og:url" }]
    },
    applicationName: {
      value: "K-Goods SHOP FAQ",
      meta: [{ name: "application-name" }]
    },
    appleMobileWebAppTitle: {
      value: "FAQ Support",
      meta: [{ name: "apple-mobile-web-app-title" }]
    },
    chartCategory: {
      value: "Support / FAQ",
      meta: [{ name: "chart-category" }]
    },
    supportType: {
      value: "FAQ",
      meta: [{ name: "support-type" }]
    },
    faqCategories: {
      value: "TIP, Packing, Buying, Shipping, Shop, Others",
      meta: [{ name: "faq-categories" }]
    },
    searchFunctionality: {
      value: "Available",
      meta: [{ name: "search-functionality" }]
    },
    pagination: {
      value: "Available",
      meta: [{ name: "pagination" }]
    },
    instantAnswers: {
      value: "Yes",
      meta: [{ name: "instant-answers" }]
    },
    selfService: {
      value: "Yes",
      meta: [{ name: "self-service" }]
    }
  },
  "/support/tab/inquiry": {
    title: {
      value: "Contact Support – 1:1 Proxy Service Help | K-Goods SHOP",
      meta: [{ name: "twitter:title" }]
    },
    description: {
      value: "Need help with your K-Goods SHOP order? Ask us about proxy payment, shopping & shipping via 1:1 inquiry. We support Korean online shopping globally.",
      meta: [
        { name: "description" },
        { property: "og:description" },
        { name: "twitter:description" }
      ]
    },
    keywords: {
      value: "K-Goods SHOP contact support, 1:1 inquiry Korean proxy, customer service Korea, proxy service help, personal assistance, contact customer support, Korean shopping help, technical support",
      meta: [{ name: "keywords" }]
    },
    ogImage: {
      value: `${BASE_URL}/assets/img/support/customer-service.png`,
      meta: [{ property: "og:image" }]
    },
    twitterImage: {
      value: `${BASE_URL}/assets/img/support/customer-service.png`,
      meta: [{ name: "twitter:image" }]
    },
    ogUrl: {
      value: `${BASE_URL}/support/tab/inquiry`,
      meta: [{ property: "og:url" }]
    },
    ogImageAlt: {
      value: "K-Goods SHOP Customer Service and Support",
      meta: [{ property: "og:image:alt" }]
    },
    twitterImageAlt: {
      value: "K-Goods SHOP Customer Service",
      meta: [{ name: "twitter:image:alt" }]
    },
    applicationName: {
      value: "K-Goods SHOP Support",
      meta: [{ name: "application-name" }]
    },
    appleMobileWebAppTitle: {
      value: "Customer Support",
      meta: [{ name: "apple-mobile-web-app-title" }]
    },
    supportType: {
      value: "1:1 Inquiry",
      meta: [{ name: "support-type" }]
    },
    inquiryStatus: {
      value: "All, Awaiting, Answered",
      meta: [{ name: "inquiry-status" }]
    },
    responseTime: {
      value: "24-48 hours",
      meta: [{ name: "response-time" }]
    },
    languageSupport: {
      value: "English, Korean",
      meta: [{ name: "language-support" }]
    },
    ticketTracking: {
      value: "Available",
      meta: [{ name: "ticket-tracking" }]
    },
    expertAssistance: {
      value: "Yes",
      meta: [{ name: "expert-assistance" }]
    }
  },

  "/policy/privacy-policy": {
    title: {
      value: "Privacy Policy for Proxy Services | K-Goods SHOP",
      meta: [
        { name: "title" },
        { property: "og:title" },
        { name: "twitter:title" }
      ]
    },
    description: {
      value: "K-Goods SHOP’s privacy policy explains how we protect and use your personal data for Korean proxy shopping, payment & shipping—secure, private, and reliable.",
      meta: [
        { name: "description" },
        { property: "og:description" },
        { name: "twitter:description" }
      ]
    }
  },
  "/policy/terms-of-service": {
    title: {
      value: "Terms of Service for Proxy Shopping & Payment | K-Goods SHOP",
      meta: [
        { name: "title" },
        { property: "og:title" },
        { name: "twitter:title" }
      ]
    },
    description: {
      value: "Read K-Goods SHOP’s terms of service for Korean proxy shopping, payment & shipping. Understand your rights, obligations & how our services operate.",
      meta: [
        { name: "description" },
        { property: "og:description" },
        { name: "twitter:description" }
      ]
    }
  },
  "/about-us": {
    title: {
      value: "About Korean Proxy Shopping & Shipping | K-Goods SHOP",
      meta: [
        { name: "title" },
        { property: "og:title" },
        { name: "twitter:title" }
      ]
    },
    description: {
      value: "K-Goods SHOP simplifies Korean proxy shopping, payment, and global shipping. Shop easily from Korea—no Korean account or language skills required!",
      meta: [
        { name: "description" },
        { property: "og:description" },
        { name: "twitter:description" }
      ]
    }
  },








  // ...다른 페이지들 계속 추가
};
