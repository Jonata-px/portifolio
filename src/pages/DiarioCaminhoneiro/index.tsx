import { Helmet } from "react-helmet-async";
import { SITE_BASE_URL } from "../../config/constants";
import styles from "./styles.module.css";
import icon from "../../assets/images/diarioCaminhoneiro.png";

// Troque para true quando o app estiver publicado na Play Store.
const APP_PUBLISHED = false;
const PLAY_STORE_LINK = "https://play.google.com/store/apps/details?id=com.jfcoder.diariocaminhoneiro";

const title = "Diário do Caminhoneiro: Frete - Lucro real de cada viagem";
const description =
  "Controle de frete, diesel e despesas no celular. Saiba o lucro real por viagem e por km, o consumo em km/l, o saldo a receber e a manutenção por km. Funciona sem internet e sem cadastro.";

const features = [
  {
    title: "Lucro real por viagem",
    text: "Frete menos despesas, lucro por km, custo por km, lucro por dia e consumo em km/l, em poucos toques.",
  },
  {
    title: "Despesa em 3 toques",
    text: "Pedágio, diesel, arla, alimentação, pernoite e mais. Botões grandes, teclado de valores e desfazer na hora.",
  },
  {
    title: "Consumo de diesel",
    text: "Lance litros, odômetro e tanque cheio. O app calcula o consumo médio de cada caminhão.",
  },
  {
    title: "A receber",
    text: "Veja o saldo de cada frete, com lembrete na data prevista e botão \"Recebi\".",
  },
  {
    title: "Manutenção por km",
    text: "Óleo, filtros, pneus e engraxe. O app avisa antes de vencer, pelo odômetro das suas viagens.",
  },
  {
    title: "Relatório mensal e PDF",
    text: "Despesas por categoria, melhor e pior viagem. Gere o PDF e compartilhe pelo WhatsApp ou e-mail.",
  },
  {
    title: "Sem internet, sem cadastro",
    text: "Tudo fica no seu celular, sem login. Faça backup quando quiser.",
  },
  {
    title: "Vários caminhões",
    text: "Para agregados e pequenos frotistas: cada caminhão com seu odômetro, manutenção e consumo.",
  },
];

export default function DiarioCaminhoneiroPage() {
  const url = `${SITE_BASE_URL}/diario-caminhoneiro`;

  return (
    <main className={styles.page}>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta
          name="keywords"
          content="diário do caminhoneiro, caminhoneiro, controle de frete, lucro do frete, custo por km, consumo de diesel, despesas de viagem, caminhão, autônomo, agregado, manutenção do caminhão"
        />
        <link rel="canonical" href={url} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={url} />
        <meta property="og:image" content={`${SITE_BASE_URL}${icon}`} />
      </Helmet>

      <div className={styles.inner}>
        <header className={styles.hero}>
          <img className={styles.icon} src={icon} alt="Ícone do Diário do Caminhoneiro" />
          <h1 className={styles.title}>Diário do Caminhoneiro</h1>
          <p className={styles.subtitle}>Saiba quanto você realmente lucrou em cada viagem.</p>
          <p className={styles.lead}>
            O caderninho da viagem no seu celular: frete, diesel, pedágio, saldo a receber, manutenção e relatório em
            PDF. Simples, rápido e feito para quem está na estrada.
          </p>
          <div className={styles.badges}>
            <span className={styles.badge}>Android</span>
            <span className={styles.badge}>Funciona sem internet</span>
            <span className={styles.badge}>Sem cadastro</span>
            <span className={styles.badge}>Grátis para começar</span>
          </div>
          <div className={styles.cta}>
            {APP_PUBLISHED ? (
              <a className={styles.playButton} href={PLAY_STORE_LINK} target="_blank" rel="noopener noreferrer">
                Baixar grátis no Google Play
              </a>
            ) : (
              <span className={styles.soon}>Em breve no Google Play</span>
            )}
            <span className={styles.note}>Os valores mostrados nos vídeos e telas são exemplos.</span>
          </div>
        </header>

        <section>
          <h2 className={styles.sectionTitle}>O que o app faz por você</h2>
          <div className={styles.grid}>
            {features.map((f) => (
              <article key={f.title} className={styles.card}>
                <h3>{f.title}</h3>
                <p>{f.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section>
          <h2 className={styles.sectionTitle}>Grátis e Premium</h2>
          <div className={styles.plans}>
            <article className={styles.card}>
              <h3>Grátis</h3>
              <ul>
                <li>Todos os registros e cálculos</li>
                <li>1 caminhão</li>
                <li>Relatórios dos últimos 3 meses</li>
                <li>Com anúncios</li>
              </ul>
            </article>
            <article className={styles.card}>
              <h3>Premium</h3>
              <ul>
                <li>Sem anúncios</li>
                <li>PDF sem marca</li>
                <li>Vários caminhões</li>
                <li>Histórico completo e manutenção ilimitada</li>
                <li>Assinatura anual ou compra única</li>
              </ul>
            </article>
          </div>
        </section>

        <footer className={styles.footer}>
          <p>
            O Diário do Caminhoneiro não é consultoria financeira, fiscal ou contábil. Ele organiza os seus registros
            para você enxergar o resultado de cada viagem.
          </p>
          <p>
            Contato: <a href="mailto:contato@jfcoder.com">contato@jfcoder.com</a> ·{" "}
            <a href="/diario-caminhoneiro/privacity">Política de privacidade</a>
          </p>
        </footer>
      </div>
    </main>
  );
}
