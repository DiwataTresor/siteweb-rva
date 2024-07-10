import React from 'react'
import Section from '../layout/Section'

import { Home, Info, InfoIcon } from 'lucide-react'
import Container from '../layout/Container'
import Titre from "./../layout/Titre"
import { Image } from '@nextui-org/react'


const Card = ({ children }) => {
  return (
    <div className='w-[250px] lg:w-[250px] h-[150px] shadow-md rounded-md p-3 flex items-center justify-center border bg-cover text-white bg-[url("/1.png")]'>
      {children}
    </div>
  )
}
const page = () => {

  return (
    <Container
      headerBgImg={"https://images.unsplash.com/photo-1484156818044-c040038b0719?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YWZyaWNhbnMlMjBldmVudHxlbnwwfHwwfHx8MA%3D%3D"}
      header={<div className='py-10  flex items-center justify-center w-full text-3xl gap-4'><InfoIcon size={40} /> A Propos de la RVA</div>}
      cls={"border-b-0 shadow-sm border-red-400 bg-center"}
    >
      {/* <h2 className='text-center text-[40px] font-extralight justify-start items-start flex mb-3'>A Propos de la RVA</h2> */}

      {/* <p className='text-center text-[60px] font-extralight justify-center items-center flex'>Régie des Voies Aériennes</p> */}
      <Section padding={"250px"} cls={"mb-[150px]"}>
        <div className='flex flex-col lg:flex-row gap-10 mt-7 items-center justify-between'>
          {/* <div className='w-[100%] lg:w-[40%]'>
            <img className='w-full h-auto rounded-md' src={"/tourcontrol.jpeg"} />
          </div> */}
          <div className='flex-1 text-center gap-7 flex flex-col'>
            {/* <p className='text-center text-[30px] font-extralight justify-start items-start flex'>A Propos de la Régie des Voies Aériennes</p> */}

            <div className='flex gap-20'>
              <div className='w-full'>
                <div className='items-center justify-center flex mb-10'>
                  <Titre text="Qui sommes-nous ?" />
                </div>
                <p>
                  Collaboratively generate customer directed deliverables with client-focused models. Energistically re-engineer turnkey customer service through covalent "outside the box" thinking. Enthusiastically iterate user-centric ROI and resource maximizing human capital. Quickly engage fully researched applications with bricks-and-clicks.
                </p>
              </div>
              <div className='w-full'>
                <Image src='https://storage.googleapis.com/images.digitalcongo.net/Provinces/Kinshasa/ndjili-international-airport-kinshasa-040220-800px.jpg' />
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section padding={"250px"} cls={"mb-[30px]"}>
        <div className='flex gap-20'>
          <div className='w-full'>
            <Image src='https://s.rfi.fr/media/display/c5438f9c-10e7-11ea-8ca6-005056bf7c53/w:980/p:16x9/361161660_79b7a6d02e_0.jpg' />
          </div>
          <div className='w-full'>
            <div className='items-center justify-center flex mb-10'>
              <Titre text="Histoire de la RVA" />
            </div>
            <p>
              Collaboratively generate customer directed deliverables with client-focused models. Energistically re-engineer turnkey customer service through covalent "outside the box" thinking. Enthusiastically iterate user-centric ROI and resource maximizing human capital. Quickly engage fully researched applications with bricks-and-clicks.
            </p>
          </div>

        </div>
      </Section>
      <Section cls={"h-content bg-blue-950 py-[50px]"}>
        <div className='flex items-center justify-center px-[250px] gap-4'>
          <Card>
            <div className='flex flex-col items-center justify-center  font-bold'>
              <Home size={23} />
              <span className='text-2xl '>+10 Directions</span>
            </div>
          </Card>
          <Card>
            <div className='flex flex-col items-center justify-center  font-bold'>
              <Home size={23} />
              <span className='text-2xl '>+45 Services</span>
            </div>
          </Card>
          <Card>
            <div className='flex flex-col items-center justify-center  font-bold'>
              <Home size={23} />
              <span className='text-2xl '>+45 Aeroports</span>
            </div>
          </Card>
          <Card>
            <div className='flex flex-col items-center justify-center  font-bold'>
              <Home size={23} />
              <span className='text-2xl '>+45 Aeroports</span>
            </div>
          </Card>
        </div>
      </Section>
    </Container>
  )
}

export default page