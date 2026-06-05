import { useMemo, useEffect } from "react";
import { useLocation, useSearchParams } from "react-router-dom";
import styles from "./styles.module.css";
import googlePlay from "../../assets/images/google-play.png";
import image from "../../assets/images/pdv.png";
import { Helmet } from "react-helmet-async";
import { SITE_BASE_URL } from "../../config/constants";

const PLAY_STORE_LINK = "https://play.google.com/store/apps/details?id=com.jfcoder.pdv";

type TranslationKeys = {
	title: string;
	metaDescription: string;
	metaKeywords: string;
	heroSubtitle: string;
	heroDescription: string;
	downloadButton: string;
	downloadNote: string;
	privaciesTitle: string;
	privaciesDesc: string;
	offlineTitle: string;
	offlineSub: string;
	offlineLi1: string;
	offlineLi2: string;
	offlineLi3: string;
	offlineLi4: string;
	offlineDesc: string;
	salesTitle: string;
	salesLi1: string;
	salesLi2: string;
	salesLi3: string;
	salesLi4: string;
	salesLi5: string;
	customersTitle: string;
	customersDesc: string;
	productsTitle: string;
	productsDesc: string;
	reportsTitle: string;
	reportsDesc: string;
	reportsLi1: string;
	reportsLi2: string;
	reportsLi3: string;
	reportsLi4: string;
	customizationTitle: string;
	customizationDesc: string;
	backupTitle: string;
	backupDesc: string;
	footerTitle: string;
	footerDesc: string;
};

