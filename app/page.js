"use client"
import { Avatar, Button, Divider } from '@nextui-org/react'
import { Image } from '@nextui-org/react'
import Container from './layout/Container'
import { bg, bgMin, paddingContent, textColor, titre } from './CONST/global'
// import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import avion from "./../app/assets/avion.jpeg"
import { ArrowRight, ArrowRightCircle, BaggageClaim, CheckCircle, ChevronRight, ChevronsRight, Link, MapPinned, Plane, ShieldCheck, TowerControl } from "lucide-react"
import Slide from './home/Slide'
// import 'react-id-swiper/lib/styles/css/swiper.css';
import _1 from "./assets/bg/1.png"
import logoRva from "./assets/logoRva.png"
import { Divider as DividerAnt, Card, Carousel } from 'antd'
import Section from './layout/Section'
import { ButtonDanger } from './layout/Button'
import Motdg from './home/Motdg'
import { SITEWEB_URL, oldUrl } from './fcts/helper'
const { Meta } = Card;
import { Fade,Rotate, Slide as SlideAnim, Zoom } from "react-awesome-reveal";
import CardHome from './components/Home/Card'
import SlideHome from './components/Home/Slide'
import CountUp from 'react-countup';


const titre1 = "text-yellow-600 font-bold text-xl";
const titre2 = "text-white font-bold text-3xl ";



