import { useEffect } from "react";
import styles from "./styles.module.css";
import googlePlay from "../../assets/images/google-play.png";
import image from "../../assets/images/pdv.png";

const PLAY_STORE_LINK = "https://play.google.com/store/apps/details?id=com.jfcoder.pdv"; // TODO: atualizar com a URL oficial da loja

export default function PDVOffline() {
	useEffect(() => {
		document.title = "PDV Offline";
	}, []);

	return (
		<section className={styles.page}>
			<div className={styles.pageInner}>
				<header className={styles.hero}>
					<div>
                        <div className={styles.titleWrap}>
                            <img
                                alt="Ícone do aplicativo PDV Offline"
                                className={styles.heroIcon}
                                src={image}
                            />
                            <h1 className={styles.heroTitle}>PDV Offline</h1>

                        </div>
						
						<h2 className={styles.heroSubtitle}>
							O ponto de venda que funciona onde nenhum outro funciona.
						</h2>
					</div>

					<p className={styles.heroDescription}>
						O PDV Offline é um sistema de vendas completo, rápido e totalmente
						independente da internet. Tudo o que você cadastra — clientes,
						produtos, vendas e configurações — fica somente no seu dispositivo,
						garantindo privacidade total.
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
							Transforme seu smartphone em um ponto de venda rápido, privado e
							totalmente offline.
						</p>
					</div>
				</header>

				<div className={styles.sections}>
					<article className={styles.section}>
						<h2>🔒 Privacidade total</h2>
						<p>
							O PDV Offline não envia nenhuma informação para servidores
							externos. Todo o conteúdo é salvo localmente via SQLite e pertence
							exclusivamente a você.
						</p>
					</article>

					<article className={styles.section}>
						<h2>📡 Funciona 100% sem internet</h2>
						<p>Perfeito para:</p>
						<ul>
							<li>Ruas sem sinal;</li>
							<li>Lojas com instabilidade;</li>
							<li>Vendas externas e ambulantes;</li>
							<li>Negócios que precisam de agilidade.</li>
						</ul>
						<p>O app funciona integralmente offline, incluindo vendas, relatórios e PDFs.</p>
					</article>

					<article className={styles.section}>
						<h2>🧾 Controle de vendas completo</h2>
						<ul>
							<li>Pedidos rápidos;</li>
							<li>Parcelamentos;</li>
							<li>Descontos;</li>
							<li>Status de pagamento;</li>
							<li>Recibos em PDF.</li>
						</ul>
					</article>

					<article className={styles.section}>
						<h2>👥 Clientes PF e PJ</h2>
						<p>Histórico completo com busca inteligente.</p>
					</article>

					<article className={styles.section}>
						<h2>🛍️ Produtos e serviços</h2>
						<p>Gerencie estoque, preços, margens e fotos com facilidade.</p>
					</article>

					<article className={styles.section}>
						<h2>📊 Relatórios e dashboards</h2>
						<p>Visualize seus resultados com filtros por data e gráficos claros:</p>
						<ul>
							<li>Faturamento;</li>
							<li>Lucro;</li>
							<li>Ticket médio;</li>
							<li>Produtos mais vendidos.</li>
						</ul>
					</article>

					{/* <article className={styles.section}>
						<h2>💳 PIX integrado</h2>
						<p>Cadastre suas chaves e facilite cobranças no momento da venda.</p>
					</article> */}

					<article className={styles.section}>
						<h2>🎨 Personalização visual</h2>
						<p>Escolha seu tema favorito e adicione o logo da sua empresa.</p>
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
					<h2>📱 Baixe agora o PDV Offline</h2>
					<p>
						Transforme seu smartphone em um ponto de venda rápido, privado e
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
