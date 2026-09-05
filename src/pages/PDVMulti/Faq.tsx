import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FaChevronDown } from "react-icons/fa";
import styles from "./Faq.module.css";

const content: Record<"pt" | "en", { q: string; a: string }[]> = {
  pt: [
    {
      q: "Preciso de internet o tempo todo pra usar o PDV Multi?",
      a: "Não. O sistema grava tudo localmente primeiro, então mesmo com a internet caindo você continua vendendo e imprimindo comprovantes normalmente. Assim que a conexão volta, tudo sincroniza sozinho com o restante da equipe.",
    },
    {
      q: "Dá pra usar em mais de um computador/caixa ao mesmo tempo?",
      a: "Sim, esse é o ponto forte do PDV Multi: vendas, aberturas de caixa e cadastros feitos em um computador aparecem em tempo real nos outros caixas da mesma empresa.",
    },
    {
      q: "Preciso de certificado digital pra emitir NFC-e/NF-e?",
      a: "Sim, é exigência da Receita/Sefaz, não do sistema. O PDV Multi só facilita: a configuração do seu certificado A1 é feita direto na tela de ajustes fiscais, sem precisar de suporte técnico externo.",
    },
    {
      q: "O teste grátis pede cartão de crédito?",
      a: "Não. Você instala e usa o PDV Multi por 14 dias com tudo liberado antes de decidir por um plano pago.",
    },
    {
      q: "Funciona em qualquer computador Windows?",
      a: "Funciona em Windows 10 ou 11 (64 bits), com um processador Intel Core i3 / AMD Ryzen 3 ou superior e 4 GB de RAM (recomendado 8 GB) — configuração comum na maioria dos PCs de balcão.",
    },
    {
      q: "Meus dados de vendas e clientes ficam seguros?",
      a: "Sim. As informações da sua empresa são criptografadas em trânsito e em repouso na infraestrutura do Google Cloud, e só ficam visíveis para os membros autorizados da sua própria equipe.",
    },
  ],
  en: [
    {
      q: "Do I need internet all the time to use PDV Multi?",
      a: "No. The system writes everything locally first, so even if the internet drops you keep selling and printing receipts normally. Once the connection is back, everything syncs automatically with the rest of the team.",
    },
    {
      q: "Can I use it on more than one computer/register at the same time?",
      a: "Yes — that's the core strength of PDV Multi: sales, register openings, and product changes made on one computer show up in real time on every other register in the same company.",
    },
    {
      q: "Do I need a digital certificate to issue NFC-e/NF-e?",
      a: "Yes, that's a tax authority requirement, not a system one. PDV Multi just makes it easy: configuring your A1 certificate is done right in the fiscal settings screen, no external technical support needed.",
    },
    {
      q: "Does the free trial require a credit card?",
      a: "No. You install and use PDV Multi for 14 days with everything unlocked before deciding on a paid plan.",
    },
    {
      q: "Does it run on any Windows computer?",
      a: "It runs on Windows 10 or 11 (64-bit), with an Intel Core i3 / AMD Ryzen 3 processor or better and 4 GB of RAM (8 GB recommended) — a common setup for most counter PCs.",
    },
    {
      q: "Is my sales and customer data safe?",
      a: "Yes. Your business data is encrypted in transit and at rest on Google Cloud infrastructure, and is only visible to authorized members of your own team.",
    },
  ],
};

export default function Faq({ lang }: { lang: "pt" | "en" }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const items = content[lang];

  return (
    <div className={styles.list}>
      {items.map((item, i) => {
        const isOpen = openIndex === i;
        return (
          <div key={item.q} className={styles.item}>
            <button
              type="button"
              className={styles.question}
              onClick={() => setOpenIndex(isOpen ? null : i)}
              aria-expanded={isOpen}
            >
              <span>{item.q}</span>
              <motion.span
                className={styles.chevron}
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.25 }}
              >
                <FaChevronDown />
              </motion.span>
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  className={styles.answerWrap}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.25 }}
                >
                  <p className={styles.answer}>{item.a}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
