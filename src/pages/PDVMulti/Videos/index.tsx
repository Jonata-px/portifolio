import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { AnimatePresence, motion } from "framer-motion";
import { FaArrowLeft, FaClock, FaDownload, FaGooglePlay, FaPlay, FaSearch, FaTimes, FaYoutube } from "react-icons/fa";
import { SITE_BASE_URL } from "../../../config/constants";
import pdvIcon from "../../../assets/images/pdvMulti.png";
import { durationLabel, VIDEO_CATEGORIES, type HelpVideo, type VideoCategory } from "../helpVideos";
import { useHelpVideos } from "../useHelpVideos";
import styles from "./Videos.module.css";

const WINDOWS_LINK = "https://apps.microsoft.com/detail/9p9pt0lmdvwc?hl=pt-BR&gl=BR&ocid=pdpshare";
const ANDROID_LINK = "https://play.google.com/store/apps/details?id=com.jfcoder.pdvmulti";

const normalize = (s: string) => s.normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase();
const thumbOf = (v: HelpVideo, size: "hq" | "mq" = "mq") =>
  v.thumbnailUrl || `https://i.ytimg.com/vi/${v.youtubeId}/${size}default.jpg`;
const watchUrl = (v: HelpVideo) => `https://www.youtube.com/watch?v=${v.youtubeId}`;

function Thumb({ video, size = "mq" }: { video: HelpVideo; size?: "hq" | "mq" }) {
  const dur = durationLabel(video.durationSeconds);
  return (
    <span className={styles.thumb}>
      {video.youtubeId ? <img src={thumbOf(video, size)} alt="" loading="lazy" /> : <FaClock />}
      {video.youtubeId && (
        <span className={styles.thumbPlay}>
          <FaPlay />
        </span>
      )}
      {dur && <span className={styles.duration}>{dur}</span>}
    </span>
  );
}

function VideoCard({ video, onOpen }: { video: HelpVideo; onOpen: (v: HelpVideo) => void }) {
  return (
    <button type="button" className={styles.card} onClick={() => onOpen(video)}>
      <Thumb video={video} />
      <span className={styles.cardBody}>
        <span className={styles.cardTitle}>{video.title}</span>
        {!video.youtubeId && <span className={styles.soonTag}>em breve</span>}
      </span>
    </button>
  );
}

