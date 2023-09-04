'use client'

import { ContactItemProps } from '@/types'
import React from 'react'

const ContactItem = ({logo,title,text}:ContactItemProps) => {
  return (
    <div className='flex flex-col text-white justify-center items-center text-center'>
        <div >
            {logo}
        </div>
        <h1 className='text-[grey] font-bold text-2xl'>{title}</h1>
        <p>{text}</p>
    </div>
  )
}

export default ContactItem