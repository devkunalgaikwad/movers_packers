import React from 'react'
import { ServiceCard } from './index';

const Services = () => {
  const servicesLinks = [
    { text: 'Home Moving', logo: '/image/services/home.jpg', detail:'Relocate with ease! Our home moving service is designed to make your residential move stress-free. We handle everything from packing to delivery, ensuring a smooth transition to your new home.', url: '/' },
    { text: 'Office Shifting', logo: '/image/services/office.jpg', detail:'Seamless workspace transitions! Our office shifting service is tailored to businesses. We manage your office move efficiently, minimizing downtime and ensuring your team gets back to work swiftly in the new space.', url: '/' },
    { text: 'International Moving', logo: '/image/services/international.jpg', detail:'Global relocations made simple! Moving internationally? Our service takes care of all the logistics, making your move across borders hassle-free. Trust us to handle the complexities of international relocation.', url: '/' },
  ];
  return (
    <div className='flex flex-col justify-center my-4 mx-auto text-center w-[80vw]'>
      <h1 className='font-semibold text-black text-[25px] md:text-[50px]'>Our Services</h1>
      <div className='justify-center flex rounded-md bg-neutral-200'>
        <ul className='flex md:flex-row flex-col overflow-hidden'>
          {servicesLinks.map((link,index)=>(
            <li key={index}>
              <ServiceCard text= {link.text} logo= {link.logo} detail= {link.detail} url= {link.url}/>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Services