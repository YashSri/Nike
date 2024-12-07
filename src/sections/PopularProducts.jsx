import React from 'react'
import { products } from '../constants';
import PopularProductCard  from '../COMPONENTS/PopularProductCard';

const PopularProducts = () => {
  return (
    <section id="products"
    className='max-container max-sm:mt-12'>
      <div className='flex flex-col justify-start gap-5'>
        <h2 className='text-4xl font-palanquin font-bold'> The <span className='text-coral-red'>Topnotch </span>One's</h2>
        <p className='lg:max-w-lg mt-2 font-montserrat text-slate-gray'>Step into style with the latest Nike collection  where comfort meets cutting-edge design!</p>
      </div>
      <div className = 'mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-1 sm:gap-4 gap-14'>
        {products.map((product) => (
          <PopularProductCard key =
          {product.name} {...product} />
        ))}

      </div >

    </section>
  )
}

export default PopularProducts