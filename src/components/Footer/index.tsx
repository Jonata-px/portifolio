
import styles from "./styles.module.css";
import {FaLinkedin, FaGithub, FaWhatsapp} from "react-icons/fa";
import getNinjas from "../../assets/Icons/getNinjas.png";
export default function Header() {
    

    return (
        <footer className={styles.footer}>
            {/* <div className={"circle_top"}/>  */}
            
            <div className="container">
                <p>Envie um e-mail para</p>
                <a className="paralax" href="mailto:contato@jfcoder.com.br"><p>contato@jfcoder.com.br</p></a>
            </div>

            <div className="container">
                <p>Ou</p>

                <div className={styles.socials+" paralax"}>
                    <a target="_blank" href="https://api.whatsapp.com/send?phone=5511917613909&text=" title="WhatsApp" ><FaWhatsapp /></a>
                    <a target="_blank" title="Linkedin" href="https://www.linkedin.com/in/jonat%C3%A3-felix-609173209/" ><FaLinkedin/></a>
                    <a target="_blank" title="GitHub" href="https://github.com/Jonata-px" ><FaGithub/></a>
                    <a target="_blank" href="https://www.getninjas.com.br/anuncios/design-e-tecnologia/desenvolvimento-de-sites-e-sistemas/design-e-tecnologia-jonata-felix-da-conceicao?ref=internal" >
                        <img src={getNinjas} title="GetNinjas" />
                    </a>
                </div>
            </div>
            <div className="container">
                <small>@ Site Beveloped by Jonatã Felix · {new Date().getFullYear()}</small>
            </div>
        </footer>
    )
}
