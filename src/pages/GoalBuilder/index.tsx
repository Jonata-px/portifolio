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
    let userLang = getUserLanguage();
    setLang(userLang);
    document.title = "Targets";
    if(userLang === 'pt'){
      // document.title = "O poder do estabelecimento de metas";
      document.documentElement.lang = userLang;
      updateMetaTags(userLang);
    }else{
      // document.title = "The Power of Goal Setting";
      document.documentElement.lang = "en";
      updateMetaTags('en');
    }
    
  },[])

  function updateMetaTags(language:string) {
    var descriptionMetaTag = document.querySelector('meta[name="description"]');
    var keywordsMetaTag = document.querySelector('meta[name="keywords"]');
    
    // Defina as descrições e palavras-chave com base no idioma
    if (language === 'pt') { // Se for português
      descriptionMetaTag?.setAttribute('content', 'O Targets é o melhor aplicativo para criar, gerenciar e acompanhar metas de forma intuitiva e eficiente. Baixe agora e alcance seus objetivos!');
      keywordsMetaTag?.setAttribute('content', 'app de metas, aplicativo de produtividade, gerenciamento de objetivos, organização de tarefas, foco, planejamento pessoal');
    } else { // Se for inglês (ou outro idioma)
      descriptionMetaTag?.setAttribute('content', 'Targets is the best app for creating, managing, and tracking goals in an intuitive and efficient way. Download now and achieve your objectives!');
      keywordsMetaTag?.setAttribute('content', 'goal app, productivity app, goal management, task organization, focus, personal planning');      
    }
  }
  
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
