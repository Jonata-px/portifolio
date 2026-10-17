import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FaFileInvoiceDollar,
  FaWifi,
  FaCloudDownloadAlt,
  FaLock,
  FaDatabase,
  FaGavel,
  FaDownload,
  FaWhatsapp,
  FaSyncAlt,
  FaWindows,
  FaAndroid,
  FaTools,
  FaUtensils,
  FaPlayCircle,
} from "react-icons/fa";
import styles from "./styles.module.css";
import pdvIcon from "../../assets/images/pdvMulti.png";
import googlePlayBadge from "../../assets/images/google-play.png";
import { Helmet } from "react-helmet-async";
import { SITE_BASE_URL } from "../../config/constants";
import HeroMockup from "./HeroMockup";
import FeatureGrid from "./FeatureGrid";
import PricingTiers from "./PricingTiers";
import Faq, { faqContent } from "./Faq";
import StickyDownloadBar from "./StickyDownloadBar";
import { useHelpVideos } from "./useHelpVideos";

// Endpoint do Express na Firebase Cloud Function que redireciona para o instalador .exe
// mais recente salvo no Firebase Storage (pdv/app/settings/latestVersion)
const EXE_DOWNLOAD_LINK = "https://api-uhnqx5lyvq-uc.a.run.app/pdv/app/download";
// App disponível na Microsoft Store para Windows
const WINDOWS_LINK = "https://apps.microsoft.com/detail/9p9pt0lmdvwc?hl=pt-BR&gl=BR&ocid=pdpshare";
const ANDROID_LINK = "https://play.google.com/store/apps/details?id=com.jfcoder.pdvmulti";

type TranslationKeys = {
  title: string;
  metaDescription: string;
  metaKeywords: string;
  heroSubtitle: string;
  heroDescription: string;
  downloadButton: string;
  downloadNote: string;
  androidButton: string;
  exeButton: string;
  viewPlansButton: string;
  badgePlatforms: string;
  badgeNfce: string;
  badgeRestaurant: string;
  badgeOffline: string;
  badgeSync: string;
  badgeUpdate: string;
  pillarsTitle: string;
  platformsTitle: string;
  platformsDesc: string;
  syncTitle: string;
  syncDesc: string;
  offlineTitle: string;
  offlineDesc: string;
  whatsappTitle: string;
  whatsappDesc: string;
  featuresTitle: string;
  featuresSubtitle: string;
  nfceTitle: string;
  nfceDesc: string;
  nfceLi1: string;
  nfceLi2: string;
  nfceLi3: string;
  nfceLi4: string;
  nfseTitle: string;
  nfseBeta: string;
  nfseDesc: string;
  nfseItems: string[];
  nfseNote: string;
  navFeatures: string;
  navRestaurant: string;
  navPlans: string;
  navVideos: string;
  navFaq: string;
  videosButton: string;
  audienceTitle: string;
  audience: string[];
  videosTitle: string;
  videosDesc: string;
  videosTopics: string[];
  videosCta: string;
  restaurantTitle: string;
  restaurantBadge: string;
  restaurantDesc: string;
  restaurantItems: string[];
  restaurantNote: string;
  pricingTitle: string;
  pricingSubtitle: string;
  requirementsTitle: string;
  requirementsOS: string;
  requirementsCPU: string;
  requirementsRAM: string;
  requirementsDisk: string;
  securityTitle: string;
  securityDesc: string;
  securityBadge1: string;
  securityBadge2: string;
  securityBadge3: string;
  faqTitle: string;
  footerTitle: string;
  footerDesc: string;
};

