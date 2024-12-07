import React from 'react'
import { offer } from '../assets/images'
import Button from '../COMPONENTS/Button';
import { arrowRight } from '../assets/icons';

const SpecialOffer = () => {
  return (
    <section className='flex justify-wrap items-center max-xl:flex-col-reverse gap-10 max-container'>
      <div className='flex-1'>
        <img src={offer} width={773} height={687} className='object-contain w-full' />
      </div>
      <div className='flex flex-1 flex-col'>
        <h2 className="font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
          <span className="text-coral-red">Special </span>
          Offer
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">
          Step into a shopping experience that’s anything but ordinary—unbeatable deals, premier picks, and savings that don’t just raise the bar, they shatter it. Why settle when you can shop Stark-style?
        </p>
        <p className="mt-4 lg:max-w-lg info-text">
          Explore endless possibilities tailored to your desires. We’re not just meeting expectations; we’re rewriting them. It’s time to shop smarter, bolder, and better.
        </p>
        <div className='mt-11 flex flex-wrap gap-4'>
          <Button 
            label="Buy Now" 
            iconURL={arrowRight} 
            backgroundColor="bg-coral-red" 
            textColor="text-white" 
            borderColor="border-coral-red" 
          />
          <Button 
            label='Learn More' 
            backgroundColor='bg-white' 
            borderColor='border-slate-gray' 
            textColor="text-slate-gray" 
          />
        </div>
      </div>
    </section>
  )
}

export default SpecialOffer;
