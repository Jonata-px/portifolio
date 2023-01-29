import React, {useEffect} from 'react'

export default function Header() {
    

    const getScroll = ()=>{
        var body:any = document.getElementById('root');

        body.addEventListener('scroll',()=>{
            var paralaxB:object | any = document.querySelectorAll('.paralax');
            var paralaxL:object | any = document.querySelectorAll('.paralax-left');
            var paralaxR:object | any = document.querySelectorAll('.paralax-right');
            var alturaJanela = body.offsetHeight;
            var alturaScroll = body.scrollTop;
            var header:object | any = document.querySelector('header');
            if(alturaScroll > 10 && window.innerWidth > 768){
                header.style.backgroundImage = 'linear-gradient(#eef0fd 5%,rgb(250, 250, 250))';
            }else{
                header.style.backgroundImage = 'linear-gradient(#eef0fd 5%,white)';
            }
            if(typeof paralaxB === 'object'){

                paralaxB.forEach(async(val:any,index:number)=>{
                    var alturaDiv = paralaxB[index].offsetHeight;
                    var distanciaTopo = paralaxB[index].offsetTop;
                    // let time:string = ""+index+90;

                    if(parseInt(alturaScroll + alturaJanela) >= distanciaTopo 
                    && parseInt(alturaScroll) < (distanciaTopo + alturaDiv) 
                    && paralaxB[index].style.opacity !== 1){
                        
                        // setTimeout(()=>{
                            paralaxB[index].style.opacity = 1;
                            paralaxB[index].style.bottom = 0;
                        // },parseInt(time));
                    }else{
                        paralaxB[index].style.opacity = 0;
                        paralaxB[index].style.bottom = "-50px";
                    }
                })
            }
            if(typeof paralaxL === 'object'){
                paralaxL.forEach((val:any,index:number)=>{
                    var alturaDiv = paralaxL[index].offsetHeight;
                    var distanciaTopo = paralaxL[index].offsetTop;
                    if(parseInt(alturaScroll + alturaJanela) >= distanciaTopo && parseInt(alturaScroll) < (distanciaTopo + alturaDiv)){
                        paralaxL[index].style.opacity = 1;
                        paralaxL[index].style.left = 0;
                    }else{
                        paralaxL[index].style.opacity = 0;
                        paralaxL[index].style.left = "-50px";
    
                    }
                })
            }
            if(typeof paralaxR === 'object'){
                paralaxR.forEach((val:any,index:number)=>{
                    var alturaDiv = paralaxR[index].offsetHeight;
                    var distanciaTopo = paralaxR[index].offsetTop;
                    if(parseInt(alturaScroll + alturaJanela) >= distanciaTopo && parseInt(alturaScroll) < (distanciaTopo + alturaDiv)){
                        paralaxR[index].style.opacity = 1;
                        paralaxR[index].style.right = 0;
                    }else{
                        paralaxR[index].style.opacity = 0;
                        paralaxR[index].style.right = "-50px";
                    }
                })
            }

        })

        body.scrollTop = body.scrollTop + 1;
    }
    
    useEffect(()=>{
        getScroll();
    },[])

    return (
        <header>
            <div className="contaner">

            </div>
        </header>
    )
}
