"use client"
import React, { useEffect, useState } from 'react'
import Section from '../../layout/Section'
import { actus } from '../../data/liste'
import Image from 'next/image'
// import { Image } from '@nextui-org/react'

const page = ({params}) => {
    const [actu,setActu]=useState(null)
    useEffect(()=>{
        setActu(actus.find(a=>a.id==params.detail));
        console.clear()
    },[])
  return (
   <Section padding={false} cls={"px-[240px]"}>
        <div className='flex flex-col gap-4 justify-center items-center'>
            <h2 className='text-center font-bold text-3xl'>{actu?.titre}</h2>
            <div className='italic text-sm'>Publié le : 26/02/2024 </div>
            <div className='w-full h-[400px] bg-cover rounded-md' style={{backgroundImage:`url(${actu?.img})`}}>
                
            </div>
            <p className='text-justify'>
                {actu?.description}
            </p>
        </div>
   </Section>
  )
}

export default page