import React from 'react'
import { TestimonialsCard } from './index';

const Testimonials = () => {
  const testimonialsData = [
    {
      name: 'John Doe',
      jobTitle: 'CEO, ABC Company',
      review:
        "We hired Abu Dhabi Movers & Shifters for our office relocation, and they exceeded our expectations. The entire process was seamless, and their team handled everything efficiently. We were back to work in no time!",
      avatar: '/image/testmoinals/person_1.jpg',
    },
    {
      name: 'Alice Smith',
      jobTitle: 'Homeowner',
      review:
        "Moving to a new home was stressful, but Abu Dhabi Movers & Shifters made it a breeze. They took care of packing, transportation, and even unpacking. I highly recommend their home moving service.",
      avatar: '/image/testmoinals/person_2.jpg',
    },
    {
      name: 'David Brown',
      jobTitle: 'Operations Manager',
      review:
        "Our international expansion required us to move our entire office overseas. Abu Dhabi Movers & Shifters handled the international move seamlessly. They took care of customs, logistics, and ensured a smooth transition.",
      avatar: '/image/testmoinals/person_3.jpg',
    },
  ];
  
  return (
    <div className='flex flex-col w-[80vw] mx-auto justify-center items-center'>
      <h1 className='text-center text-lg py-4 font-bold'>Who Loved our Service</h1>
      <ul className='flex gap-x-8 md:flex-row flex-col'>
        {
          testimonialsData.map((review, index)=>(
            <li key={index}>
              <TestimonialsCard name={review.name} jobTitle={review.jobTitle} review={review.review} avatar={review.avatar}/>
            </li>
          ))
        }
      </ul>
    </div>
  )
}

export default Testimonials