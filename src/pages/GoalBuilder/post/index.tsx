import styles from "./styles.module.css";
import logo from "../../../assets/images/goalbuilder.png";
import googlePlay from "../../../assets/images/google-play.png";

export default function Post() {
  
  return (
    <div>
      <article  className={styles.article}>
        <div>
          <h1>The Power of Goal Setting: Why Establishing Goals and Committing Are Key to Success</h1>
          <br/>
          <p>In the journey of life, each of us faces a series of challenges, moments of reflection, and opportunities for personal growth. However, it's common to wonder: how can we steer our lives in a meaningful direction and achieve lasting fulfillment? The answer often lies in setting clear goals and committing to them. In this post, we'll explore the importance of setting goals in life and how commitment plays a vital role in this process.</p>
          <br/>
          <h2>1. Having Clear Direction:</h2>
          <p>Setting goals in life provides a clear direction for where we're headed. When we define tangible goals, we create a roadmap that guides us toward our dreams and aspirations. These goals can be big or small, short-term or long-term, but they all help us visualize the future we desire and take action to achieve it.</p>
          <br/>
          <h2>2. Motivation and Focus:</h2>
          <p>Goals act as a source of motivation and focus. When we have defined goals, we're driven to consistently work towards them. The clarity of our goals keeps us focused on our priorities and helps us avoid distractions that may derail our path.</p>
          
          <br/>
          <h2>3. Personal Growth and Development:</h2>
          <p>Setting and pursuing goals challenges us to step out of our comfort zone and grow as individuals. By facing challenges and overcoming obstacles on the path to achieving our goals, we develop skills, resilience, and self-confidence. Each step towards our goal brings us closer not only to the desired outcome but also to an enhanced version of ourselves.</p>
          
          <br/>
          <h2>4. Sense of Achievement:</h2>
          <p>Achieving goals brings a deep sense of accomplishment and personal satisfaction. By reaching milestones we've set for ourselves, we experience a feeling of pride and contentment that boosts our self-esteem and self-worth. These moments of celebration remind us of the power of commitment and determination in the face of challenges.</p>
          
          <br/>
          <h2>5. Building Healthy Habits:</h2>
          <p>Setting goals in life encourages us to adopt healthy and productive habits. As we work towards our goals, we cultivate routines and practices that support us on our journey. These positive habits become integral parts of our lifestyle and help us maintain momentum even when we encounter difficulties.</p>
          
          <br/>
          <h2>Conclusion:</h2>
          <p>Ultimately, setting goals in life and committing to them is an exciting and rewarding journey. By defining a clear direction, finding motivation, growing personally, experiencing achievement, and building healthy habits, we create a life rich in meaning and purpose. Therefore, let each of us embrace the challenge of setting ambitious goals and pursuing our dreams with renewed dedication and commitment. Remember always: the power to transform our lives lies in our own hands.</p>
          <br/>
          <br/>
          <br/>
        </div>
      </article>
    
      <div  className={styles.dowload_app}>
        <img src={logo} className={styles.dowload_app__logo} />

        <h3>Goal Builder</h3>
        <h1>Download now and create and manage your goals efficiently</h1>

        <a href={"https://play.google.com/store/apps/details?id=br.com.jfcoder.goalbuilder"} className={styles.dowload_app_dowload}>
          <img className={styles.dowload_app_google_play_logo} src={googlePlay}/>
          <div> 
            <h4>GET IT ON </h4>
            <h2>Google Play</h2>
          </div>
        </a>

        <p>Goal Builder allows you to set clear goals, track your progress, and stay committed to your personal success. Download now and start your journey towards a more fulfilled life!</p>
        <br/>
        <br/>
        <br/>
        <br/>
      </div>
    </div>
  )
}
