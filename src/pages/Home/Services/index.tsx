import Lottie from "lottie-react";
import styles from "./styles.module.css";
import mobileDev from "../../../assets/animations/mobileDev.json";
import webDev from "../../../assets/animations/webDev.json";

export default function About() {

    const ViewWebAnimation = ()=> {return (<Lottie autoplay={true}  className={styles.animation} loop={true} animationData={webDev} />)}
    const ViewMobileAnimation = ()=> {return (<Lottie autoplay={true}  className={styles.animation} loop={true} animationData={mobileDev} />)}

    return (

        <section className={styles.services}>
            <div className={"circle_top circle_top_secondary"}/>
            <div className={"container "+styles.container}>
                <h2>Serviços</h2>
                <div className={styles.service_single}>
                    <div className={styles.service_content}>
                        <p className="paralax-left">
                            Desde uma simples landpage, sites pessoais ou comercial, até lojas virtuais e sistemas complexos para internet.
                        </p>
                    </div>
                    <ViewWebAnimation/>
                </div>

                <div className={styles.service_single}>
                    <ViewMobileAnimation/>
                    <div className={styles.service_content}>
                        <p className="paralax-right">
                        Aplicações nativas em multiplataformas para dispositivos móveis com Android ou iOS, disponibilizando em suas respectivas lojas.
                        </p>
                    </div>
                </div>
                
            </div>
        </section>
    )
}
