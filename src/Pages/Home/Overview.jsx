import React from 'react';
import iconImage from '../../img/image.png';
import imageOverview from '../../img/image2.png';
import { FaCheck, FaArrowRight } from "react-icons/fa6";
import Button from '../../components/Button';


const Overview = () => {
  return (
    <div className='mt-48 flex flex-row flex-wrap justify-between px-20'>
      <div className='flex flex-col gap-5 w-2/5'>
        <img src={iconImage} alt="icon" className='w-20' />
        <h3 className='text-4xl'>Provide powerful 
        solutions at all times.</h3>
        <p>Use Sublime to streamline your processes, save time and effort 
        and increase your sales exponentially.</p>
        <span className='flex flex-row gap-4'>
          <p><FaCheck className='inline' /> On Demand Support</p>
          <p><FaCheck className='inline' /> Seamless Cloud Technology</p>
        </span>
        <Button customClass='border-2 border-gray-700 self-start'>
          Learn More <FaArrowRight className='inline ml-2' />
        </Button>
      </div>
      <div className='w-1/2 relative flex flex-col justify-end'>
        <img src={imageOverview} alt="icon" className='relative w-100 z-20 bg-transparent self-center' />
        <div className='absolute w-full h-full top-5 bottom-5 z-10 bg-gradient-to-r from-[#46F883] to-[#FFDD00] opacity-36 blur-[50px] rounded-full'></div>
      </div>
    </div>
  )
}

export default Overview