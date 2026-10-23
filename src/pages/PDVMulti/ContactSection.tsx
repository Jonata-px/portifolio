import { motion } from "framer-motion";
import { FaWhatsapp, FaQuestionCircle, FaTools, FaFileInvoiceDollar } from "react-icons/fa";
import { WHATSAPP_DISPLAY, whatsappLink } from "../../config/constants";
import styles from "./ContactSection.module.css";

const content = {
  pt: {
    title: "Ficou com dúvida? Fale direto comigo",
    subtitle:
      "Suporte feito pelo próprio desenvolvedor do PDV Multi. Sem robô, sem fila: você conversa com quem criou o app.",
    items: [
      { icon: FaQuestionCircle, title: "Antes de assinar", text: "Tire dúvidas sobre recursos e planos." },
      { icon: FaTools, title: "Instalação e configuração", text: "Ajuda para colocar o app para funcionar na sua loja." },
      { icon: FaFileInvoiceDollar, title: "Nota fiscal e impressora", text: "Apoio com certificado, NFC-e e impressão." },
    ],
    button: "Chamar no WhatsApp",
    note: "Atendimento direto pelo WhatsApp",
    message: "Olá Jonatã! Vi o PDV Multi no seu site e gostaria de tirar uma dúvida.",
  },
  en: {
    title: "Questions? Talk to me directly",
    subtitle:
      "Support from the developer of PDV Multi himself. No bots, no queues: you talk to the person who built the app.",
    items: [
      { icon: FaQuestionCircle, title: "Before you subscribe", text: "Ask about features and plans." },
      { icon: FaTools, title: "Setup and configuration", text: "Help getting the app running in your store." },
      { icon: FaFileInvoiceDollar, title: "Invoices and printer", text: "Support with certificates, NFC-e and printing." },
    ],
    button: "Chat on WhatsApp",
    note: "Direct support on WhatsApp",
    message: "Hi Jonatã! I saw PDV Multi on your website and I have a question.",
  },
};

export default function ContactSection({ lang }: { lang: "pt" | "en" }) {
  const c = content[lang];
  return (
    <motion.section
      id="contact"
      className={styles.contact}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5 }}
    >
      <h2>{c.title}</h2>
      <p className={styles.subtitle}>{c.subtitle}</p>
      <ul className={styles.items}>
        {c.items.map(({ icon: Icon, title, text }) => (
          <li key={title}>
            <Icon aria-hidden="true" />
            <strong>{title}</strong>
            <span>{text}</span>
          </li>
        ))}
      </ul>
      <a
        href={whatsappLink(c.message)}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.whatsButton}
      >
        <FaWhatsapp />
        {c.button}
      </a>
      <span className={styles.number}>
        {WHATSAPP_DISPLAY} · {c.note}
      </span>
    </motion.section>
  );
}
