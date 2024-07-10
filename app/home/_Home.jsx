"use client"
import { Avatar, Button, Divider } from '@nextui-org/react'
import { Image } from '@nextui-org/react'
import Container from './../layout/Container'
import { bg, bgMin, paddingContent, textColor, titre } from './../CONST/global'
// import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import { ArrowRight, ArrowRightCircle, BaggageClaim, CheckCircle, ChevronRight, ChevronsRight, Link, MapPinned, Plane, ShieldCheck, TowerControl } from "lucide-react"
import Slide from './../home/Slide'
// import 'react-id-swiper/lib/styles/css/swiper.css';
import _1 from "./../assets/bg/1.png"
import logoRva from "./../assets/logoRva.png"
import { Divider as DividerAnt, Card, Carousel } from 'antd'
import Section from './../layout/Section'
import { ButtonDanger } from './../layout/Button'
import Motdg from './../home/Motdg'
import { API_URL, BACKEND_URL, SITEWEB_URL, getData, oldUrl } from './../fcts/helper'
import { Fade, Rotate, Slide as SlideAnim, Zoom } from "react-awesome-reveal";
import CardHome from './../components/Home/Card'
import SlideHome from './../components/Home/Slide'
import CountUp from 'react-countup';
import LinkNative from "next/link"
import { useEffect, useState } from 'react'
import moment from 'moment'
import {vols} from "./../data/liste"
import { Skeleton } from '@nextui-org/react'
import Titre from "./../layout/Titre"

const { Meta } = Card;


const titre1 = "text-yellow-600 font-bold text-xl";
const titre2 = "text-white font-bold text-3xl ";


