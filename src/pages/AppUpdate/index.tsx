import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Helmet } from "react-helmet-async";
import {
  FaWhatsapp,
  FaExclamationTriangle,
  FaUserClock,
  FaFileCode,
  FaUserSlash,
  FaBullhorn,
  FaSearchLocation,
  FaCogs,
  FaRocket,
  FaCheckCircle,
  FaComments,
  FaClock,
  FaTags,
  FaHistory,
  FaAndroid,
} from "react-icons/fa";
import styles from "./styles.module.css";
import { SITE_BASE_URL, WHATSAPP_DISPLAY, whatsappLink } from "../../config/constants";

const WHATSAPP_MESSAGE =
  "Olá Jonatã! Recebi um aviso sobre o target SDK do meu app na Play Store e preciso atualizar. Pode me ajudar?";

const PAGE_PATH = "/atualizar-app-android";
const PAGE_URL = `${SITE_BASE_URL}${PAGE_PATH}`;

const TITLE = "Atualização de App Android (Target SDK) para a Play Store | jfcoder";
const DESCRIPTION =
  "Seu app Android recebeu aviso de remoção da Google Play por causa do target SDK? Atualizo, testo e publico de novo a sua versão — rápido, com preço fechado e direto com quem programa.";
const KEYWORDS =
  "atualizar target sdk, app removido da play store, atualizar app android, manutenção de app android, target api level, google play developer program policy, app parado play store, desenvolvedor android freelancer, atualização de aplicativo";

const steps = [
  {
    title: "Diagnóstico",
    text: "Você me manda o link do app na Play Store (e o acesso ao Play Console, se tiver). Eu confirmo o que precisa mudar e te passo prazo e valor fechado.",
  },
  {
    title: "Atualização",
    text: "Atualizo o target SDK, ajusto o que as novas regras do Android exigirem (permissões, bibliotecas, etc.) e testo em aparelho real.",
  },
  {
    title: "Publicação",
    text: "Envio a nova versão para a revisão da Google e acompanho até ela voltar a aparecer normalmente para todo mundo.",
  },
  {
    title: "Confirmação",
    text: "Você confere no seu celular, e já saímos combinando como fica o acompanhamento para a próxima exigência de SDK.",
  },
];

const audience = [
  {
    icon: FaUserSlash,
    text: "O app foi feito por uma agência ou freelancer que não responde mais.",
  },
  {
    icon: FaBullhorn,
    text: "Você recebeu no Google Play Console um aviso sobre \"target API level\" vencendo.",
  },
  {
    icon: FaExclamationTriangle,
    text: "O app já parou de aparecer para quem nunca instalou ou foi removido da busca.",
  },
  {
    icon: FaUserClock,
    text: "Ninguém na empresa entende mais o código, mas o app ainda é usado todos os dias.",
  },
  {
    icon: FaFileCode,
    text: "Você só quer resolver esse problema específico, sem contratar um time novo.",
  },
  {
    icon: FaAndroid,
    text: "O app é Android nativo, Flutter, React Native ou Ionic — o problema de SDK é o mesmo.",
  },
];

const benefits = [
  {
    icon: FaComments,
    title: "Fala direto com quem programa",
    text: "Sem atendente, sem ticket, sem intermediário repassando recado. Você conversa comigo pelo WhatsApp do início ao fim.",
  },
  {
    icon: FaClock,
    title: "Prazo curto",
    text: "Atualizar o target SDK raramente exige reescrever o app — na maioria dos casos é dias, não meses.",
  },
  {
    icon: FaTags,
    title: "Preço fechado, sem mensalidade",
    text: "Serviço pontual: você paga para resolver esse problema agora, sem contrato de longo prazo.",
  },
  {
    icon: FaHistory,
    title: "Sem perder histórico nem avaliações",
    text: "É o mesmo app, a mesma ficha na Play Store, os mesmos usuários e as mesmas avaliações de sempre.",
  },
  {
    icon: FaCheckCircle,
    title: "Experiência publicando apps de verdade",
    text: (
      <>
        Mantenho apps próprios publicados e ativos na Play Store e na Microsoft Store, como o{" "}
        <Link to="/pdv-multi">PDV Multi</Link>.
      </>
    ),
  },
  {
    icon: FaCogs,
    title: "Aproveito para ajustar o resto",
    text: "Enquanto estou no código, já resolvo outros avisos de política da Google que apareçam junto (permissões sensíveis, privacidade, etc.).",
  },
];

