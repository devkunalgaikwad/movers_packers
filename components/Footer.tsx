import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { footerLinks } from '@/types'

const Footer = () => {
  return (
    <footer className='flex flex-col text-black-100 mt-5 border-t border-gray-100' >
      <div className='flex max-md:flex-col flex-wrap justify-between gap-5 sm:px-16 px-6 pt-10'>
        <div className='flex flex-col justify-start items-start gap-6 w-auto md:max-w-[30vw]'>
          <div className='mx-auto'>
            <Image src={'/image/logo.png'} alt='logo' width={250} height={250} className='object-contain'/>
          </div>
          <p className='text-base text-gray-700'>
            Movers and Shifters 2023 <br /> All right reserved;
          </p>
          <p>
          Welcome to Abu Dhabi Movers & Shifters, your trusted partner for seamless transitions. Whether you're moving homes, shifting offices, or relocating internationally in Abu Dhabi, we've got you covered.
          </p>
        </div>
        <div className='hidden md:flex'>
          <div className='footer__links'>
            {footerLinks.map((link)=>(
              <div key={link.title} className='footer__link'>
                <h3 className='font-bold'>{link.title}</h3>
                {link.links.map((item)=>(
                <Link key={item.title} href={item.url} className='text-gray-500'>
                  {item.title}
                </Link> 
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className='flex justify-between items-center flex-wrap mt-10 border-t border-gray-100 sm:px-16 px-6 py-0 md:py-10'>
          <p className='text-sm mx-auto'>
            @2023 Movers and Shifters. All Right Reserved
          </p>
          <div className='footer__copyrights-link'>
              <Link href={'/'} className='text-grey-500'>
                Privacy Policy
              </Link>
              <Link href={'/'} className='text-grey-500'>
                Terms of Use
              </Link>
          </div>
        </div>
    </footer>
  )
}

export default Footer