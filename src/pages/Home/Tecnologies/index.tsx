import {useEffect, useState} from 'react';
import { Swiper, SwiperSlide} from "swiper/react";
import "./styles.css";

import {FaDocker, FaJsSquare, FaAws, FaReact, FaNode, FaCloudflare, FaCss3Alt, FaHtml5, FaGithub, FaGitSquare} from "react-icons/fa";
import {GrMysql} from "react-icons/gr";
import {DiNginx, DiNetmagazine, DiGoogleCloudPlatform, DiFirebase} from "react-icons/di";
import {RiFlutterFill} from "react-icons/ri";
import { SiTypescript } from "react-icons/si";
import "swiper/css";
import "swiper/css/pagination"
import "swiper/css/navigation"


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
        ico:FaJsSquare,
        name:"JavaScript"
      },
      {
        ico:SiTypescript,
        name:"TypeScript"
      },
      {
        ico:FaReact,
        name:"React js / Recat Native"
      },
      {
        ico:RiFlutterFill,
        name:"Flutter"
      },
      {
        ico:FaNode,
        name:"Node js"
      },
      {
        ico:GrMysql,
        name:"MySql"
      },
      {
        ico:FaCss3Alt,
        name:"CSS3"
      },
      {
        ico:FaHtml5,
        name:"HTML5"
      },
      {
        ico:FaGithub,
        name:"GitHub"
      },
      {
        ico:FaGitSquare,
        name:"Git"
      },
      {
        ico:FaAws,
        name:"AWS"
      },
      {
        ico:DiNetmagazine,
        name:".NET"
      },
      {
        ico:DiNginx,
        name:"Nginx"
      },
      {
        ico:FaDocker,
        name:"Docker"
      },
      {
        ico:DiGoogleCloudPlatform,
        name:"Google Clound"
      },
      {
        ico:FaCloudflare,
        name:"Cloudflare"
      },
      {
        ico:DiFirebase,
        name:"Firebase"
      }
      
    ]);
  },[]);

    return (
      <section id="technologies">
        <div className={"circle_top"}/>
        <div className="container">
          <h2>Principais tecnologias</h2>

          <div className=" paralax">
            <Swiper slidesPerView={14}
            // loop={true} loopFillGroupWithBlank={true}
            // autoplay={{
            //   "delay": 5000,
            //   "disableOnInteraction": false
            // }} 
            spaceBetween={60} 
            freeMode={true} 
            pagination={{
              "clickable": true,
            }} 
            navigation={true}  
            breakpoints={{
                  "300": {
                      "slidesPerView": 4,
                      "spaceBetween": 30
                  },
                  "400": {
                      "slidesPerView": 5,
                      "spaceBetween": 30
                  },
                  "500": {
                      "slidesPerView": 6,
                      "spaceBetween": 30
                  },
                  "640": {
                    "slidesPerView": 8,
                    "spaceBetween": 30
                  },
                  "868": {
                    "slidesPerView": 9,
                    "spaceBetween": 40
                  }
                }
              } 
              className="mySwiper">
                  {
                    technologies.map((Val : any,key : number)=>{
                      return(
                        <SwiperSlide key={key} className="slide" >
                          {/* <img src={val} alt="technologie"/> */}
                          <Val.ico title={Val.name}/>
                        </SwiperSlide>  
                      )
                    })
                  }      
            </Swiper>
          </div>
        </div>
      </section>
    );
}