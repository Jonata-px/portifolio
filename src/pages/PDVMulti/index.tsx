import { useMemo, useState } from "react";
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
} from "react-icons/fa";
import styles from "./styles.module.css";
import pdvIcon from "../../assets/images/pdvMulti.png";
import googlePlayBadge from "../../assets/images/google-play.png";
import { Helmet } from "react-helmet-async";
import { SITE_BASE_URL } from "../../config/constants";
import HeroMockup from "./HeroMockup";
import FeatureGrid from "./FeatureGrid";
import PricingTiers from "./PricingTiers";
import Faq from "./Faq";
import StickyDownloadBar from "./StickyDownloadBar";

// Endpoint do Express na Firebase Cloud Function que redireciona para o instalador .exe
const DOWNLOAD_LINK = "https://api-uhnqx5lyvq-uc.a.run.app/pdv/app/download";
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
  viewPlansButton: string;
  badgePlatforms: string;
  badgeNfce: string;
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
      "PDV Multi é o software de frente de caixa perfeito para o seu negócio: controle de estoque, vendas em equipe em tempo real, emissão de NFC-e/NF-e, fiado e muito mais. Baixe grátis para Windows e Android.",
    metaKeywords:
      "pdv multi, pdv windows, pdv android, frente de caixa, emitir nfce, nf-e, controle de vendas, sistema de estoque, sistema comercial, caixa de loja",
    heroSubtitle: "O frente de caixa que sua equipe usa sem treinamento — no computador do balcão e no celular da rua.",
    heroDescription:
      "O PDV Multi sincroniza em tempo real todos os caixas, vendas, produtos e clientes na nuvem, continua funcionando mesmo se a internet cair, e emite NFC-e/NF-e direto do sistema. Tudo em um único lugar — no computador do balcão e no celular da equipe — feito pra quem vende de verdade.",
    downloadButton: "Baixar para Windows (.exe)",
    downloadNote: "Instalador oficial standalone · Windows 10/11 (64 bits) · Teste grátis por 14 dias, sem cartão.",
    androidButton: "Disponível no Google Play",
    viewPlansButton: "Ver planos",
    badgePlatforms: "Windows + Android",
    badgeNfce: "NFC-e / NF-e",
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
    footerTitle: "🚀 Leve o PDV Multi para o seu balcão hoje mesmo",
    footerDesc:
      "Acelere suas vendas, controle suas contas e gerencie seu estoque com o sistema de caixa mais completo do mercado. Teste grátis por 14 dias, sem cartão de crédito.",
  },
  en: {
    title: "PDV Multi - Complete Real-Time Sales & POS System",
    metaDescription:
      "PDV Multi is the perfect point of sale (POS) software for your business: real-time team sales, inventory control, automated receipts, client credit tracking, and more. Download free for Windows and Android.",
    metaKeywords:
      "pdv multi, windows pos, android pos, point of sale, register control, inventory system, shop manager, cash register software",
    heroSubtitle: "The point of sale your team uses without training — on the counter's computer and the team's phone.",
    heroDescription:
      "PDV Multi syncs every register, sale, product, and customer to the cloud in real time, keeps working even when the internet doesn't, and issues fiscal invoices straight from the system. Everything in one place — on the counter's computer and the team's phone — built for people who actually sell.",
    downloadButton: "Download for Windows (.exe)",
    downloadNote: "Official standalone installer · Windows 10/11 (64-bit) · Free 14-day trial, no card required.",
    androidButton: "Get it on Google Play",
    viewPlansButton: "View plans",
    badgePlatforms: "Windows + Android",
    badgeNfce: "Fiscal invoices",
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
    footerTitle: "🚀 Take your store's checkout to the next level today",
    footerDesc:
      "Boost your checkout speed, secure your cash registers, and master your stock levels with the most complete POS on the market. Free 14-day trial, no credit card required.",
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
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            name: "PDV Multi",
            applicationCategory: "BusinessApplication",
            operatingSystem: "Windows 10, Windows 11, Android",
            description: t.metaDescription,
            url: `${SITE_BASE_URL}/pdv-multi`,
            downloadUrl: DOWNLOAD_LINK,
          })}
        </script>
      </Helmet>

      <div className={styles.pageInner}>
        {/* Language Selector */}
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
              <a id="download" href={DOWNLOAD_LINK} className={styles.ctaButton}>
                <FaDownload />
                {t.downloadButton}
              </a>
              <a href={ANDROID_LINK} target="_blank" rel="noopener noreferrer" className={styles.ctaAndroid}>
                <img src={googlePlayBadge} alt="" className={styles.androidIcon} />
                {t.androidButton}
              </a>
              <a href="#pricing" className={styles.ctaSecondary}>
                {t.viewPlansButton}
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
          <motion.div {...fadeUp}>
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
          <motion.div {...fadeUp}>
            <h2 className={styles.groupTitle}>{t.faqTitle}</h2>
          </motion.div>
          <Faq lang={lang} />
        </div>

        {/* Footer */}
        <footer className={styles.footerSection}>
          <h2>{t.footerTitle}</h2>
          <p>{t.footerDesc}</p>
          <div className={styles.cta} style={{ marginTop: "1.5rem" }}>
            <a href={DOWNLOAD_LINK} className={styles.ctaButton}>
              <FaDownload />
              {t.downloadButton}
            </a>
            <a href={ANDROID_LINK} target="_blank" rel="noopener noreferrer" className={styles.ctaAndroid}>
              <img src={googlePlayBadge} alt="" className={styles.androidIcon} />
              {t.androidButton}
            </a>
          </div>
        </footer>
      </div>

      <StickyDownloadBar
        lang={lang}
        windowsLink={DOWNLOAD_LINK}
        androidLink={ANDROID_LINK}
        windowsLabel={t.downloadButton}
        androidLabel={t.androidButton}
      />
    </div>
  );
}
