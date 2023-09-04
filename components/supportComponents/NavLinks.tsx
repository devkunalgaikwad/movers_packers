import React, { useMemo } from 'react'

const NavLinks = () => {
  return (
        <nav>
            <ul className='flex md:flex-row w-[60vw] px-2 flex-col justify-end gap-x-6 text-black md:text-white font-bold'>
                <li>
                    <a href="/">Home</a>
                </li>
                <li>
                    <a href="/">Services</a>
                </li>
                <li>
                    <a href="/">Contact</a>
                </li>
            </ul>
        </nav>
    )
}

export default NavLinks