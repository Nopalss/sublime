import React from 'react';
import { FaStarOfLife } from "react-icons/fa6";
import { TiStarburst } from "react-icons/ti";

export const Products = () => {
  return (
    <div className='mt-48'>
      <h5 className='uppercase'>Sublime Products</h5>
      <div className='flex flex-row gap-6 items-end'>
        <h1 className='text-6xl max-w-1/2'>Provide powerful 
        solutions at all times.</h1>
        <div className='max-w-1/2'>
          <span className='flex flex-row gap-3'>
            <FaStarOfLife className='text-xl'/>
            <TiStarburst className='text-2xl' />
          </span>
          <p className='mt-6 text-2xl'>Supercharge your productivity and optimize your workflow with 
          Sublime. Our intuitive interface and robust features for you</p>
        </div>
      </div>
      <div className='grid grid-cols-3 justify-evenly gap-3 mt-10'>
        <div className='bg-gray-300 rounded-xl'>
          <p>Content 1</p>
          <p>Content 1</p>
          <p>Content 1</p>
          <p>Content 1</p>
        </div>
        <div className='bg-gray-300 rounded-xl'>
          <p>Content 1</p>
          <p>Content 1</p>
          <p>Content 1</p>
          <p>Content 1</p>
        </div>
        <div className='bg-gray-300 rounded-xl'>
          <p>Content 1</p>
          <p>Content 1</p>
          <p>Content 1</p>
          <p>Content 1</p>
        </div>       
      </div>
    </div>
  )
}
