import { useMemo, useState } from "react";
import styles from "./styles.module.css";
import pdvIcon from "../../assets/images/pdv.png";
import { Helmet } from "react-helmet-async";

// Endpoint do Express na Firebase Cloud Function que redireciona para o instalador .exe
const DOWNLOAD_LINK = "https://api-uhnqx5lyvq-uc.a.run.app/pdv/app/download";

type TranslationKeys = {
  title: string;
  metaDescription: string;
  metaKeywords: string;
  heroSubtitle: string;
  heroDescription: string;
  downloadButton: string;
  downloadNote: string;
  syncTitle: string;
  syncDesc: string;
  offlineTitle: string;
  offlineDesc: string;
  nfceTitle: string;
  nfceDesc: string;
  nfceLi1: string;
  nfceLi2: string;
  nfceLi3: string;
  nfceLi4: string;
  featuresTitle: string;
  featuresLi1: string;
  featuresLi2: string;
  featuresLi3: string;
  featuresLi4: string;
  featuresLi5: string;
  featuresLi6: string;
  whatsappTitle: string;
  whatsappDesc: string;
  requirementsTitle: string;
  requirementsOS: string;
  requirementsCPU: string;
  requirementsRAM: string;
  requirementsDisk: string;
  securityTitle: string;
  securityDesc: string;
  footerTitle: string;
  footerDesc: string;
};

