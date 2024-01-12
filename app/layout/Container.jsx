import React from 'react'
import { bg } from '../CONST/global'
import {Image} from "@nextui-org/react";
import tourcontrol from './../assets/tourcontrol.jpeg' 

const Container = ({children,header, headerBg, headerBgImg}) => {
  return (
    <div className='w-full'>
        {
          <div className={`backdrop-blur-3xl bg-opacity-5 bg-no-repeat bg-cover bg-center ${headerBg || bg} w-[100%] flex justify-between p-[100px] text-white`} style={{backgroundImage:headerBgImg?`url(${headerBgImg})`:"none"}}>
           {header}
          </div>
        }
        <div className='pt-4 mb-0'>
        {children}
        </div>
    </div>
  )
}

export default Container