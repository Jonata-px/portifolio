import { useMemo } from "react";
import { useLocation } from "react-router-dom";
import styles from "./styles.module.css";
import googlePlay from "../../assets/images/google-play.png";
import image from "../../assets/images/ilst.png";
import { Helmet } from "react-helmet-async";
import { SITE_BASE_URL } from "../../config/constants";

const PLAY_STORE_LINK = "https://play.google.com/store/apps/details?id=com.jfcoder.ilst"; // TODO: atualizar com a URL oficial da loja
export default function IlstApp() {
	const location = useLocation();

	const canonicalUrl = useMemo(() => {
		return `${SITE_BASE_URL}${location.pathname}${location.search}`;
	}, [location.pathname, location.search]);

	return (
		<section className={styles.page}>
			<Helmet>
				<title>Ilst</title>
				<meta name="description" content="O Ilst é um app de lista compartilhada: crie listas, adicione pessoas e acompanhe tudo em tempo real. Tudo o que você cadastra — listas, itens e configurações — fica sincronizado entre os membros, com privacidade e agilidade." />
				<link rel="canonical" href={canonicalUrl} />
			</Helmet>
			<div className={styles.pageInner}>
				<header className={styles.hero}>
					<div>
						<div className={styles.titleWrap}>
							<img
								alt="Ícone do aplicativo Ilst"
								className={styles.heroIcon}
								src={image}
							/>
							<h1 className={styles.heroTitle}>Ilst</h1>

						</div>

						<h2 className={styles.heroSubtitle}>
							O app de lista compartilhada, rápido e em tempo real.
						</h2>
					</div>

					<p className={styles.heroDescription}>
						O Ilst é um app de lista compartilhada: crie listas, adicione pessoas e acompanhe tudo em tempo real. Tudo o que você cadastra — listas, itens e configurações — fica sincronizado entre os membros, com privacidade e agilidade.
					</p>

					<div className={styles.cta}>
						<a
							className={styles.ctaButton}
							href={PLAY_STORE_LINK}
							target="_blank"
							rel="noopener noreferrer"
						>
							<img alt="Google Play" className={styles.storeIcon} src={googlePlay} />
							<span>Baixar agora</span>
						</a>
						<p className={styles.ctaNote}>
							Transforme seu smartphone em uma central de listas inteligente, privada e
							totalmente offline.
						</p>
					</div>
				</header>

				<div className={styles.sections}>
					<article className={styles.section}>
						<h2>🔄 Compartilhamento e atualização em tempo real</h2>
						<p>
							Crie listas, adicione pessoas e veja as atualizações em tempo real. Todos os membros visualizam e editam juntos, de forma instantânea.
						</p>
					</article>

					<article className={styles.section}>
						<h2>👥 Adicione pessoas às suas listas</h2>
						<p>Convide amigos, família ou colegas para colaborar em listas compartilhadas. Todos podem adicionar, editar e marcar itens juntos.</p>
					</article>

					<article className={styles.section}>
						<h2>📝 Crie e gerencie listas</h2>
						<ul>
							<li>Criação rápida de listas compartilhadas;</li>
							<li>Itens ilimitados e categorias;</li>
							<li>Filtros, buscas e histórico de alterações;</li>
							<li>Status de conclusão em tempo real;</li>
							<li>Exportação em PDF.</li>
						</ul>
					</article>

					<article className={styles.section}>
						<h2>🔒 Privacidade e segurança</h2>
						<p>Suas listas são protegidas e só podem ser acessadas por quem você convidar. Dados criptografados e sincronização segura.</p>
					</article>

					<article className={styles.section}>
						<h2>🛍️ Itens e categorias</h2>
						<p>Gerencie itens, categorias e quantidades com facilidade.</p>
					</article>

					<article className={styles.section}>
						<h2>📊 Relatórios e dashboards</h2>
						<p>Visualize suas listas e progresso com filtros por data e gráficos claros:</p>
						<ul>
							<li>Listas criadas;</li>
							<li>Itens concluídos;</li>
							<li>Colaboradores ativos;</li>
							<li>Itens mais frequentes.</li>
						</ul>
					</article>

					{/* <article className={styles.section}>
						<h2>💳 PIX integrado</h2>
						<p>Cadastre suas chaves e facilite cobranças no momento da venda.</p>
					</article> */}

					<article className={styles.section}>
						<h2>🎨 Personalização visual</h2>
						<p>Escolha seu tema favorito e adicione o logo das suas listas.</p>
					</article>

					{/* <article className={styles.section}>
						<h2>📢 Possui anúncios — removíveis com Premium</h2>
						<p>
							A versão gratuita contém anúncios. Com o Premium, você remove todos
							os anúncios e obtém uma experiência mais limpa e profissional.
						</p>
					</article> */}

					<article className={styles.section}>
						<h2>💾 Backup local</h2>
						<p>
							Crie backups e restaure dados quando quiser. Tudo permanece offline
							e sob seu controle.
						</p>
					</article>
				</div>

				<footer className={styles.section}>
					<h2>📱 Baixe agora o Ilst</h2>
					<p>
						Transforme seu smartphone em uma central de listas inteligente, privada e
						totalmente offline.
					</p>
					<div className={styles.cta}>
						<a
							className={styles.ctaButton}
							href={PLAY_STORE_LINK}
							target="_blank"
							rel="noopener noreferrer"
						>
							<img alt="Google Play" className={styles.storeIcon} src={googlePlay} />
							<span>Baixar agora</span>
						</a>
					</div>
				</footer>
			</div>
		</section>
	);
}
