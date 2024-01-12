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
import { CheckCircle, ChevronRight, ChevronsRight, Link } from "lucide-react"
import Slide from './home/Slide'
// import 'react-id-swiper/lib/styles/css/swiper.css';
import _1 from "./assets/bg/1.png"
import logoRva from "./assets/logoRva.png"
import { Divider as DividerAnt,Card } from 'antd'
import Section from './layout/Section'
import { ButtonDanger } from './layout/Button'
import Motdg from './home/Motdg'
import { SITEWEB_URL, oldUrl } from './fcts/helper'
const { Meta } = Card;
import { Fade,Slide as SlideAnim, Zoom } from "react-awesome-reveal";



export const Head = () => {
  return (
    <Slide />
  )
}
export const Actu = ({titre,description,dt,img}) => {
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
          title={<div className='text-center'>{titre}</div>}
          description={
            <div className='w-full'>
            {description}
            <div className='flex w-[100%] justify-end'>
              <div className='text-[11px] font-semibold text-black py-4'>Publié le {dt}</div>
            </div>
            <div className='flex w-[100%] justify-center'>
              <a className='bg-blue-800 text-white rounded-full px-3 py-1 flex justify-center items-center gap-3' href="https://">
                <Link size={14} /> Lire article
              </a>
            </div>
            
            </div>
          } />
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
          <SlideAnim direction='right' >
          <div className='flex flex-col justify-between w-full '>
            <div className='w-full mb-3'>
              <DividerAnt><h1 className={titre}>Dèrnieres infos</h1></DividerAnt>
            </div>
            <div className='grid grid-cols-3 gap-3 flex-wrap'>
              <Actu titre={"Voeux de nouvel an"} 
              dt="Le 10/01/2024"
              description={
                  <div>
                    <div className='line-clamp-2'>La Direction Général a organisé un echange de voeux</div>
                   
                  </div>
                }  />
              <Actu img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuvd8dsLLCROuEg10o5FqctqKDTRZGbXWewQ&usqp=CAU" 
                titre={"Avancement des travaux"} 
                dt="Le 10/01/2024"
                description={
                  <div>
                    <div className='line-clamp-2'>La Direction Général a organisé un echange de voeux</div>
                   
                  </div>
                }  
              />
              <Actu img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQe0HsXLy3belnxrtSPUu18_3X-1M5ygh51VQ&usqp=CAU" 
                titre={"Aerport de Luano en réhabilitation"} 
                dt="Le 10/01/2024"
                description={
                  <div>
                    <div className='line-clamp-2'>La Direction Général a organisé un echange de voeux</div>
                   
                  </div>
                } 
              />
              <Actu img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQe0HsXLy3belnxrtSPUu18_3X-1M5ygh51VQ&usqp=CAU" 
                titre={"Aerport de Luano en réhabilitation"} 
                dt="Le 10/01/2024"
                description={
                  <div>
                    <div className='line-clamp-2'>La Direction Général a organisé un echange de voeux</div>
                    
                  </div>
                } 
              />
              <Actu img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQe0HsXLy3belnxrtSPUu18_3X-1M5ygh51VQ&usqp=CAU" 
                titre={"Aerport de Luano en réhabilitation"} 
                dt="Le 10/01/2024"
                description={
                  <div>
                    <div className='line-clamp-2'>La Direction Général a organisé un echange de voeux</div>
                    
                  </div>
                } 
              />
            </div>
            <div className='justify-center pt-9 pb-2 flex'>
              <ButtonDanger text={<span className='flex gap-2'>Toutes les actualités <ChevronsRight /></span>} />
            </div>
          </div>
          </SlideAnim>
        </Section>
        <Section bg={"bg-blue-500"} style={{backgroundImage:`url(${SITEWEB_URL+"1.png"})`}}>
          <SlideAnim >
           <div className={paddingContent}>
              <Motdg  />
           </div>
           </SlideAnim>
        </Section>
        <Section>
        <Zoom>
        <div className={`bg-white py-3 -mt-[10px]`}>
          <div className="">
            <iframe src={`${oldUrl}?page=sectionmission`} className='border-0' style={{"width":"100%", "height":"650px"}} />
          </div>
        </div>
        </Zoom>
        </Section>
      </Container>
    </main>
  )
}
