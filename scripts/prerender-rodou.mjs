// Pré-render das páginas /rodou/<idioma> (SEO).
// Roda depois do `vite build`: pega dist/index.html e gera dist/rodou/<idioma>.html com
// title, description, canonical, hreflang, Open Graph, JSON-LD e um conteúdo de fallback
// dentro de #root. Assim o Google (e qualquer rastreador sem JS) já recebe cada idioma
// completo; no navegador o React assume e substitui o fallback.
import { readFileSync, writeFileSync, mkdirSync, existsSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const dist = join(root, "dist");
const content = JSON.parse(readFileSync(join(root, "src/pages/Rodou/content.json"), "utf8"));
const { buildSchemas, pageUrl, ogImage } = await import(pathToFileURL(join(root, "src/pages/Rodou/schema.js")).href);

const baseFile = join(dist, "index.html");
if (!existsSync(baseFile)) throw new Error("dist/index.html não encontrado: rode `vite build` antes.");
const base = readFileSync(baseFile, "utf8");

const LANGS = Object.keys(content);
const esc = (s) => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
// JSON-LD dentro de <script>: evita fechar a tag por engano
const json = (o) => JSON.stringify(o).replace(/</g, "\\u003c");

function head(lang) {
  const t = content[lang];
  const out = [
    `<title data-rh="true">${esc(t.title)}</title>`,
    `<meta data-rh="true" name="description" content="${esc(t.description)}">`,
    `<meta data-rh="true" name="keywords" content="${esc(t.keywords)}">`,
    `<meta data-rh="true" name="robots" content="index,follow,max-image-preview:large">`,
    `<link data-rh="true" rel="canonical" href="${pageUrl(lang)}">`,
    ...LANGS.map((l) => `<link data-rh="true" rel="alternate" hreflang="${content[l].htmlLang}" href="${pageUrl(l)}">`),
    `<link data-rh="true" rel="alternate" hreflang="x-default" href="${pageUrl("en")}">`,
    `<meta data-rh="true" property="og:type" content="website">`,
    `<meta data-rh="true" property="og:site_name" content="JF Coder">`,
    `<meta data-rh="true" property="og:title" content="${esc(t.title)}">`,
    `<meta data-rh="true" property="og:description" content="${esc(t.description)}">`,
    `<meta data-rh="true" property="og:url" content="${pageUrl(lang)}">`,
    `<meta data-rh="true" property="og:image" content="${ogImage(lang)}">`,
    `<meta data-rh="true" property="og:image:width" content="1024">`,
    `<meta data-rh="true" property="og:image:height" content="500">`,
    `<meta data-rh="true" property="og:locale" content="${t.ogLocale}">`,
    ...LANGS.filter((l) => l !== lang).map((l) => `<meta data-rh="true" property="og:locale:alternate" content="${content[l].ogLocale}">`),
    `<meta data-rh="true" name="twitter:card" content="summary_large_image">`,
    `<meta data-rh="true" name="twitter:title" content="${esc(t.title)}">`,
    `<meta data-rh="true" name="twitter:description" content="${esc(t.description)}">`,
    `<meta data-rh="true" name="twitter:image" content="${ogImage(lang)}">`,
    `<meta data-rh="true" name="theme-color" content="#0f766e">`,
    `<link data-rh="true" rel="preload" as="image" href="/rodou/img/${lang}/1.webp" type="image/webp">`,
    ...buildSchemas(lang, t).map((s) => `<script data-rh="true" type="application/ld+json">${json(s)}</script>`),
  ];
  return out.join("\n    ");
}

function fallback(lang) {
  const t = content[lang];
  return `<main style="font-family:system-ui,sans-serif;max-width:860px;margin:0 auto;padding:32px 20px;line-height:1.6">
<h1>Rodou: ${esc(t.hero.subtitle)}</h1>
<p>${esc(t.hero.text)}</p>
<p><a href="https://play.google.com/store/apps/details?id=com.jfcoder.rodou&amp;hl=${t.playHl}">${esc(t.hero.cta)}</a></p>
<h2>${esc(t.features.title)}</h2>
<p>${esc(t.features.intro)}</p>
<ul>${t.features.items.map((f) => `<li><strong>${esc(f.title)}</strong>: ${esc(f.text)}</li>`).join("")}</ul>
<h2>${esc(t.steps.title)}</h2>
<ol>${t.steps.items.map((s) => `<li><strong>${esc(s.title)}</strong>: ${esc(s.text)}</li>`).join("")}</ol>
<h2>${esc(t.premium.title)}</h2>
<p>${esc(t.premium.text)}</p>
<h2>${esc(t.faq.title)}</h2>
${t.faq.items.map((f) => `<h3>${esc(f.q)}</h3><p>${esc(f.a)}</p>`).join("")}
<nav aria-label="${esc(t.footer.languages)}">${LANGS.map((l) => `<a href="/rodou/${l}" hreflang="${content[l].htmlLang}">${esc(content[l].label)}</a>`).join(" · ")}</nav>
<p><a href="/rodou/privacity">${esc(t.footer.privacy)}</a> · © JF Coder. ${esc(t.footer.rights)}</p>
</main>`;
}

mkdirSync(join(dist, "rodou"), { recursive: true });

for (const lang of LANGS) {
  let html = base;
  html = html.replace(/<html[^>]*>/i, `<html lang="${content[lang].htmlLang}">`);
  // remove o que a home define e a página Rodou sobrescreve (evita duplicatas)
  html = html
    .replace(/<title>[\s\S]*?<\/title>/i, "")
    .replace(/<meta\s+name="(description|keywords|robots)"[^>]*>\s*/gi, "")
    .replace(/<meta\s+property="og:[^"]*"[^>]*>\s*/gi, "");
  html = html.replace(/<\/head>/i, `    ${head(lang)}\n  </head>`);
  if (!/<div id="root"><\/div>/.test(html)) throw new Error("#root vazio não encontrado em dist/index.html");
  html = html.replace(/<div id="root"><\/div>/, `<div id="root">${fallback(lang)}</div>`);
  writeFileSync(join(dist, "rodou", `${lang}.html`), html);
}

console.log(`prerender-rodou: ${LANGS.length} páginas geradas em dist/rodou/`);
