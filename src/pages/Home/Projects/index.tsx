import {useEffect, useState} from 'react';
import logoEmpel from "../../../assets/images/logoEmpel.png";
import reflexoterapia from "../../../assets/images/reflexoterapia.png";
import promotionGameAlert from "../../../assets/images/game_promo_alert.png";
import styles from "./styles.module.css";
import SolPlace from '../../../assets/images/solplace';
import {GiCoffeeCup} from "react-icons/gi";
// import Swiper core and required modules
import SwiperCore, {
    Pagination,
    Navigation,
    Autoplay
} from 'swiper';
SwiperCore.use([Autoplay,Pagination,Navigation]);

export default function Technologies() {
    const [technologies,setTechnologies] : any = useState([]);
    useEffect(()=>{
        setTechnologies([
            {
                logo:logoEmpel,
                name:"EMPEL Engenharia",
                url:"https://jonata-px.github.io/empel_site/"
            },
            {
                logoSvg:SolPlace,
                name:"Sol Place Monitore",
                url:"https://play.google.com/store/apps/details?id=com.solplace.solplace_monitoramento&hl=pt_BR&gl=US",
            },
            {
                logo:promotionGameAlert,
                name:"Promotion Game Alert",
                url:"https://play.google.com/store/apps/details?id=br.com.jfcoder.promotion_game_alert&hl=pt_BR&gl=US",
            },
            {
                logo:reflexoterapia,
                name:"Reflexoterapeuta",
                url:"https://luciene.pages.dev/"
            },
            {
                logoSvg:GiCoffeeCup,
                name:"Soom, more",
            },
        ]);
    },[]);

        return (
        <section className={styles.projects}>
            <div className={"circle_top"}/>
                <div className="container">
                <h2>Desenvolvimentos e participações</h2>

                <div className={styles.projects_wrap+" paralax"}>

                    {
                        technologies.map((Val : any,key : number)=>{

                        if(!Val.url){
                            return(
                                <div key={key} className={styles.soom}>
                                    <div>
                                        <Val.logoSvg/>
                                        <p>Em breve, mais</p>
                                    </div>
                                </div>
                            )
                        }

                        return(
                                <a href={Val.url} key={key} >
                                    {Val.logo ?
                                        <img src={Val.logo} alt={Val.name} title={Val.name}/>
                                        :<div title={Val.name}><Val.logoSvg className={styles[Val.name.replace(/ /g,"")]}/></div>
                                    }
                                    
                                </a>
                            )
                        })
                    }      
                </div>
            </div>
        </section>
    );
}