const translations: Record<"pt" | "en", TranslationKeys> = {
  pt: {
    title: "PDV Multi - Sistema de Vendas e Frente de Caixa para Equipes",
    metaDescription:
      "PDV Multi é o software de frente de caixa perfeito para o seu negócio: controle de estoque, vendas em equipe em tempo real, emissão de NFC-e/NF-e e NFS-e, modo restaurante com mesas, cozinha, delivery e cardápio online, fiado e muito mais. Baixe grátis para Windows e Android.",
    metaKeywords:
      "pdv multi, pdv windows, pdv android, frente de caixa, emitir nfce, nf-e, emitir nfs-e, nota fiscal de serviço, nfs-e nacional, prestador de serviço, mei, controle de vendas, sistema de estoque, sistema comercial, caixa de loja, sistema para restaurante, sistema para pizzaria, delivery, comanda, cardápio online, controle de mesas",
    heroSubtitle: "Venda rápido, controle o caixa e emita nota fiscal — no computador do balcão e no celular da equipe.",
    heroDescription:
      "O PDV Multi sincroniza em tempo real todos os caixas, vendas, produtos e clientes na nuvem, continua funcionando mesmo se a internet cair, e emite NFC-e/NF-e — e NFS-e pra quem presta serviço — direto do sistema. Com o modo restaurante, atende mesas, cozinha, delivery e cardápio online. Tudo em um único lugar — no computador do balcão e no celular da equipe — feito pra quem vende de verdade.",
    downloadButton: "Baixar para Windows",
    downloadNote: "Disponível na Microsoft Store · Windows 10/11 (64 bits) · Teste grátis por 14 dias, sem cartão.",
    androidButton: "Disponível no Google Play",
    exeButton: "Baixar instalador (.exe)",
    viewPlansButton: "Ver planos",
    badgePlatforms: "Windows + Android",
    badgeNfce: "NFC-e / NF-e / NFS-e",
    badgeRestaurant: "Restaurante + Delivery",
    badgeOffline: "Offline-first",
    badgeSync: "Multi-caixa em tempo real",
    badgeUpdate: "Atualização automática",
    pillarsTitle: "Feito pra loja que não pode parar",
    platformsTitle: "💻📱 Multiplataforma de verdade — foi daí que veio o nome",
    platformsDesc:
      "\"Multi\" não é força de expressão: o mesmo sistema roda no computador Windows do balcão e no celular Android de quem vende na rua, sincronizando tudo em tempo real na mesma conta. Abra o caixa no PC, feche uma venda pelo celular — e os dois lados sabem disso na hora.",
    syncTitle: "🔄 Sincronização em tempo real",
    syncDesc:
      "Sua equipe trabalha em harmonia. Vendas, aberturas de caixa, sangrias e cadastros de produtos realizados em um caixa aparecem instantaneamente para os outros em tempo real na nuvem.",
    offlineTitle: "📶 Banco de dados com suporte offline",
    offlineDesc:
      "Sua loja não pode parar. O PDV Multi grava todas as operações localmente. Se a internet cair, você continua vendendo e emitindo comprovantes normalmente; assim que a conexão voltar, tudo sincroniza sozinho.",
    whatsappTitle: "💬 Notificações de venda via WhatsApp",
    whatsappDesc:
      "Aumente a confiança do seu cliente. Envie comprovantes de venda, detalhes de parcelas de fiado e recibos de pagamento diretamente no WhatsApp do cliente através de integrações automáticas do sistema.",
    featuresTitle: "Muito mais que um caixa registrador",
    featuresSubtitle:
      "Um sistema comercial completo: da venda no balcão à gestão da equipe, do estoque e da comissão de cada vendedor.",
    nfceTitle: "🧾 Emissão de NFC-e e NF-e simplificada",
    nfceDesc:
      "Emita notas fiscais de consumidor eletrônica (NFC-e) e notas fiscais eletrônicas (NF-e) direto pelo aplicativo sem complicações:",
    nfceLi1: "Configuração rápida do seu certificado digital A1;",
    nfceLi2: "Importação automática trimestral de alíquotas tributárias IBPT;",
    nfceLi3: "Geração de PDF do DANFE simplificado pronto para impressão térmica ou A4;",
    nfceLi4: "Envio automático de notas fiscais autorizadas.",
    nfseTitle: "🛠️ NFS-e para prestadores de serviço",
    nfseBeta: "Beta",
    nfseDesc:
      "Presta serviço? O PDV Multi agora emite a NFS-e (nota fiscal de serviço) pelo Sistema Nacional NFS-e — o padrão nacional adotado pelas prefeituras — sem você precisar entrar no portal a cada atendimento:",
    nfseItems: [
      "Emissão direto da venda, para MEI, Simples Nacional e demais regimes;",
      "Busca do código de serviço na lista nacional oficial (LC 116), sem decorar códigos;",
      "Serviço em outra cidade, obra ou evento? O sistema pede o local e o ISS vai para o município certo;",
      "PDF oficial da nota (DANFSe) e XML para compartilhar no WhatsApp ou imprimir;",
      "Cancelamento da nota pelo próprio app;",
      "Venda com produtos e serviços juntos: NFC-e para os produtos e NFS-e para os serviços;",
      "MEI sem certificado digital? O PDV organiza os dados da venda e abre o Emissor Nacional para você emitir com o seu login gov.br.",
    ],
    nfseNote:
      "Função em fase de testes (beta): em alguns casos a emissão pode falhar. Se acontecer, o app mostra o motivo na hora e você pode emitir pelo Emissor Nacional (gov.br/nfse).",
    navFeatures: "Recursos",
    navRestaurant: "Restaurante",
    navPlans: "Planos",
    navVideos: "Vídeos",
    navFaq: "Dúvidas",
    videosButton: "Assistir vídeos",
    audienceTitle: "Para quem é o PDV Multi",
    audience: ["Mercados e mercearias", "Lojas e boutiques", "Padarias e confeitarias", "Restaurantes e lanchonetes", "Pizzarias e delivery", "Prestadores de serviço"],
    videosTitle: "▶️ Veja o PDV Multi funcionando",
    videosDesc:
      "Não precisa de treinamento: são vídeos curtos, passo a passo, mostrando a tela do app de verdade. Assista antes de instalar ou use como guia para a sua equipe.",
    videosTopics: ["Primeira venda e leitor de código de barras", "Abrir e fechar o caixa", "Pix com QR Code e fiado", "Emitir nota fiscal", "Atender mesa, cozinha e delivery"],
    videosCta: "Ver todos os vídeos",
    restaurantTitle: "🍕 Modo Restaurante, Lanchonete e Delivery",
    restaurantBadge: "Novo",
    restaurantDesc:
      "Tem pizzaria, lanchonete ou restaurante? Ative o modo restaurante e o app se reorganiza para o salão, a cozinha e a entrega — sem mudar nada para quem vende no balcão de mercado ou loja:",
    restaurantItems: [
      "Mesas e comandas: mapa de mesas em tempo real, pedidos por rodada, transferir e juntar mesas, pré-conta, taxa de serviço e pagamento dividido;",
      "Perfis de garçom e cozinha: cada um cai direto na sua tela, com as permissões que o dono liberar;",
      "Cozinha (KDS) com cronômetro e cor de atraso, e impressão da via por setor (cozinha, bar, pizzaria);",
      "Cardápio com complementos, borda, adicionais e pizza meio a meio, além de pausar item que acabou;",
      "Delivery: painel de pedidos (novo → preparo → pronto → em rota), taxa por bairro, despacho de vários pedidos de uma vez e acerto do entregador;",
      "App do entregador com login próprio — ele pode trabalhar para vários estabelecimentos;",
      "Cardápio online (link e QR Code) para o cliente pedir direto, com aceite automático opcional;",
      "Cupons de desconto e programa de fidelidade;",
      "NFC-e e NF-e também nos pedidos de delivery.",
    ],
    restaurantNote:
      "O modo restaurante é opcional e vem desligado: quem usa o PDV Multi como caixa de loja continua com a mesma tela de sempre.",
    pricingTitle: "Planos pra cada fase do seu negócio",
    pricingSubtitle: "Comece grátis. Evolua quando precisar emitir nota fiscal.",
    requirementsTitle: "💻 Requisitos do sistema",
    requirementsOS: "Sistema Operacional: Windows 10 ou Windows 11 (64 bits)",
    requirementsCPU: "Processador: Intel Core i3 / AMD Ryzen 3 ou superior",
    requirementsRAM: "Memória RAM: 4 GB (Recomendado: 8 GB)",
    requirementsDisk: "Armazenamento: 200 MB de espaço livre em disco",
    securityTitle: "🔒 Segurança e privacidade total",
    securityDesc:
      "Seus dados comerciais são protegidos com as melhores práticas do Google Cloud. Suas informações de vendas, faturamento e clientes são criptografadas em trânsito e em repouso e só são visíveis por membros credenciados da sua própria equipe.",
    securityBadge1: "Criptografia em trânsito e repouso",
    securityBadge2: "Backup contínuo na nuvem",
    securityBadge3: "Acesso só pra sua equipe",
    faqTitle: "Perguntas frequentes",
    footerTitle: "🚀 Comece hoje: teste grátis por 14 dias",
    footerDesc:
      "Instale em minutos, cadastre seus produtos e faça a primeira venda ainda hoje. Sem cartão de crédito, sem compromisso — e com vídeos para te guiar em cada passo.",
  },
  en: {
    title: "PDV Multi - Complete Real-Time Sales & POS System",
    metaDescription:
      "PDV Multi is the perfect point of sale (POS) software for your business: real-time team sales, inventory control, fiscal invoices for products and services, restaurant mode with tables, kitchen, delivery and online menu, client credit tracking, and more. Download free for Windows and Android.",
    metaKeywords:
      "pdv multi, windows pos, android pos, point of sale, register control, inventory system, shop manager, cash register software, restaurant pos, pizzeria software, delivery management, online menu, table management",
    heroSubtitle: "Sell fast, control your register and issue invoices — on the counter's computer and the team's phone.",
    heroDescription:
      "PDV Multi syncs every register, sale, product, and customer to the cloud in real time, keeps working even when the internet doesn't, and issues fiscal invoices straight from the system. With restaurant mode it also handles tables, kitchen, delivery and an online menu. Everything in one place — on the counter's computer and the team's phone — built for people who actually sell.",
    downloadButton: "Download for Windows",
    downloadNote: "Available on the Microsoft Store · Windows 10/11 (64-bit) · Free 14-day trial, no card required.",
    androidButton: "Get it on Google Play",
    exeButton: "Download installer (.exe)",
    viewPlansButton: "View plans",
    badgePlatforms: "Windows + Android",
    badgeNfce: "Fiscal invoices (goods + services)",
    badgeRestaurant: "Restaurant + Delivery",
    badgeOffline: "Offline-first",
    badgeSync: "Real-time multi-register",
    badgeUpdate: "Automatic updates",
    pillarsTitle: "Built for stores that can't afford to stop",
    platformsTitle: "💻📱 Truly cross-platform — that's where the name comes from",
    platformsDesc:
      "\"Multi\" isn't just a name: the same system runs on the Windows computer at the counter and on the Android phone of whoever's selling out on the street, syncing everything in real time on the same account. Open the register on the PC, close a sale from the phone — and both sides know it instantly.",
    syncTitle: "🔄 Real-time synchronization",
    syncDesc:
      "Keep your staff in sync. Purchases, cash register sessions, cash drops, and inventory changes made on one register instantly propagate to all other terminals in real time via the cloud.",
    offlineTitle: "📶 Offline-capable database",
    offlineDesc:
      "Your business shouldn't stop when the internet does. PDV Multi stores operations locally so you can keep checking out clients and printing receipts. Once you go back online, everything syncs automatically.",
    whatsappTitle: "💬 Automated WhatsApp sales notifications",
    whatsappDesc:
      "Build customer loyalty. Send sales receipts, customer credit installment details, and payment confirmations directly to your clients' WhatsApp using automatic system integrations.",
    featuresTitle: "Much more than a cash register",
    featuresSubtitle:
      "A complete commercial system: from the counter sale to team management, inventory, and per-salesperson commission.",
    nfceTitle: "🧾 Fiscal & invoice printing (NFC-e/NF-e)",
    nfceDesc: "Fully integrated fiscal document emission and simplified invoice generation directly inside the application:",
    nfceLi1: "Fast configuration of your digital A1 certificate;",
    nfceLi2: "Automatic quarterly updates of IBPT tax rates;",
    nfceLi3: "Immediate generation of simplified DANFE PDFs for thermal or A4 printing;",
    nfceLi4: "Automated tracking and transmission of approved receipts.",
    nfseTitle: "🛠️ Service invoices (NFS-e) for service providers",
    nfseBeta: "Beta",
    nfseDesc:
      "Do you provide services? PDV Multi now issues the NFS-e (Brazilian service invoice) through the National NFS-e System — the nationwide standard adopted by municipalities — without logging into a government portal for every job:",
    nfseItems: [
      "Issue it straight from the sale, for MEI, Simples Nacional and other tax regimes;",
      "Search the official national service code list (LC 116) — no memorizing codes;",
      "Service in another city, construction work or an event? The system asks for the location so the ISS tax goes to the right municipality;",
      "Official invoice PDF (DANFSe) and XML, ready to share on WhatsApp or print;",
      "Cancel the invoice right from the app;",
      "Selling products and services together: NFC-e for the products, NFS-e for the services;",
      "MEI without a digital certificate? PDV organizes the sale data and opens the National Issuer so you can issue it with your gov.br login.",
    ],
    nfseNote:
      "This feature is in testing (beta): in some cases issuing may fail. If it does, the app shows the reason right away and you can issue it on the National Issuer (gov.br/nfse).",
    navFeatures: "Features",
    navRestaurant: "Restaurant",
    navPlans: "Plans",
    navVideos: "Videos",
    navFaq: "FAQ",
    videosButton: "Watch videos",
    audienceTitle: "Who PDV Multi is for",
    audience: ["Grocery stores", "Shops and boutiques", "Bakeries", "Restaurants and snack bars", "Pizzerias and delivery", "Service providers"],
    videosTitle: "▶️ See PDV Multi in action",
    videosDesc:
      "No training needed: short step-by-step videos showing the real app screen. Watch before installing or use them as a guide for your team (videos are in Portuguese).",
    videosTopics: ["First sale with a barcode reader", "Opening and closing the register", "Pix QR Code and customer credit", "Issuing invoices", "Tables, kitchen and delivery"],
    videosCta: "See all videos",
    restaurantTitle: "🍕 Restaurant, Snack Bar & Delivery mode",
    restaurantBadge: "New",
    restaurantDesc:
      "Run a pizzeria, snack bar or restaurant? Turn on restaurant mode and the app reorganizes itself around the dining room, the kitchen and deliveries — without changing anything for stores that sell at the counter:",
    restaurantItems: [
      "Tables and tabs: real-time table map, orders by round, transfer and merge tables, pre-bill, service fee and split payment;",
      "Waiter and kitchen profiles: each lands straight on their own screen, with the permissions the owner allows;",
      "Kitchen display (KDS) with timer and delay colors, plus ticket printing per sector (kitchen, bar, pizza);",
      "Menu with modifiers, crust, extras and half-and-half pizza, plus pausing items that ran out;",
      "Delivery: order board (new → preparing → ready → on the way), per-neighborhood fee, batch dispatch and courier settlement;",
      "Courier app with its own login — a courier can work for several businesses;",
      "Online menu (link and QR Code) so customers can order directly, with optional auto-accept;",
      "Discount coupons and a loyalty program;",
      "NFC-e and NF-e on delivery orders too.",
    ],
    restaurantNote:
      "Restaurant mode is optional and off by default: stores using PDV Multi as a regular register keep the same screen as always.",
    pricingTitle: "Plans for every stage of your business",
    pricingSubtitle: "Start free. Upgrade when you need to issue fiscal invoices.",
    requirementsTitle: "💻 System requirements",
    requirementsOS: "Operating System: Windows 10 or Windows 11 (64-bit)",
    requirementsCPU: "Processor: Intel Core i3 / AMD Ryzen 3 or higher",
    requirementsRAM: "RAM Memory: 4 GB (Recommended: 8 GB)",
    requirementsDisk: "Disk Storage: 200 MB of free hard drive space",
    securityTitle: "🔒 Industry-grade privacy and security",
    securityDesc:
      "Your business metrics are protected by Google Cloud's leading security practices. Sales records, revenue, and client database entries are fully encrypted in transit and at rest, and are strictly accessible by authorized members of your company.",
    securityBadge1: "Encrypted in transit and at rest",
    securityBadge2: "Continuous cloud backup",
    securityBadge3: "Access limited to your team",
    faqTitle: "Frequently asked questions",
    footerTitle: "🚀 Start today: free 14-day trial",
    footerDesc:
      "Install in minutes, add your products and make your first sale today. No credit card, no commitment — and with videos to guide you every step of the way.",
  },
};

