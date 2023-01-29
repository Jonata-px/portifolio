
import styles from "./styles.module.css";

export default function About() {

    return (
        <section className={styles.container}>
            <div className={"circle_top"}/>
            <div className={styles.cicle_main}>
                
                <div className={styles.circle_middle}>
                    <div>
                        <h2>Freelancer</h2>
                        <p className="paralax">Trabalho de forma independente, 
                        com habilidades e conhecimentos para trabalhar em todas as camadas de um aplicativo. Desde a coleta e análise de requisitos, passando pelo projeto e desenvolvimento, até a implantação e manutenção. 
                        Minhas habilidades técnicas incluem a capacidade de desenvolver aplicativos web e móveis, bem como habilidades em diversas linguagens de programação, como JavaScript, C#, entre outras. Além de habilidades para trabalhar com banco de dados, sistemas operacionais, e ferramentas de desenvolvimento.
                        </p>

                    </div>
                </div>
            </div>
        </section>
    )
}
