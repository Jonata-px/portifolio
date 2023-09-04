import {useEffect, useState} from 'react';
import { Swiper, SwiperSlide} from "swiper/react";
import styles from "./styles.module.css";

import 'swiper/css';
import 'swiper/css/zoom';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import Swiper core and required modules
import SwiperCore, {
  Pagination,
  Navigation,
  Autoplay,
  Zoom,
} from 'swiper';
SwiperCore.use([Autoplay,Pagination,Navigation]);

interface IProps{
  title:string,
  text:string,
  images:string[],
  close:Function,
}

export default function Slider({title,text,images,close}:IProps) {


    return (
      <div className={styles.slider}>
        <div className="container">
          <button onClick={()=>close()}>X</button>
          <h3>{title}</h3>

          <p dangerouslySetInnerHTML={{__html:text}}></p>

          <div className={styles.slider_wrap}>
            <Swiper     
            slidesPerView={3}
            breakpoints={{
              "300": {
                  "slidesPerView": 1,
                  "spaceBetween": 30
              },
              "400": {
                  "slidesPerView": 1,
                  "spaceBetween": 30
              },
              "500": {
                  "slidesPerView": 1,
                  "spaceBetween": 30
              },
              "640": {
                "slidesPerView": 2,
                "spaceBetween": 30
              },
              "868": {
                "slidesPerView": 3,
                "spaceBetween": 30
              }
            }
          }   
            zoom={true}
            navigation={true}
            pagination={{
              clickable: true,
            }}
            modules={[Zoom]}
            className="mySwiper"
          >
                  {
                    images.map((val : any,key : number)=>{
                      return(
                        <SwiperSlide key={key} className={styles.slide} >
                          <div className="swiper-zoom-container">
                            <img src={val}/>
                          </div>
                        </SwiperSlide>  
                      )
                    })
                  }      
            </Swiper>
          </div>
        </div>
      </div>
    );
}