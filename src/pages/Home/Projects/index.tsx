import {useEffect, useState} from 'react';
import logoEmpel from "../../../assets/images/logoEmpel.png";
import menuWeb from "../../../assets/images/menuWeb.png";
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
            url:"https://empel.com.br/"
        },
        {
            logo:menuWeb,
            name:"Menu Web",
            url:"https://play.google.com/store/apps/details?id=net.menuweb&hl=pt_BR&gl=US"
        },
        {
            logoSvg:SolPlace,
            name:"Sol Place Monitore",
            url:"https://play.google.com/store/apps/details?id=com.solplace.solplace_monitoramento&hl=pt_BR&gl=US",
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