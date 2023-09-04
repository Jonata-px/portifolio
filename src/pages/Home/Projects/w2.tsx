import React from 'react'
import Slider from '../Slider'

import image1 from "../../../assets/images/apps/w2/image1.jpg";
import image2 from "../../../assets/images/apps/w2/image2.jpg";
import image3 from "../../../assets/images/apps/w2/image3.jpg";
import image4 from "../../../assets/images/apps/w2/image4.jpg";
import image5 from "../../../assets/images/apps/w2/image5.jpg";
import image6 from "../../../assets/images/apps/w2/image6.jpg";

interface IProps{
  close?:()=>void,
}

export default function W2({close = ()=>{}}:IProps) {
  return (
    <Slider
        title='W2 Estacionamento'
        text='Aplicativo de gerenciamento de estacionamento com impressão de tiket. <br/> (Aplicativo Privado.)'
        images={[
          image1,
          image2,
          image3,
          image4,
          image5,
          image6,
        ]}
        close={close}
    />
  )
}
