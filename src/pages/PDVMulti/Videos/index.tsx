import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { FaArrowLeft, FaDownload, FaPlay, FaSearch, FaClock } from "react-icons/fa";
import { SITE_BASE_URL } from "../../../config/constants";
import pdvIcon from "../../../assets/images/pdvMulti.png";
import { HELP_VIDEOS, VIDEO_CATEGORIES, type VideoCategory } from "../helpVideos";
import styles from "./Videos.module.css";

const WINDOWS_LINK = "https://apps.microsoft.com/detail/9p9pt0lmdvwc?hl=pt-BR&gl=BR&ocid=pdpshare";

const normalize = (s: string) => s.normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase();

export default function PDVMultiVideos() {
  const [category, setCategory] = useState<VideoCategory | "all">("all");
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState(HELP_VIDEOS.find((v) => v.youtubeId) ?? HELP_VIDEOS[0]);
  const [playing, setPlaying] = useState(false);

  const filtered = useMemo(() => {
    const q = normalize(query.trim());
    return HELP_VIDEOS.filter(
      (v) =>
        (category === "all" || v.category === category) &&
        (!q || normalize(`${v.title} ${v.desc}`).includes(q)),
    );
  }, [category, query]);

  const published = HELP_VIDEOS.filter((v) => v.youtubeId).length;

  const choose = (slug: string) => {
    const v = HELP_VIDEOS.find((x) => x.slug === slug);
    if (!v) return;
    setSelected(v);
    setPlaying(false);
    document.getElementById("player")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className={styles.page}>
      <Helmet>
        <title>Vídeos e tutoriais do PDV Multi - Aprenda a usar o sistema</title>
        <meta
          name="description"
          content="Aprenda a usar o PDV Multi com vídeos curtos: primeira venda, caixa, Pix e fiado, estoque, nota fiscal, equipe, mesas, cozinha e delivery."
        />
        <link rel="canonical" href="https://jfcoder.com/pdv-multi/videos" />
        <meta property="og:title" content="Vídeos e tutoriais do PDV Multi" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://jfcoder.com/pdv-multi/videos" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            name: "Tutoriais do PDV Multi",
            itemListElement: HELP_VIDEOS.map((v, i) => ({
              "@type": "ListItem",
              position: i + 1,
              name: v.title,
              ...(v.youtubeId ? { url: `https://www.youtube.com/watch?v=${v.youtubeId}` } : {}),
            })),
            isPartOf: `${SITE_BASE_URL}/pdv-multi`,
          })}
        </script>
      </Helmet>

      <div className={styles.inner}>
        <Link to="/pdv-multi" className={styles.back}>
          <FaArrowLeft /> Voltar ao PDV Multi
        </Link>

        <header className={styles.header}>
          <img src={pdvIcon} alt="" className={styles.logo} />
          <div>
            <h1>Vídeos e tutoriais</h1>
            <p>
              Vídeos curtos, passo a passo, para você aprender cada parte do PDV Multi — da primeira venda ao delivery.
            </p>
          </div>
        </header>

        <section id="player" className={styles.player}>
          {selected.youtubeId ? (
            <div className={styles.frame}>
              {playing ? (
                <iframe
                  src={`https://www.youtube-nocookie.com/embed/${selected.youtubeId}?autoplay=1&rel=0`}
                  title={selected.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              ) : (
                <button type="button" className={styles.poster} onClick={() => setPlaying(true)} aria-label="Assistir">
                  <img src={`https://i.ytimg.com/vi/${selected.youtubeId}/hqdefault.jpg`} alt="" />
                  <span className={styles.playBtn}>
                    <FaPlay />
                  </span>
                </button>
              )}
            </div>
          ) : (
            <div className={styles.soon}>
              <FaClock />
              <div>
                <strong>Este vídeo está sendo publicado</strong>
                <span>Em breve ele estará disponível aqui. Enquanto isso, teste o app grátis por 14 dias.</span>
              </div>
              <a href={WINDOWS_LINK} target="_blank" rel="noopener noreferrer" className={styles.soonCta}>
                <FaDownload /> Baixar o PDV Multi
              </a>
            </div>
          )}
          <div className={styles.playerInfo}>
            <h2>{selected.title}</h2>
            <p>{selected.desc}</p>
          </div>
        </section>

        <section className={styles.listing}>
          <div className={styles.toolbar}>
            <label className={styles.search}>
              <FaSearch />
              <input
                type="search"
                placeholder="Buscar um assunto (ex.: caixa, Pix, mesa)"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
            </label>
            <div className={styles.chips} role="tablist" aria-label="Categorias">
              <button
                type="button"
                className={`${styles.chip} ${category === "all" ? styles.chipActive : ""}`}
                onClick={() => setCategory("all")}
              >
                Todos
              </button>
              {VIDEO_CATEGORIES.map((c) => (
                <button
                  key={c.id}
                  type="button"
                  className={`${styles.chip} ${category === c.id ? styles.chipActive : ""}`}
                  onClick={() => setCategory(c.id)}
                >
                  {c.label}
                </button>
              ))}
            </div>
          </div>

          {published < HELP_VIDEOS.length && (
            <p className={styles.note}>
              {published} de {HELP_VIDEOS.length} vídeos já estão no ar — os demais estão sendo publicados.
            </p>
          )}

          {filtered.length === 0 ? (
            <p className={styles.empty}>Nenhum vídeo encontrado para essa busca.</p>
          ) : (
            <div className={styles.grid}>
              {filtered.map((v, i) => (
                <motion.button
                  type="button"
                  key={v.slug}
                  className={`${styles.card} ${v.slug === selected.slug ? styles.cardActive : ""}`}
                  onClick={() => choose(v.slug)}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: Math.min(i, 8) * 0.03 }}
                >
                  <span className={styles.thumb}>
                    {v.youtubeId ? (
                      <img src={`https://i.ytimg.com/vi/${v.youtubeId}/mqdefault.jpg`} alt="" loading="lazy" />
                    ) : (
                      <FaClock />
                    )}
                    {v.youtubeId && (
                      <span className={styles.thumbPlay}>
                        <FaPlay />
                      </span>
                    )}
                  </span>
                  <span className={styles.cardBody}>
                    <span className={styles.cardCat}>
                      {VIDEO_CATEGORIES.find((c) => c.id === v.category)?.label}
                      {!v.youtubeId && <em> · em breve</em>}
                    </span>
                    <span className={styles.cardTitle}>{v.title}</span>
                  </span>
                </motion.button>
              ))}
            </div>
          )}
        </section>

        <footer className={styles.cta}>
          <h2>Ainda não usa o PDV Multi?</h2>
          <p>Teste grátis por 14 dias, sem cartão de crédito, no Windows e no Android.</p>
          <a href={WINDOWS_LINK} target="_blank" rel="noopener noreferrer" className={styles.ctaBtn}>
            <FaDownload /> Baixar grátis
          </a>
        </footer>
      </div>
    </div>
  );
}