export const Actu = ({ titre, description, dt, img }) => {
  //   const imgDistant="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuvd8dsLLCROuEg10o5FqctqKDTRZGbXWewQ&usqp=CAU";
  const imgDistant = BACKEND_URL + img;
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
          <img src={imgDistant} className='w-full max-h-[200px]' style={{ filter: "brightness(100%) contrast(100%) saturate(100%) blur(0px) hue-rotate(0deg)" }} />
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
            <div className='flex-1 mt-4 items-center justify-center w-full text-center'>
              <Button color='warning' size='sm' variant='solid' radius='full' className='text-white hover:border-1 hover:shadow-sm box-border'>Detail article</Button>
            </div>
          </div>
        </div>
      </div>
    </Fade>
  )
}
export const SectionCounter = ({ titre, nbre, icone }) => {
  return (
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
  const [actus, setActus] = useState([]);
  const [dataHome, setDataHome] = useState({});
  useEffect(() => {
    console.log(API_URL);

    fetch(API_URL + "?qry=adminActualite", { method: "GET" }).then(r => r.json()).then((data) => {
      let newActusList = []
      for (var i = 0; i < 4; i++) {

        newActusList.push(data.data[i]);
      }
      setActus(newActusList);

    }).catch(err => {

      console.log(err);
    })
    fetch(API_URL + "?qry=homeData").then(r => r.json()).then((data) => {
      setDataHome(data?.data);
    });
  }, []);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Container
        padding={false}
        header={""}
        headerBg={"bg-white"}
      // headerBg={"bg-blue-900"}
      >
        <iframe src={`${oldUrl}`} className="h-[710px] w-full z-10 -mt-[30px]" />
        <Section cls={"bg-gray-100 px-[200px] py-30 bg-[url('/7.png')] flex flex-col items-center justify-center"}>
          <p className='font-thin text-3xl mb-3 flex gap-3 items-center justify-start '>
            <Titre text={"À la une"} icon={<ArrowRight strokeWidth={1} />} />
          </p>
          <div className='grid grid-cols-4 gap-3 flex-wrap justify-center items-center'>
            {
              actus.map(a => (
                <Actu titre={a.titre}
                  dt={moment(a.datePub).format("DD/MM/YYYY HH:mm")}
                  img={a.img}
                  description={
                    <div>
                      <div className='line-clamp-2'>{a.contenu}</div>

                    </div>
                  } />
              ))
            }
          </div>
          <div className='flex justify-center items-center py-14'><LinkNative href='/actualites'><Button variant='solid' color='primary' radius='full'>Toutes les actualités</Button></LinkNative> </div>
        </Section>
        <Section cls={"bg-blue-950 h-content px-[150px] flex flex-col gap-4"}>
          {/* <p className={titre1} style={{ textAlign: "center" }}>Que faisons-nous ?</p> */}
          <div className='content-center items-center text-center flex flex-row justify-center'>
          <Titre text="Que faisons-nous ?" />
          </div>
          <p className={titre2} style={{ textAlign: "center" }}>Avec des Services qui garantissent la sécurité aérienne</p>
          <div className='flex gap-4 py-11 justify-center items-center'>
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
        <Section cls={"px-[150px]  backdrop-opacity-20 bg-center bg-cover filter "}>
          <Zoom duration={1000}>
            {/* <div className="flex gap-14 items-center justify-center bg-white shadow-sm rounded-md p-3 w-full">
              <div className='flex-1 flex flex-col gap-6 pt-2'>
                <div className='flex'>
                  <p className={`text-4xl w-fit text-yellow-500 rounded-full px-14 py-2 flex-1`}>Mot du Directeur Général</p>
               
                </div>
                <hr />
                <div className='text-justify text-gray-500 text-xl' style={{lineHeight:1.3}} dangerouslySetInnerHTML={{__html:dataHome?.motDg}}>
                
                </div>
              </div>
              <div>
                <Image radius='full' src={BACKEND_URL+dataHome?.photoDg} className='w-[300px] h-[300px]' />
              </div>
            </div> */}
            <div
              className={`card-shadow dark:border-neutral-90 relative flex h-auto w-full select-none flex-col items-start justify-center overflow-hidden rounded-2xl border border-neutral-100 p-5 shadow-sm transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-sm dark:border-neutral-200 dark:hover:shadow-white/10`}
            >
              <div className="absolute right-0 top-0 h-24 w-full rounded-2xl bg-gradient-to-r from-[#9cb4ea]  to-[#4279d2] opacity-20 blur-3xl"></div>
              <div className="mb-0 flex h-fit flex-row items-start gap-14">
                <img
                  className="m-0 block h-36 w-36 rounded-full"
                  src={BACKEND_URL + dataHome?.photoDg}
                />
                <div className="mb-0 flex h-fit flex-col items-start">
                  <h3 className="m-0 text-2xl font-bold  text-gray-900 dark:text-gray-900 ">
                    {"NGOMA MBAKI Leonnard"}
                  </h3>
                  <p className="font-regular m-0 text-center text-sm text-gray-600 dark:text-gray-400">
                    {"Directeur Général"}
                  </p>
                  <p className="mb-0 mt-3 text-left text-lg font-thin text-gray-600 md:text-2xl dark:text-gray-500">
                    {dataHome?.motDg}
                  </p>
                </div>
              </div>
              
            </div>
          </Zoom>
        </Section>
        <Section cls={""}>
          <div className={`bg-zinc-400 flex gap-3 justify-between px-[250px] py-4 h-auto bg-cover bg-opacity-15 bg-no-repeat bg-[url('https://plus.unsplash.com/premium_photo-1679829691115-434b172ef850?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YWVyb25hdXRpcXVlfGVufDB8fDB8fHww')]`}>
            <div className='border rounded-md flex items-center justify-center w-full border-blue-0  shadow-md h-[300px] text-white'><SectionCounter nbre={90} titre={"Entités"} icone={<MapPinned strokeWidth={1} size={40} color='white' />} /></div>
            <div className='border rounded-md flex items-center justify-center w-full border-blue-0  shadow-md h-[300px] text-white'><SectionCounter nbre={54} titre={"Aéroports internationaux"} icone={<TowerControl strokeWidth={1} size={40} color='white' />} /></div>
            <div className='border rounded-md flex items-center justify-center w-full border-blue-0  shadow-md h-[300px] text-white'><SectionCounter nbre={64} titre={"Aéroport Nationaux"} icone={<TowerControl strokeWidth={1} size={40} color='white' />} /></div>
            <div className='border rounded-md flex items-center justify-center w-full border-blue-0  shadow-md h-[300px] text-white'><SectionCounter nbre={30} titre={"Aéroport Aérodromes"} icone={<TowerControl strokeWidth={1} size={40} color='white' />} /></div>

          </div>
        </Section>
        <Section cls={" h-content px-[250px] flex flex-col gap-4"}>
          {/* <p className={titre1} yle={{ textAlign: "center" }}>Que faisons-nous ?</p> */}
          <div className={"justify-center items-center flex flex-row"}><Titre text="Programmes des vols" /></div>
          <div className='flex gap-4 py-11 justify-center items-center'>
            {
              vols.map(vol=>(
                <CardHome icon={vol.icon} titre={vol.nom}>
                  <div className='flex flex-col justify-between items-center h-full'>
                    {vol.contenu}
                    <div className='text-center justify-center items-center flex w-full'>
                      <Button variant='shadow' color='primary'>Detail <ArrowRightCircle /></Button>
                    </div>
                  </div>
                </CardHome>
              ))
            }
            

          </div>
        </Section>
      </Container>
    </main>
  )
}
