"use client"
import React from 'react'
import { NextUIProvider } from "@nextui-org/react";
import Header from '../components/Header/Header.jsx';
import { bg } from '../CONST/global.jsx';
import Footer from '../components/footer/Footer.jsx';



const MainLayout = ({ children }) => {
  return (
    <NextUIProvider>
        <div className={`${bg} w-full py-1 px-28 shadow-sm`}>
          <Header />
        </div>
        {children}
        <footer>
          <Footer />
        </footer>
    </NextUIProvider>
  )
}


export default MainLayout