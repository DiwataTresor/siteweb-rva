import React from 'react'
import Section from '../../layout/Section'
import { Fade,Roll,Reveal } from 'react-awesome-reveal'

const Card = ({ children, icon, titre }) => {
    return (
        <Reveal damping={30} duration={500}>
            <div className='text-white border border-blue-800 shadow-sm rounded-md h-[300px] w-[300px] flex flex-col p-3'>
                <div className='justify-start items-start flex'>{icon && icon} </div>
                <div className='text-center mb-4 font-bold text-xl'>{titre}</div>
                <div className='text-gray-300'>{children}</div>
            </div>
        </Reveal>
    )
}

export default Card