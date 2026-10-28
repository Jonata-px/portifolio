import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Helmet } from "react-helmet-async";
import {
  FaWhatsapp,
  FaRocket,
  FaRobot,
  FaUserClock,
  FaFileSignature,
  FaBan,
  FaAppleAlt,
  FaUsers,
  FaSearchLocation,
  FaComments,
  FaTags,
  FaKey,
  FaCheckCircle,
  FaSyncAlt,
  FaAndroid,
  FaApple,
} from "react-icons/fa";
import styles from "./styles.module.css";
import { SITE_BASE_URL, WHATSAPP_DISPLAY, whatsappLink } from "../../config/constants";

const WHATSAPP_MESSAGE =
  "Olá Jonatã! Terminei meu app e preciso publicar na Play Store e/ou na App Store. Pode me ajudar?";

const PAGE_PATH = "/publicar-app-android-ios";
const PAGE_URL = `${SITE_BASE_URL}${PAGE_PATH}`;

const TITLE = "Publicação de App na Play Store e App Store (Android e iOS) | jfcoder";
const DESCRIPTION =
  "Criou um app com IA ou já pronto e não sabe publicar? Eu cuido de tudo: conta de desenvolvedor, teste de 20 testers do Google, certificados da Apple e revisão da loja — você recebe o app no ar.";
const KEYWORDS =
  "publicar app na play store, publicar app na app store, publicar aplicativo android, publicar aplicativo ios, como publicar app criado com ia, teste fechado 20 testers google play, conta de desenvolvedor google play, apple developer program, publicar app sem mac, app rejeitado app store, lançar app vibe coding, publicar app lovable bolt replit flutterflow, freelancer para publicar app";

const audience = [
  {
    icon: FaRobot,
    text: "Você criou o app com IA (Lovable, Bolt, Replit, FlutterFlow, Google AI Studio e afins) ou contratou alguém pra programar — e agora não sabe como colocar na loja.",
  },
  {
    icon: FaUsers,
    text: "Caiu na exigência do Google de 20 testers por 14 dias seguidos e não sabe como passar por ela.",
  },
  {
    icon: FaAppleAlt,
    text: "Não tem Mac, nem conta de desenvolvedor Apple, e precisa publicar no iPhone.",
  },
  {
    icon: FaBan,
    text: "O app já foi recusado pela Apple ou pela Google e você não entendeu direito o motivo.",
  },
  {
    icon: FaFileSignature,
    text: "Falta política de privacidade, ficha da loja, ícones, capturas de tela — e você não sabe o que cada loja exige.",
  },
  {
    icon: FaKey,
    text: "Só quer entregar o projeto pronto pra alguém publicar com segurança, sem passar senha de conta pra ninguém.",
  },
];

const steps = [
  {
    title: "Você me manda o app",
    text: "Link do projeto, APK/IPA ou acesso à ferramenta que você usou pra criar. Me conta em qual loja (ou nas duas) quer publicar.",
  },
  {
    title: "Preparo o que a loja exige",
    text: "Ficha da loja, política de privacidade, ícones, classificação indicativa e o formulário de segurança de dados.",
  },
  {
    title: "Resolvo a parte técnica de cada loja",
    text: "Teste fechado e testers no Google, certificados e TestFlight na Apple — e envio pra revisão.",
  },
  {
    title: "Acompanho até o app estar no ar",
    text: "Corrijo o que for recusado, reenvio e te aviso assim que o app estiver disponível pra todo mundo.",
  },
];

const benefits = [
  {
    icon: FaComments,
    title: "Fala direto comigo",
    text: "Sem atendente, sem ticket. Você acompanha a publicação pelo WhatsApp do início ao fim.",
  },
  {
    icon: FaUsers,
    title: "Resolvo a barreira dos 20 testers",
    text: "A exigência de teste fechado do Google trava muita gente sozinha — eu já sei como conduzir isso sem enrolação.",
  },
  {
    icon: FaApple,
    title: "Publico no iPhone mesmo sem você ter Mac",
    text: "Cuido da parte de build, certificado e assinatura do app para a App Store, mesmo que você só tenha Windows ou Android.",
  },
  {
    icon: FaKey,
    title: "A conta continua sendo sua",
    text: "Não preciso da sua senha: você me adiciona como colaborador (release manager) e mantém o controle total da conta.",
  },
  {
    icon: FaTags,
    title: "Preço fechado por publicação",
    text: "Serviço pontual, sem mensalidade — você paga pra ver o app no ar, nas lojas que escolher.",
  },
  {
    icon: FaSyncAlt,
    title: "Também cuido das atualizações depois",
    text: (
      <>
        Se mais pra frente a loja pedir uma atualização de SDK, eu já conheço o projeto —{" "}
        <Link to="/atualizar-app-android">veja como funciona</Link>.
      </>
    ),
  },
];

