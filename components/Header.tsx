import React from 'react'
import Nav from './Nav'
import Hero from './Hero'


const Header = () => {
  return (
    <>
        <div className='background-container w-[100vw]  overflow-hidden h-[100vh]'>
            <Nav/>
            <div className='hero__image-overlay'>
              <Hero/>
            </div>
        </div>
    </>
  )
}

export default Header