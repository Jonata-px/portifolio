import React from 'react'
import Slider from '../Slider'

import image1 from "../../../assets/images/apps/vendas/image1.jpg";
import image2 from "../../../assets/images/apps/vendas/image2.jpg";
import image3 from "../../../assets/images/apps/vendas/image3.jpg";
import image4 from "../../../assets/images/apps/vendas/image4.jpg";
import image5 from "../../../assets/images/apps/vendas/image5.jpg";
import image6 from "../../../assets/images/apps/vendas/image6.jpg";

interface IProps{
  close?:()=>void,
}

export default function Vendas({close = ()=>{}}:IProps) {
  return (
    <Slider
        title='Vendas'
        text='Aplicativo de gerenciamento de vendas e emissão de recibo. <br/> (Aplicativo Privado.)'
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
