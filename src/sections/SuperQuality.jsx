import React from 'react'
import Button from '../COMPONENTS/Button';
import { shoe8 } from '../assets/images';

const SuperQuality = () => {
  return (
    <section
    id='about-us'
    className='flex justify-between items-center max-lg:flex-col gap-10 w-full max-container'
    
    >
      <div className='flex flex-1 flex-col'>
      
        <h2 className=" font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
          We Provide You
          <span className="text-coral-red ">Super </span>
          <span className="text-coral-red ">Quality </span>Shoes
          
        </h2>
        <p className=" mt-4 lg:max-w-lg info-text">
        These aren’t just shoes—they’re innovation for your feet. Crafted for comfort, style, and elegance, they make every step a statement.
        </p>
        <p className=" mt-4 lg:max-w-lg info-text">
        With precise design and unmatched quality, our footwear blends technology and sophistication. Satisfaction guaranteed.
          </p>
          <div className='mt-11'>

          
        <Button label="Discover" />
        </div>

      </div>
      <div className='flex-1 flex justify-center items-center'>
        <img
        src={shoe8} 
        alt='img'
        width={570}
        height={522}
        className='object-contain'/>

      </div>

    </section>
  )
}

export default SuperQuality