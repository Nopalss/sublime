import React from 'react';
import { FaStarOfLife } from "react-icons/fa6";
import { TiStarburst } from "react-icons/ti";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
import Button from '../../components/Button';
import { BsArrowUpRight } from "react-icons/bs";
import { FiPhoneCall, FiSettings } from "react-icons/fi";
import { MdOutlineTimer } from "react-icons/md";
import { TbCloudCog } from "react-icons/tb";
import { TfiAnnouncement } from "react-icons/tfi";

export const Products = () => {
  const dummyData = [
    {
      id: 1,
      title: '24/7 Chat Service',
      description: 'Sublime is easy to use and totally customizable to your business needs.',
      icon: <IoChatbubbleEllipsesOutline className='text-5xl' />
    },
    {
      id: 2,
      title: 'Great Communication',
      description: 'Sublime is easy to use and totally customizable to your business needs.',
      icon: <FiPhoneCall className='text-5xl' />
    },
    {
      id: 3,
      title: 'Customizable Settings',
      description: 'Sublime is easy to use and totally customizable to your business needs.',
      icon: <FiSettings className='text-5xl' />
    },
    {
      id: 4,
      title: 'Increased Efficiency',
      description: 'Sublime is easy to use and totally customizable to your business needs.',
      icon: <MdOutlineTimer className='text-5xl' />
    },
    {
      id: 5,
      title: 'Cloud Technology',
      description: 'Sublime is easy to use and totally customizable to your business needs.',
      icon: <TbCloudCog className='text-5xl' />
    },
    {
      id: 6,
      title: 'On Demand Notifications',
      description: 'Sublime is easy to use and totally customizable to your business needs.',
      icon: <TfiAnnouncement className='text-5xl' />
    }
  ];

  return (
    <div className='mt-40'>
      <h5 className='uppercase'>Sublime Products</h5>
      <div className='flex flex-col items-center gap-10 lg:flex-row lg:justify-between'>
        <h1 className='text-6xl lg:w-1/2'>Provide powerful 
        solutions at all times.</h1>
        <div className='lg:w-3/6'>
          <span className='flex flex-row gap-3 items-center'>
            <FaStarOfLife className='text-xl'/>
            <TiStarburst className='text-2xl' />
          </span>
          <p className='mt-6 text-xl'>Supercharge your productivity and optimize your workflow with 
          Sublime. Our intuitive interface and robust features for you</p>
        </div>
      </div>
      <div className='relative flex flex-col'>
        <div className='relative z-20 bg-transparent grid lg:grid-cols-3 md:grid-cols-2 justify-evenly gap-10 mt-10'>
          { dummyData.map((data) => (
            <div key={data.id} className='rounded-xl p-8 flex flex-col gap-8 items-start border-2 border-gray-100 bg-white shadow-lg'>
            {data.icon}
            <h3 className='text-2xl'>{data.title}</h3>
            <p>{data.description}</p>
            <Button customClass='border-2 border-gray-200 bg-gray-50 w-25'>
              <BsArrowUpRight className='inline text-lg' />
            </Button>
          </div>
            )) }
        </div>
        <div className='absolute z-10 top-40 bottom-30 left-30 right-30 bg-gradient-to-r from-[#FFDD00] to-[#46F883] opacity-56 blur-[89px]'>
        </div>
      </div>
    </div>
  )
}
