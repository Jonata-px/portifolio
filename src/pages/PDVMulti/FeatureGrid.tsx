import type { ReactNode } from "react";
import { motion } from "framer-motion";
import {
  FaUsersCog,
  FaFileSignature,
  FaBoxes,
  FaPercentage,
  FaBarcode,
  FaWeightHanging,
  FaHeadset,
  FaKeyboard,
  FaCloudDownloadAlt,
} from "react-icons/fa";
import styles from "./FeatureGrid.module.css";

type Feature = {
  icon: ReactNode;
  title: string;
  desc: string;
};

const content: Record<"pt" | "en", Feature[]> = {
  pt: [
    {
      icon: <FaUsersCog />,
      title: "Equipe com permissões por vendedor",
      desc: "Crie contas para cada operador, defina o que cada um pode ver ou alterar e acompanhe quem fez cada venda.",
    },
    {
      icon: <FaFileSignature />,
      title: "Orçamentos que viram venda em 1 toque",
      desc: "Monte um orçamento pro cliente, envie e converta em venda depois sem redigitar nada.",
    },
    {
      icon: <FaBoxes />,
      title: "Compras e movimentação de estoque",
      desc: "Registre entradas de fornecedores e acompanhe todo o histórico de movimentação do seu estoque.",
    },
    {
      icon: <FaPercentage />,
      title: "Relatório de comissão por vendedor",
      desc: "Saiba exatamente quanto cada vendedor vendeu e quanto tem a receber de comissão, sem planilha.",
    },
    {
      icon: <FaBarcode />,
      title: "Consulta rápida de preço",
      desc: "Cliente perguntou o preço de um produto? Escaneia o código e mostra na hora, sem abrir uma venda.",
    },
    {
      icon: <FaWeightHanging />,
      title: "Integração com balança",
      desc: "Venda produtos por peso direto da balança conectada, sem digitar valor manualmente.",
    },
    {
      icon: <FaHeadset />,
      title: "Suporte dentro do próprio app",
      desc: "Abra um chamado, converse com o suporte e acompanhe a resposta sem sair do sistema.",
    },
    {
      icon: <FaKeyboard />,
      title: "Atalhos de teclado no balcão",
      desc: "Feito para quem vende o dia inteiro: navegue e finalize vendas rápido, sem depender do mouse.",
    },
    {
      icon: <FaCloudDownloadAlt />,
      title: "Atualizações automáticas",
      desc: "O sistema se atualiza sozinho com as novidades mais recentes, sem complicação nenhuma pra sua equipe.",
    },
  ],
  en: [
    {
      icon: <FaUsersCog />,
      title: "Team with per-operator permissions",
      desc: "Create an account for each cashier, control what they can see or change, and track who made every sale.",
    },
    {
      icon: <FaFileSignature />,
      title: "Quotes that turn into sales in one tap",
      desc: "Build a quote for a customer, send it, and convert it into a sale later without retyping anything.",
    },
    {
      icon: <FaBoxes />,
      title: "Purchases and stock movement",
      desc: "Log supplier deliveries and keep a full history of every stock movement in your business.",
    },
    {
      icon: <FaPercentage />,
      title: "Per-salesperson commission report",
      desc: "Know exactly how much each salesperson sold and how much commission they're owed, no spreadsheets.",
    },
    {
      icon: <FaBarcode />,
      title: "Instant price check",
      desc: "A customer asks for a price? Scan the barcode and show it instantly, without opening a full sale.",
    },
    {
      icon: <FaWeightHanging />,
      title: "Scale integration",
      desc: "Sell items by weight straight from a connected scale, no manual value entry required.",
    },
    {
      icon: <FaHeadset />,
      title: "In-app support",
      desc: "Open a ticket, chat with support, and follow the reply without ever leaving the system.",
    },
    {
      icon: <FaKeyboard />,
      title: "Keyboard shortcuts at the counter",
      desc: "Built for people who sell all day long: navigate and close sales fast, without touching the mouse.",
    },
    {
      icon: <FaCloudDownloadAlt />,
      title: "Automatic updates",
      desc: "The system updates itself with the latest improvements — zero hassle for your team.",
    },
  ],
};

export default function FeatureGrid({ lang }: { lang: "pt" | "en" }) {
  const features = content[lang];

  return (
    <div className={styles.grid}>
      {features.map((f, i) => (
        <motion.div
          key={f.title}
          className={styles.card}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.45, delay: (i % 3) * 0.08 }}
          whileHover={{ y: -4 }}
        >
          <span className={styles.icon}>{f.icon}</span>
          <h3 className={styles.title}>{f.title}</h3>
          <p className={styles.desc}>{f.desc}</p>
        </motion.div>
      ))}
    </div>
  );
}
