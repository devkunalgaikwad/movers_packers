import { Button } from '@mui/material'
import React from 'react'

const Hero = () => {
  return (
   <>
     <div className='mx-[45px] my-[20vh] gap-y-4 flex flex-col max-w-[800px]'>
      <h1 className='font-bold  md:text-[70px] text-[50px] flex-wrap text-[white]'>Abu Dhabi Movers & Shifters</h1>
      <h4 className='font-semibold md:text-[25px] text-[15px] text-white'>Your Journey, Our Expertise: Seamless Moves Across Abu Dhabi</h4>
      <div className='w-auto m-2'>
        <Button variant="contained" className='bg-red-800 md:text-2xl text-lg'>Get a Free Quote Now.</Button>
      </div>
     </div>
   </>
  )
}

export default Hero