import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";
import styles from "./PricingTiers.module.css";

type Tier = {
  name: string;
  tagline: string;
  items: string[];
  cta: string;
  featured?: boolean;
  badge?: string;
};

// Sem valores fixos de propósito: o preço é dinâmico (Stripe/Play) e muda
// sem passar por aqui. O que muda de verdade entre os planos é o que cada
// um libera (ver premium_screen.dart no app) — é isso que a gente mostra.
const content: Record<"pt" | "en", { tiers: Tier[]; note: string }> = {
  pt: {
    tiers: [
      {
        name: "Teste grátis",
        tagline: "14 dias com tudo liberado, sem cartão de crédito.",
        items: [
          "Multi-caixa em tempo real",
          "Clientes, fiado e orçamentos",
          "Estoque e compras",
          "Emissão de NFC-e/NF-e incluída no teste",
        ],
        cta: "Começar teste grátis",
      },
      {
        name: "Básico",
        tagline: "Pra quem quer o frente de caixa completo, sem nota fiscal eletrônica.",
        items: [
          "Multi-caixa em tempo real",
          "Clientes, fiado e orçamentos",
          "Estoque, compras e comissão",
          "Suporte prioritário",
        ],
        cta: "Baixar e assinar Básico",
      },
      {
        name: "Premium",
        tagline: "Tudo do Básico + emissão de NFC-e/NF-e direto do sistema.",
        items: [
          "Tudo do plano Básico",
          "Emissão ilimitada de NFC-e/NF-e",
          "DANFE em PDF pra impressão térmica ou A4",
          "Plano anual disponível com melhor custo-benefício",
        ],
        cta: "Baixar e assinar Premium",
        featured: true,
        badge: "Mais escolhido",
      },
    ],
    note: "Preços atualizados e formas de pagamento (Google Play ou cartão) aparecem dentro do próprio app, na tela de planos.",
  },
  en: {
    tiers: [
      {
        name: "Free trial",
        tagline: "14 days with everything unlocked, no credit card required.",
        items: [
          "Real-time multi-register sync",
          "Customers, credit tabs and quotes",
          "Inventory and purchases",
          "Fiscal invoice emission included in the trial",
        ],
        cta: "Start free trial",
      },
      {
        name: "Basic",
        tagline: "The complete point-of-sale, without fiscal invoice emission.",
        items: [
          "Real-time multi-register sync",
          "Customers, credit tabs and quotes",
          "Inventory, purchases and commissions",
          "Priority support",
        ],
        cta: "Download and subscribe to Basic",
      },
      {
        name: "Premium",
        tagline: "Everything in Basic + fiscal invoice emission (NFC-e/NF-e) built in.",
        items: [
          "Everything in the Basic plan",
          "Unlimited NFC-e/NF-e emission",
          "PDF invoices for thermal or A4 printing",
          "Annual plan available for better value",
        ],
        cta: "Download and subscribe to Premium",
        featured: true,
        badge: "Most popular",
      },
    ],
    note: "Current prices and payment options (Google Play or card) are shown inside the app itself, on the plans screen.",
  },
};

export default function PricingTiers({ lang }: { lang: "pt" | "en" }) {
  const { tiers, note } = content[lang];

  return (
    <div>
      <div className={styles.grid}>
        {tiers.map((tier, i) => (
          <motion.div
            key={tier.name}
            className={`${styles.card} ${tier.featured ? styles.featured : ""}`}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.45, delay: i * 0.1 }}
          >
            {tier.badge && <span className={styles.badge}>{tier.badge}</span>}
            <div>
              <div className={styles.tierName}>{tier.name}</div>
              <p className={styles.tierTagline}>{tier.tagline}</p>
            </div>
            <ul className={styles.list}>
              {tier.items.map((item) => (
                <li key={item} className={styles.item}>
                  <FaCheckCircle className={styles.itemIcon} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <a
              href="#download"
              className={`${styles.cta} ${tier.featured ? styles.ctaFeatured : ""}`}
            >
              {tier.cta}
            </a>
          </motion.div>
        ))}
      </div>
      <p className={styles.note}>{note}</p>
    </div>
  );
}
