import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import styles from "./HeroMockup.module.css";

// Mockup ilustrativo do app (nenhum dado real) — só pra dar vida visual ao
// hero enquanto não temos screenshots reais do PDV Multi pra colocar aqui.
// Trocar por telas reais é só substituir este componente por um <img>/<video>.
const SCREENS = ["sell", "cash"] as const;
type Screen = (typeof SCREENS)[number];

const ROW_WIDTHS = [72, 45, 60, 38, 82, 50];

export default function HeroMockup() {
  const [screen, setScreen] = useState<Screen>("sell");
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (reduceMotion) return;
    const id = setInterval(() => {
      setScreen((prev) => (prev === "sell" ? "cash" : "sell"));
    }, 3600);
    return () => clearInterval(id);
  }, [reduceMotion]);

  return (
    <div className={styles.frame} aria-hidden="true">
      <div className={styles.titleBar}>
        <span className={styles.dot} style={{ background: "#ff5f57" }} />
        <span className={styles.dot} style={{ background: "#febc2e" }} />
        <span className={styles.dot} style={{ background: "#28c840" }} />
        <span className={styles.titleText}>PDV Multi</span>
      </div>

      <div className={styles.screen}>
        <AnimatePresence mode="wait">
          {screen === "sell" ? (
            <motion.div
              key="sell"
              className={styles.panel}
              initial={reduceMotion ? undefined : { opacity: 0, x: 16 }}
              animate={{ opacity: 1, x: 0 }}
              exit={reduceMotion ? undefined : { opacity: 0, x: -16 }}
              transition={{ duration: 0.4 }}
            >
              <div className={styles.panelHeader}>
                <span className={styles.pill}>Venda #{new Date().getMinutes()}482</span>
                <span className={styles.pillMuted}>Caixa 01 · Ana</span>
              </div>
              {ROW_WIDTHS.map((w, i) => (
                <motion.div
                  key={i}
                  className={styles.row}
                  initial={reduceMotion ? undefined : { opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: reduceMotion ? 0 : i * 0.08 }}
                >
                  <span className={styles.rowBar} style={{ width: `${w}%` }} />
                  <span className={styles.rowPrice} />
                </motion.div>
              ))}
              <div className={styles.totalRow}>
                <span>Total</span>
                <span className={styles.totalValue} />
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="cash"
              className={styles.panel}
              initial={reduceMotion ? undefined : { opacity: 0, x: 16 }}
              animate={{ opacity: 1, x: 0 }}
              exit={reduceMotion ? undefined : { opacity: 0, x: -16 }}
              transition={{ duration: 0.4 }}
            >
              <div className={styles.panelHeader}>
                <span className={styles.pill}>Fechamento de caixa</span>
                <span className={styles.pillMuted}>Sincronizado</span>
              </div>
              <div className={styles.chart}>
                {[38, 62, 45, 80, 55, 90, 70].map((h, i) => (
                  <motion.span
                    key={i}
                    className={styles.bar}
                    initial={reduceMotion ? undefined : { height: 0 }}
                    animate={{ height: `${h}%` }}
                    transition={{ delay: reduceMotion ? 0 : i * 0.06, duration: 0.5 }}
                  />
                ))}
              </div>
              <div className={styles.statsRow}>
                <div className={styles.statCard}>
                  <span className={styles.statLabel}>Faturamento</span>
                  <span className={styles.statValue} />
                </div>
                <div className={styles.statCard}>
                  <span className={styles.statLabel}>Lucro</span>
                  <span className={styles.statValue} />
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className={styles.dots}>
        {SCREENS.map((s) => (
          <span key={s} className={`${styles.navDot} ${s === screen ? styles.navDotActive : ""}`} />
        ))}
      </div>
    </div>
  );
}
