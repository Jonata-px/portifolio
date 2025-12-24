import {useEffect, useMemo, useState} from 'react'
import styles from "./styles.module.css";
import Post from './post';
import PostPT from './post/postPT';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';
import { SITE_BASE_URL } from '../../config/constants';

export default function GoalBuilder() {
  const [lang, setLang] = useState<string>("en");
  function getUserLanguage() {

    var userLanguage = navigator.language;
    return userLanguage.split('-')[0]; // Retorna apenas o código de idioma (ex: 'en' ou 'pt')
  }
  useEffect(()=>{
    let userLang = getUserLanguage();
    setLang(userLang);
  },[])


  const location = useLocation();

  const canonicalUrl = useMemo(() => {
    return `${SITE_BASE_URL}${location.pathname}${location.search}`;
  }, [location.pathname, location.search]);
  
  return (
    <section className={styles.main}>
      <Helmet>
        <title>Targets</title>
          {lang === 'pt' ? ( // Se for português
              <>
                <meta name="description" content="O Targets é o melhor aplicativo para criar, gerenciar e acompanhar metas de forma intuitiva e eficiente. Baixe agora e alcance seus objetivos!" />
                <meta name="keywords" content="app de metas, aplicativo de produtividade, gerenciamento de objetivos, organização de tarefas, foco, planejamento pessoal" />
              </>
            ) : ( // Se for inglês (ou outro idioma)
              <>
                <meta name="description" content="Targets is the best app for creating, managing, and tracking goals in an intuitive and efficient way. Download now and achieve your objectives!" />
                <meta name="keywords" content="goal app, productivity app, goal management, task organization, focus, personal planning" />
              </>
            )
          }  
        <link rel="canonical" href={canonicalUrl} />
      </Helmet>
      <div className={styles.container}>
        {
          lang === "pt" ?  <PostPT/>: <Post/>
        }
      </div>
    </section>
  )
}
