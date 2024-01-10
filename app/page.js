"use client"
import { Button,Divider } from '@nextui-org/react'
import { Image } from '@nextui-org/react'
import Container from './layout/Container'
import { bg, bgMin, paddingContent, textColor, titre } from './CONST/global'
// import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import avion from "./../app/assets/avion.jpeg"
import { CheckCircle, ChevronRight, ChevronsRight } from "lucide-react"
import Slide from './home/Slide'
// import 'react-id-swiper/lib/styles/css/swiper.css';
import _1 from "./assets/bg/1.png"
import logoRva from "./assets/logoRva.png"
import { Divider as DividerAnt,Card } from 'antd'
import Section from './layout/Section'
import { ButtonDanger } from './layout/Button'
import Motdg from './home/Motdg'
import { SITEWEB_URL } from './fcts/helper'
const { Meta } = Card;



export const Head = () => {
  return (
    <Slide />
  )
}
export const Actu = ({titre,description,img}) => {
  return (
    <div className=''>
      <Card
        hoverable
        style={{
          width: "100%",
        }}
        className='shadow-sm'
        cover={<img className='max-h-[200px] min-h-[200px]' alt="example" src={img?img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuvd8dsLLCROuEg10o5FqctqKDTRZGbXWewQ&usqp=CAU"} />}
      >
        <Meta 
          title={titre}
          description={description} />
      </Card>
    </div>
  )
}
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Container
        header={<Head />}
        headerBg={"bg-blue-800"}
        headerBgImgs="https://media.istockphoto.com/id/1477997501/photo/airport-waiting-area-with-luggages-empty-seats-and-blurred-background.webp?b=1&s=170667a&w=0&k=20&c=Ka3XsWc6hzQXho0pfG1lrpexm92cAc1Sm7lYDF7Grb0="
      >
        <Section padding={true}>
          <div className='flex flex-col justify-between w-full '>
            <div className='w-full mb-3'>
              <DividerAnt><h1 className={titre}>Dèrnieres infos</h1></DividerAnt>
            </div>
            <div className='grid grid-cols-3 gap-3 flex-wrap'>
              <Actu titre={"Voeux de nouvel an"} description={
                  <div>
                    <div className='line-clamp-2'>La Direction Général a organisé un echange de voeux</div>
                    <div className="text-sm text-end">Le 10/01/2024</div>
                  </div>
                }  />
              <Actu img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuvd8dsLLCROuEg10o5FqctqKDTRZGbXWewQ&usqp=CAU" 
                titre={"Avancement des travaux"} 
                description={
                  <div>
                    <div className='line-clamp-2'>La Direction Général a organisé un echange de voeux</div>
                    <div className="text-sm text-end">Le 10/01/2024</div>
                  </div>
                }  
              />
              <Actu img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQe0HsXLy3belnxrtSPUu18_3X-1M5ygh51VQ&usqp=CAU" 
                titre={"Aerport de Luano en réhabilitation"} 
                description={
                  <div>
                    <div className='line-clamp-2'>La Direction Général a organisé un echange de voeux</div>
                    <div className="text-sm text-end">Le 10/01/2024</div>
                  </div>
                } 
              />
              <Actu img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQe0HsXLy3belnxrtSPUu18_3X-1M5ygh51VQ&usqp=CAU" 
                titre={"Aerport de Luano en réhabilitation"} 
                description={
                  <div>
                    <div className='line-clamp-2'>La Direction Général a organisé un echange de voeux</div>
                    <div className="text-sm text-end">Le 10/01/2024</div>
                  </div>
                } 
              />
              <Actu img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQe0HsXLy3belnxrtSPUu18_3X-1M5ygh51VQ&usqp=CAU" 
                titre={"Aerport de Luano en réhabilitation"} 
                description={
                  <div>
                    <div className='line-clamp-2'>La Direction Général a organisé un echange de voeux</div>
                    <div className="text-sm text-end">Le 10/01/2024</div>
                  </div>
                } 
              />
            </div>
            <div className='justify-center pt-6 pb-2 flex'>
              <ButtonDanger text={<span className='flex gap-2'>Toutes les actualités <ChevronsRight /></span>} />
            </div>
          </div>
        </Section>
        <Section bg={"bg-blue-500"} style={{backgroundImage:`url(${SITEWEB_URL+"1.png"})`}}>
           <div className={paddingContent}>
              <Motdg  />
           </div>
        </Section>
      </Container>
    </main>
  )
}
