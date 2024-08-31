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
        name:"React js"
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
        ico:DiGoogleCloudPlatform,
        name:"Google Clound"
      },
      {
        ico:DiFirebase,
        name:"Firebase"
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
      // {
      //   ico:FaCloudflare,
      //   name:"Cloudflare"
      // },
      // {
      //   ico:FaAws,
      //   name:"AWS"
      // },
      // {
      //   ico:DiNetmagazine,
      //   name:".NET"
      // },
      // {
      //   ico:DiNginx,
      //   name:"Nginx"
      // },
      // {
      //   ico:FaDocker,
      //   name:"Docker"
      // },

      
    ]);
  },[]);

    return (
      <section id="technologies">
        <div className={"circle_top circle_top_secondary"}/>
        <div className="container">
          <h2>Principais tecnologias</h2>

          <div className=" paralax">
            <Swiper slidesPerView={13}
            // loop={true} loopFillGroupWithBlank={true}
            autoplay={{
              "delay": 5000,
              "disableOnInteraction": false
            }} 
            spaceBetween={60} 
            freeMode={true} 
            pagination={{
              "clickable": true,
            }} 
            navigation={true}  
            breakpoints={{
                  "300": {
                      "slidesPerView": 3,
                      "spaceBetween": 40
                  },
                  "400": {
                      "slidesPerView": 4,
                      "spaceBetween": 40
                  },
                  "500": {
                      "slidesPerView": 5,
                      "spaceBetween": 40
                  },
                  "640": {
                    "slidesPerView": 6,
                    "spaceBetween": 40
                  },
                  "868": {
                    "slidesPerView": 7,
                    "spaceBetween": 50
                  }
                }
              } 
              className="mySwiper">
                  {
                    technologies.map((Val : any,key : number)=>{
                      return(
                        <SwiperSlide key={key} className="slide" title={Val.name}>
                          {/* <img src={val} alt="technologie"/> */}
                          <Val.ico title={Val.name}/>
                          <small>{Val.name}</small>
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