const fadeUp = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.5 },
};

export default function PDVMultiPage() {
  const [lang, setLang] = useState<"pt" | "en">("pt");
  const t = useMemo(() => translations[lang], [lang]);
  const { videos } = useHelpVideos();
  const promoVideo = videos.find((v) => v.promo && v.youtubeId) ?? videos.find((v) => v.youtubeId);

  return (
    <div className={styles.page}>
      <Helmet>
        <title>{t.title}</title>
        <meta name="description" content={t.metaDescription} />
        <meta name="keywords" content={t.metaKeywords} />
        <link rel="canonical" href="https://jfcoder.com/pdv-multi" />
        <meta property="og:title" content={t.title} />
        <meta property="og:description" content={t.metaDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://jfcoder.com/pdv-multi" />
        <meta property="og:locale" content={lang === "pt" ? "pt_BR" : "en_US"} />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content={t.title} />
        <meta name="twitter:description" content={t.metaDescription} />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            name: "PDV Multi",
            applicationCategory: "BusinessApplication",
            operatingSystem: "Windows 10, Windows 11, Android",
            description: t.metaDescription,
            url: `${SITE_BASE_URL}/pdv-multi`,
            downloadUrl: WINDOWS_LINK,
            inLanguage: lang === "pt" ? "pt-BR" : "en",
            featureList: t.restaurantItems.concat(t.nfseItems),
            offers: {
              "@type": "Offer",
              price: "0",
              priceCurrency: "BRL",
              description: lang === "pt" ? "Teste grátis por 14 dias, sem cartão" : "Free 14-day trial, no card required",
            },
          })}
        </script>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqContent[lang].map((item) => ({
              "@type": "Question",
              name: item.q,
              acceptedAnswer: { "@type": "Answer", text: item.a },
            })),
          })}
        </script>
      </Helmet>

      <div className={styles.pageInner}>
        {/* Barra superior: navegação + idioma */}
        <div className={styles.topBar}>
          <nav className={styles.nav} aria-label="Seções">
            <a href="#features">{t.navFeatures}</a>
            <a href="#restaurant">{t.navRestaurant}</a>
            <a href="#pricing">{t.navPlans}</a>
            <Link to="/pdv-multi/videos">{t.navVideos}</Link>
            <a href="#faq">{t.navFaq}</a>
          </nav>
          <div className={styles.langSelector}>
            <button
              onClick={() => setLang("pt")}
              className={`${styles.langButton} ${lang === "pt" ? styles.langActive : ""}`}
            >
              Português (BR)
            </button>
            <button
              onClick={() => setLang("en")}
              className={`${styles.langButton} ${lang === "en" ? styles.langActive : ""}`}
            >
              English
            </button>
          </div>
        </div>

        {/* Hero */}
        <section className={styles.hero}>
          <div className={styles.heroCopy}>
            <div className={styles.titleWrap}>
              <img src={pdvIcon} alt="PDV Multi Logo" />
              <h1 className={styles.heroTitle}>PDV Multi</h1>
            </div>
            <h2 className={styles.heroSubtitle}>{t.heroSubtitle}</h2>
            <p className={styles.heroDescription}>{t.heroDescription}</p>

            <div className={styles.badgeRow}>
              <span className={styles.badge}>
                <FaWindows />
                <FaAndroid /> {t.badgePlatforms}
              </span>
              <span className={styles.badge}>
                <FaFileInvoiceDollar /> {t.badgeNfce}
              </span>
              <span className={styles.badge}>
                <FaUtensils /> {t.badgeRestaurant}
              </span>
              <span className={styles.badge}>
                <FaWifi /> {t.badgeOffline}
              </span>
              <span className={styles.badge}>
                <FaSyncAlt /> {t.badgeSync}
              </span>
              <span className={styles.badge}>
                <FaCloudDownloadAlt /> {t.badgeUpdate}
              </span>
            </div>

            <div className={styles.cta}>
              <a
                id="download"
                href={WINDOWS_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.ctaButton}
              >
                <FaDownload />
                {t.downloadButton}
              </a>
              <a href={ANDROID_LINK} target="_blank" rel="noopener noreferrer" className={styles.ctaAndroid}>
                <img src={googlePlayBadge} alt="" className={styles.androidIcon} />
                {t.androidButton}
              </a>
              <Link to="/pdv-multi/videos" className={styles.ctaSecondary}>
                <FaPlayCircle style={{ marginRight: 8 }} />
                {t.videosButton}
              </Link>
            </div>
            <div className={styles.ctaLinks}>
              <a href="#pricing">{t.viewPlansButton}</a>
              <span aria-hidden="true">·</span>
              <a href={EXE_DOWNLOAD_LINK} rel="nofollow">
                {t.exeButton}
              </a>
            </div>
            <span className={styles.ctaNote}>{t.downloadNote}</span>
          </div>

          <motion.div
            className={styles.heroVisual}
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <HeroMockup />
          </motion.div>
        </section>

        {/* Para quem é */}
        <div className={styles.audience}>
          <span className={styles.audienceLabel}>{t.audienceTitle}</span>
          <div className={styles.badgeRow}>
            {t.audience.map((a) => (
              <span key={a} className={styles.badge}>
                {a}
              </span>
            ))}
          </div>
        </div>

        {/* 3 pilares */}
        <div className={styles.sections}>
          <motion.h2 className={styles.groupTitle} {...fadeUp}>
            {t.pillarsTitle}
          </motion.h2>
          <div className={styles.pillarGrid}>
            <motion.section className={`${styles.section} ${styles.sectionHighlight}`} {...fadeUp}>
              <h2>{t.platformsTitle}</h2>
              <p>{t.platformsDesc}</p>
            </motion.section>

            <motion.section className={styles.section} {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.1 }}>
              <h2>{t.syncTitle}</h2>
              <p>{t.syncDesc}</p>
            </motion.section>

            <motion.section className={styles.section} {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.2 }}>
              <h2>{t.offlineTitle}</h2>
              <p>{t.offlineDesc}</p>
            </motion.section>

            <motion.section className={styles.section} {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.3 }}>
              <h2>
                <FaWhatsapp style={{ display: "inline", marginRight: 4 }} />
                {t.whatsappTitle}
              </h2>
              <p>{t.whatsappDesc}</p>
            </motion.section>
          </div>

          {/* Grid de funcionalidades */}
          <motion.div id="features" {...fadeUp}>
            <h2 className={styles.groupTitle}>{t.featuresTitle}</h2>
            <p className={styles.groupSubtitle}>{t.featuresSubtitle}</p>
          </motion.div>
          <FeatureGrid lang={lang} />

          {/* NFC-e detalhado */}
          <motion.section className={styles.section} {...fadeUp}>
            <h2>{t.nfceTitle}</h2>
            <p>{t.nfceDesc}</p>
            <ul>
              <li>{t.nfceLi1}</li>
              <li>{t.nfceLi2}</li>
              <li>{t.nfceLi3}</li>
              <li>{t.nfceLi4}</li>
            </ul>
          </motion.section>

          {/* Modo restaurante / delivery */}
          <motion.section id="restaurant" className={`${styles.section} ${styles.sectionHighlight}`} {...fadeUp}>
            <h2>
              <FaUtensils style={{ display: "inline" }} />
              {t.restaurantTitle}
              <span className={styles.betaTag}>{t.restaurantBadge}</span>
            </h2>
            <p>{t.restaurantDesc}</p>
            <ul>
              {t.restaurantItems.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p className={styles.betaNote}>{t.restaurantNote}</p>
          </motion.section>

          {/* NFS-e (prestadores de serviço) */}
          <motion.section className={`${styles.section} ${styles.sectionHighlight}`} {...fadeUp}>
            <h2>
              <FaTools style={{ display: "inline" }} />
              {t.nfseTitle}
              <span className={styles.betaTag}>{t.nfseBeta}</span>
            </h2>
            <p>{t.nfseDesc}</p>
            <ul>
              {t.nfseItems.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p className={styles.betaNote}>{t.nfseNote}</p>
          </motion.section>

          {/* Vídeos */}
          <motion.section className={styles.section} {...fadeUp}>
            <h2>{t.videosTitle}</h2>
            <p>{t.videosDesc}</p>
            <ul>
              {t.videosTopics.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            {promoVideo && (
              <Link to="/pdv-multi/videos" className={styles.videoTeaser} aria-label={promoVideo.title}>
                <img
                  src={promoVideo.thumbnailUrl || `https://i.ytimg.com/vi/${promoVideo.youtubeId}/hqdefault.jpg`}
                  alt=""
                  loading="lazy"
                />
                <span className={styles.videoTeaserPlay}>
                  <FaPlayCircle />
                </span>
              </Link>
            )}
            <div className={styles.cta} style={{ marginTop: "1.25rem" }}>
              <Link to="/pdv-multi/videos" className={styles.ctaButton}>
                <FaPlayCircle />
                {t.videosCta}
              </Link>
            </div>
          </motion.section>

          {/* Planos */}
          <motion.div id="pricing" {...fadeUp}>
            <h2 className={styles.groupTitle}>{t.pricingTitle}</h2>
            <p className={styles.groupSubtitle}>{t.pricingSubtitle}</p>
          </motion.div>
          <PricingTiers lang={lang} />

          {/* Requisitos */}
          <motion.section className={styles.section} {...fadeUp}>
            <h2>{t.requirementsTitle}</h2>
            <ul>
              <li>{t.requirementsOS}</li>
              <li>{t.requirementsCPU}</li>
              <li>{t.requirementsRAM}</li>
              <li>{t.requirementsDisk}</li>
            </ul>
          </motion.section>

          {/* Segurança */}
          <motion.section className={styles.section} {...fadeUp}>
            <h2>{t.securityTitle}</h2>
            <p>{t.securityDesc}</p>
            <div className={styles.badgeRow} style={{ marginTop: "1rem" }}>
              <span className={styles.badge}>
                <FaLock /> {t.securityBadge1}
              </span>
              <span className={styles.badge}>
                <FaDatabase /> {t.securityBadge2}
              </span>
              <span className={styles.badge}>
                <FaGavel /> {t.securityBadge3}
              </span>
            </div>
          </motion.section>

          {/* FAQ */}
          <motion.div id="faq" {...fadeUp}>
            <h2 className={styles.groupTitle}>{t.faqTitle}</h2>
          </motion.div>
          <Faq lang={lang} />
        </div>

        {/* Footer */}
        <footer className={styles.footerSection}>
          <h2>{t.footerTitle}</h2>
          <p>{t.footerDesc}</p>
          <div className={styles.cta} style={{ marginTop: "1.5rem" }}>
            <a href={WINDOWS_LINK} target="_blank" rel="noopener noreferrer" className={styles.ctaButton}>
              <FaDownload />
              {t.downloadButton}
            </a>
            <a href={ANDROID_LINK} target="_blank" rel="noopener noreferrer" className={styles.ctaAndroid}>
              <img src={googlePlayBadge} alt="" className={styles.androidIcon} />
              {t.androidButton}
            </a>
            <Link to="/pdv-multi/videos" className={styles.ctaSecondary}>
              <FaPlayCircle style={{ marginRight: 8 }} />
              {t.videosButton}
            </Link>
          </div>
        </footer>
      </div>

      <StickyDownloadBar
        lang={lang}
        windowsLink={WINDOWS_LINK}
        androidLink={ANDROID_LINK}
        windowsLabel={t.downloadButton}
        androidLabel={t.androidButton}
      />
    </div>
  );
}