const translations: Record<string, TranslationKeys> = {
	pt: {
		title: "PDV Offline - Frente de Caixa Inteligente",
		metaDescription: "O PDV Offline é um sistema de vendas completo, rápido e totalmente independente da internet. Tudo o que você cadastra fica somente no seu dispositivo, com privacidade total.",
		metaKeywords: "pdv offline, app de vendas offline, frente de caixa celular, controle de vendas, gerenciar estoque offline, recibo pdf",
		heroSubtitle: "O ponto de venda que funciona onde nenhum outro funciona.",
		heroDescription: "O PDV Offline é um sistema de vendas completo, rápido e totalmente independente da internet. Tudo o que você cadastra — clientes, produtos, vendas e configurações — fica somente no seu dispositivo, garantindo privacidade total.",
		downloadButton: "Baixar agora",
		downloadNote: "Transforme seu smartphone em um ponto de venda rápido, privado e totalmente offline.",
		privaciesTitle: "🔒 Privacidade total",
		privaciesDesc: "O PDV Offline não envia nenhuma informação para servidores externos. Todo o conteúdo é salvo localmente via SQLite e pertence exclusivamente a você.",
		offlineTitle: "📡 Funciona 100% sem internet",
		offlineSub: "Perfeito para:",
		offlineLi1: "Ruas sem sinal;",
		offlineLi2: "Lojas com instabilidade;",
		offlineLi3: "Vendas externas e ambulantes;",
		offlineLi4: "Negócios que precisam de agilidade.",
		offlineDesc: "O app funciona integralmente offline, incluindo vendas, relatórios e PDFs.",
		salesTitle: "🧾 Controle de vendas completo",
		salesLi1: "Pedidos rápidos;",
		salesLi2: "Parcelamentos;",
		salesLi3: "Descontos;",
		salesLi4: "Status de pagamento;",
		salesLi5: "Recibos em PDF.",
		customersTitle: "👥 Clientes PF e PJ",
		customersDesc: "Histórico completo com busca inteligente.",
		productsTitle: "🛍️ Produtos e serviços",
		productsDesc: "Gerencie estoque, preços e margens com facilidade.",
		reportsTitle: "📊 Relatórios e dashboards",
		reportsDesc: "Visualize seus resultados com filtros por data e gráficos claros:",
		reportsLi1: "Faturamento;",
		reportsLi2: "Lucro;",
		reportsLi3: "Ticket médio;",
		reportsLi4: "Produtos mais vendidos.",
		customizationTitle: "🎨 Personalização visual",
		customizationDesc: "Escolha seu tema favorito e adicione o logo da sua empresa.",
		backupTitle: "💾 Backup local",
		backupDesc: "Crie backups e restaure dados quando quiser. Tudo permanece offline e sob seu controle.",
		footerTitle: "📱 Baixe agora o PDV Offline",
		footerDesc: "Transforme seu smartphone em um ponto de venda rápido, privado e totalmente offline."
	},
	en: {
		title: "POS Offline - Smart Point of Sale",
		metaDescription: "POS Offline is a complete, fast, and fully internet-independent sales system. Everything you register stays only on your device, ensuring total privacy.",
		metaKeywords: "offline pos, offline sales app, mobile point of sale, sales tracker, offline inventory management, pdf receipt",
		heroSubtitle: "The point of sale that works where no other works.",
		heroDescription: "POS Offline is a complete, fast, and fully internet-independent sales system. Everything you register — customers, products, sales, and settings — stays only on your device, guaranteeing total privacy.",
		downloadButton: "Download now",
		downloadNote: "Transform your smartphone into a fast, private, and fully offline point of sale.",
		privaciesTitle: "🔒 Total privacy",
		privaciesDesc: "POS Offline does not send any information to external servers. All content is saved locally via SQLite and belongs exclusively to you.",
		offlineTitle: "📡 Works 100% without internet",
		offlineSub: "Perfect for:",
		offlineLi1: "Areas with no cellular coverage;",
		offlineLi2: "Shops with unstable connections;",
		offlineLi3: "Outdoor, street, and mobile sales;",
		offlineLi4: "Businesses that require maximum speed.",
		offlineDesc: "The app works entirely offline, including sales, reports, and PDFs.",
		salesTitle: "🧾 Complete sales management",
		salesLi1: "Quick order taking;",
		salesLi2: "Installments and split payments;",
		salesLi3: "Discounts and promotions;",
		salesLi4: "Payment status tracking;",
		salesLi5: "Professional PDF receipts.",
		customersTitle: "👥 Individual and Corporate Customers",
		customersDesc: "Complete history with smart search.",
		productsTitle: "🛍️ Products and services",
		productsDesc: "Manage inventory, prices, and profit margins with ease.",
		reportsTitle: "📊 Reports and dashboards",
		reportsDesc: "Visualize your results with date filters and clear charts:",
		reportsLi1: "Revenue;",
		reportsLi2: "Net profit;",
		reportsLi3: "Average order value (ticket);",
		reportsLi4: "Best-selling products.",
		customizationTitle: "🎨 Visual customization",
		customizationDesc: "Choose your favorite theme and add your company logo.",
		backupTitle: "💾 Local backup",
		backupDesc: "Create backups and restore data whenever you want. Everything remains offline and under your control.",
		footerTitle: "📱 Download POS Offline now",
		footerDesc: "Transform your smartphone into a fast, private, and fully offline point of sale."
	},
	es: {
		title: "TPV Offline - Terminal Punto de Venta Inteligente",
		metaDescription: "TPV Offline es un sistema de ventas completo, rápido y totalmente independiente de Internet. Todo lo que registras se guarda solo en tu dispositivo, garantizando total privacidad.",
		metaKeywords: "tpv offline, app de ventas offline, terminal punto de venta móvil, control de ventas, gestionar inventario offline, recibo pdf",
		heroSubtitle: "El punto de venta que funciona donde ningún otro funciona.",
		heroDescription: "TPV Offline es un sistema de ventas completo, rápido y totalmente independiente de Internet. Todo lo que registras — clientes, productos, ventas y configuraciones — se guarda solo en tu dispositivo, garantizando total privacidad.",
		downloadButton: "Descargar ahora",
		downloadNote: "Transforme su teléfono inteligente en un punto de venta rápido, privado y completamente offline.",
		privaciesTitle: "🔒 Privacidad total",
		privaciesDesc: "TPV Offline no envía ninguna informação para servidores externos. Todo el contenido se guarda localmente a través de SQLite y te pertenece exclusivamente a ti.",
		offlineTitle: "📡 Funciona 100% sin internet",
		offlineSub: "Perfecto para:",
		offlineLi1: "Zonas sin señal de red;",
		offlineLi2: "Tiendas con conexión inestable;",
		offlineLi3: "Ventas externas y ambulantes;",
		offlineLi4: "Negocios que necesitan rapidez y agilidad.",
		offlineDesc: "La aplicación funciona completamente offline, incluyendo ventas, informes y archivos PDF.",
		salesTitle: "🧾 Control completo de ventas",
		salesLi1: "Pedidos rápidos;",
		salesLi2: "Pagos en cuotas;",
		salesLi3: "Descuentos;",
		salesLi4: "Seguimiento del estado de pago;",
		salesLi5: "Recibos en formato PDF.",
		customersTitle: "👥 Clientes Físicos y Jurídicos",
		customersDesc: "Historial completo con búsqueda inteligente.",
		productsTitle: "🛍️ Productos y servicios",
		productsDesc: "Gestione inventario, precios y márgenes con facilidad.",
		reportsTitle: "📊 Informes y tableros",
		reportsDesc: "Visualice sus resultados con filtros por fecha y gráficos claros:",
		reportsLi1: "Facturación;",
		reportsLi2: "Ganancia neta;",
		reportsLi3: "Valor medio de compra (ticket);",
		reportsLi4: "Productos más vendidos.",
		customizationTitle: "🎨 Personalización visual",
		customizationDesc: "Elija su tema favorito y agregue el logotipo de su empresa.",
		backupTitle: "💾 Copia de seguridad local",
		backupDesc: "Cree copias de seguridad y restaure datos cuando desee. Todo permanece offline y bajo su control.",
		footerTitle: "📱 Descargue TPV Offline ahora",
		footerDesc: "Transforme su teléfono inteligente en un punto de venta rápido, privado y completamente offline."
	},
	fr: {
		title: "PDV Offline - Point de Vente Intelligent",
		metaDescription: "PDV Offline est un système de vente complet, rapide et totalement indépendant d'Internet. Tout ce que vous enregistrez reste uniquement sur votre appareil, garantissant une confidentialité totale.",
		metaKeywords: "pdv offline, application de vente hors ligne, point de vente mobile, suivi des ventes, gestion de stock hors ligne, reçu pdf",
		heroSubtitle: "Le point de vente qui fonctionne là où aucun autre ne fonctionne.",
		heroDescription: "PDV Offline est un système de vente complet, rapide et totalement indépendant d'Internet. Tout ce que vous enregistrez — clients, produits, ventes et paramètres — reste uniquement sur votre appareil, garantissant une confidentialité totale.",
		downloadButton: "Télécharger maintenant",
		downloadNote: "Transformez votre smartphone en un point de vente rapide, privé et totalement hors ligne.",
		privaciesTitle: "🔒 Confidentialité totale",
		privaciesDesc: "PDV Offline n'envoie aucune information à des serveurs externes. Tout le contenu est sauvegardé localement via SQLite et vous appartient exclusivement.",
		offlineTitle: "📡 Fonctionne à 100% sans internet",
		offlineSub: "Parfait pour :",
		offlineLi1: "Zones sans réseau cellulaire ;",
		offlineLi2: "Boutiques avec connexions instables ;",
		offlineLi3: "Ventes externes, mobiles et ambulants ;",
		offlineLi4: "Commerces qui exigent une rapidité maximale.",
		offlineDesc: "L'application fonctionne entièrement hors ligne, y compris les ventes, les rapports et les PDF.",
		salesTitle: "🧾 Gestion complète des ventes",
		salesLi1: "Prise de commande rapide ;",
		salesLi2: "Paiements échelonnés ;",
		salesLi3: "Remises et rabais ;",
		salesLi4: "Suivi des statuts de paiement ;",
		salesLi5: "Reçus professionnels en PDF.",
		customersTitle: "👥 Clients Particuliers et Entreprises",
		customersDesc: "Historique complet avec recherche intelligente.",
		productsTitle: "🛍️ Produits et services",
		productsDesc: "Gerez vos stocks, prix et marges bénéficiaires en toute simplicité.",
		reportsTitle: "📊 Rapports et tableaux de bord",
		reportsDesc: "Visualisez vos résultats avec des filtres par date et des graphiques clairs :",
		reportsLi1: "Chiffre d'affaires ;",
		reportsLi2: "Bénéfice net ;",
		reportsLi3: "Panier moyen (ticket) ;",
		reportsLi4: "Produits les plus vendus.",
		customizationTitle: "🎨 Personnalisation visuelle",
		customizationDesc: "Sélectionnez votre thème préféré et ajoutez le logo de votre entreprise.",
		backupTitle: "💾 Sauvegarde locale",
		backupDesc: "Créez des sauvegardes et restaurez vos données quand vous le souhaitez. Tout reste hors ligne et sous votre contrôle.",
		footerTitle: "📱 Téléchargez PDV Offline maintenant",
		footerDesc: "Transformez votre smartphone en un point de vente rapide, privé et totalement hors ligne."
	}
};

