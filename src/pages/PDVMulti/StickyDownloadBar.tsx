import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FaDownload, FaGooglePlay } from "react-icons/fa";
import styles from "./StickyDownloadBar.module.css";

type Props = {
  lang: "pt" | "en";
  windowsLink: string;
  androidLink: string;
  windowsLabel: string;
  androidLabel: string;
};

export default function StickyDownloadBar({
  lang,
  windowsLink,
  androidLink,
  windowsLabel,
  androidLabel,
}: Props) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // O layout do site (ver src/index.css) faz o scroll acontecer dentro de
    // #root, não na window — por isso escutamos os dois: o listener que
    // encontrar o container que realmente rola é o que vai disparar.
    const scrollRoot = document.getElementById("root");
    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const y = scrollRoot?.scrollTop || window.scrollY;
        const viewport = scrollRoot?.clientHeight || window.innerHeight;
        setVisible(y > viewport * 0.9);
        ticking = false;
      });
    };
    scrollRoot?.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      scrollRoot?.removeEventListener("scroll", onScroll);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  // Quem visita o site pelo celular Android não quer um instalador .exe —
  // troca o CTA principal da barra pra Play Store nesse caso.
  const isAndroid = /Android/i.test(navigator.userAgent);
  const link = isAndroid ? androidLink : windowsLink;
  const label = isAndroid ? androidLabel : windowsLabel;

  const subtitle =
    lang === "pt" ? "Teste grátis por 14 dias, sem cartão." : "Free 14-day trial, no card required.";

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className={styles.bar}
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className={styles.inner}>
            <div className={styles.text}>
              <span className={styles.title}>PDV Multi</span>
              <span className={styles.subtitle}>{subtitle}</span>
            </div>
            <a href={link} className={styles.cta}>
              {isAndroid ? <FaGooglePlay /> : <FaDownload />}
              {label}
            </a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
