import {FaLinkedin, FaGithub} from "react-icons/fa";
import styles from "./styles.module.css";
import getNinjas from "../../../assets/Icons/getNinjas.png";
export default function About() {

    return (
        <section id="sobre" className={styles.container}>
            <div className={"circle_top "+styles.circle_top}> 
                <div className={styles.socials}>
                    <a target="_blank" title="Linkedin" href="https://www.linkedin.com/in/jonat%C3%A3-felix-609173209/" ><FaLinkedin/></a>
                    <a target="_blank" title="GitHub" href="https://github.com/Jonata-px" ><FaGithub/></a>
                    <a target="_blank" href="https://www.getninjas.com.br/anuncios/design-e-tecnologia/desenvolvimento-de-sites-e-sistemas/design-e-tecnologia-jonata-felix-da-conceicao?ref=internal" >
                        <img src={getNinjas} title="GetNinjas" />
                    </a>
                </div>
            </div>
            <div className={styles.cicle_main}>
                
                <div className={styles.circle_middle}>
                    <div>
                        <h2>Sobre</h2>
                        <p className="paralax">Desde 2020, eu tenho trabalhado como freelancer na área de programação. Com habilidade e conhecimento, no desenvolvimento de aplicativos e sistemas, buscando sempre entregar projetos e soluçoes de alta qualidade aos clientes. Minha dedicação e paixão pela programação fazem com que esteja sempre em constante evolução e em busca de novos desafios e oportunidades.</p>

                    </div>
                </div>
            </div>
        </section>
    )
}
