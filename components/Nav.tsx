'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import { NavLinks } from './index'
import { Button, Drawer } from '@mui/material'
import {AiOutlineMenu} from 'react-icons/ai'
import {GrClose} from 'react-icons/gr'

const Nav = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)
  return (
    <div className='flex flex-col justify-between py-7 md:mx-20 mx-4'>
      <div className='hidden md:flex md:justify-between'>
        <div className='logo-bg'>
          <Image src={'/image/logo.png'} alt='Movers and Shippers' width={200} height={20}/>
        </div>
        <NavLinks/>
      </div>
      <div className='flex flex-row w-[100vw] md:hidden justify-between'>
        <Image src={'/image/logo.png'} alt='Movers and Shippers' width={100} height={10}/>
        <div className='cursor-pointer text-white mr-9' onClick={()=> setIsDrawerOpen(true)}>
                <AiOutlineMenu  size={27}/>
            </div>
        <Drawer anchor='right' open={isDrawerOpen} onClose={()=>setIsDrawerOpen(true)}>
          <div className='flex flex-row p-6'>
            <NavLinks/>
            <div onClick={()=>setIsDrawerOpen(false)}>
              <GrClose/>
            </div>
          </div>
        </Drawer>
      </div>
    </div>
  )
}

export default Nav