const faqs = [
  {
    q: "Preciso já ter conta de desenvolvedor criada?",
    a: "Não necessariamente. Se você ainda não tem, eu te oriento a criar (a taxa é paga direto para Google/Apple, no seu nome). Se já tem, você só me adiciona como colaborador.",
  },
  {
    q: "Preciso passar minha senha da conta Google ou Apple?",
    a: "Não. Eu entro como colaborador (release manager / usuário com acesso) nas plataformas de cada loja. Sua conta e sua senha continuam só suas.",
  },
  {
    q: "Como funciona essa exigência dos 20 testers por 14 dias do Google?",
    a: "Contas novas de desenvolvedor pessoa física precisam rodar um teste fechado com pelo menos 20 testers opt-in por 14 dias seguidos antes de publicar em produção. Eu conduzo esse processo pra você, do jeito que o Google exige.",
  },
  {
    q: "Funciona para apps feitos com Lovable, Bolt, Replit, FlutterFlow ou Google AI Studio?",
    a: "Sim. O importante é ter o projeto exportável (código-fonte, APK/IPA ou acesso à ferramenta) — a origem do app não impede a publicação.",
  },
  {
    q: "Meu app já foi rejeitado, você ajuda a corrigir e reenviar?",
    a: "Sim. Leio o motivo da recusa no Play Console ou no App Store Connect, ajusto o que for preciso e reenvio para uma nova revisão.",
  },
  {
    q: "Preciso ter Mac para publicar no iPhone?",
    a: "Não necessariamente — eu cuido da parte de build e assinatura do app para a App Store mesmo que você não tenha um Mac.",
  },
  {
    q: "Preciso pagar antes de começar?",
    a: "Combinamos isso na conversa pelo WhatsApp — normalmente peço um sinal para iniciar e o restante na entrega, já com o app publicado.",
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
              <span className={styles.stickyTitle}>Publicação de app nas lojas</span>
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

export default function AppPublishPage() {
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
            serviceType: "Publicação de aplicativos na Google Play Store e Apple App Store",
            name: "Publicação de app Android e iOS nas lojas",
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
              <FaRocket /> Publicação de app
            </span>
            <h1 className={styles.heroTitle}>
              Seu app está pronto. <strong>Só falta publicar.</strong>
            </h1>
            <p className={styles.heroDescription}>
              Hoje é fácil criar um app — com IA, no-code ou um freelancer. O difícil é a parte que ninguém
              mostra: conta de desenvolvedor, o teste de 20 testers por 14 dias do Google, certificados e
              revisão da Apple. Eu cuido de toda essa etapa pra você e entrego o app publicado na Play Store
              e/ou na App Store.
            </p>
            <div className={styles.badgeRow}>
              <span className={styles.badge}>
                <FaAndroid /> <FaApple /> Android e iOS
              </span>
              <span className={styles.badge}>Resposta rápida pelo WhatsApp</span>
              <span className={styles.badge}>Preço fechado</span>
              <span className={styles.badge}>A conta continua sua</span>
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
              Me conta como o app foi feito e em qual loja você quer publicar — eu te digo em poucas horas o
              que falta.
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
                <FaUserClock />
                <div>
                  <strong>Distância entre "pronto" e "publicado"</strong>
                  <span>O que costuma travar</span>
                </div>
              </div>
              <div className={styles.heroCardBody}>
                <p>"Seu app precisa de 20 testers opt-in por 14 dias seguidos antes de ir pra produção."</p>
                <code>Google Play Console · exigência de teste fechado</code>
                <p style={{ marginTop: "0.9rem", marginBottom: 0, fontSize: "0.85rem", color: "#94a3b8" }}>
                  <FaApple style={{ marginRight: "0.4rem" }} />
                  Na Apple, a trava costuma ser outra: conta paga, Mac, certificados — e revisão manual.
                </p>
              </div>
            </div>
          </motion.div>
        </section>

        <div className={styles.sections}>
          {/* Pra quem é */}
          <motion.div {...fadeUp}>
            <h2 className={styles.groupTitle}>Esse serviço é pra você se...</h2>
            <p className={styles.groupSubtitle}>
              Construir o app ficou fácil. Publicar com segurança, nas regras de cada loja, continua sendo a
              parte chata — e é exatamente isso que eu resolvo.
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
              Um processo direto, pensado pra quem só quer ver o app no ar sem aprender sozinho as regras de
              cada loja.
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

          {/* Contexto / autoridade */}
          <motion.section className={`${styles.section} ${styles.sectionHighlight}`} {...fadeUp}>
            <h2>
              <FaSearchLocation style={{ display: "inline" }} />
              Por que publicar ficou mais difícil do que criar
            </h2>
            <p>
              Em 2026 o número de apps novos enviados para as lojas quase dobrou, puxado por ferramentas de IA
              que tornaram criar um app questão de horas. As lojas reagiram apertando as regras:
            </p>
            <ul>
              <li>
                O Google exige que contas de desenvolvedor novas rodem um teste fechado com pelo menos 20
                testers ativos por 14 dias seguidos antes de liberar a publicação em produção;
              </li>
              <li>
                A Apple exige conta paga no Apple Developer Program, certificados de assinatura e passa o app
                por revisão manual — e tem reforçado a rejeição de apps genéricos ou malfeitos;
              </li>
              <li>Faltam política de privacidade, ficha da loja e formulários de segurança de dados, que as duas lojas cobram antes de aprovar qualquer app.</li>
            </ul>
            <p>É essa distância entre "o app funciona" e "o app está na loja" que eu cubro pra você.</p>
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
            <FaCheckCircle style={{ fontSize: "1.8rem", color: "#38bdf8" }} />
            <h2>Vamos colocar seu app no ar</h2>
            <p>
              Me manda o link do app, o APK/IPA ou o acesso à ferramenta que você usou pra criar, pelo
              WhatsApp. Eu confirmo o que falta, te passo prazo e valor fechado — sem compromisso.
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
          <h2>Não deixe o app parado por causa da burocracia da loja</h2>
          <p>
            Você já fez a parte difícil, que é criar. Deixa comigo a parte chata de publicar — com segurança e
            sem perder o controle da sua conta.
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
            <Link to="/atualizar-app-android">Já tem app publicado? Veja a atualização de SDK</Link>
          </div>
        </footer>
      </div>

      <StickyWhatsBar />
    </div>
  );
}
