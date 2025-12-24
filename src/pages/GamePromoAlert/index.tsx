import  { useMemo} from 'react'
import logo from "../../assets/images/game_promo_alert.png";
import googlePlay from "../../assets/images/google-play.png";
import styles from "./styles.module.css";
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';
import { SITE_BASE_URL } from '../../config/constants';

export default function GamePromoAlert() {
    const location = useLocation();
  
    const canonicalUrl = useMemo(() => {
      return `${SITE_BASE_URL}${location.pathname}${location.search}`;
    }, [location.pathname, location.search]);
  
  return (
    <section className={styles.dowload_app}>
      <Helmet>
        <title>Game Promo Alert</title>
        <meta name="description" content="O Game Promo Alert é um aplicativo essencial para gamers que desejam economizar nas compras de jogos. Receba notificações sobre jogos gratuitos por tempo limitado, marque jogos favoritos e receba alertas de promoções nas principais lojas online. Compare preços facilmente e encontre as melhores ofertas." />
        <link rel="canonical" href={canonicalUrl} />
      </Helmet>
      <img src={logo} className={styles.dowload_app__logo} />

      <h1>Download now and get notified about game deals or find the store that offers the lowest price.</h1>

      <a href={"https://play.google.com/store/apps/details?id=br.com.jfcoder.promotion_game_alert"} className={styles.dowload_app_dowload}>
        <img className={styles.dowload_app_google_play_logo} src={googlePlay}/>
        <div> 
          <h4>GET IT ON </h4>
          <h2>Google Play</h2>
        </div>
      </a>

      <p>The "Game Promo Alert" app is an essential tool for gamers who want to save money on their game purchases. With it, you can receive notifications about free games for a limited time, ensuring you don't miss an opportunity to add a new game to your collection. Additionally, the app allows you to bookmark games and receive alerts when they are on sale at any of the major online game stores. "Game Promo Alert" also offers a price comparison tool, allowing you to find the best price available from different stores. With a simple and easy-to-use interface, this app is a great way to save money on your favorite game purchases.</p>
    </section>
  )
}
