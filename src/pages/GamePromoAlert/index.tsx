import React, {useEffect} from 'react'
import logo from "../../assets/images/game_promo_alert.png";
import googlePlay from "../../assets/images/google-play.png";
import styles from "./styles.module.css";

export default function GamePromoAlert() {
  useEffect(()=>{
    document.title = "Game Promo Alert";
  },[])
  
  return (
    <section className={styles.dowload_app}>
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