function VideoModal({ video, onClose }: { video: HelpVideo; onClose: () => void }) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  return (
    <motion.div
      className={styles.overlay}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className={styles.modal}
        role="dialog"
        aria-modal="true"
        aria-label={video.title}
        initial={{ y: 24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 24, opacity: 0 }}
        onClick={(e: { stopPropagation: () => void }) => e.stopPropagation()}
      >
        <button type="button" className={styles.close} onClick={onClose} aria-label="Fechar">
          <FaTimes />
        </button>
        {video.youtubeId ? (
          <div className={styles.frame}>
            <iframe
              src={`https://www.youtube-nocookie.com/embed/${video.youtubeId}?autoplay=1&rel=0`}
              title={video.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        ) : (
          <div className={styles.soonBox}>
            <FaClock />
            <strong>Este vídeo está sendo publicado</strong>
            <span>Em breve ele estará disponível aqui.</span>
          </div>
        )}
        <div className={styles.modalInfo}>
          <h3>{video.title}</h3>
          {video.desc && <p>{video.desc}</p>}
          {video.youtubeId && (
            <a href={watchUrl(video)} target="_blank" rel="noopener noreferrer" className={styles.ytLink}>
              <FaYoutube /> Assistir no YouTube
            </a>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function PDVMultiVideos() {
  const { videos, loading } = useHelpVideos();
  const [category, setCategory] = useState<VideoCategory | null>(null);
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState<HelpVideo | null>(null);
  const [heroPlaying, setHeroPlaying] = useState(false);

  const promos = useMemo(() => videos.filter((v) => v.promo), [videos]);
  const lessons = useMemo(() => videos.filter((v) => !v.promo), [videos]);
  const startHere = lessons.find((v) => v.category === "primeiros-passos");
  // Sem vídeo de divulgação publicado, o topo usa o "Comece por aqui".
  const heroPromo = promos.find((v) => v.youtubeId) ?? (startHere?.youtubeId ? startHere : undefined) ?? promos[0];
  const otherPromos = promos.filter((v) => v !== heroPromo);

  const filtering = query.trim() !== "" || category !== null;
  const filtered = useMemo(() => {
    const q = normalize(query.trim());
    return lessons.filter(
      (v) => (!category || v.category === category) && (!q || normalize(`${v.title} ${v.desc}`).includes(q)),
    );
  }, [lessons, category, query]);

  const availableCats = VIDEO_CATEGORIES.filter((c) => lessons.some((v) => v.category === c.id));
  const anyPublished = videos.some((v) => v.youtubeId);

  return (
    <div className={styles.page}>
      <Helmet>
        <title>Vídeos do PDV Multi - Veja o sistema funcionando e aprenda a usar</title>
        <meta
          name="description"
          content="Veja o PDV Multi em ação e aprenda a usar com vídeos curtos: primeira venda, caixa, Pix e fiado, estoque, nota fiscal, equipe, mesas, cozinha e delivery."
        />
        <link rel="canonical" href="https://jfcoder.com/pdv-multi/videos" />
        <meta property="og:title" content="Vídeos do PDV Multi" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://jfcoder.com/pdv-multi/videos" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            name: "Vídeos do PDV Multi",
            isPartOf: `${SITE_BASE_URL}/pdv-multi`,
            itemListElement: videos
              .filter((v) => v.youtubeId)
              .map((v, i) => ({ "@type": "ListItem", position: i + 1, name: v.title, url: watchUrl(v) })),
          })}
        </script>
      </Helmet>

      <div className={styles.inner}>
        <Link to="/pdv-multi" className={styles.back}>
          <FaArrowLeft /> Voltar ao PDV Multi
        </Link>

        {/* Divulgação: topo da página */}
        <header className={styles.hero}>
          <div className={styles.heroCopy}>
            <img src={pdvIcon} alt="" className={styles.logo} />
            <h1>Veja o PDV Multi funcionando</h1>
            <p>
              O sistema de vendas e frente de caixa que roda no computador do balcão e no celular da equipe. Assista em
              poucos minutos e veja se é o que o seu negócio precisa.
            </p>
            <div className={styles.heroCta}>
              <a href={WINDOWS_LINK} target="_blank" rel="noopener noreferrer" className={styles.ctaBtn}>
                <FaDownload /> Testar grátis por 14 dias
              </a>
              <a href={ANDROID_LINK} target="_blank" rel="noopener noreferrer" className={styles.ctaGhost}>
                <FaGooglePlay /> Google Play
              </a>
            </div>
            <span className={styles.heroNote}>Windows e Android · sem cartão de crédito</span>
          </div>

          {heroPromo && (
            <div className={styles.heroVideo}>
              <div className={styles.frame}>
                {heroPromo.youtubeId && heroPlaying ? (
                  <iframe
                    src={`https://www.youtube-nocookie.com/embed/${heroPromo.youtubeId}?autoplay=1&rel=0`}
                    title={heroPromo.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                ) : heroPromo.youtubeId ? (
                  <button type="button" className={styles.poster} onClick={() => setHeroPlaying(true)} aria-label="Assistir">
                    <img src={thumbOf(heroPromo, "hq")} alt="" />
                    <span className={styles.playBtn}>
                      <FaPlay />
                    </span>
                  </button>
                ) : (
                  <div className={styles.soonBox}>
                    <FaClock />
                    <strong>Vídeo de apresentação em breve</strong>
                    <span>Enquanto isso, baixe o app e teste grátis.</span>
                  </div>
                )}
              </div>
              <strong className={styles.heroVideoTitle}>{heroPromo.title}</strong>
            </div>
          )}
        </header>

        {otherPromos.length > 0 && (
          <section className={styles.promoRow} aria-label="Mais vídeos de apresentação">
            {otherPromos.map((v) => (
              <VideoCard key={v.id} video={v} onOpen={setOpen} />
            ))}
          </section>
        )}

        {/* Biblioteca de tutoriais (mesma da aba Vídeos do app) */}
        <section className={styles.library}>
          <div className={styles.libHead}>
            <h2>Aprenda a usar, passo a passo</h2>
            <p>Os mesmos tutoriais da aba Vídeos dentro do app (Ajuda e Suporte).</p>
          </div>

          <label className={styles.search}>
            <FaSearch />
            <input
              type="search"
              placeholder="Buscar um assunto (ex.: caixa, Pix, mesa)"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </label>
          <div className={styles.chips}>
            <button
              type="button"
              className={`${styles.chip} ${category === null ? styles.chipActive : ""}`}
              onClick={() => setCategory(null)}
            >
              Todos
            </button>
            {availableCats.map((c) => (
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

          {!loading && !anyPublished && (
            <p className={styles.note}>Os vídeos estão sendo publicados — em breve eles aparecem aqui.</p>
          )}

          {!filtering && startHere && startHere !== heroPromo && (
            <div className={styles.startHere}>
              <span className={styles.startLabel}>★ Comece por aqui</span>
              <button type="button" className={styles.startCard} onClick={() => setOpen(startHere)}>
                <Thumb video={startHere} size="hq" />
                <span className={styles.startBody}>
                  <strong>{startHere.title}</strong>
                  {startHere.desc && <span>{startHere.desc}</span>}
                </span>
              </button>
            </div>
          )}

          {filtered.length === 0 ? (
            <div className={styles.empty}>
              <p>Nenhum vídeo encontrado.</p>
              <button
                type="button"
                className={styles.chip}
                onClick={() => {
                  setQuery("");
                  setCategory(null);
                }}
              >
                Limpar filtros
              </button>
            </div>
          ) : (
            VIDEO_CATEGORIES.map((c) => {
              const items = filtered.filter((v) => v.category === c.id);
              if (items.length === 0) return null;
              return (
                <div key={c.id} className={styles.group}>
                  <h3>{c.label}</h3>
                  <div className={styles.grid}>
                    {items.map((v) => (
                      <VideoCard key={v.id} video={v} onOpen={setOpen} />
                    ))}
                  </div>
                </div>
              );
            })
          )}
        </section>

        <footer className={styles.cta}>
          <h2>Gostou do que viu?</h2>
          <p>Instale em minutos e faça a primeira venda hoje. Teste grátis por 14 dias, sem cartão de crédito.</p>
          <div className={styles.heroCta} style={{ justifyContent: "center" }}>
            <a href={WINDOWS_LINK} target="_blank" rel="noopener noreferrer" className={styles.ctaBtn}>
              <FaDownload /> Baixar para Windows
            </a>
            <a href={ANDROID_LINK} target="_blank" rel="noopener noreferrer" className={styles.ctaGhost}>
              <FaGooglePlay /> Google Play
            </a>
          </div>
        </footer>
      </div>

      <AnimatePresence>{open && <VideoModal video={open} onClose={() => setOpen(null)} />}</AnimatePresence>
    </div>
  );
}
