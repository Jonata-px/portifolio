import { useEffect, useMemo, useRef, useState } from "react";
import { Link, Navigate, useNavigate, useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { motion, useReducedMotion } from "framer-motion";
import {
  FaBell,
  FaCarSide,
  FaChartLine,
  FaChevronLeft,
  FaChevronRight,
  FaGasPump,
  FaGlobe,
  FaGooglePlay,
  FaMobileAlt,
  FaRoute,
  FaShieldAlt,
  FaTachometerAlt,
  FaCheck,
} from "react-icons/fa";
import content from "./content.json";
import { SITE, buildSchemas, ogImage, pageUrl, playUrl } from "./schema";
import styles from "./styles.module.css";

type Lang = keyof typeof content;
type Copy = (typeof content)["pt"];

const LANGS = Object.keys(content) as Lang[];
const isLang = (v?: string): v is Lang => !!v && (LANGS as string[]).includes(v);

const ICONS: Record<string, JSX.Element> = {
  gauge: <FaTachometerAlt />,
  flex: <FaGasPump />,
  widget: <FaMobileAlt />,
  chart: <FaChartLine />,
  bell: <FaBell />,
  route: <FaRoute />,
  car: <FaCarSide />,
  shield: <FaShieldAlt />,
};

// Idioma do navegador -> um dos 10 idiomas do app (inglês como padrão)
function detectLang(): Lang {
  const prefs = typeof navigator !== "undefined" ? navigator.languages || [navigator.language] : [];
  for (const p of prefs) {
    const code = (p || "").split("-")[0].toLowerCase();
    if (isLang(code)) return code;
  }
  return "en";
}

export default function RodouPage() {
  const { lang } = useParams();
  if (!isLang(lang)) return <Navigate to={`/rodou/${detectLang()}`} replace />;
  return <RodouContent lang={lang} />;
}

function RodouContent({ lang }: { lang: Lang }) {
  const t: Copy = content[lang];
  const navigate = useNavigate();
  const reduce = useReducedMotion();
  const play = playUrl(t.playHl);
  const schemas = useMemo(() => buildSchemas(lang, t), [lang, t]);
  const shots = [1, 2, 3, 4, 5, 6];
  const track = useRef<HTMLDivElement>(null);
  const [showBar, setShowBar] = useState(false);

  // O scroll do site acontece dentro de #root (ver src/index.css)
  useEffect(() => {
    const root = document.getElementById("root");
    const onScroll = () => setShowBar((root?.scrollTop || window.scrollY) > (root?.clientHeight || window.innerHeight) * 0.8);
    root?.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      root?.removeEventListener("scroll", onScroll);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const scrollTrack = (dir: number) => {
    track.current?.scrollBy({ left: dir * 300, behavior: reduce ? "auto" : "smooth" });
  };

  const reveal = (i = 0) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0, y: 24 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, margin: "0px 0px -60px 0px" },
          transition: { duration: 0.5, delay: Math.min(i * 0.06, 0.3) },
        };

  return (
    <div className={styles.page} lang={t.htmlLang}>
      <Helmet htmlAttributes={{ lang: t.htmlLang }}>
        <title>{t.title}</title>
        <meta name="description" content={t.description} />
        <meta name="keywords" content={t.keywords} />
        <meta name="robots" content="index,follow,max-image-preview:large" />
        <link rel="canonical" href={pageUrl(lang)} />
        {LANGS.map((l) => (
          <link key={l} rel="alternate" hrefLang={content[l].htmlLang} href={pageUrl(l)} />
        ))}
        <link rel="alternate" hrefLang="x-default" href={pageUrl("en")} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="JF Coder" />
        <meta property="og:title" content={t.title} />
        <meta property="og:description" content={t.description} />
        <meta property="og:url" content={pageUrl(lang)} />
        <meta property="og:image" content={ogImage(lang)} />
        <meta property="og:image:width" content="1024" />
        <meta property="og:image:height" content="500" />
        <meta property="og:locale" content={t.ogLocale} />
        {LANGS.filter((l) => l !== lang).map((l) => (
          <meta key={l} property="og:locale:alternate" content={content[l].ogLocale} />
        ))}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={t.title} />
        <meta name="twitter:description" content={t.description} />
        <meta name="twitter:image" content={ogImage(lang)} />
        <meta name="theme-color" content="#0f766e" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
        <link rel="preload" as="image" href={`/rodou/img/${lang}/1.webp`} type="image/webp" />
        {schemas.map((s, i) => (
          <script key={i} type="application/ld+json">
            {JSON.stringify(s)}
          </script>
        ))}
      </Helmet>

      <a className={styles.skip} href="#main">
        {t.a11y.skip}
      </a>

      {/* Barra superior */}
      <header className={styles.topbar}>
        <div className={styles.topbarInner}>
          <a className={styles.brand} href="#top" aria-label="Rodou">
            <img src="/rodou/icon-192.png" alt="" width={36} height={36} />
            <span>Rodou</span>
          </a>
          <nav className={styles.nav} aria-label="Rodou">
            <a href="#features">{t.nav.features}</a>
            <a href="#screens">{t.nav.screens}</a>
            <a href="#premium">{t.nav.premium}</a>
            <a href="#faq">{t.nav.faq}</a>
          </nav>
          <label className={styles.langPicker}>
            <FaGlobe aria-hidden="true" />
            <span className={styles.srOnly}>{t.a11y.langLabel}</span>
            <select value={lang} onChange={(e) => navigate(`/rodou/${e.target.value}`)} aria-label={t.a11y.langLabel}>
              {LANGS.map((l) => (
                <option key={l} value={l}>
                  {content[l].label}
                </option>
              ))}
            </select>
          </label>
        </div>
      </header>

      <main id="main">
        {/* Hero */}
        <section className={styles.hero} id="top">
          <div className={styles.orb1} aria-hidden="true" />
          <div className={styles.orb2} aria-hidden="true" />
          <div className={`${styles.wrap} ${styles.heroGrid}`}>
            <motion.div className={styles.heroCopy} initial={reduce ? false : { opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <p className={styles.eyebrow}>{t.hero.eyebrow}</p>
              <h1 className={styles.h1}>
                <span className={styles.h1Brand}>{t.hero.title}</span>
                <span className={styles.h1Sub}>{t.hero.subtitle}</span>
              </h1>
              <p className={styles.lead}>{t.hero.text}</p>
              <div className={styles.ctaRow}>
                <a className={styles.btnPrimary} href={play} target="_blank" rel="noopener noreferrer">
                  <FaGooglePlay aria-hidden="true" />
                  <span>
                    {t.hero.cta}
                    <small>{t.hero.ctaNote}</small>
                  </span>
                </a>
                <a className={styles.btnGhost} href="#features">
                  {t.hero.secondary}
                </a>
              </div>
              <ul className={styles.badges}>
                {t.badges.map((b) => (
                  <li key={b}>
                    <FaCheck aria-hidden="true" /> {b}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div className={styles.heroVisual} initial={reduce ? false : { opacity: 0, scale: 0.94 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.1 }}>
              <div className={`${styles.phone} ${styles.phoneBack}`} aria-hidden="true">
                <img src={`/rodou/img/${lang}/3.webp`} alt="" width={540} height={960} loading="lazy" decoding="async" />
              </div>
              <div className={`${styles.phone} ${styles.phoneFront}`}>
                <img src={`/rodou/img/${lang}/1.webp`} alt={t.screens.alts[0]} width={540} height={960} decoding="async" {...{ fetchpriority: "high" }} />
              </div>
            </motion.div>
          </div>

          <div className={`${styles.wrap} ${styles.stats}`}>
            {t.stats.map((s) => (
              <div key={s.l} className={styles.stat}>
                <strong>{s.v}</strong>
                <span>{s.l}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Recursos */}
        <section className={styles.section} id="features" aria-labelledby="features-title">
          <div className={styles.wrap}>
            <motion.div className={styles.sectionHead} {...reveal()}>
              <h2 id="features-title">{t.features.title}</h2>
              <p>{t.features.intro}</p>
            </motion.div>
            <ul className={styles.grid}>
              {t.features.items.map((f, i) => (
                <motion.li key={f.title} className={styles.card} {...reveal(i % 4)}>
                  <span className={styles.cardIcon} aria-hidden="true">
                    {ICONS[f.icon]}
                  </span>
                  <h3>{f.title}</h3>
                  <p>{f.text}</p>
                </motion.li>
              ))}
            </ul>
          </div>
        </section>

        {/* Como funciona */}
        <section className={`${styles.section} ${styles.tint}`} aria-labelledby="steps-title">
          <div className={styles.wrap}>
            <motion.div className={styles.sectionHead} {...reveal()}>
              <h2 id="steps-title">{t.steps.title}</h2>
            </motion.div>
            <ol className={styles.steps}>
              {t.steps.items.map((s, i) => (
                <motion.li key={s.title} {...reveal(i)}>
                  <span className={styles.stepNum} aria-hidden="true">
                    {i + 1}
                  </span>
                  <h3>{s.title}</h3>
                  <p>{s.text}</p>
                </motion.li>
              ))}
            </ol>
          </div>
        </section>

        {/* Telas */}
        <section className={styles.section} id="screens" aria-labelledby="screens-title">
          <div className={styles.wrap}>
            <motion.div className={`${styles.sectionHead} ${styles.headRow}`} {...reveal()}>
              <div>
                <h2 id="screens-title">{t.screens.title}</h2>
                <p>{t.screens.intro}</p>
              </div>
              <div className={styles.arrows}>
                <button type="button" onClick={() => scrollTrack(-1)} aria-label="←">
                  <FaChevronLeft aria-hidden="true" />
                </button>
                <button type="button" onClick={() => scrollTrack(1)} aria-label="→">
                  <FaChevronRight aria-hidden="true" />
                </button>
              </div>
            </motion.div>
          </div>
          <div className={styles.track} ref={track} tabIndex={0} role="region" aria-label={t.screens.title}>
            {shots.map((n, i) => (
              <figure key={n} className={styles.shot}>
                <div className={styles.phone}>
                  <img src={`/rodou/img/${lang}/${n}.webp`} alt={t.screens.alts[i]} width={540} height={960} loading="lazy" decoding="async" />
                </div>
              </figure>
            ))}
          </div>
        </section>

        {/* Premium */}
        <section className={styles.section} id="premium" aria-labelledby="premium-title">
          <div className={styles.wrap}>
            <motion.div className={styles.premium} {...reveal()}>
              <div>
                <h2 id="premium-title">{t.premium.title}</h2>
                <p>{t.premium.text}</p>
              </div>
              <ul>
                {t.premium.points.map((p) => (
                  <li key={p}>
                    <FaCheck aria-hidden="true" /> {p}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </section>

        {/* FAQ */}
        <section className={`${styles.section} ${styles.tint}`} id="faq" aria-labelledby="faq-title">
          <div className={`${styles.wrap} ${styles.narrow}`}>
            <motion.div className={styles.sectionHead} {...reveal()}>
              <h2 id="faq-title">{t.faq.title}</h2>
            </motion.div>
            <div className={styles.faq}>
              {t.faq.items.map((f) => (
                <details key={f.q}>
                  <summary>{f.q}</summary>
                  <p>{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* CTA final */}
        <section className={styles.final} aria-labelledby="final-title">
          <div className={`${styles.wrap} ${styles.finalInner}`}>
            <img src="/rodou/icon-192.png" alt={t.a11y.logoAlt} width={96} height={96} loading="lazy" />
            <h2 id="final-title">{t.final.title}</h2>
            <p>{t.final.text}</p>
            <a className={styles.btnPrimary} href={play} target="_blank" rel="noopener noreferrer">
              <FaGooglePlay aria-hidden="true" />
              <span>
                {t.final.cta}
                <small>{t.hero.ctaNote}</small>
              </span>
            </a>
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <div className={styles.wrap}>
          <nav className={styles.langList} aria-label={t.footer.languages}>
            <span>{t.footer.languages}:</span>
            {LANGS.map((l) => (
              <Link key={l} to={`/rodou/${l}`} hrefLang={content[l].htmlLang} lang={content[l].htmlLang} aria-current={l === lang ? "page" : undefined}>
                {content[l].label}
              </Link>
            ))}
          </nav>
          <div className={styles.footerRow}>
            <p>
              © {new Date().getFullYear()} <a href={SITE}>JF Coder</a>. {t.footer.rights}
            </p>
            <p className={styles.footerLinks}>
              <Link to="/rodou/privacity">{t.footer.privacy}</Link>
              <a href={SITE}>{t.footer.portfolio}</a>
            </p>
          </div>
          <p className={styles.footerBy}>{t.footer.by}</p>
        </div>
      </footer>

      <div className={`${styles.stickyBar} ${showBar ? styles.stickyOn : ""}`} aria-hidden={!showBar}>
        <a href={play} target="_blank" rel="noopener noreferrer" tabIndex={showBar ? 0 : -1}>
          <FaGooglePlay aria-hidden="true" /> {t.hero.cta}
        </a>
      </div>
    </div>
  );
}
