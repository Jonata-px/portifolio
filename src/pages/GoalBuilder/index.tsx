import {useEffect, useState} from 'react'
import styles from "./styles.module.css";
import Post from './post';
import PostPT from './post/postPT';

export default function GoalBuilder() {
  const [lang, setLang] = useState<string>("en");
  function getUserLanguage() {

    var userLanguage = navigator.language;
    return userLanguage.split('-')[0]; // Retorna apenas o código de idioma (ex: 'en' ou 'pt')
  }
  useEffect(()=>{
    console.log(getUserLanguage());
    let userLang = getUserLanguage();
    setLang(userLang);
    if(userLang === 'pt'){
      document.title = "O poder do estabelecimento de metas";
      document.documentElement.lang = userLang;
    }else{
      document.title = "The Power of Goal Setting";
      document.documentElement.lang = "en";
    }
    
  },[])
  
  return (
    <section className={styles.main}>
      <div className={styles.container}>
        {
          lang === "pt" ?  <PostPT/>: <Post/>
        }
      </div>
    </section>
  )
}