export const Entete = () => {
  return (
    <div className='w-full overflow-hidden h-auto'>

      {/* <Slide /> */}
      <Carousel autoplay={true} className='flex flex-col gap-5 '>
        <SlideHome lieu={"Kinshasa"} titre={"Réforme au sein de la RVA"} />
        <SlideHome lieu={"Kinshasa"} titre={"Informatisation de l'Aeroport de Goma"} />
        <SlideHome lieu={"Kinshasa"} titre={"Récrutement des ATC à kinshasa"} />
        <SlideHome lieu={"Kinshasa"} titre={"Nouvel aéroport à Mbuji mayi"} />
      </Carousel>
    </div>
  )
}
export const Actu = ({ titre, description, dt, img }) => {
  const imgDistant="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuvd8dsLLCROuEg10o5FqctqKDTRZGbXWewQ&usqp=CAU";
  return (
    <Fade duration={2000}>
    <div className=''>
      <div
        style={{
          width: "100%",
        }}
        // className={`flex gap-4 hover:shadow-md p-3 rounded-sm bg-[url("${img ? img : imgDistant}")]`}
        className={`w-[300px] h-[350px] bg-white rounded-md overflow-hidden hover:shadow-sm hover:bg-gray-50`
        }
      >
        <img src={imgDistant} className='w-full' style={{filter: "brightness(100%) contrast(100%) saturate(100%) blur(0px) hue-rotate(0deg)"}} />
        <div className='text-start mb-16 text-gray-800 px-4 py-2 flex flex-col'>
          <div className='text-start font-bold text-[16px] mb-4 line-clamp-1 '>{titre}</div>
          <div className='w-full text-justify line-clamp-4'>
            {description}
            {/* <div className='flex w-[100%] justify-end'>
              <div className='text-[11px] font-semibold text-black py-4'>Publié le {dt}</div>
            </div> */}
            {/* <div className='flex w-[100%] justify-center'>
                <a className='bg-blue-800 text-white rounded-full px-3 py-1 flex justify-center items-center gap-3' href="https://">
                  <Link size={14} /> Lire article
                </a>
              </div> */}

          </div>
          {/* <div className='flex-1'><Button color='warning' variant='solid' radius='full' className='text-white '>Detail article</Button></div> */}
        </div>
      </div>
    </div>
    </Fade>
  )
}
export const SectionCounter=({titre,nbre,icone})=>{
  return(
  <div className='flex flex-col gap-4 justify-center items-center w-full rounded-md '>
    <div className='text-blue-400'>{icone && icone}</div>
    <CountUp start={8990} end={nbre} enableScrollSpy={true} prefix='+'>
    {({ countUpRef, start }) => (
      <div className='font-[900] text-[40px] text-blue-950'>
        
        <span ref={countUpRef} />
      </div>
    )}
    </CountUp>
    <div className='font-bold text-blue-950'>{titre}</div>
   
  </div>
  )
} 

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Container
        padding={false}
        header={<Entete />}
        headerBg={"bg-white"}
      // headerBg={"bg-blue-900"}
      >
        <Section cls={"bg-gray-100 px-[200px] py-30 bg-[url('/7.png')] flex flex-col items-center justify-center"}>
          <p className='font-thin text-3xl mb-3 flex gap-3 items-center justify-start '>
            <ArrowRight strokeWidth={1} /> À la une
          </p>
          <div className='grid grid-cols-4 gap-3 flex-wrap justify-center items-center'>
            <Actu titre={"Voeux de nouvel an"}
              dt="Le 10/01/2024"
              description={
                <div>
                  <div className='line-clamp-2'>La Direction Général a organisé un echange de voeux</div>

                </div>
              } />
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

          </div>
          <div className='flex justify-center items-center py-4'><Button variant='solid' color='danger' radius='full'>Toutes les actualités</Button></div>
        </Section>
        <Section cls={"bg-blue-950 h-content px-[250px] flex flex-col gap-4"}>
          <p className={titre1} style={{ textAlign: "center" }}>Que faisons-nous ?</p>
          <p className={titre2} style={{ textAlign: "center" }}>Avec des Services qui garantissent la sécurité aéroportuaire</p>
          <div className='flex gap-4 py-11'>
            <CardHome icon={<TowerControl size={50} strokeWidth={1} />} titre={"Exemple 1"}>
              <div className='flex flex-col justify-between items-center h-full'>
                Morem area are psum dolor sitteme odern sectet aweur adipiscing always.<br />
                <div className='text-center justify-center items-center flex w-full'>
                  <Button variant='shadow' color='primary'>Decouvrir <ArrowRightCircle /></Button>
                </div>
              </div>
            </CardHome>
            <CardHome icon={<Plane size={50} strokeWidth={1} />} titre={"Exemple 2"}>
              <div className='flex flex-col justify-between items-center h-full'>
                Morem area are psum dolor sitteme odern sectet aweur adipiscing always.<br />
                <div className='text-center justify-center items-center flex w-full'>
                  <Button variant='shadow' color='primary'>Decouvrir <ArrowRightCircle /></Button>
                </div>
              </div>
            </CardHome>
            <CardHome icon={<ShieldCheck size={50} strokeWidth={1} />} titre={"Exemple 3"}>
              <div className='flex flex-col justify-between items-center h-full'>
                Morem area are psum dolor sitteme odern sectet aweur adipiscing always.<br />
                <div className='text-center justify-center items-center flex w-full'>
                  <Button variant='shadow' color='primary'>Decouvrir <ArrowRightCircle /></Button>
                </div>
              </div>
            </CardHome>
            <CardHome icon={<BaggageClaim size={50} strokeWidth={1} />} titre={"Exemple 4"}>
              <div className='flex flex-col justify-between items-center h-full'>
                Morem area are psum dolor sitteme odern sectet aweur adipiscing always.<br />
                <div className='text-center justify-center items-center flex w-full'>
                  <Button variant='shadow' color='primary'>Decouvrir <ArrowRightCircle /></Button>
                </div>
              </div>
            </CardHome>
          </div>
        </Section>
        <Zoom duration={1000}>
        <Section cls={"px-[250px]  backdrop-opacity-20 bg-center bg-cover filter"}>
            <div className="flex gap-14 items-center justify-center ">
              <div className='flex-1 flex flex-col gap-9 pt-5'>
                <div className='flex'>
                  <p className={`text-4xl w-fit text-yellow-500 rounded-full px-14 py-3 flex-1`}>Mot du Directeur Général</p>
                {/* <DividerAnt /> */}
                </div>
                <hr />
                <p className='text-justify'>
                <span className='text-[60px] font-bold'>،،</span>Objectively disintermediate focused sources and timely infomediaries. Proactively target extensive markets vis-a-vis competitive interfaces. Interactively integrate next-generation sources vis-a-vis multifunctional e-business. Credibly reinvent highly efficient channels without real-time supply chains. Professionally synergize 24/365 ROI for multifunctional alignments.
                  Continually mesh. <span className='text-[60px]' style={{writingMode:"revert-layer"}}>،،</span>
                </p>
              </div>
              <div>
                <Image radius='full' src={"https://newsaero.info/news/admin/assets/image/actualite/actualite7066.PNG"} className='w-[300px] h-[300px]' />
              </div>
            </div>
        </Section>
        </Zoom>
        <Section cls={""}>
          <div className='bg-yellow-50 flex gap-3 justify-between px-[250px] py-4 h-auto'>
              <div className='border rounded-md flex items-center justify-center w-full border-yellow-100 shadow-sm h-[300px]'><SectionCounter nbre={90} titre={"Entités"} icone={<MapPinned strokeWidth={1} size={40} />} /></div>
              <div className='border rounded-md flex items-center justify-center w-full border-yellow-100 shadow-sm h-[300px]'><SectionCounter nbre={54} titre={"Aéroports internationaux"} icone={<TowerControl strokeWidth={1} size={40} />} /></div>
              <div className='border rounded-md flex items-center justify-center w-full border-yellow-100 shadow-sm h-[300px]'><SectionCounter nbre={64} titre={"Aéroport Nationaux"} icone={<TowerControl strokeWidth={1} size={40} />} /></div>
              <div className='border rounded-md flex items-center justify-center w-full border-yellow-100 shadow-sm h-[300px]'><SectionCounter nbre={30} titre={"Aéroport Aérodromes"} icone={<TowerControl strokeWidth={1} size={40} />} /></div>
             
          </div>
        </Section>
        <Section cls={"bg-blue-950 h-content px-[250px] flex flex-col gap-4"}>
          {/* <p className={titre1} yle={{ textAlign: "center" }}>Que faisons-nous ?</p> */}
          <p className={titre2} style={{ textAlign: "center" }}>Programmes des vols</p>
          <div className='flex gap-4 py-11'>
            <CardHome icon={<TowerControl size={50} strokeWidth={1} />} titre={"Exemple 1"}>
              <div className='flex flex-col justify-between items-center h-full'>
                Morem area are psum dolor sitteme odern sectet aweur adipiscing always.<br />
                <div className='text-center justify-center items-center flex w-full'>
                  <Button variant='shadow' color='primary'>Decouvrir <ArrowRightCircle /></Button>
                </div>
              </div>
            </CardHome>
            <CardHome icon={<Plane size={50} strokeWidth={1} />} titre={"Exemple 2"}>
              <div className='flex flex-col justify-between items-center h-full'>
                Morem area are psum dolor sitteme odern sectet aweur adipiscing always.<br />
                <div className='text-center justify-center items-center flex w-full'>
                  <Button variant='shadow' color='primary'>Decouvrir <ArrowRightCircle /></Button>
                </div>
              </div>
            </CardHome>
            <CardHome icon={<ShieldCheck size={50} strokeWidth={1} />} titre={"Exemple 3"}>
              <div className='flex flex-col justify-between items-center h-full'>
                Morem area are psum dolor sitteme odern sectet aweur adipiscing always.<br />
                <div className='text-center justify-center items-center flex w-full'>
                  <Button variant='shadow' color='primary'>Decouvrir <ArrowRightCircle /></Button>
                </div>
              </div>
            </CardHome>
            <CardHome icon={<BaggageClaim size={50} strokeWidth={1} />} titre={"Exemple 4"}>
              <div className='flex flex-col justify-between items-center h-full'>
                Morem area are psum dolor sitteme odern sectet aweur adipiscing always.<br />
                <div className='text-center justify-center items-center flex w-full'>
                  <Button variant='shadow' color='primary'>Decouvrir <ArrowRightCircle /></Button>
                </div>
              </div>
            </CardHome>
          </div>
        </Section>
      </Container>
    </main>
  )
}