const faqs = [
  {
    q: "Eu preciso ter o código-fonte do app?",
    a: "Sim, preciso do projeto-fonte (ou de acesso a ele) para atualizar o target SDK. Se você não sabe onde ele está guardado, me conta como o app foi feito que eu te ajudo a descobrir.",
  },
  {
    q: "E se eu não tiver mais acesso à conta do Google Play Console?",
    a: "Dá para resolver, mas o caminho muda um pouco. Me chama no WhatsApp e explico as opções para o seu caso.",
  },
  {
    q: "Quanto tempo demora?",
    a: "Depende do tamanho e da idade do app, mas a maioria das atualizações de target SDK fica pronta e publicada em poucos dias.",
  },
  {
    q: "Funciona para apps feitos em Flutter, React Native ou Ionic, não só em Kotlin/Java nativo?",
    a: "Sim, atendo os principais frameworks usados para Android. O importante é ter acesso ao projeto-fonte.",
  },
  {
    q: "Preciso pagar antes de começar?",
    a: "Combinamos isso na conversa pelo WhatsApp — normalmente peço um sinal para iniciar e o restante na entrega, já publicado.",
  },
  {
    q: "E ano que vem, vai precisar de novo?",
    a: "É possível, já que é uma exigência anual da Google. Posso deixar já combinado um acompanhamento para isso não te pegar de surpresa de novo.",
  },
];

function StickyWhatsBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
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

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className={styles.stickyBar}
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className={styles.stickyInner}>
            <div className={styles.stickyText}>
              <span className={styles.stickyTitle}>Atualização de app Android</span>
              <span className={styles.stickySubtitle}>Resposta rápida, orçamento sem compromisso.</span>
            </div>
            <a
              href={whatsappLink(WHATSAPP_MESSAGE)}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.stickyCta}
            >
              <FaWhatsapp />
              Falar no WhatsApp
            </a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

const fadeUp = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.5 },
};

