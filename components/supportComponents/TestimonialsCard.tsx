import { TestimonialsProps } from '@/types'
import Image from 'next/image'
import React from 'react'

const TestimonialsCard = ({name,avatar,jobTitle,review}:TestimonialsProps) => {
  return (
    <div className='bg-neutral-200 rounded-md p-4 w-[auto] md:max-w-[20vw]'>
       <div className='flex mx-auto justify-center'>
         <Image src={avatar} alt={name} width={250} height={300} className='object-contain rounded-md'/> 
       </div>
       <div>
        <h1 className='text-2xl font-bold text-black'>{name}</h1>
        <p className='text-neutral-400 text-xs font-semibold'>{jobTitle}</p>
       </div>
       <p className='text-sm text-justify my-2'>{review}</p>
    </div>
  )
}

export default TestimonialsCard