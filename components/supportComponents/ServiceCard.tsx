'use client'

import { ServiceCardProps } from '@/types'
import Image from 'next/image'
import React from 'react'
import { Button } from '@mui/material'
import {IoIosArrowForward} from 'react-icons/io'

const ServiceCard = ({text,url, detail, logo}:ServiceCardProps) => {
  return (
    <div className='flex flex-col justify-center md:my-10 my-4 mx-5'>
        <div className='flex justify-center'>
            <Image src={logo} alt='text' width={200} height={200} className='object-cover rounded-md aspect-square'/>
        </div>
        <h1 className='text-black p-5 font-semibold text-2xl'>{text}</h1>
        <div className='max-w-[300px]'>
            <p className='text-sm text-neutral-500'>{detail}</p>
        </div>
        <div className='w-auto mt-2 rounded-full'>
            <Button className='bg-red-800  text-white' variant="contained"><IoIosArrowForward/></Button> 
        </div>
    </div>
  )
}

export default ServiceCard