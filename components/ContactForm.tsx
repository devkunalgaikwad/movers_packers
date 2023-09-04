'use client'
import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { Button } from '@mui/material'
import { ContactItem } from './index';
import {BsFillTelephoneForwardFill} from 'react-icons/bs'
import {AiOutlineMail} from 'react-icons/ai'
import {FaMapMarked} from 'react-icons/fa'

function ContactForm() {
  const [state, handleSubmit] = useForm("mbjvyyll");

  if (state.succeeded) {
    return <p>Thanks for joining!</p>;
  }
  const contact = [
    {logo : <BsFillTelephoneForwardFill size={25}/>, title:'Call Here', text:'48482851656' },
    {logo : <AiOutlineMail size={25}/>, title:'Email Here', text:'lorem@gmail.com' },
    {logo : <FaMapMarked size={25}/>, title:'Our Address', text:'Abu Dhabian, Dhabyani' },
  ]
  return (
  <div className='flex my-6 flex-col w-[80vw] py-6 mx-auto rounded-md bg-neutral-600'>
    <h1 className='text-center text-white text-3xl font-bold'>Contact us</h1>
    <div className='flex flex-col md:flex-row justify-between py-10 md:my-auto'>
      <form className='flex flex-row md:flex-col flex-wrap my-auto justify-start gap-y-6 text-white font-semibold px-10' onSubmit={handleSubmit}>
        <div className='flex flex-row'>
          <label htmlFor="email">Email Address: </label>
          <div className='px-4 w-full'>
            <input className='rounded-md w-full outline-black p-1' placeholder='Your Email' id="email" type="email" name="email"/>
          </div>
          <ValidationError
          prefix="Email"
          field="email"
          errors={state.errors}
        />
        </div>
        <div className='flex items-center'>
          <label htmlFor="email">Message: </label>
          <textarea id="message" className='mx-4 w-[30vw] h-10' name="message" title='message'/>
          <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
          />
        </div>
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
        <div className='flex'>
          <Button variant="contained" type="submit"  disabled={state.submitting} className='bg-red-800 text-xl'>Submit</Button>
        </div>
      </form>
      <ul className='flex my-5 flex-row md:px-10 flex-wrap gap-x-10 items-center justify-center'>
        {contact.map(( e, index)=>(
          <li key={index}>
            <ContactItem logo={e.logo} title={e.title} text={e.text}/>
          </li>
        ))}
      </ul>
    </div>
  </div>
  );
}

export default ContactForm;
