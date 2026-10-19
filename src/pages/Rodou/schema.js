// Dados estruturados e URLs da página Rodou.
// Compartilhado entre o React (Helmet) e o pré-render (scripts/prerender-rodou.mjs).

export const SITE = "https://jfcoder.com";
export const PLAY_URL = "https://play.google.com/store/apps/details?id=com.jfcoder.rodou";

export const pageUrl = (lang) => `${SITE}/rodou/${lang}`;
export const playUrl = (hl) => `${PLAY_URL}&hl=${hl}`;
export const ogImage = (lang) => `${SITE}/rodou/og/${lang}.jpg`;
export const screenshot = (lang, n) => `${SITE}/rodou/img/${lang}/${n}.webp`;

export function buildSchemas(lang, t) {
  const url = pageUrl(lang);
  const app = {
    "@context": "https://schema.org",
    "@type": "MobileApplication",
    "@id": `${url}#app`,
    name: "Rodou",
    description: t.description,
    url,
    image: `${SITE}/rodou/icon.png`,
    screenshot: [1, 2, 3, 4, 5, 6].map((n) => screenshot(lang, n)),
    applicationCategory: "UtilitiesApplication",
    operatingSystem: "Android",
    inLanguage: t.htmlLang,
    downloadUrl: playUrl(t.playHl),
    installUrl: playUrl(t.playHl),
    featureList: t.features.items.map((f) => f.title),
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD", description: t.schema.offer },
    author: { "@type": "Organization", name: "JF Coder", url: SITE },
  };
  const faq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    inLanguage: t.htmlLang,
    mainEntity: t.faq.items.map((i) => ({
      "@type": "Question",
      name: i.q,
      acceptedAnswer: { "@type": "Answer", text: i.a },
    })),
  };
  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: t.schema.home, item: SITE },
      { "@type": "ListItem", position: 2, name: "Rodou", item: url },
    ],
  };
  return [app, faq, breadcrumb];
}
