
import styles from "./styles.module.css";
import logo from "../../../assets/images/goalbuilder.png";
import googlePlay from "../../../assets/images/google-play.png";
export default function PostPT() {
  
  return (
  <div>
      <header className={styles.dowload_app}>
        <img src={logo} className={styles.dowload_app__logo} />
        <h1>Targets 🎯 - Alcance seus Objetivos com Eficiência</h1>
        <p>Crie, organize e acompanhe suas metas com o aplicativo de produtividade mais intuitivo.</p>
        <a href={"https://play.google.com/store/apps/details?id=br.com.jfcoder.goalbuilder"} className={styles.dowload_app_dowload}>
            <img className={styles.dowload_app_google_play_logo} src={googlePlay}/>
            <div> 
              <h4>BAIXE NO </h4>
              <h2>Google Play</h2>
            </div>
          </a>
      </header>
      <br/>
      <br/>
      <section className={styles.features}>
          <h2>Por que escolher o Targets?</h2>
          <br/>
          <ul>
              <li>✅ Defina metas rapidamente e comece sua jornada para o sucesso.</li>
              <li>📊 Acompanhe seu progresso visualmente e mantenha-se motivado.</li>
              <li>📅 Receba notificações para suas tarefas agendadas.</li>
              <li>🏆 Veja seu desempenho ao concluir um alvo: tarefas cumpridas, nível de foco e tempo total.</li>
              <li>📌 Acesse suas tarefas do dia diretamente pelo widget na tela inicial.</li>
          </ul>
      </section>
      <br/>
      <br/>    
      <br/>
      <br/>
      <footer className={styles.footer}>
          <p>&copy; 2025 Targets. Todos os direitos reservados.</p>
      </footer>
      {/* </div> */}
    </div>
  )
}
