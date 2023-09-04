import Image from 'next/image'
import React from 'react'

const OperationLocation = () => {
  return (
    <div className='flex justify-center my-4'>
      <div className='w-[80vw]'>
        <div className='flex md:flex-row flex-col overflow-hidden justify-between p-3 rounded-md bg-red-500'>
          <div className='flex flex-col items-center justify-center px-3 gap-y-4'>
            <h1 className='text-white font-bold text-4xl'>We operate Here...!</h1>
            <p className='md:text-md text-[15px] text-white'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae minus dolor dicta beatae quas unde neque amet impedit delectus ipsum? Debitis, laboriosam nisi voluptatum esse sequi itaque ducimus corporis ad illum quod autem quo architecto ratione voluptas officiis eius magnam minus eveniet perspiciatis error. Mollitia molestias tenetur porro vitae iste quibusdam velit! Natus, ad in!</p>
          </div>  
          <Image src={'/image/location.jpg'} alt='Dubai' width={500}height={500}/>
        </div>
      </div>
    </div>
  )
}

export default OperationLocation