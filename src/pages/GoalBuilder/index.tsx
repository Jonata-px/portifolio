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
    document.title = "Goal Builder";
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
      descriptionMetaTag?.setAttribute('content', 'Descubra a importância de estabelecer metas claras e se comprometer com elas. Explore como o estabelecimento de metas pode levar ao crescimento pessoal, motivação e realização.');
      keywordsMetaTag?.setAttribute('content', 'estabelecimento de metas, comprometimento, crescimento pessoal, motivação, realização, sucesso');
    } else { // Se for inglês (ou outro idioma)
      descriptionMetaTag?.setAttribute('content', 'Discover the importance of setting clear goals and committing to them. Explore how goal setting can lead to personal growth, motivation, and achievement.');
      keywordsMetaTag?.setAttribute('content', 'goal setting, commitment, personal growth, motivation, achievement, success');
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