export default function AppUpdatePage() {
  return (
    <div className={styles.page}>
      <Helmet>
        <title>{TITLE}</title>
        <meta name="description" content={DESCRIPTION} />
        <meta name="keywords" content={KEYWORDS} />
        <link rel="canonical" href={PAGE_URL} />
        <meta property="og:title" content={TITLE} />
        <meta property="og:description" content={DESCRIPTION} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={PAGE_URL} />
        <meta property="og:locale" content="pt_BR" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content={TITLE} />
        <meta name="twitter:description" content={DESCRIPTION} />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            serviceType: "Atualização e manutenção de aplicativos Android",
            name: "Atualização de target SDK para apps Android",
            description: DESCRIPTION,
            url: PAGE_URL,
            areaServed: "BR",
            provider: {
              "@type": "Person",
              name: "Jonatã",
              url: SITE_BASE_URL,
            },
          })}
        </script>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((item) => ({
              "@type": "Question",
              name: item.q,
              acceptedAnswer: { "@type": "Answer", text: item.a },
            })),
          })}
        </script>
      </Helmet>

      <div className={styles.pageInner}>
        {/* Barra superior */}
        <div className={styles.topBar}>
          <Link to="/" className={styles.brand}>
            jfcoder <span>desenvolvimento de software</span>
          </Link>
          <nav className={styles.nav} aria-label="Seções">
            <a href="#como-funciona">Como funciona</a>
            <a href="#beneficios">Benefícios</a>
            <a href="#duvidas">Dúvidas</a>
            <a href="#contato">Contato</a>
          </nav>
        </div>

        {/* Hero */}
        <section className={styles.hero}>
          <div className={styles.heroCopy}>
            <span className={styles.eyebrow}>
              <FaExclamationTriangle /> Aviso do Google Play
            </span>
            <h1 className={styles.heroTitle}>
              Seu app Android está na <strong>mira do Google</strong>?
            </h1>
            <p className={styles.heroDescription}>
              Todo ano a Google Play exige um <strong>target SDK</strong> mais novo. Quem não atualiza recebe
              aviso no Play Console — e depois o app para de aparecer para novos usuários ou é removido da
              loja. Eu atualizo, testo e publico a nova versão pra você, rápido e sem complicação.
            </p>
            <div className={styles.badgeRow}>
              <span className={styles.badge}>Resposta rápida pelo WhatsApp</span>
              <span className={styles.badge}>Preço fechado</span>
              <span className={styles.badge}>Direto com quem programa</span>
              <span className={styles.badge}>Android, Flutter, React Native, Ionic</span>
            </div>
            <div className={styles.cta}>
              <a
                href={whatsappLink(WHATSAPP_MESSAGE)}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.ctaWhats}
              >
                <FaWhatsapp />
                Falar agora no WhatsApp
              </a>
              <a href="#como-funciona" className={styles.ctaSecondary}>
                Ver como funciona
              </a>
            </div>
            <span className={styles.ctaNote}>
              Me manda o link do seu app na Play Store e eu te digo em poucas horas o que precisa ser feito.
            </span>
          </div>

          <motion.div
            className={styles.heroVisual}
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <div className={styles.heroCard}>
              <div className={styles.heroCardHeader}>
                <FaExclamationTriangle />
                <div>
                  <strong>Google Play Console</strong>
                  <span>Aviso de política</span>
                </div>
              </div>
              <div className={styles.heroCardBody}>
                <p>
                  "Seu app não atende aos requisitos de nível de API de destino (target API level) e será
                  removido para novos usuários em breve."
                </p>
                <code>targetSdkVersion desatualizado · atualização necessária</code>
              </div>
            </div>
          </motion.div>
        </section>

        <div className={styles.sections}>
          {/* Pra quem é */}
          <motion.div {...fadeUp}>
            <h2 className={styles.groupTitle}>Esse aviso é com você se...</h2>
            <p className={styles.groupSubtitle}>
              Esse serviço resolve um problema bem específico — e muito comum em quem já tem um app há alguns
              anos.
            </p>
          </motion.div>
          <motion.div className={styles.audienceGrid} {...fadeUp}>
            {audience.map(({ icon: Icon, text }) => (
              <div className={styles.audienceCard} key={text}>
                <Icon aria-hidden="true" />
                <p>{text}</p>
              </div>
            ))}
          </motion.div>

          {/* Como funciona */}
          <motion.div id="como-funciona" {...fadeUp}>
            <h2 className={styles.groupTitle}>Como funciona</h2>
            <p className={styles.groupSubtitle}>
              Um processo direto, pensado para quem só precisa que o app volte a funcionar normalmente na Play
              Store.
            </p>
          </motion.div>
          <div className={styles.steps}>
            {steps.map((step, i) => (
              <motion.div
                className={styles.step}
                key={step.title}
                {...fadeUp}
                transition={{ ...fadeUp.transition, delay: i * 0.08 }}
              >
                <span className={styles.stepNumber}>{i + 1}</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </motion.div>
            ))}
          </div>

          {/* O que é o target SDK (contexto / autoridade) */}
          <motion.section className={`${styles.section} ${styles.sectionHighlight}`} {...fadeUp}>
            <h2>
              <FaSearchLocation style={{ display: "inline" }} />O que é essa exigência de target SDK?
            </h2>
            <p>
              A Google Play exige que todo app publicado tenha como alvo (target) uma versão recente do
              Android — é a chamada <strong>target API level</strong>. É uma exigência de segurança e
              privacidade, não um pedido seu: todo ano o nível mínimo sobe, e apps que ficam para trás recebem
              um aviso no Play Console. Se ninguém atualizar, o app:
            </p>
            <ul>
              <li>Deixa de aparecer na busca e na loja para quem nunca instalou;</li>
              <li>Pode ficar indisponível para download em aparelhos mais novos;</li>
              <li>Em casos mais antigos, chega a ser removido completamente da Play Store.</li>
            </ul>
            <p>
              Quem já instalou o app normalmente continua usando por um tempo, mas sem essa atualização o app
              para de crescer — e o risco só aumenta com o tempo.
            </p>
          </motion.section>

          {/* Benefícios */}
          <motion.div id="beneficios" {...fadeUp}>
            <h2 className={styles.groupTitle}>Por que resolver isso comigo</h2>
          </motion.div>
          <div className={styles.benefitGrid}>
            {benefits.map(({ icon: Icon, title, text }) => (
              <motion.div className={styles.benefitCard} key={title} {...fadeUp}>
                <Icon aria-hidden="true" />
                <h3>{title}</h3>
                <p>{text}</p>
              </motion.div>
            ))}
          </div>

          {/* FAQ */}
          <motion.div id="duvidas" {...fadeUp}>
            <h2 className={styles.groupTitle}>Perguntas frequentes</h2>
          </motion.div>
          <motion.div className={styles.faq} {...fadeUp}>
            {faqs.map((item) => (
              <details className={styles.faqItem} key={item.q}>
                <summary>{item.q}</summary>
                <p>{item.a}</p>
              </details>
            ))}
          </motion.div>

          {/* Contato */}
          <motion.section id="contato" className={styles.contact} {...fadeUp}>
            <FaRocket style={{ fontSize: "1.8rem", color: "#38bdf8" }} />
            <h2>Vamos resolver isso antes que o app saia do ar</h2>
            <p>
              Me manda o link do seu app na Play Store pelo WhatsApp. Eu confirmo o que precisa ser feito, te
              passo prazo e valor fechado — sem compromisso.
            </p>
            <a
              href={whatsappLink(WHATSAPP_MESSAGE)}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.ctaWhats}
            >
              <FaWhatsapp />
              Chamar no WhatsApp
            </a>
            <span className={styles.contactNumber}>{WHATSAPP_DISPLAY} · Atendimento direto pelo WhatsApp</span>
          </motion.section>
        </div>

        {/* Footer */}
        <footer className={styles.footerSection}>
          <h2>Não espere o app ser removido para agir</h2>
          <p>
            Quanto mais tempo passa, maior o risco de perder usuários e avaliações. Fale comigo agora e resolva
            isso ainda esta semana.
          </p>
          <a
            href={whatsappLink(WHATSAPP_MESSAGE)}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.ctaWhats}
          >
            <FaWhatsapp />
            Falar no WhatsApp
          </a>
          <div className={styles.footerLinks}>
            <Link to="/">jfcoder.com</Link>
            <span aria-hidden="true">·</span>
            <Link to="/pdv-multi">Conheça o PDV Multi</Link>
          </div>
        </footer>
      </div>

      <StickyWhatsBar />
    </div>
  );
}
