import React from 'react'
import Section from '../layout/Section'
import Image from 'next/image'
import { Home } from 'lucide-react'
import Container from '../layout/Container'


const Card = ({ children }) => {
  return (
    <div className='w-[250px] lg:w-[250px] h-[150px] shadow-md rounded-md p-3 flex items-center justify-center border bg-cover text-white bg-[url("/1.png")]'>
      {children}
    </div>
  )
}
const page = () => {

  return (
    <Container cls={"px-[20px] lg:px-[240px] bg-white "}  headerBgImg={"/fondtourcontrol.png"}  header={<h4 className='text-4xl font-bold w-full flex items-center justify-center'>A Propos de la RVA</h4>}>
      {/* <h2 className='text-center text-[40px] font-extralight justify-start items-start flex mb-3'>A Propos de la RVA</h2> */}
     
        {/* <p className='text-center text-[60px] font-extralight justify-center items-center flex'>Régie des Voies Aériennes</p> */}
        <Section padding={"250px"}>
        <div className='flex flex-col lg:flex-row gap-10 mt-7 items-center justify-between'>
          {/* <div className='w-[100%] lg:w-[40%]'>
            <img className='w-full h-auto rounded-md' src={"/tourcontrol.jpeg"} />
          </div> */}
          <div className='flex-1 text-center gap-7 flex flex-col'>
            {/* <p className='text-center text-[30px] font-extralight justify-start items-start flex'>A Propos de la Régie des Voies Aériennes</p> */}
            <h1 className='font-light text-2xl'>Qui sommes-nous ?</h1>
            <p>
              Collaboratively generate customer directed deliverables with client-focused models. Energistically re-engineer turnkey customer service through covalent "outside the box" thinking. Enthusiastically iterate user-centric ROI and resource maximizing human capital. Quickly engage fully researched applications with bricks-and-clicks.</p>
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
      <Section padding={"250px"}>
      <div className='flex-1 text-justify gap-7 flex flex-col mt-7'>
        <h1 className='font-bold text-xl text-center flex items-center justify-center mt-8'>Histoire</h1>
        <p>
          Collaboratively generate customer directed deliverables with client-focused models. Energistically re-engineer turnkey customer service through covalent "outside the box" thinking. Enthusiastically iterate user-centric ROI and resource maximizing human capital. Quickly engage fully researched applications with bricks-and-clicks.</p>
      </div>
      </Section>
    </Container>
  )
}

export default page