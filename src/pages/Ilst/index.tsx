import { useMemo, useEffect } from "react";
import { useLocation, useSearchParams } from "react-router-dom";
import styles from "./styles.module.css";
import googlePlay from "../../assets/images/google-play.png";
import image from "../../assets/images/ilst.png";
import { Helmet } from "react-helmet-async";
import { SITE_BASE_URL } from "../../config/constants";

const PLAY_STORE_LINK = "https://play.google.com/store/apps/details?id=com.jfcoder.ilst";

type TranslationKeys = {
	title: string;
	metaDescription: string;
	metaKeywords: string;
	heroSubtitle: string;
	heroDescription: string;
	downloadButton: string;
	downloadNote: string;
	realtimeTitle: string;
	realtimeDesc: string;
	peopleTitle: string;
	peopleDesc: string;
	manageTitle: string;
	manageLi1: string;
	manageLi2: string;
	manageLi3: string;
	manageLi4: string;
	manageLi5: string;
	privacyTitle: string;
	privacyDesc: string;
	itemsTitle: string;
	itemsDesc: string;
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
		title: "Ilst - Listas Compartilhadas em Tempo Real",
		metaDescription: "O Ilst é um app de lista compartilhada: crie listas, adicione pessoas e acompanhe tudo em tempo real. Tudo sincronizado entre os membros, com privacidade e agilidade.",
		metaKeywords: "ilst, listas compartilhadas, listas de compras, criar listas online, aplicativo de listas, lista em tempo real",
		heroSubtitle: "O app de lista compartilhada, rápido e em tempo real.",
		heroDescription: "O Ilst é um app de lista compartilhada: crie listas, adicione pessoas e acompanhe tudo em tempo real. Tudo o que você cadastra — listas, itens e configurações — fica sincronizado entre os membros, com privacidade e agilidade.",
		downloadButton: "Baixar agora",
		downloadNote: "Transforme seu smartphone em uma central de listas inteligente, privada e totalmente offline.",
		realtimeTitle: "🔄 Compartilhamento e atualização em tempo real",
		realtimeDesc: "Crie listas, adicione pessoas e veja as atualizações em tempo real. Todos os membros visualizam e editam juntos, de forma instantânea.",
		peopleTitle: "👥 Adicione pessoas às suas listas",
		peopleDesc: "Convide amigos, família ou colegas para colaborar em listas compartilhadas. Todos podem adicionar, editar e marcar itens juntos.",
		manageTitle: "📝 Crie e gerencie listas",
		manageLi1: "Criação rápida de listas compartilhadas;",
		manageLi2: "Itens ilimitados e categorias;",
		manageLi3: "Filtros, buscas e histórico de alterações;",
		manageLi4: "Status de conclusão em tempo real;",
		manageLi5: "Exportação em PDF.",
		privacyTitle: "🔒 Privacidade e segurança",
		privacyDesc: "Suas listas são protegidas e só podem ser acessadas por quem você convidar. Dados criptografados e sincronização segura.",
		itemsTitle: "🛍️ Itens e categorias",
		itemsDesc: "Gerencie itens, categorias e quantidades com facilidade.",
		reportsTitle: "📊 Relatórios e dashboards",
		reportsDesc: "Visualize suas listas e progresso com filtros por data e gráficos claros:",
		reportsLi1: "Listas criadas;",
		reportsLi2: "Itens concluídos;",
		reportsLi3: "Colaboradores ativos;",
		reportsLi4: "Itens mais frequentes.",
		customizationTitle: "🎨 Personalização visual",
		customizationDesc: "Escolha seu tema favorito e adicione o logo das suas listas.",
		backupTitle: "💾 Backup local",
		backupDesc: "Crie backups e restaure dados quando quiser. Tudo permanece offline e sob seu controle.",
		footerTitle: "📱 Baixe agora o Ilst",
		footerDesc: "Transforme seu smartphone em uma central de listas inteligente, privada e totalmente offline."
	},
	en: {
		title: "Ilst - Real-Time Shared Lists",
		metaDescription: "Ilst is a shared list app: create lists, add people, and track everything in real time. Everything is synchronized among members with privacy and speed.",
		metaKeywords: "ilst, shared lists, shopping list app, online todo list, group lists, real-time shared list",
		heroSubtitle: "The fast and real-time shared list app.",
		heroDescription: "Ilst is a shared list app: create lists, add people, and track everything in real time. Everything you register — lists, items, and settings — is synchronized among members with privacy and speed.",
		downloadButton: "Download now",
		downloadNote: "Transform your smartphone into a smart, private, and fully offline-supported list center.",
		realtimeTitle: "🔄 Real-time sharing and updates",
		realtimeDesc: "Create lists, add people, and see updates in real time. All members view and edit together instantly.",
		peopleTitle: "👥 Add people to your lists",
		peopleDesc: "Invite friends, family, or colleagues to collaborate on shared lists. Everyone can add, edit, and check off items together.",
		manageTitle: "📝 Create and manage lists",
		manageLi1: "Quickly create shared lists;",
		manageLi2: "Unlimited items and categories;",
		manageLi3: "Filters, searches, and edit history;",
		manageLi4: "Real-time completion status;",
		manageLi5: "PDF export option.",
		privacyTitle: "🔒 Privacy and security",
		privacyDesc: "Your lists are protected and can only be accessed by those you invite. Encrypted data and secure synchronization.",
		itemsTitle: "🛍️ Items and categories",
		itemsDesc: "Manage items, categories, and quantities with ease.",
		reportsTitle: "📊 Reports and dashboards",
		reportsDesc: "Visualize your lists and progress with date filters and clear charts:",
		reportsLi1: "Lists created;",
		reportsLi2: "Completed items;",
		reportsLi3: "Active collaborators;",
		reportsLi4: "Most frequent items.",
		customizationTitle: "🎨 Visual customization",
		customizationDesc: "Choose your favorite theme and add a custom logo to your lists.",
		backupTitle: "💾 Local backup",
		backupDesc: "Create backups and restore data whenever you want. Everything remains safe and under your control.",
		footerTitle: "📱 Download Ilst now",
		footerDesc: "Transform your smartphone into a smart, private, and fully offline-supported list center."
	},
	es: {
		title: "Ilst - Listas Compartidas en Tiempo Real",
		metaDescription: "Ilst es una app de listas compartidas: crea listas, añade personas y sigue todo en tiempo real. Todo se sincroniza entre los miembros, con privacidad y rapidez.",
		metaKeywords: "ilst, listas compartidas, lista de compras, crear listas online, app de listas grupales, lista en tiempo real",
		heroSubtitle: "La aplicación de listas compartidas rápida y en tiempo real.",
		heroDescription: "Ilst es una aplicación de listas compartidas: crea listas, añade personas y realiza un seguimiento en tiempo real. Todo lo que registras — listas, artículos y configuraciones — se sincroniza entre los miembros de manera privada y rápida.",
		downloadButton: "Descargar ahora",
		downloadNote: "Convierta su teléfono inteligente en un centro de listas inteligente, privado y con soporte offline total.",
		realtimeTitle: "🔄 Compartición y actualización en tiempo real",
		realtimeDesc: "Cree listas, agregue personas y vea actualizaciones en tiempo real. Todos los miembros ven y editan juntos de forma instantánea.",
		peopleTitle: "👥 Añadir personas a sus listas",
		peopleDesc: "Invite a amigos, familiares o colegas a colaborar en listas compartidas. Todos pueden agregar, editar y marcar elementos juntos.",
		manageTitle: "📝 Crear y gestionar listas",
		manageLi1: "Creación rápida de listas compartidas;",
		manageLi2: "Artículos ilimitados y categorías;",
		manageLi3: "Filtros, búsquedas e historial de cambios;",
		manageLi4: "Estado de finalización en tiempo real;",
		manageLi5: "Exportación en formato PDF.",
		privacyTitle: "🔒 Privacidad y seguridad",
		privacyDesc: "Sus listas están protegidas y solo pueden acceder las personas que usted invite. Datos encriptados y sincronización segura.",
		itemsTitle: "🛍️ Artículos y categorías",
		itemsDesc: "Gestione artículos, categorías y cantidades con facilidad.",
		reportsTitle: "📊 Informes y tableros",
		reportsDesc: "Visualice sus listas y progreso con filtros por fecha y gráficos claros:",
		reportsLi1: "Listas creadas;",
		reportsLi2: "Artículos completados;",
		reportsLi3: "Colaboradores activos;",
		reportsLi4: "Artículos más frecuentes.",
		customizationTitle: "🎨 Personalización visual",
		customizationDesc: "Elija su tema favorito y agregue el logotipo a sus listas.",
		backupTitle: "💾 Copia de seguridad local",
		backupDesc: "Cree copias de seguridad y restaure datos cuando desee. Todo permanece bajo su control.",
		footerTitle: "📱 Descargue Ilst ahora",
		footerDesc: "Convierta su teléfono inteligente en un centro de listas inteligente, privado y con soporte offline total."
	},
	fr: {
		title: "Ilst - Listes Partagées en Temps Réel",
		metaDescription: "Ilst est une application de listes partagées : créez des listes, ajoutez des membres et suivez tout en temps réel. Sincronisé entre les membres, avec confidentialité et rapidité.",
		metaKeywords: "ilst, listes partagées, liste de courses, créer listes en ligne, application de listes de groupe, liste en temps réel",
		heroSubtitle: "L'application de listes partagées rapide et en temps réel.",
		heroDescription: "Ilst est une application de listes partagées : créez des listes, ajoutez des personnes et suivez tout en temps réel. Tout ce que vous enregistrez — listes, articles et paramètres — est synchronisé entre les membres avec confidentialité et rapidité.",
		downloadButton: "Télécharger maintenant",
		downloadNote: "Transformez votre smartphone en un centre de listes intelligent, privé et entièrement compatible hors ligne.",
		realtimeTitle: "🔄 Partage et mise à jour en temps réel",
		realtimeDesc: "Créez des listes, ajoutez des membres et voyez les mises à jour en temps réel. Tous les membres visualisent et modifient ensemble instantanément.",
		peopleTitle: "👥 Ajoutez des personnes à vos listes",
		peopleDesc: "Invitez des amis, de la famille ou des collègues à collaborer sur des listes partagées. Tout le monde peut ajouter, modifier et cocher des articles ensemble.",
		manageTitle: "📝 Créez et gérez des listes",
		manageLi1: "Création rapide de listes partagées ;",
		manageLi2: "Articles et catégories illimités ;",
		manageLi3: "Filtres, recherches et historique des modifications ;",
		manageLi4: "Statut de progression en temps réel ;",
		manageLi5: "Exportation au format PDF.",
		privacyTitle: "🔒 Confidentialité et sécurité",
		privacyDesc: "Vos listes sont protégées et ne sont accessibles que par les personnes que vous invitez. Données chiffrées et synchronisation sécurisée.",
		itemsTitle: "🛍️ Articles et catégories",
		itemsDesc: "Gérez vos articles, catégories et quantités en toute simplicité.",
		reportsTitle: "📊 Rapports et tableaux de bord",
		reportsDesc: "Visualisez vos listes et votre progression avec des filtres par date et des graphiques clairs :",
		reportsLi1: "Listas créées ;",
		reportsLi2: "Articles complétés ;",
		reportsLi3: "Collaborateurs actifs ;",
		reportsLi4: "Articles les plus fréquents.",
		customizationTitle: "🎨 Personnalisation visuelle",
		customizationDesc: "Sélectionnez votre thème préféré et ajoutez un logo à vos listes.",
		backupTitle: "💾 Sauvegarde locale",
		backupDesc: "Créez des sauvegardes et restaurez vos données quand vous le souhaitez. Tout reste sous votre contrôle.",
		footerTitle: "📱 Téléchargez Ilst maintenant",
		footerDesc: "Transformez votre smartphone en un centre de listes intelligent, privé et entièrement compatible hors ligne."
	},
	de: {
		title: "Ilst - Gemeinsame Listen in Echtzeit",
		metaDescription: "Ilst ist eine App für gemeinsame Listen: Erstellen Sie Listen, fügen Sie Personen hinzu und verfolgen Sie alles in Echtzeit. Alles wird verschlüsselt und schnell synchronisiert.",
		metaKeywords: "ilst, gemeinsame listen, einkaufsliste app, online to-do-liste, gruppenlisten, echtzeit-liste",
		heroSubtitle: "Die schnelle Echtzeit-App für gemeinsame Listen.",
		heroDescription: "Ilst ist eine App für gemeinsame Listen: Erstellen Sie Listen, laden Sie Personen ein und verfolgen Sie alle Änderungen in Echtzeit. Ihre Listen, Einträge und Einstellungen werden sicher und schnell zwischen allen Mitgliedern synchronisiert.",
		downloadButton: "Jetzt herunterladen",
		downloadNote: "Verwandeln Sie Ihr Smartphone in eine intelligente, private und voll offlinefähige Listen-Zentrale.",
		realtimeTitle: "🔄 Teilen und Aktualisieren in Echtzeit",
		realtimeDesc: "Erstellen Sie Listen, fügen Sie Personen hinzu und sehen Sie Aktualisierungen sofort. Alle Mitglieder bearbeiten Listen gemeinsam in Echtzeit.",
		peopleTitle: "👥 Personen zu Ihren Listen hinzufügen",
		peopleDesc: "Laden Sie Freunde, Familie oder Kollegen ein. Jeder kann Einträge hinzufügen, ändern oder als erledigt markieren.",
		manageTitle: "📝 Listen erstellen und verwalten",
		manageLi1: "Schnelle Erstellung von geteilten Listen;",
		manageLi2: "Unbegrenzte Einträge und Kategorien;",
		manageLi3: "Filter, Suche und Änderungshistorie;",
		manageLi4: "Fortschrittsanzeige in Echtzeit;",
		manageLi5: "PDF-Exportoption.",
		privacyTitle: "🔒 Privatsphäre und Sicherheit",
		privacyDesc: "Ihre Listen sind geschützt und nur für geladene Gäste sichtbar. Verschlüsselte Datenübertragung und sichere Synchronisation.",
		itemsTitle: "🛍️ Einträge und Kategorien",
		itemsDesc: "Verwalten Sie Artikel, Kategorien und Mengen mit Leichtigkeit.",
		reportsTitle: "📊 Berichte und Dashboards",
		reportsDesc: "Visualisieren Sie Ihren Fortschritt mit Datumsfiltern und klaren Diagrammen:",
		reportsLi1: "Erstellte Listen;",
		reportsLi2: "Erledigte Aufgaben;",
		reportsLi3: "Aktive Mitarbeiter;",
		reportsLi4: "Häufigste Artikel.",
		customizationTitle: "🎨 Optische Personalisierung",
		customizationDesc: "Wählen Sie Ihr Lieblingsthema und fügen Sie ein Logo für Ihre Listen hinzu.",
		backupTitle: "💾 Lokales Backup",
		backupDesc: "Erstellen Sie Backups und stellen Sie Daten wieder her, wann immer Sie wollen. Alles bleibt sicher unter Ihrer Kontrolle.",
		footerTitle: "📱 Jetzt Ilst herunterladen",
		footerDesc: "Verwandeln Sie Ihr Smartphone in eine intelligente, private und voll offlinefähige Listen-Zentrale."
	},
	ru: {
		title: "Ilst - Совместные списки в реальном времени",
		metaDescription: "Ilst — это приложение для совместных списков: создавайте списки, добавляйте людей и следите за изменениями в реальном времени с полной конфиденциальностью.",
		metaKeywords: "ilst, совместные списки, список покупок, список дел онлайн, групповые списки, списки в реальном времени",
		heroSubtitle: "Быстрые совместные списки в реальном времени.",
		heroDescription: "Ilst — это удобное приложение для списков: создавайте списки, делитесь ими и отслеживайте выполнение задач в реальном времени. Все списки, элементы и настройки мгновенно синхронизируются.",
		downloadButton: "Скачать сейчас",
		downloadNote: "Превратите свой смартфон в умный, приватный центр управления списками с поддержкой офлайн.",
		realtimeTitle: "🔄 Совместная работа в реальном времени",
		realtimeDesc: "Создавайте списки дел или покупок, приглашайте участников и мгновенно наблюдайте за изменениями на экране.",
		peopleTitle: "👥 Добавляйте людей в свои списки",
		peopleDesc: "Приглашайте друзей, семью или коллег. Каждый сможет добавлять новые пункты, редактировать их и отмечать выполненными.",
		manageTitle: "📝 Создание и управление списками",
		manageLi1: "Быстрое создание совместных списков;",
		manageLi2: "Неограниченное число пунктов и категорий;",
		manageLi3: "Фильтры, поиск и история изменений;",
		manageLi4: "Статус выполнения задач в реальном времени;",
		manageLi5: "Экспорт списков в формат PDF.",
		privacyTitle: "🔒 Конфиденциальность и безопасность",
		privacyDesc: "Ваши списки защищены и доступны только приглашенным пользователям. Надежное шифрование данных и безопасная синхронизация.",
		itemsTitle: "🛍️ Пункты и категории",
		itemsDesc: "Легко управляйте элементами списков, категориями и их количеством.",
		reportsTitle: "📊 Отчеты и статистика",
		reportsDesc: "Отслеживайте прогресс с помощью фильтров по датам и наглядных графиков:",
		reportsLi1: "Создано списков;",
		reportsLi2: "Выполнено задач;",
		reportsLi3: "Активные участники;",
		reportsLi4: "Популярные товары.",
		customizationTitle: "🎨 Персонализация внешнего вида",
		customizationDesc: "Выберите вашу любимую тему и добавьте логотип к спискам.",
		backupTitle: "💾 Локальное резервное копирование",
		backupDesc: "Создавайте резервные копии и восстанавливайте данные в любое время. Все под вашим полным контролем.",
		footerTitle: "📱 Скачайте Ilst прямо сейчас",
		footerDesc: "Превратите свой смартфон в умный, приватный центр управления списками с поддержкой офлайн."
	},
	ja: {
		title: "Ilst - リアルタイム共有リスト",
		metaDescription: "Ilstはリアルタイム共有リストアプリです。リストを作成し、メンバーを招待して、買い出しやタスクをリアルタイムで追跡できます。",
		metaKeywords: "ilst, 共有リスト, 買い物リスト, オンラインToDoリスト, グループリスト, リアルタイムリスト",
		heroSubtitle: "迅速かつリアルタイムな共同リスト共有アプリ。",
		heroDescription: "Ilstは共同で使えるリストアプリです。リスト作成、メンバー追加、進捗のリアルタイム共有が可能です。すべてのデータはメンバー間で安全に同期されます。",
		downloadButton: "今すぐダウンロード",
		downloadNote: "スマートフォンを、スマートで安全な、完全オフライン対応のリスト管理センターに切り替えましょう。",
		realtimeTitle: "🔄 リアルタイムでの共有と同期",
		realtimeDesc: "リストを作成してメンバーを追加。変更や項目の追加は、すべてのメンバーの画面に一瞬で反映されます。",
		peopleTitle: "👥 リストへのメンバー追加",
		peopleDesc: "友人、家族、同僚を招待して、共同でリストを管理。誰でも項目の追加、編集、チェックが行えます。",
		manageTitle: "📝 リストの作成と管理",
		manageLi1: "共有リストの迅速な作成;",
		manageLi2: "無制限のアイテム追加とカテゴリ分け;",
		manageLi3: "フィルタ、検索、更新履歴の確認;",
		manageLi4: "リアルタイムでの進捗状況可視化;",
		manageLi5: "PDFへの書き出し機能.",
		privacyTitle: "🔒 高度なプライバシーとセキュリティ",
		privacyDesc: "リストは完全に保護され、招待されたユーザーのみがアクセスできます。データの暗号化と安全な同期を徹底。",
		itemsTitle: "🛍️ アイテムとカテゴリ",
		itemsDesc: "商品、サービス、カテゴリ、数量を直感的に整理・管理できます。",
		reportsTitle: "📊 レポートとダッシュボード",
		reportsDesc: "日付フィルタや分かりやすいグラフで進捗をビジュアル化：",
		reportsLi1: "作成されたリスト数;",
		reportsLi2: "完了したアイテム数;",
		reportsLi3: "アクティブな共同作業者;",
		reportsLi4: "よく追加されるアイテム.",
		customizationTitle: "🎨 デザインのカスタマイズ",
		customizationDesc: "お好みのカラーテーマを選択し、リストにロゴを登録できます。",
		backupTitle: "💾 ローカルバックアップ",
		backupDesc: "いつでも手軽にバックアップを作成・復元。すべてのデータを自分の手元で安全に管理。",
		footerTitle: "📱 今すぐIlstをダウンロード",
		footerDesc: "スマートフォンを、スマートで安全な、完全オフライン対応のリスト管理センターに切り替えましょう。"
	},
	zh: {
		title: "Ilst - 实时共享清单",
		metaDescription: "Ilst 是一款实时共享清单应用：创建清单、添加成员并实时同步各项内容。所有数据在成员之间快速安全地同步。",
		metaKeywords: "ilst, 共享清单, 购物清单, 备忘录app, 团队清单, 实时清单",
		heroSubtitle: "高效、实时的多人共享清单工具。",
		heroDescription: "Ilst 是一款支持多人协作的清单应用。创建并共享购物、任务或日程清单，添加成员并即时查看最新状态。清单内容在成员间快速同步，保护隐私。",
		downloadButton: "立即下载",
		downloadNote: "将您的智能手机变成智能、私密且支持离线使用的清单中心。",
		realtimeTitle: "🔄 实时共享与同步",
		realtimeDesc: "轻松创建清单，一键邀请成员。所有人在任何设备上的操作都会在几毫秒内实时同步更新。",
		peopleTitle: "👥 邀请成员共同管理",
		peopleDesc: "邀请家人、朋友或工作伙伴加入共享清单。每个人都可以自由添加、编辑和勾选完成清单项目。",
		manageTitle: "📝 清单创建与管理",
		manageLi1: "快速创建和管理多人共享清单;",
		manageLi2: "支持添加无限项目及分类;",
		manageLi3: "提供高级筛选、搜索及修改历史记录;",
		manageLi4: "可视化的实时清单完成状态;",
		manageLi5: "支持一键导出为PDF文档.",
		privacyTitle: "🔒 隐私安全保护",
		privacyDesc: "您的清单内容严格保密，仅受邀成员可见。数据传输全程加密，确保隐私不泄露。",
		itemsTitle: "🛍️ 项目与分类",
		itemsDesc: "轻松管理商品、任务名称、分类及具体数量。",
		reportsTitle: "📊 数据统计与看板",
		reportsDesc: "通过日期筛选和清晰的图表直观掌握清单的执行进展：",
		reportsLi1: "已创建的清单数量;",
		reportsLi2: "已完成的项目总数;",
		reportsLi3: "活跃的共同协作伙伴;",
		reportsLi4: "最常添加的热门项目.",
		customizationTitle: "🎨 个性化视觉主题",
		customizationDesc: "随心切换您喜爱的色彩主题，并为清单添加个性化徽标。",
		backupTitle: "💾 本地数据备份",
		backupDesc: "支持随时创建本地备份与一键数据恢复，所有权完全掌握在您手中。",
		footerTitle: "📱 立即下载 Ilst 清单",
		footerDesc: "将您的智能手机变成智能、私密且支持离线使用的清单中心。"
	},
	ko: {
		title: "Ilst - 실시간 공유 목록 앱",
		metaDescription: "Ilst는 실시간 공유 목록 및 장보기 메모 앱입니다. 목록을 만들고 사용자를 추가하여 가계부, 쇼핑 리스트를 실시간으로 관리하세요.",
		metaKeywords: "ilst, 공유 목록, 쇼핑 리스트, 장보기 앱, 할일 목록, 실시간 공유 리스트",
		heroSubtitle: "가장 빠르고 완벽한 실시간 공유 목록 솔루션.",
		heroDescription: "Ilst는 스마트한 공유 목록 앱입니다. 목록 작성, 공동 관리자 지정, 상태 변경 등을 실시간으로 동기화하며, 강력한 보안과 오프라인 제어를 자랑합니다.",
		downloadButton: "지금 다운로드",
		downloadNote: "스마트폰을 안전하고 개인 정보가 보호되는 완벽한 오프라인 지원 목록 센터로 만들어 보세요.",
		realtimeTitle: "🔄 실시간 공유 및 즉각적인 업데이트",
		realtimeDesc: "목록을 만들고 구성원을 초대한 뒤 진행 상황을 즉시 확인하세요. 모든 항목이 실시간으로 동시에 처리됩니다.",
		peopleTitle: "👥 구성원 추가 및 함께 사용",
		peopleDesc: "친구, 가족, 직장 동료를 초청하여 공유 리스트를 완성하세요. 모두가 자유롭게 항목을 추가하고 완료할 수 있습니다.",
		manageTitle: "📝 목록 생성 및 스마트 관리",
		manageLi1: "간편한 다인용 공유 목록 작성;",
		manageLi2: "무제한 항목 추가 및 그룹 분류;",
		manageLi3: "필터링, 검색 기능 및 변경 기록 제공;",
		manageLi4: "실시간 완료 상태 대시보드 표시;",
		manageLi5: "PDF 파일로 리스트 내보내기.",
		privacyTitle: "🔒 완벽한 개인 정보 및 데이터 보호",
		privacyDesc: "초대된 사람만 목록에 접근할 수 있어 안전합니다. 안전한 데이터 암호화 및 비공개 동기화 처리.",
		itemsTitle: "🛍️ 항목 및 카테고리 설정",
		itemsDesc: "다양한 물품과 카테고리, 필요한 수량을 마우스 몇 번으로 간단히 구성하세요.",
		reportsTitle: "📊 보고서 및 그래프 통계",
		reportsDesc: "날짜 필터 및 선명한 도표를 활용해 목록 실행 성과를 가시적으로 관리하세요:",
		reportsLi1: "생성된 총 목록 수;",
		reportsLi2: "완료된 항목 개수;",
		reportsLi3: "가장 활동적인 협업 멤버;",
		reportsLi4: "자주 구매/체크하는 항목.",
		customizationTitle: "🎨 테마 및 시각적 맞춤설정",
		customizationDesc: "원하는 디자인 테마를 고르고 목록에 고유 로고를 업로드해 보세요.",
		backupTitle: "💾 로컬 백업 지원",
		backupDesc: "로컬 저장소에 백업 파일을 만들고 언제든지 쉽게 데이터를 원상 복구할 수 있습니다.",
		footerTitle: "📱 지금 Ilst 설치하기",
		footerDesc: "스마트폰을 안전하고 개인 정보가 보호되는 완벽한 오프라인 지원 목록 센터로 만들어 보세요."
	},
	hi: {
		title: "Ilst - रियल-टाइम साझा सूचियां",
		metaDescription: "Ilst एक रियल-टाइम साझा सूची ऐप है: सूचियां बनाएं, लोगों को जोड़ें और सब कुछ रियल-टाइम में ट्रैक करें। पूरी गोपनीयता के साथ सभी सदस्यों के बीच डेटा सिंक होता है।",
		metaKeywords: "ilst, साझा सूची, खरीदारी की सूची, टास्क ट्रैकर, ग्रुप सूची, रियल-टाइम सिंक सूची",
		heroSubtitle: "तेज़ और रियल-टाइम साझा सूचियों का ऐप।",
		heroDescription: "Ilst एक साझा सूची ऐप है: सूचियां बनाएं, लोगों को जोड़ें और रियल-टाइम में सब कुछ ट्रैक करें। आपकी सूचियां, आइटम और सेटिंग्स पूरी गोपनीयता के साथ सिंक होती हैं।",
		downloadButton: "अभी डाउनलोड करें",
		downloadNote: "अपने स्मार्टफोन को एक स्मार्ट, सुरक्षित और पूरी तरह से ऑफलाइन समर्थित सूची केंद्र में बदलें।",
		realtimeTitle: "🔄 रियल-टाइम शेयरिंग और अपडेट",
		realtimeDesc: "सूचियां बनाएं, लोगों को जोड़ें और तुरंत बदलाव देखें। सभी सदस्य एक साथ लाइव एडिट कर सकते हैं।",
		peopleTitle: "👥 सूचियों में लोगों को जोड़ें",
		peopleDesc: "साझा सूचियों पर सहयोग करने के लिए दोस्तों, परिवार या सहकर्मियों को आमंत्रित करें। हर कोई आइटम जोड़ और मार्क कर सकता है।",
		manageTitle: "📝 सूचियां बनाएं और प्रबंधित करें",
		manageLi1: "साझा सूचियां तेजी से बनाएं;",
		manageLi2: "असीमित आइटम और श्रेणियां;",
		manageLi3: "फ़िल्टर, खोज और संपादन का इतिहास;",
		manageLi4: "रियल-टाइम में पूर्णता स्थिति;",
		manageLi5: "पीडीएफ निर्यात विकल्प।",
		privacyTitle: "🔒 गोपनीयता और सुरक्षा",
		privacyDesc: "आपकी सूचियां सुरक्षित हैं और केवल आपके द्वारा आमंत्रित लोग ही उन्हें एक्सेस कर सकते हैं। सुरक्षित सिंक और एन्क्रिप्शन।",
		itemsTitle: "🛍️ आइटम और श्रेणियां",
		itemsDesc: "आइटम, श्रेणियों और मात्राओं को आसानी से प्रबंधित करें।",
		reportsTitle: "📊 रिपोर्ट और डैशबोर्ड",
		reportsDesc: "फ़िल्टर और स्पष्ट चार्ट के साथ अपनी प्रगति को विज़ुअलाइज़ करें:",
		reportsLi1: "बनाई गई सूचियां;",
		reportsLi2: "पूरे किए गए आइटम;",
		reportsLi3: "सक्रिय सदस्य;",
		reportsLi4: "सबसे लगातार आइटम।",
		customizationTitle: "🎨 विजुअल कस्टमाइजेशन",
		customizationDesc: "अपना पसंदीदा थीम चुनें और अपनी सूचियों में लोगो जोड़ें।",
		backupTitle: "💾 स्थानीय बैकअप",
		backupDesc: "जब चाहें बैकअप बनाएं और डेटा रीस्टोर करें। सब कुछ आपके नियंत्रण में रहता है।",
		footerTitle: "📱 अभी डाउनलोड करें Ilst",
		footerDesc: "अपने स्मार्टफोन को एक स्मार्ट, सुरक्षित और पूरी तरह से ऑफलाइन समर्थित सूची केंद्र में बदलें।"
	},
	ar: {
		title: "Ilst - قوائم مشتركة في الوقت الفعلي",
		metaDescription: "برنامج Ilst لتنظيم القوائم المشتركة: أنشئ قوائم، أضف أشخاصًا وتابع التحديثات في الوقت الفعلي بأقصى درجات الخصوصية والأمان.",
		metaKeywords: "قوائم مشتركة, قائمة المشتريات, تنظيم المهام, قوائم جماعية, مزامنة فورية, قوائم ذكية",
		heroSubtitle: "تطبيق تنظيم القوائم المشتركة السريع والتفاعلي.",
		heroDescription: "تطبيق قوائم ذكي يتيح لك إنشاء القوائم ومشاركتها مع العائلة أو زملاء العمل ومتابعة التعديلات فورًا مع تشفير كامل للبيانات وتحكم تام بدون إنترنت.",
		downloadButton: "حمل التطبيق الآن",
		downloadNote: "حوّل هاتفك الذكي إلى مركز ذكي لتنظيم القوائم المشتركة بخصوصية تامة ودعم غير محدود أوفلاين.",
		realtimeTitle: "🔄 مشاركة وتحديث في الوقت الفعلي",
		realtimeDesc: "أنشئ قوائمك وادعُ الأعضاء لمشاهدة التحديثات والتعديلات فورًا على الشاشة.",
		peopleTitle: "👥 إضافة الأعضاء للقوائم",
		peopleDesc: "ادعُ أصدقاءك أو عائلتك للمشاركة والتعاون، حيث يمكن للجميع إضافة عناصر جديدة أو إكمالها.",
		manageTitle: "📝 إنشاء وإدارة القوائم",
		manageLi1: "إنشاء سريع للقوائم المشتركة والمهام؛",
		manageLi2: "إضافة عناصر وتصنيفات بلا حدود؛",
		manageLi3: "فلاتر متقدمة، بحث وتاريخ التعديلات؛",
		manageLi4: "مؤشر لنسبة الإنجاز الفوري؛",
		manageLi5: "تصدير القوائم بصيغة PDF بنقرة واحدة.",
		privacyTitle: "🔒 خصوصية تامة وحماية مطلقة",
		privacyDesc: "قوائمك محمية ومشفرة ولا يمكن لأحد الوصول إليها إلا لمن ترسل له دعوة رسمية.",
		itemsTitle: "🛍️ العناصر والتصنيفات",
		itemsDesc: "تحكم في ترتيب العناصر، الكميات، والتصنيفات بسهولة فائقة وبدون أي تعقيد.",
		reportsTitle: "📊 تقارير وإحصائيات تفاعلية",
		reportsDesc: "راقب تقدمك والمهام المنجزة عبر فلاتر زمنية ورسوم بيانية مبسطة:",
		reportsLi1: "إجمالي القوائم المنشأة؛",
		reportsLi2: "العناصر المكتملة؛",
		reportsLi3: "الأعضاء الأكثر نشاطًا؛",
		reportsLi4: "الطلبات الأكثر تكرارًا.",
		customizationTitle: "🎨 تخصيص المظهر والألوان",
		customizationDesc: "اختر ألوانك المفضلة والسمة المناسبة وأضف شعارًا مخصصًا لقوائمك.",
		backupTitle: "💾 نسخة احتياطية محلية",
		backupDesc: "احفظ نسخة احتياطية من بياناتك واسترجعها متى تشاء محليًا وبدون الحاجة لربطها بسيرفر خارجي.",
		footerTitle: "📱 تحميل تطبيق Ilst الآن",
		footerDesc: "حوّل هاتفك الذكي إلى مركز ذكي لتنظيم القوائم المشتركة بخصوصية تامة ودعم غير محدود أوفلاين."
	},
	bn: {
		title: "Ilst - রিয়েল-টাইম শেয়ার্ড লিস্ট",
		metaDescription: "Ilst একটি রিয়েল-টাইম শেয়ার্ড লিস্ট অ্যাপ: তালিকা তৈরি করুন, মানুষ যোগ করুন এবং সব কিছু রিয়েল-টাইম ট্র্যাকিং করুন সম্পূর্ণ গোপনীয়তার সাথে।",
		metaKeywords: "ilst, শেয়ার্ড লিস্ট, কেনাকাটার তালিকা, গ্রুপ তালিকা, রিয়েল-টাইম তালিকা",
		heroSubtitle: "দ্রুত এবং রিয়েল-টাইম যৌথ তালিকা শেয়ারিং অ্যাপ।",
		heroDescription: "Ilst একটি সমন্বিত তালিকা অ্যাপ। কেনাকাটা বা কাজের তালিকা তৈরি করুন, সদস্যদের আমন্ত্রণ জানান এবং রিয়েল-টাইমে সব আপডেট দেখুন। সব ডেটা সুরক্ষিতভাবে সিঙ্ক হয়।",
		downloadButton: "এখনই ডাউনলোড করুন",
		downloadNote: "আপনার স্মার্টফোনটিকে একটি স্মার্ট, ব্যক্তিগত এবং সম্পূর্ণ অফলাইন-সমর্থিত তালিকা কেন্দ্রে রূপান্তর করুন।",
		realtimeTitle: "🔄 রিয়েল-টাইম শেয়ারিং এবং আপডেট",
		realtimeDesc: "সহজে তালিকা তৈরি করুন, সদস্যদের যোগ করুন। সকলের পরিবর্তন তাৎক্ষণিকভাবে সিঙ্ক হবে।",
		peopleTitle: "👥 তালিকায় মানুষ যোগ করুন",
		peopleDesc: "একত্রে তালিকা পরিচালনা করতে বন্ধু, পরিবার বা সহকর্মীদের আমন্ত্রণ জানান। সবাই আইটেম যোগ এবং সম্পন্ন করতে পারবে।",
		manageTitle: "📝 তালিকা তৈরি এবং পরিচালনা",
		manageLi1: "গ্রুপ শেয়ার্ড তালিকা দ্রুত তৈরি করুন;",
		manageLi2: "সীমাহীন আইটেম এবং বিভাগ;",
		manageLi3: "ফিল্টার, অনুসন্ধান এবং পরিবর্তনের ইতিহাস;",
		manageLi4: "রিয়েল-টাইম সম্পন্ন অবস্থা;",
		manageLi5: "পিডিএফ ফাইল হিসেবে তালিকা এক্সপোর্ট করুন।",
		privacyTitle: "🔒 গোপনীয়তা এবং নিরাপত্তা",
		privacyDesc: "আপনার তালিকা সুরক্ষিত এবং শুধুমাত্র আমন্ত্রিত সদস্যরা এটি অ্যাক্সেস করতে পারে। নিরাপদ সিঙ্ক এবং এনক্রিপশন।",
		itemsTitle: "🛍️ আইটেম এবং বিভাগ",
		itemsDesc: "আইটেম, বিভাগ এবং পরিমাণ সহজে পরিচালনা করুন।",
		reportsTitle: "📊 রিপোর্ট এবং ড্যাশবোর্ড",
		reportsDesc: "ফিল্টার এবং স্পষ্ট চার্টের সাথে আপনার অগ্রগতি বিশ্লেষণ করুন:",
		reportsLi1: "তৈরি করা তালিকা;",
		reportsLi2: "সম্পন্ন করা আইটেम;",
		reportsLi3: "সক্রিয় অংশীদার;",
		reportsLi4: "সবচেয়ে ঘন ঘন আইটেম।",
		customizationTitle: "🎨 কাস্টমাইজেশন থিম",
		customizationDesc: "আপনার পছন্দের থিম চয়ন করুন এবং তালিকায় কাস্টম লোগো যুক্ত করুন।",
		backupTitle: "💾 স্থানীয় ব্যাকআপ",
		backupDesc: "যেকোনো সময় ব্যাকআপ তৈরি করুন এবং ডেটা রিস্টোর করুন। সব কিছু আপনার নিয়ন্ত্রণে থাকে।",
		footerTitle: "📱 এখনই ডাউনলোড করুন Ilst",
		footerDesc: "আপনার スマートফোনটিকে একটি স্মার্ট, ব্যক্তিগত এবং সম্পূর্ণ অফলাইন-সমর্থিত তালিকা কেন্দ্রে রূপান্তর করুন।"
	},
	id: {
		title: "Ilst - Daftar Bersama Real-Time",
		metaDescription: "Ilst adalah aplikasi daftar bersama: buat daftar belanja, undang anggota, dan lacak belanjaan secara real-time dengan privasi total.",
		metaKeywords: "ilst, daftar bersama, daftar belanja, daftar tugas kelompok, manajemen tugas, daftar real-time",
		heroSubtitle: "Aplikasi daftar bersama yang cepat dan real-time.",
		heroDescription: "Ilst adalah aplikasi daftar kolaboratif. Buat daftar, tambahkan orang, dan pantau pembaruan secara instan. Semua tersinkronisasi dengan aman dan menjaga privasi Anda.",
		downloadButton: "Unduh Sekarang",
		downloadNote: "Ubah ponsel cerdas Anda menjadi pusat daftar belanja cerdas, pribadi, dan mendukung offline penuh.",
		realtimeTitle: "🔄 Berbagi dan Pembaruan Real-Time",
		realtimeDesc: "Buat daftar belanja dan undang anggota. Setiap perubahan dan item baru disinkronkan secara langsung di layar semua orang.",
		peopleTitle: "👥 Tambahkan Anggota ke Daftar",
		peopleDesc: "Undang keluarga, teman, atau rekan kerja untuk berkolaborasi. Semua orang dapat menambah, mengedit, dan mencoret item bersama.",
		manageTitle: "📝 Buat dan Kelola Daftar",
		manageLi1: "Pembuatan daftar bersama yang cepat;",
		manageLi2: "Dukungan item dan kategori tanpa batas;",
		manageLi3: "Penyaringan, pencarian, dan riwayat edit;",
		manageLi4: "Status penyelesaian yang terpantau real-time;",
		manageLi5: "Ekspor daftar ke format PDF.",
		privacyTitle: "🔒 Privasi dan Keamanan Tinggi",
		privacyDesc: "Daftar Anda dilindungi dan hanya dapat diakses oleh mereka yang diundang. Enskripsi data aman.",
		itemsTitle: "🛍️ Item dan Kategori",
		itemsDesc: "Kelola nama item, kategori, dan jumlah dengan mudah.",
		reportsTitle: "📊 Laporan dan Statistik",
		reportsDesc: "Visualisasikan kemajuan Anda dengan filter tanggal dan grafik statistik yang jelas:",
		reportsLi1: "Daftar yang dibuat;",
		reportsLi2: "Item yang diselesaikan;",
		reportsLi3: "Kolaborator teraktif;",
		reportsLi4: "Item yang paling sering dibeli.",
		customizationTitle: "🎨 Personalisasi Visual",
		customizationDesc: "Pilih tema warna favorit Anda dan tambahkan logo khusus ke daftar Anda.",
		backupTitle: "💾 Cadangan Lokal",
		backupDesc: "Buat file cadangan dan pulihkan data kapan saja. Kendali penuh ada di tangan Anda.",
		footerTitle: "📱 Unduh Ilst Sekarang",
		footerDesc: "Ubah ponsel cerdas Anda menjadi pusat daftar belanja cerdas, pribadi, dan mendukung offline penuh."
	},
	mr: {
		title: "Ilst - रिअल-टाइम शेअर्ड लिस्ट",
		metaDescription: "Ilst हे एक रिअल-टाइम शेअर्ड लिस्ट अॅप आहे: याद्या तयार करा, लोकांना जोडा आणि रिअल-टाइममध्ये सर्व काही ट्रॅक करा पूर्ण गोपनीयतेसह.",
		metaKeywords: "ilst, शेअर्ड लिस्ट, खरेदीची यादी, ग्रुप लिस्ट, रिअल-टाइम यादी",
		heroSubtitle: "वेगवान आणि रिअल-टाइम सामायिक यादी अॅप.",
		heroDescription: "Ilst हे एक समन्वित यादी अॅप आहे. खरेदी किंवा कामाची यादी तयार करा, सदस्यांना आमंत्रित करा आणि रिअल-टाइममध्ये सर्व अपडेट्स पहा.",
		downloadButton: "आता डाउनलोड करा",
		downloadNote: "तुमच्या स्मार्टफोनला स्मार्ट, खाजगी आणि पूर्णपणे ऑफलाइन सूची केंद्रामध्ये बदला.",
		realtimeTitle: "🔄 रिअल-टाइम शेअरिंग आणि अपडेट्स",
		realtimeDesc: "सहज याद्या तयार करा, सदस्यांना जोडा. सर्वांचे बदल त्वरित सिंक होतील.",
		peopleTitle: "👥 याद्यांमध्ये लोकांना जोडा",
		peopleDesc: "एकत्र यादी व्यवस्थापित करण्यासाठी मित्र, कुटुंब किंवा सहकाऱ्यांना आमंत्रित करा. प्रत्येकजण आयटम जोडू आणि पूर्ण करू शकतो.",
		manageTitle: "📝 याद्या तयार करा आणि व्यवस्थापित करा",
		manageLi1: "ग्रुप शेअर्ड यादी वेगाने तयार करा;",
		manageLi2: "अमर्यादित आयटम आणि श्रेणी;",
		manageLi3: "फिल्टर, शोध आणि बदल इतिहास;",
		manageLi4: "रिअल-टाइम पूर्णता स्थिती;",
		manageLi5: "पीडीएफ फाईल म्हणून यादी एक्सपोर्ट करा.",
		privacyTitle: "🔒 गोपनीयता आणि सुरक्षा",
		privacyDesc: "तुमची यादी सुरक्षित आहे आणि केवळ आमंत्रित सदस्यच ती पाहू शकतात. सुरक्षित सिंक आणि एन्क्रिप्शन.",
		itemsTitle: "🛍️ आयटम आणि श्रेणी",
		itemsDesc: "आयटम, श्रेणी आणि प्रमाण सहज व्यवस्थापित करा.",
		reportsTitle: "📊 अहवाल आणि डॅशबोर्ड",
		reportsDesc: "फिल्टर आणि स्पष्ट चार्टसह तुमच्या प्रगतीचे विश्लेषण करा:",
		reportsLi1: "तयार केलेल्या याद्या;",
		reportsLi2: "पूर्ण केलेले आयटम;",
		reportsLi3: "सक्रिय भागीदार;",
		reportsLi4: "सर्वात वारंवार येणारे आयटम.",
		customizationTitle: "🎨 व्हिज्युअल कस्टमायझेशन",
		customizationDesc: "तुमची आवडती थीम निवडा आणि यादीत सानुकूल लोगो जोडा.",
		backupTitle: "💾 स्थानिक बॅकअप",
		backupDesc: "कधीही बॅकअप तयार करा आणि डेटा रीस्टोर करा. सर्व काही तुमच्या नियंत्रणात राहते.",
		footerTitle: "📱 आता डाउनलोड करा Ilst",
		footerDesc: "तुमच्या स्मार्टफोनला स्मार्ट, खाजगी आणि पूर्णपणे ऑफलाइन सूची केंद्रामध्ये बदला।"
	},
	pa: {
		title: "Ilst - ਰੀਅਲ-ਟਾਈਮ ਸਾਂਝੀ ਸੂਚੀ",
		metaDescription: "Ilst ਇੱਕ ਰੀਅਲ-ਟਾਈਮ ਸਾਂਝੀ ਸੂਚੀ ਐਪ ਹੈ: ਸੂਚੀਆਂ ਬਣਾਓ, ਲੋਕਾਂ ਨੂੰ ਜੋੜੋ ਅਤੇ ਰੀਅਲ-ਟਾਈਮ ਵਿੱਚ ਸਭ ਕੁਝ ਟ੍ਰੈਕ ਕਰੋ ਪੂਰੀ ਗੋਪਨੀਯਤਾ ਦੇ ਨਾਲ।",
		metaKeywords: "ilst, ਸਾਂਝੀ ਸੂਚੀ, ਖਰੀਦਦਾਰੀ ਸੂਚੀ, ਗਰੁੱਪ ਸੂਚੀ, ਰੀਅਲ-ਟਾਈਮ ਸੂਚੀ",
		heroSubtitle: "ਤੇਜ਼ ਅਤੇ ਰੀਅਲ-ਟਾਈਮ ਸਾਂਝੀ ਸੂਚੀ ਐਪ।",
		heroDescription: "Ilst ਇੱਕ ਸਾਂਝੀ ਸੂਚੀ ਐਪ ਹੈ। ਖਰੀਦਦਾਰੀ ਜਾਂ ਕੰਮ ਦੀਆਂ ਸੂਚੀਆਂ ਬਣਾਓ, ਮੈਂਬਰਾਂ ਨੂੰ ਸੱਦਾ ਦਿਓ ਅਤੇ ਰੀਅਲ-ਟਾਈਮ ਵਿੱਚ ਸਾਰੇ ਅੱਪਡੇਟ ਦੇਖੋ।",
		downloadButton: "ਹੁਣੇ ਡਾਊਨਲੋਡ ਕਰੋ",
		downloadNote: "ਆਪਣੇ ਸਮਾਰਟਫੋਨ ਨੂੰ ਇੱਕ ਸਮਾਰਟ, ਸੁਰੱਖਿਅਤ ਅਤੇ ਪੂਰੀ ਤਰ੍ਹਾਂ ਆਫਲਾਈਨ ਸੂਚੀ ਕੇਂਦਰ ਵਿੱਚ ਬਦਲੋ।",
		realtimeTitle: "🔄 ਰੀਅਲ-ਟਾਈਮ ਸ਼ੇਅਰਿੰਗ ਅਤੇ ਅੱਪਡੇਟ",
		realtimeDesc: "ਸੂਚੀਆਂ ਬਣਾਓ, ਮੈਂਬਰਾਂ ਨੂੰ ਜੋੜੋ। ਸਾਰੇ ਬਦਲਾਅ ਤੁਰੰਤ ਸਾਰੇ ਡਿਵਾਈਸਿਸ 'ਤੇ ਸਿੰਕ ਹੋਣਗੇ।",
		peopleTitle: "👥 ਸੂਚੀਆਂ ਵਿੱਚ ਲੋਕਾਂ ਨੂੰ ਜੋੜੋ",
		peopleDesc: "ਸਾਂਝੀਆਂ ਸੂਚੀਆਂ 'ਤੇ ਸਹਿਯੋਗ ਕਰਨ ਲਈ ਦੋਸਤਾਂ, ਪਰਿਵਾਰ ਜਾਂ ਸਹਿਕਰਮੀਆਂ ਨੂੰ ਸੱਦਾ ਦਿਓ। ਹਰ ਕੋਈ ਆਈਟਮ ਜੋੜ ਅਤੇ ਚੈੱਕ ਕਰ ਸਕਦਾ ਹੈ।",
		manageTitle: "📝 ਸੂਚੀਆਂ ਬਣਾਓ ਅਤੇ ਪ੍ਰਬੰਧਿਤ ਕਰੋ",
		manageLi1: "ਸਾਂਝੀਆਂ ਸੂਚੀਆਂ ਤੇਜ਼ੀ ਨਾਲ ਬਣਾਓ;",
		manageLi2: "ਅਸੀਮਤ ਆਈਟਮਾਂ ਅਤੇ ਸ਼੍ਰੇਣੀਆਂ;",
		manageLi3: "ਫਿਲਟਰ, ਖੋਜ ਅਤੇ ਬਦਲਾਅ ਦਾ ਇਤਿਹਾਸ;",
		manageLi4: "ਰੀਅਲ-ਟਾਈਮ ਵਿੱਚ ਸੰਪੂਰਨਤਾ ਸਥਿਤੀ;",
		manageLi5: "PDF ਨਿਰਯਾਤ ਵਿਕਲਪ।",
		privacyTitle: "🔒 ਗੋਪਨੀਯਤਾ ਅਤੇ ਸੁਰੱਖਿਆ",
		privacyDesc: "ਤੁਹਾਡੀਆਂ ਸੂਚੀਆਂ ਸੁਰੱਖਿਅਤ ਹਨ ਅਤੇ ਸਿਰਫ ਤੁਹਾਡੇ ਦੁਆਰਾ ਸੱਦੇ ਗਏ ਲੋਕ ਹੀ ਉਹਨਾਂ ਨੂੰ ਐਕਸੈਸ ਕਰ ਸਕਦੇ ਹਨ। ਸੁਰੱਖਿਅਤ ਸਿੰਕ।",
		itemsTitle: "🛍️ ਆਈਟਮਾਂ ਅਤੇ ਸ਼੍ਰੇਣੀਆਂ",
		itemsDesc: "ਆਈਟਮਾਂ, ਸ਼੍ਰੇਣੀਆਂ ਅਤੇ ਮਾਤਰਾਵਾਂ ਨੂੰ ਆਸਾਨੀ ਨਾਲ ਪ੍ਰਬੰਧਿਤ ਕਰੋ।",
		reportsTitle: "📊 ਰਿਪੋਰਟਾਂ ਅਤੇ ਡੈਸ਼ਬੋਰਡ",
		reportsDesc: "ਫਿਲਟਰਾਂ ਅਤੇ ਸਪਸ਼ਟ ਚਾਰਟਾਂ ਨਾਲ ਆਪਣੀ ਪ੍ਰਗਤੀ ਨੂੰ ਟ੍ਰੈਕ ਕਰੋ:",
		reportsLi1: "ਬਣਾਈਆਂ ਗਈਆਂ ਸੂਚੀਆਂ;",
		reportsLi2: "ਪੂਰੀਆਂ ਕੀਤੀਆਂ ਆਈਟਮਾਂ;",
		reportsLi3: "ਸਰਗਰਮ ਮੈਂਬਰ;",
		reportsLi4: "ਸਭ ਤੋਂ ਵੱਧ ਵਰਤੀਆਂ ਜਾਣ ਵਾਲੀਆਂ ਆਈਟਮਾਂ।",
		customizationTitle: "🎨 ਵਿਜ਼ੂਅਲ ਕਸਟਮਾਈਜ਼ੇਸ਼ਨ",
		customizationDesc: "ਆਪਣੀ ਪਸੰਦੀਦਾ ਥੀਮ ਚੁਣੋ ਅਤੇ ਆਪਣੀਆਂ ਸੂਚੀਆਂ ਵਿੱਚ ਲੋਗੋ ਜੋੜੋ।",
		backupTitle: "💾 ਸਥਾਨਕ ਬੈਕਅੱਪ",
		backupDesc: "ਜਦੋਂ ਚਾਹੋ ਬੈਕਅੱਪ ਬਣਾਓ ਅਤੇ ਡਾਟਾ ਰੀਸਟੋਰ ਕਰੋ। ਸਭ ਕੁਝ ਤੁਹਾਡੇ ਕੰਟਰੋਲ ਵਿੱਚ ਰਹਿੰਦਾ ਹੈ।",
		footerTitle: "📱 ਹੁਣੇ ਡਾਊਨਲੋड ਕਰੋ Ilst",
		footerDesc: "ਆਪਣੇ ਸਮਾਰटਫੋਨ ਨੂੰ ਇੱਕ ਸਮਾਰਟ, ਸੁਰੱਖਿਅਤ ਅਤੇ ਪੂਰੀ ਤਰ੍ਹਾਂ ਆਫਲਾਈਨ ਸੂਚੀ ਕੇਂਦਰ ਵਿੱਚ ਬਦਲੋ।"
	},
	pl: {
		title: "Ilst - Wspólne Listy w Czasie Rzeczywistym",
		metaDescription: "Ilst to aplikacja do wspólnych list: twórz listy, dodawaj osoby i śledź wszystko w czasie rzeczywistym. Pełna prywatność i synchronizacja.",
		metaKeywords: "ilst, wspólne listy, lista zakupów app, lista zadań online, listy grupowe, listy w czasie rzeczywistym",
		heroSubtitle: "Szybka aplikacja do współdzielenia list w czasie rzeczywistym.",
		heroDescription: "Ilst to aplikacja do list grupowych. Twórz listy zakupów, zadań lub planów, zapraszaj członków i obserwuj aktualizacje natychmiastowo z pełną prywatnością.",
		downloadButton: "Pobierz Teraz",
		downloadNote: "Zmień swój smartfon w inteligentne, prywatne i w pełni offline centrum list zadań.",
		realtimeTitle: "🔄 Udostępnianie w Czasie Rzeczywistym",
		realtimeDesc: "Twórz listy i zapraszaj członków. Każda zmiana i nowy produkt są synchronizowane natychmiast na ekranach wszystkich osób.",
		peopleTitle: "👥 Dodaj Osoby do Swoich List",
		peopleDesc: "Zaproś rodzinę, przyjaciół lub współpracowników do współpracy. Każdy może dodawać, edytować i odznaczać pozycje razem.",
		manageTitle: "📝 Twórz i Zarządzaj Listami",
		manageLi1: "Szybkie tworzenie list grupowych;",
		manageLi2: "Nieograniczona liczba pozycji i kategorii;",
		manageLi3: "Filtrowanie, wyszukiwanie i historia zmian;",
		manageLi4: "Status ukończenia monitorowany w czasie rzeczywistym;",
		manageLi5: "Eksport list do formatu PDF.",
		privacyTitle: "🔒 Prywatność i Bezpieczeństwo",
		privacyDesc: "Twoje listy są chronione i dostępne tylko dla osób, które zaprosisz. Bezpieczne szyfrowanie danych.",
		itemsTitle: "🛍️ Pozycje i Kategorie",
		itemsDesc: "Z łatwością zarządzaj nazwami przedmiotów, kategoriami oraz ilościami.",
		reportsTitle: "📊 Raporty i Statystyki",
		reportsDesc: "Wizualizuj swoje postępy za pomocą filtrów dat i przejrzystych wykresów statystyk:",
		reportsLi1: "Utworzone listy;",
		reportsLi2: "Ukończone pozycje;",
		reportsLi3: "Najbardziej aktywni użytkownicy;",
		reportsLi4: "Najczęściej dodawane pozycje.",
		customizationTitle: "🎨 Personalizacja Wizualna",
		customizationDesc: "Wybierz swój ulubiony motyw kolorystyczny i dodaj logo do swojej listy.",
		backupTitle: "💾 Lokalna Kopia Zapasowa",
		backupDesc: "Twórz pliki kopii zapasowej i przywracaj dane w dowolnym momencie. Pełna kontrola w Twoich rękach.",
		footerTitle: "📱 Pobierz Ilst Teraz",
		footerDesc: "Zmień swój smartfon w inteligentne, prywatne i w pełni offline centrum list zadań."
	},
	th: {
		title: "Ilst - รายการแชร์เรียลไทม์",
		metaDescription: "Ilst คือแอปรายการแชร์ร่วมกัน: สร้างรายการซื้อของ ชวนสมาชิก และติดตามความเคลื่อนไหวเรียลไทม์ด้วยความเป็นส่วนตัวสูงสุด",
		metaKeywords: "ilst, รายการแชร์ร่วมกัน, รายการซื้อของ, แอปบันทึกงานกลุ่ม, รายการเรียลไทม์",
		heroSubtitle: "แอปรายการแชร์ร่วมกันที่รวดเร็วและอัปเดตเรียลไทม์",
		heroDescription: "Ilst คือแอปรายการทำงานร่วมกัน ไม่ว่าจะรายการซื้อของ งาน หรือกิจกรรมกลุ่ม สร้างและแชร์พร้อมติดตามการอัปเดตได้ทันที ปลอดภัยและเป็นส่วนตัว",
		downloadButton: "ดาวน์โหลดตอนนี้",
		downloadNote: "เปลี่ยนสมาร์ทโฟนของคุณให้เป็นศูนย์จัดการรายการที่ชาญฉลาด เป็นส่วนตัว และรองรับออฟไลน์เต็มรูปแบบ",
		realtimeTitle: "🔄 การแชร์และอัปเดตเรียลไทม์",
		realtimeDesc: "สร้างรายการซื้อของและชวนสมาชิก ทุกการเปลี่ยนแปลงและรายการใหม่จะซิงค์โดยตรงบนหน้าจอของทุกคนในเสี้ยววินาที",
		peopleTitle: "👥 เพิ่มสมาชิกในรายการ",
		peopleDesc: "ชวนครอบครัว เพื่อน หรือเพื่อนร่วมงานมาร่วมจัดการรายการ ทุกคนสามารถเพิ่ม แก้ไข และทำเครื่องหมายว่าเสร็จแล้วด้วยกันได้",
		manageTitle: "📝 สร้างและจัดการรายการ",
		manageLi1: "สร้างรายการร่วมกันได้อย่างรวดเร็ว;",
		manageLi2: "รองรับการเพิ่มรายการและหมวดหมู่ไม่จำกัด;",
		manageLi3: "การกรองขั้นสูง ค้นหา และประวัติการแก้ไข;",
		manageLi4: "สถานะการทำงานแสดงผลเรียลไทม์;",
		manageLi5: "ส่งออกรายการเป็นไฟล์ PDF ได้ง่ายดาย.",
		privacyTitle: "🔒 ความเป็นส่วนตัวและความปลอดภัยสูง",
		privacyDesc: "รายการของคุณได้รับการปกป้องและเข้าถึงได้เฉพาะผู้ที่คุณเชิญเท่านั้น ข้อมูลได้รับการเข้ารหัสอย่างปลอดภัย",
		itemsTitle: "🛍️ รายการสินค้าและหมวดหมู่",
		itemsDesc: "จัดการรายการสินค้า หมวดหมู่ และจำนวนได้อย่างง่ายดาย",
		reportsTitle: "📊 รายงานและสถิติ",
		reportsDesc: "แสดงภาพความคืบหน้าด้วยตัวกรองวันที่และกราฟสถิติที่ชัดเจน:",
		reportsLi1: "รายการที่สร้างทั้งหมด;",
		reportsLi2: "รายการที่เสร็จสมบูรณ์;",
		reportsLi3: "ผู้ร่วมจัดการรายการที่ใช้งานบ่อยที่สุด;",
		reportsLi4: "รายการสินค้าที่เพิ่มบ่อยที่สุด.",
		customizationTitle: "🎨 ตกแต่งธีมและสีสัน",
		customizationDesc: "เลือกธีมสีที่คุณชื่นชอบและใส่โลโก้เฉพาะตัวให้กับรายการของคุณ",
		backupTitle: "💾 สำรองข้อมูลในเครื่อง",
		backupDesc: "สร้างไฟล์สำรองและกู้คืนข้อมูลได้ทุกเมื่อที่คุณต้องการ ควบคุมข้อมูลด้วยตัวคุณเองเต็มที่",
		footerTitle: "📱 ดาวน์โหลดแอป Ilst ตอนนี้",
		footerDesc: "เปลี่ยนสมาร์ทโฟนของคุณให้เป็นศูนย์จัดการรายการที่ชาญฉลาด เป็นส่วนตัว และรองรับออฟไลน์เต็มรูปแบบ"
	},
	tr: {
		title: "Ilst - Real-Time Ortak Listeler",
		metaDescription: "Ilst, ortak bir liste uygulamasıdır: listeler oluşturun, arkadaşlarınızı ekleyin ve her şeyi gerçek zamanlı olarak takip edin. Tam gizlilik.",
		metaKeywords: "ilst, ortak listeler, alışveriş listesi uygulaması, paylaşımlı todo list, grup listeleri, gerçek zamanlı liste",
		heroSubtitle: "Hızlı ve gerçek zamanlı paylaşımlı liste uygulaması.",
		heroDescription: "Ilst, ortak bir liste uygulamasıdır. Alışveriş, görev veya plan listeleri oluşturun, arkadaşlarınızı davet edin ve tüm güncellemeleri anında takip edin.",
		downloadButton: "Şimdi İndir",
		downloadNote: "Akıllı telefonunuzu akıllı, güvenli ve tamamen çevrimdışı destekli bir liste merkezine dönüştürün.",
		realtimeTitle: "🔄 Gerçek Zamanlı Paylaşım ve Güncellemeler",
		realtimeDesc: "Kolayca listeler oluşturun ve üyeleri davet edin. Tüm değişiklikler ve yeni öğeler anında herkesin ekranında senkronize olur.",
		peopleTitle: "👥 Listelerinize Kişiler Ekleyin",
		peopleDesc: "Birlikte çalışmak için ailenizi, arkadaşlarınızı veya iş arkadaşlarınızı davet edin. Herkes öğe ekleyebilir, düzenleyebilir ve tamamlayabilir.",
		manageTitle: "📝 Listeler Oluşturun ve Yönetin",
		manageLi1: "Hızlı paylaşımlı listeler oluşturun;",
		manageLi2: "Sınırsız öğe ve kategori ekleme;",
		manageLi3: "Gelişmiş filtreleme, arama ve değişiklik geçmişi;",
		manageLi4: "Gerçek zamanlı tamamlanma durumu;",
		manageLi5: "PDF formatında dışa aktarma seçeneği.",
		privacyTitle: "🔒 Yüksek Gizlilik ve Güvenlik",
		privacyDesc: "Listeleriniz korunur ve yalnızca davet ettiğiniz kişiler erişebilir. Güvenli veri şifreleme.",
		itemsTitle: "🛍️ Öğeler and Kategoriler",
		itemsDesc: "Öğeleri, kategorileri ve miktarları kolayca yönetin.",
		reportsTitle: "📊 Raporlar ve Gösterge Panelleri",
		reportsDesc: "Filtreler ve net grafiklerle ilerlemenizi görselleştirin:",
		reportsLi1: "Oluşturulan listeler;",
		reportsLi2: "Tamamlanan öğeler;",
		reportsLi3: "En aktif ortak çalışanlar;",
		reportsLi4: "En sık eklenen öğeler.",
		customizationTitle: "🎨 Görsel Özelleştirme",
		customizationDesc: "En sevdiğiniz renk temasını seçin ve listelerinize özel bir logo ekleyin.",
		backupTitle: "💾 Yerel Yedekleme",
		backupDesc: "İstediğiniz zaman yedek oluşturun ve verilerinizi geri yükleyin. Tüm kontrol sizde kalır.",
		footerTitle: "📱 Şimdi Ilst İndirin",
		footerDesc: "Akıllı telefonunuzu akıllı, güvenli ve tamamen çevrimdışı destekli bir liste merkezine dönüştürün."
	},
	uk: {
		title: "Ilst - Спільні списки в реальному часі",
		metaDescription: "Ilst — це додаток для спільних списків: створюйте списки, додавайте друзів та відстежуйте виконання задач у реальному часі з повною приватністю.",
		metaKeywords: "ilst, спільні списки, список покупок, список справ онлайн, групові списки, списки в реальному часі",
		heroSubtitle: "Швидкі спільні списки в реальному часі.",
		heroDescription: "Ilst — це зручний додаток для списків: створюйте списки, діліться ними та відстежуйте виконання задач у реальному часі. Усі списки миттєво синхронізуються.",
		downloadButton: "Завантажити зараз",
		downloadNote: "Перетворіть свій смартфон на розумний, приватний центр управління списками з підтримкою офлайн.",
		realtimeTitle: "🔄 Спільна робота в реальному часі",
		realtimeDesc: "Створюйте списки справ або покупок, запрошуйте учасників та миттєво спостерігайте за змінами на екрані.",
		peopleTitle: "👥 Додавайте людей до своїх списків",
		peopleDesc: "Запрошуйте друзів, родину чи колег. Кожен зможе додавати нові пункти, редагувати їх та відзначати виконаними.",
		manageTitle: "📝 Створення та управління списками",
		manageLi1: "Швидке створення спільних списків;",
		manageLi2: "Необмежена кількість пунктів та категорій;",
		manageLi3: "Фільтри, пошук та історія змін;",
		manageLi4: "Статус виконання задач у реальному часі;",
		manageLi5: "Експорт списків у формат PDF.",
		privacyTitle: "🔒 Конфіденційність та безпека",
		privacyDesc: "Ваші списки захищені та доступні тільки запрошеним користувачам. Надійне шифрування даних та безпечна синхронізація.",
		itemsTitle: "🛍️ Пункти та категорії",
		itemsDesc: "Легко керуйте елементами списків, категоріями та їхньою кількістю.",
		reportsTitle: "📊 Звіти та статистика",
		reportsDesc: "Відстежуйте прогрес за допомогою фільтрів по датах та наочних графіків:",
		reportsLi1: "Створено списків;",
		reportsLi2: "Виконано задач;",
		reportsLi3: "Активні учасники;",
		reportsLi4: "Популярні товари.",
		customizationTitle: "🎨 Персоналізація зовнішнього вигляду",
		customizationDesc: "Виберіть вашу улюблену тему та додайте логотип до списків.",
		backupTitle: "💾 Локальне резервне копіювання",
		backupDesc: "Створюйте резервні копії та відновлюйте дані в будь-який час. Все під вашим повним контролем.",
		footerTitle: "📱 Завантажте Ilst прямо зараз",
		footerDesc: "Перетворіть свій смартфон на розумний, приватний центр управління списками з підтримкою офлайн."
	},
	vi: {
		title: "Ilst - Danh sách chia sẻ thời gian thực",
		metaDescription: "Ilst là ứng dụng danh sách chia sẻ: tạo danh sách, thêm người và theo dõi mọi thứ trong thời gian thực. Sắp xếp danh sách thông minh, bảo mật cao.",
		metaKeywords: "ilst, danh sach chia se, danh sach mua sam, app ghi chu nhom, todo list dong, danh sach thoi gian thuc",
		heroSubtitle: "Ứng dụng danh sách chia sẻ nhóm nhanh và đồng bộ thời gian thực.",
		heroDescription: "Ilst là ứng dụng danh sách cộng tác thông minh. Tạo danh sách mua sắm, công việc hoặc sự kiện nhóm, thêm thành viên và theo dõi cập nhật tức thì với quyền riêng tư được bảo vệ tốt.",
		downloadButton: "Tải ngay",
		downloadNote: "Biến điện thoại của bạn thành một trung tâm danh sách thông minh, riêng tư và hỗ trợ offline hoàn hảo.",
		realtimeTitle: "🔄 Chia sẻ và cập nhật thời gian thực",
		realtimeDesc: "Tạo danh sách mua sắm và mời thành viên. Mọi thay đổi và mục mới sẽ được đồng bộ trực tiếp trên màn hình của mọi người trong vài phần trăm giây.",
		peopleTitle: "👥 Thêm thành viên vào danh sách",
		peopleDesc: "Mời gia đình, bạn bè hoặc đồng nghiệp tham gia quản lý danh sách. Mọi người đều có thể thêm, sửa và đánh dấu hoàn thành cùng nhau.",
		manageTitle: "📝 Tạo và quản lý danh sách",
		manageLi1: "Tạo danh sách chia sẻ nhóm nhanh chóng;",
		manageLi2: "Hỗ trợ thêm mục và danh mục không giới hạn;",
		manageLi3: "Bộ lọc nâng cao, tìm kiếm và lịch sử chỉnh sửa;",
		manageLi4: "Trạng thái hoàn thành được theo dõi thời gian thực;",
		manageLi5: "Xuất danh sách sang định dạng PDF dễ dàng.",
		privacyTitle: "🔒 Quyền riêng tư và bảo mật cao",
		privacyDesc: "Danh sách của bạn được bảo vệ và chỉ những người được bạn mời mới có thể truy cập. Mã hóa dữ liệu an toàn.",
		itemsTitle: "🛍️ Mục và Danh mục",
		itemsDesc: "Quản lý tên mục, danh mục và số lượng dễ dàng.",
		reportsTitle: "📊 Báo cáo và Thống kê",
		reportsDesc: "Trực quan hóa tiến trình của bạn với bộ lọc ngày và biểu đồ thống kê rõ ràng:",
		reportsLi1: "Danh sách đã tạo;",
		reportsLi2: "Mục đã hoàn thành;",
		reportsLi3: "Cộng tác viên tích cực nhất;",
		reportsLi4: "Mục được thêm thường xuyên nhất.",
		customizationTitle: "🎨 Cá nhân hóa giao diện",
		customizationDesc: "Chọn chủ đề màu sắc yêu thích của bạn và thêm logo riêng cho danh sách.",
		backupTitle: "💾 Sao lưu cục bộ",
		backupDesc: "Tạo tệp sao lưu và khôi phục dữ liệu bất cứ khi nào bạn muốn. Bạn có toàn quyền kiểm soát dữ liệu của mình.",
		footerTitle: "📱 Tải ngay ứng dụng Ilst",
		footerDesc: "Biến điện thoại của bạn thành một trung tâm danh sách thông minh, riêng tư và hỗ trợ offline hoàn hảo."
	}
};