export default function PDVOffline() {
	const location = useLocation();
	const [searchParams, setSearchParams] = useSearchParams();

	// Identificar o idioma ativo: parâmetro da URL -> idioma do navegador -> inglês (padrão)
	const activeLang = useMemo(() => {
		const queryLang = searchParams.get("lang")?.toLowerCase() || "";
		if (["pt", "en", "es", "fr"].includes(queryLang)) {
			return queryLang;
		}
		const browserLang = navigator.language.split("-")[0].toLowerCase();
		if (["pt", "en", "es", "fr"].includes(browserLang)) {
			return browserLang;
		}
		return "en";
	}, [searchParams]);

	const t = useMemo(() => {
		return translations[activeLang];
	}, [activeLang]);

	const canonicalUrl = useMemo(() => {
		// Mantém o parâmetro de idioma na URL canônica para indexar as versões traduzidas de forma independente
		return `${SITE_BASE_URL}${location.pathname}?lang=${activeLang}`;
	}, [location.pathname, activeLang]);

	const changeLanguage = (lang: string) => {
		setSearchParams({ lang });
	};

	return (
		<section className={styles.page}>
			<Helmet>
				<title>{t.title}</title>
				<meta name="description" content={t.metaDescription} />
				<meta name="keywords" content={t.metaKeywords} />
				<link rel="canonical" href={canonicalUrl} />

				{/* Tags de SEO Internacional (hreflang) para indicar versões traduzidas alternadas */}
				<link rel="alternate" hrefLang="pt" href={`${SITE_BASE_URL}/pdv?lang=pt`} />
				<link rel="alternate" hrefLang="en" href={`${SITE_BASE_URL}/pdv?lang=en`} />
				<link rel="alternate" hrefLang="es" href={`${SITE_BASE_URL}/pdv?lang=es`} />
				<link rel="alternate" hrefLang="fr" href={`${SITE_BASE_URL}/pdv?lang=fr`} />
				<link rel="alternate" hrefLang="x-default" href={`${SITE_BASE_URL}/pdv?lang=en`} />
			</Helmet>

			<div className={styles.pageInner}>
				{/* Seletor Visual de Idiomas */}
				<div className={styles.langSelector}>
					<button
						className={`${styles.langButton} ${activeLang === "pt" ? styles.langActive : ""}`}
						onClick={() => changeLanguage("pt")}
					>
						PT
					</button>
					<button
						className={`${styles.langButton} ${activeLang === "en" ? styles.langActive : ""}`}
						onClick={() => changeLanguage("en")}
					>
						EN
					</button>
					<button
						className={`${styles.langButton} ${activeLang === "es" ? styles.langActive : ""}`}
						onClick={() => changeLanguage("es")}
					>
						ES
					</button>
					<button
						className={`${styles.langButton} ${activeLang === "fr" ? styles.langActive : ""}`}
						onClick={() => changeLanguage("fr")}
					>
						FR
					</button>
				</div>

				<header className={styles.hero}>
					<div>
                        <div className={styles.titleWrap}>
                            <img
                                alt="Ícone do aplicativo PDV Offline"
                                className={styles.heroIcon}
                                src={image}
                            />
                            <h1 className={styles.heroTitle}>
								{activeLang === "en" ? "POS Offline" : (activeLang === "es" ? "TPV Offline" : "PDV Offline")}
							</h1>
                        </div>
						
						<h2 className={styles.heroSubtitle}>
							{t.heroSubtitle}
						</h2>
					</div>

					<p className={styles.heroDescription}>
						{t.heroDescription}
					</p>

					<div className={styles.cta}>
						<a
							className={styles.ctaButton}
							href={PLAY_STORE_LINK}
							target="_blank"
							rel="noopener noreferrer"
						>
							<img alt="Google Play" className={styles.storeIcon} src={googlePlay} />
							<span>{t.downloadButton}</span>
						</a>
						<p className={styles.ctaNote}>
							{t.downloadNote}
						</p>
					</div>
				</header>

				<div className={styles.sections}>
					<article className={styles.section}>
						<h2>{t.privaciesTitle}</h2>
						<p>{t.privaciesDesc}</p>
					</article>

					<article className={styles.section}>
						<h2>{t.offlineTitle}</h2>
						<p>{t.offlineSub}</p>
						<ul>
							<li>{t.offlineLi1}</li>
							<li>{t.offlineLi2}</li>
							<li>{t.offlineLi3}</li>
							<li>{t.offlineLi4}</li>
						</ul>
						<p style={{ marginTop: "1rem" }}>{t.offlineDesc}</p>
					</article>

					<article className={styles.section}>
						<h2>{t.salesTitle}</h2>
						<ul>
							<li>{t.salesLi1}</li>
							<li>{t.salesLi2}</li>
							<li>{t.salesLi3}</li>
							<li>{t.salesLi4}</li>
							<li>{t.salesLi5}</li>
						</ul>
					</article>

					<article className={styles.section}>
						<h2>{t.customersTitle}</h2>
						<p>{t.customersDesc}</p>
					</article>

					<article className={styles.section}>
						<h2>{t.productsTitle}</h2>
						<p>{t.productsDesc}</p>
					</article>

					<article className={styles.section}>
						<h2>{t.reportsTitle}</h2>
						<p>{t.reportsDesc}</p>
						<ul>
							<li>{t.reportsLi1}</li>
							<li>{t.reportsLi2}</li>
							<li>{t.reportsLi3}</li>
							<li>{t.reportsLi4}</li>
						</ul>
					</article>

					<article className={styles.section}>
						<h2>{t.customizationTitle}</h2>
						<p>{t.customizationDesc}</p>
					</article>

					<article className={styles.section}>
						<h2>{t.backupTitle}</h2>
						<p>{t.backupDesc}</p>
					</article>
				</div>

				<footer className={styles.section}>
					<h2>{t.footerTitle}</h2>
					<p>{t.footerDesc}</p>
					<div className={styles.cta} style={{ marginTop: "1.5rem" }}>
						<a
							className={styles.ctaButton}
							href={PLAY_STORE_LINK}
							target="_blank"
							rel="noopener noreferrer"
						>
							<img alt="Google Play" className={styles.storeIcon} src={googlePlay} />
							<span>{t.downloadButton}</span>
						</a>
					</div>
				</footer>
			</div>
		</section>
	);
}