const translations: Record<string, TranslationKeys> = {
  pt: {
    title: "PDV Multi - Sistema de Vendas e Frente de Caixa para Equipes",
    metaDescription: "PDV Multi é o software de frente de caixa perfeito para o seu negócio: controle de estoque, vendas em equipe em tempo real, emissão de NFC-e/NF-e, fiado e muito mais. Baixe grátis para Windows.",
    metaKeywords: "pdv multi, pdv windows, frente de caixa, emitir nfce, nf-e, controle de vendas, sistema de estoque, sistema comercial, caixa de loja",
    heroSubtitle: "O Frente de Caixa moderno, rápido e feito para o seu time.",
    heroDescription: "O PDV Multi é a solução ideal para gerenciar as vendas e o estoque da sua empresa. Projetado para funcionar perfeitamente em equipe, o sistema sincroniza em tempo real todos os caixas, vendas, produtos e clientes na nuvem. Agilize seu atendimento no balcão e gerencie tudo em um único lugar.",
    downloadButton: "Baixar para Windows (.exe)",
    downloadNote: "Instalador oficial standalone. Compatível com Windows 10 e Windows 11 (64 bits).",
    syncTitle: "🔄 Sincronização em Tempo Real",
    syncDesc: "Sua equipe trabalha em harmonia. Vendas, aberturas de caixa, sangrias e cadastros de produtos realizados em um computador aparecem instantaneamente para os outros caixas em tempo real na nuvem.",
    offlineTitle: "📶 Banco de Dados com Suporte Offline",
    offlineDesc: "Sua loja não pode parar. O PDV Multi grava todas as operações localmente. Se a internet cair, você continua vendendo e emitindo comprovantes normalmente; assim que a conexão voltar, tudo sincroniza sozinho.",
    nfceTitle: "🧾 Emissão de NFC-e e NF-e Simplificada",
    nfceDesc: "Emita notas fiscais de consumidor eletrônica (NFC-e) e notas fiscais eletrônicas (NF-e) direto pelo aplicativo sem complicações:",
    nfceLi1: "Configuração rápida do seu certificado digital A1;",
    nfceLi2: "Importação automática trimestral de alíquotas tributárias IBPT;",
    nfceLi3: "Geração de PDF do DANFE simplificado pronto para impressão térmica ou A4;",
    nfceLi4: "Envio automático de notas fiscais autorizadas.",
    featuresTitle: "📝 Funcionalidades de Frente de Caixa",
    featuresLi1: "Controle e abertura individual de caixas por operador/vendedor;",
    featuresLi2: "Gerenciamento e controle rigoroso de Fiado (contas de clientes);",
    featuresLi3: "Leitura de código de barras por câmera de celular ou leitor USB;",
    featuresLi4: "Integração nativa com impressoras térmicas (Bluetooth/Spooler);",
    featuresLi5: "Geração e exportação de recibos e relatórios em PDF de alta definição;",
    featuresLi6: "Controle de estoque, alerta de nível baixo e movimentações.",
    whatsappTitle: "💬 Notificações de Venda via WhatsApp",
    whatsappDesc: "Aumente a confiança do seu cliente. Envie comprovantes de venda, detalhes de parcelas de fiado e recibos de pagamento diretamente no WhatsApp do cliente através de integrações automáticas do sistema.",
    requirementsTitle: "💻 Requisitos do Sistema",
    requirementsOS: "Sistema Operacional: Windows 10 ou Windows 11 (64 bits)",
    requirementsCPU: "Processador: Intel Core i3 / AMD Ryzen 3 ou superior",
    requirementsRAM: "Memória RAM: 4 GB (Recomendado: 8 GB)",
    requirementsDisk: "Armazenamento: 200 MB de espaço livre em disco",
    securityTitle: "🔒 Segurança e Privacidade Total",
    securityDesc: "Seus dados comerciais são protegidos com as melhores práticas do Google Cloud. Suas informações de vendas, faturamento e clientes são criptografadas em trânsito e em repouso e só são visíveis por membros credenciados da sua própria equipe.",
    footerTitle: "🚀 Leve o PDV Multi para o seu balcão hoje mesmo",
    footerDesc: "Acelere suas vendas, controle suas contas e gerencie seu estoque com o sistema de caixa mais amigável do mercado."
  },
  en: {
    title: "PDV Multi - Complete Real-Time Sales & POS System",
    metaDescription: "PDV Multi is the perfect point of sale (POS) software for your business: real-time team sales, inventory control, automated receipts, client credit tracking, and more. Download free for Windows.",
    metaKeywords: "pdv multi, windows pos, point of sale, register control, inventory system, shop manager, cash register software",
    heroSubtitle: "Modern, fast, and secure POS system made for your team.",
    heroDescription: "PDV Multi is the ultimate solution to manage your business's sales and inventory. Engineered for teams, the system syncs registers, transactions, products, and clients across all devices in real time using secure cloud infrastructure. Streamline your checkout experience and manage everything from a single dashboard.",
    downloadButton: "Download for Windows (.exe)",
    downloadNote: "Official standalone installer. Fully compatible with Windows 10 & 11 (64-bit).",
    syncTitle: "🔄 Real-Time Synchronization",
    syncDesc: "Keep your staff in sync. Purchases, cash register sessions, cash drops, and inventory changes made on any computer instantly propagate to all other terminals in real time via the cloud.",
    offlineTitle: "📶 Bounded Offline Database",
    offlineDesc: "Your business shouldn't stop when the internet does. PDV Multi stores operations locally so you can keep checking out clients and printing receipts. Once you go back online, everything syncs automatically.",
    nfceTitle: "🧾 Fiscal & Invoice Printing (NFC-e/NF-e)",
    nfceDesc: "Fully integrated fiscal document emission and simplified invoice generation directly inside the application:",
    nfceLi1: "Fast configuration of your digital A1 certificate;",
    nfceLi2: "Automatic quarterly updates of IBPT tax rates;",
    nfceLi3: "Immediate generation of simplified DANFE PDFs for thermal or A4 printing;",
    nfceLi4: "Automated tracking and transmission of approved receipts.",
    featuresTitle: "📝 Robust Cash Register & POS Features",
    featuresLi1: "Operator-specific registers and audit history logs;",
    featuresLi2: "Sophisticated customer credit limit and 'Fiado' payment tracking;",
    featuresLi3: "Barcode scanning via mobile camera or USB scanners;",
    featuresLi4: "Native integration with thermal printers (Bluetooth & Spooler);",
    featuresLi5: "Beautiful high-definition PDF receipts and exportable PDF sales reports;",
    featuresLi6: "Dynamic stock levels, low-stock warnings, and warehouse movements.",
    whatsappTitle: "💬 Automated WhatsApp Sales Notification",
    whatsappDesc: "Build customer loyalty. Send sales receipts, customer credit installment details, and payment confirmations directly to your clients' WhatsApp using automatic system integrations.",
    requirementsTitle: "💻 System Requirements",
    requirementsOS: "Operating System: Windows 10 or Windows 11 (64-bit)",
    requirementsCPU: "Processor: Intel Core i3 / AMD Ryzen 3 or higher",
    requirementsRAM: "RAM Memory: 4 GB (Recommended: 8 GB)",
    requirementsDisk: "Disk Storage: 200 MB of free hard drive space",
    securityTitle: "🔒 Industry-Grade Privacy and Security",
    securityDesc: "Your business metrics are protected by Google Cloud's leading security practices. Sales records, revenue, and client database entries are fully encrypted in transit and at rest, and are strictly accessible by authorized members of your company.",
    footerTitle: "🚀 Take your store's checkout to the next level today",
    footerDesc: "Boost your checkout speed, secure your cash registers, and master your stock levels with the most user-friendly POS on the market."
  }
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
          <div className={styles.titleWrap}>
            <img src={pdvIcon} alt="PDV Multi Logo" />
            <h1 className={styles.heroTitle}>PDV Multi</h1>
          </div>
          <h2 className={styles.heroSubtitle}>{t.heroSubtitle}</h2>
          <p className={styles.heroDescription}>{t.heroDescription}</p>

          <div className={styles.cta}>
            <a href={DOWNLOAD_LINK} className={styles.ctaButton}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              {t.downloadButton}
            </a>
            <span className={styles.ctaNote}>{t.downloadNote}</span>
          </div>
        </section>

        {/* Sections */}
        <div className={styles.sections}>
          <section className={styles.section}>
            <h2>{t.syncTitle}</h2>
            <p>{t.syncDesc}</p>
          </section>

          <section className={styles.section}>
            <h2>{t.offlineTitle}</h2>
            <p>{t.offlineDesc}</p>
          </section>

          <section className={styles.section}>
            <h2>{t.whatsappTitle}</h2>
            <p>{t.whatsappDesc}</p>
          </section>

          <section className={styles.section}>
            <h2>{t.nfceTitle}</h2>
            <p>{t.nfceDesc}</p>
            <ul>
              <li>{t.nfceLi1}</li>
              <li>{t.nfceLi2}</li>
              <li>{t.nfceLi3}</li>
              <li>{t.nfceLi4}</li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2>{t.featuresTitle}</h2>
            <ul>
              <li>{t.featuresLi1}</li>
              <li>{t.featuresLi2}</li>
              <li>{t.featuresLi3}</li>
              <li>{t.featuresLi4}</li>
              <li>{t.featuresLi5}</li>
              <li>{t.featuresLi6}</li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2>{t.requirementsTitle}</h2>
            <ul>
              <li>{t.requirementsOS}</li>
              <li>{t.requirementsCPU}</li>
              <li>{t.requirementsRAM}</li>
              <li>{t.requirementsDisk}</li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2>{t.securityTitle}</h2>
            <p>{t.securityDesc}</p>
          </section>
        </div>

        {/* Footer */}
        <footer className={styles.footerSection}>
          <h2>{t.footerTitle}</h2>
          <p>{t.footerDesc}</p>
          <div className={styles.cta} style={{ marginTop: "1.5rem" }}>
            <a href={DOWNLOAD_LINK} className={styles.ctaButton}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              {t.downloadButton}
            </a>
          </div>
        </footer>
      </div>
    </div>
  );
}
