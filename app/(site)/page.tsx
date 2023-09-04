import React from 'react'
import { OperationLocation, Services, Cta, Testimonials, ContactForm, Footer, Header } from "@/components/index";
import {BiSolidPhoneCall} from 'react-icons/bi'

const page = () => {
  return (
    <>
        <Header/>
        <OperationLocation/>
        <Services/>
        <Testimonials/>
        <ContactForm/>
        <Footer/>
        <div className='fixed flex  md:hidden bottom-0 text-[red]'>
          <BiSolidPhoneCall size={50}/>
        </div>
    </>
  )
}

export default page