import {useEffect, useState} from 'react';
import logoEmpel from "../../../assets/images/logoEmpel.png";
import reflexoterapia from "../../../assets/images/reflexoterapia.png";
import promotionGameAlert from "../../../assets/images/game_promo_alert.png";
import goalBuilder from "../../../assets/images/goalBuilder.png";
import vendas from "../../../assets/images/vendas.png";
import w2 from "../../../assets/images/w2-estacionamento.png";
import styles from "./styles.module.css";
import SolPlace from '../../../assets/images/solplace';
import {GiCoffeeCup} from "react-icons/gi";
// import Swiper core and required modules
import SwiperCore, {
    Pagination,
    Navigation,
    Autoplay
} from 'swiper';
import Vendas from './vendas';
import W2 from './w2';
SwiperCore.use([Autoplay,Pagination,Navigation]);

export default function Projects() {
    const [projects,setProjects] : any = useState([]);
    const [selectedSlide, setSelectedSlide] = useState<JSX.Element>();
    useEffect(()=>{
        setProjects([
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
                logo:reflexoterapia,
                name:"Reflexoterapeuta",
                url:"https://luciene.pages.dev/"
            },
            {
                logo:promotionGameAlert,
                name:"Promotion Game Alert",
                url:"https://play.google.com/store/apps/details?id=br.com.jfcoder.promotion_game_alert&hl=pt_BR&gl=US",
            },
            {
                logo:vendas,
                name:"Vendas",
                Slider:Vendas,
            },
            {
                logo:w2,
                name:"W2 Estacionamento",
                Slider:W2,
            },
            {
                logo:goalBuilder,
                name:"Goal Builder",
                url:"https://play.google.com/store/apps/details?id=br.com.jfcoder.goalbuilder&hl=pt_BR&gl=US",
            },
            {
                logoSvg:GiCoffeeCup,
                name:"Soom, more",
            },
        ]);
    },[]);

    const close = ()=>{
        setSelectedSlide(undefined);
    }

    const ViewSlider:(props: any) => JSX.Element = ()=>{
        if(selectedSlide == undefined) return <></>;


        return selectedSlide;
    }

    return (
        <section className={styles.projects}>
            <ViewSlider close={close}/>
            <div className={"circle_top"}/>
                <div className="container">
                <h2>Desenvolvimentos e participações</h2>

                <div className="paralax">
                <div className={styles.projects_wrap}>

                    {
                        projects.map((Val : any,key : number)=>{

                        if(!Val.url && !Val.Slider){
                            return(
                                <div key={key} className={styles.soom}>
                                    <div>
                                        <Val.logoSvg/>
                                        <p>Em breve, mais</p>
                                    </div>
                                </div>
                            )
                        }

                        const handleClick = ()=>{
                            if(Val.Slider){
                                setSelectedSlide(Val.Slider({close:close}));
                                return false;
                            }
                        }

                        return(
                                <a target='__blanck' href={Val.url} key={key} onClick={handleClick} >
                                    {Val.logo ?
                                        <img src={Val.logo} alt={Val.name} title={Val.name}/>
                                        :<div title={Val.name}><Val.logoSvg className={styles[Val.name.replace(/ /g,"")]}/></div>
                                    }
                                    
                                </a>
                            )
                        })
                    }      
                    </div>

                    <div className={styles.link_wrap}>
                        <a href='https://play.google.com/store/apps/dev?id=4780312375531103822' className={styles.link}>Página do desenvolvedor Google Play</a>
                    </div>
                </div>

            </div>
           
        </section>
    );
}