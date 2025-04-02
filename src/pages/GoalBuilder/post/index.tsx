import styles from "./styles.module.css";
import logo from "../../../assets/images/goalbuilder.png";
import googlePlay from "../../../assets/images/google-play.png";

export default function Post() {
  
  return (
    <div>
      <header className={styles.download_app}>
          <img src={logo} className={styles.download_app__logo} />
          <h1>Targets 🎯 - Achieve Your Goals Efficiently</h1>
          <p>Create, organize, and track your goals with the most intuitive productivity app.</p>
          <a href={"https://play.google.com/store/apps/details?id=br.com.jfcoder.goalbuilder"} className={styles.download_app_download}>
              <img className={styles.download_app_google_play_logo} src={googlePlay}/>
              <div> 
                <h4>GET IT ON</h4>
                <h2>Google Play</h2>
              </div>
          </a>
      </header>
      <br/>
      <br/>
      <section className={styles.features}>
          <h2>Why Choose Targets?</h2>
          <br/>
          <ul>
              <li>✅ Set goals quickly and start your journey to success.</li>
              <li>📊 Track your progress visually and stay motivated.</li>
              <li>📅 Receive notifications for your scheduled tasks.</li>
              <li>🏆 Get a performance summary when completing a goal: completed tasks, focus level, and total time taken.</li>
              <li>📌 Access your daily tasks directly from the home screen widget.</li>
          </ul>
      </section>
      <br/>
      <br/>    
      <br/>
      <br/>
      <footer className={styles.footer}>
          <p>&copy; 2025 Targets. All rights reserved.</p>
      </footer>

    </div>
  )
}
