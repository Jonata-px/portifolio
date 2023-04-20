import styles from "./styles.module.css";
import { useEffect } from "react";
import {FaAngleDown} from "react-icons/fa";
export default function Home() {

    const draw = ()=>{
        const c:any  = document.getElementById("matrix");
        const letters = ["J","a","v","a","S","c","r","i","p","t","N","o","d","e","M","y","S","q","l","R","e","a","c","t","G","i","t","H","T","M","L","5","C","S","S",".","=","*","+","-","<",">","¦","｜",";"];
        const fontSize = 17
        // Definindo o seu contexto
        const ctx = c.getContext("2d");

        c.height = window.innerHeight;
        c.width = window.innerWidth;

        const columns = c.width / fontSize;

        const drops = new Array(Math.floor(columns)).fill(1);

        function draw() {
            // preenchendo a tela toda de preto com opacidade
            // esse truque da opacidade será útil para o efeito 
            // das letras sumindo aos poucos
            ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
            ctx.fillRect(0, 0, c.width, c.height);
        
            // definindo a cor e estilo da fonte
            ctx.fillStyle = "#0F0";
            ctx.font = `${fontSize}px arial`;
        
            for (let i = 0; i < drops.length; i++) {
              // pegando uma letra randomicamente no nosso array
                const text = letters[Math.floor(Math.random() * letters.length)];
        
              // escrevendo na tela
                ctx.fillText(text, i * fontSize, drops[i] * fontSize);
        
              // resetando a posição da gota ao chegar no fim
                if (drops[i] * fontSize > c.height && Math.random() > 0.95) {
                    drops[i] = 0;
                }
              // movendo as gotas no eixo y
                drops[i]++;
            }
        
            // chamada recursiva para animar quadro a quadro
            setTimeout(()=>{
                window.requestAnimationFrame(draw);
            },50)
        
        }
        
        // chamando a função criada
        draw()
    }

    useEffect(()=>{
        draw();
    },[])


    return (
        <section className={styles.container}>
            <canvas id="matrix"></canvas>
            <div className={styles.content}>
                <div className={styles.content_name+" paralax"}>
                    <h4>Portifolio</h4>
                    <h1>Jonatã Felix</h1>
                    <h5>FULL-STACK DEVELOPER</h5>

                    <a href={"#sobre"} className={styles.contact_btn}>Saiba Mais <FaAngleDown/></a>
                </div>
            </div>
        </section>
    )
}