export default function IlstApp() {
	const location = useLocation();
	const [searchParams, setSearchParams] = useSearchParams();

	// Identificar o idioma ativo: parâmetro da URL -> idioma do navegador -> inglês (padrão)
	const activeLang = useMemo(() => {
		const queryLang = searchParams.get("lang")?.toLowerCase() || "";
		if (translations[queryLang]) {
			return queryLang;
		}
		const browserLang = navigator.language.split("-")[0].toLowerCase();
		if (translations[browserLang]) {
			return browserLang;
		}
		return "en";
	}, [searchParams]);

	const t = useMemo(() => {
		return translations[activeLang] || translations["en"];
	}, [activeLang]);

	const canonicalUrl = useMemo(() => {
		return `${SITE_BASE_URL}${location.pathname}?lang=${activeLang}`;
	}, [location.pathname, activeLang]);

	const changeLanguage = (lang: string) => {
		setSearchParams({ lang });
	};

	const isRtl = useMemo(() => activeLang === "ar", [activeLang]);

	return (
		<section className={styles.page} dir={isRtl ? "rtl" : "ltr"}>
			<Helmet>
				<title>{t.title}</title>
				<meta name="description" content={t.metaDescription} />
				<meta name="keywords" content={t.metaKeywords} />
				<link rel="canonical" href={canonicalUrl} />

				{/* Tags de SEO Internacional (hreflang) para indicar versões traduzidas alternadas */}
				{Object.keys(translations).map((lang) => (
					<link key={lang} rel="alternate" hrefLang={lang} href={`${SITE_BASE_URL}/ilst?lang=${lang}`} />
				))}
				<link rel="alternate" hrefLang="x-default" href={`${SITE_BASE_URL}/ilst?lang=en`} />
			</Helmet>

			<div className={styles.pageInner}>
				{/* Seletor Visual de Idiomas (flex wrap para suportar os 20 códigos) */}
				<div className={styles.langSelector} style={{ flexWrap: "wrap", justifyContent: "flex-end" }}>
					{Object.keys(translations).map((lang) => (
						<button
							key={lang}
							className={`${styles.langButton} ${activeLang === lang ? styles.langActive : ""}`}
							onClick={() => changeLanguage(lang)}
							style={{ textTransform: "uppercase", fontSize: "0.75rem", padding: "0.3rem 0.6rem" }}
						>
							{lang}
						</button>
					))}
				</div>

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
						<h2>{t.realtimeTitle}</h2>
						<p>{t.realtimeDesc}</p>
					</article>

					<article className={styles.section}>
						<h2>{t.peopleTitle}</h2>
						<p>{t.peopleDesc}</p>
					</article>

					<article className={styles.section}>
						<h2>{t.manageTitle}</h2>
						<ul>
							<li>{t.manageLi1}</li>
							<li>{t.manageLi2}</li>
							<li>{t.manageLi3}</li>
							<li>{t.manageLi4}</li>
							<li>{t.manageLi5}</li>
						</ul>
					</article>

					<article className={styles.section}>
						<h2>{t.privacyTitle}</h2>
						<p>{t.privacyDesc}</p>
					</article>

					<article className={styles.section}>
						<h2>{t.itemsTitle}</h2>
						<p>{t.itemsDesc}</p>
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
