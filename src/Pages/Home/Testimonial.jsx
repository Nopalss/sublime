import React from 'react';
import Container from '../../components/Container';
import starIcon from '../../img/icon/star.png';
import invoice2go from '../../img/icon/invoice2go.png';
import tribal from '../../img/icon/tribal.png';
import veroxfloor from '../../img/icon/veroxfloor.png';
import xpeng from '../../img/icon/xpeng.png';
import profileIcon from '../../img/profileIcon.png';
import profileJohn from '../../img/profile/profile3.png';
import { Rating, ThinStar } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css';

const Testimonial = () => {
  const styleRating = {
    itemShapes: ThinStar, 
    activeFillColor: '#000',
    inactiveFillColor: '#d2d2d4',
  };

  return (
    <Container>
      <div className='flex flex-col gap-10'>
        <div className='flex flex-col mt-48'>
          <h4 className='uppercase text-gray-500 text-center'>Our Testimonials</h4>
          <span className='flex flex-row justify-between items-center'>
            <img src={starIcon} className='hidden lg:block w-10' />
            <h3 className='text-6xl lg:w-2/3 text-center'>Check out what our customers have to say</h3>
            <img src={starIcon} className='hidden lg:block w-10' />
          </span>
        </div>
        <div className='relative grid grid-cols-1 lg:grid-cols-2 gap-6 justify-center items-center lg:px-36 py-5'>
          <div className='relative z-20 flex flex-col gap-6'>
            <div className='flex flex-col gap-6 bg-white border-2 border-gray-100 p-10 rounded-xl shadow'>
              <Rating style={{ maxWidth: 150}} value={4} itemStyles={styleRating} readOnly/>
              <p className='italic'>"It’s intuitive, functional, easy-to-setup and presents content in an interactive and interesting way."</p>
              <div className="flex flex-row gap-3 items-center">
                <img src={profileIcon} alt="Icon Profile" className="w-15" />
                <span>
                  <p className="font-semibold">Sarah Smith</p>
                  <p className="text-sm text-gray-500">
                    Marketing Leader @Mailchimp
                  </p>
                </span>
              </div>
            </div>
            <div className='flex flex-col gap-6 bg-white border-2 border-gray-100 p-10 rounded-xl shadow'>
              <Rating style={{ maxWidth: 150}} value={4} itemStyles={styleRating} readOnly/>
              <p className='italic'>"It’s intuitive, functional, easy-to-setup and presents content in an interactive and interesting way."</p>
            </div>
          </div>
          <div className='relative z-20 flex flex-col gap-6'>
            <div className='flex flex-col gap-6 bg-white border-2 border-gray-100 p-10 rounded-xl shadow'>
              <Rating style={{ maxWidth: 150}} value={4} itemStyles={styleRating} readOnly/>
              <p className='italic'>"It’s intuitive, functional, easy-to-setup and presents content in an interactive and interesting way."</p>
            </div>
            <div className='flex flex-col gap-6 bg-white border-2 border-gray-100 p-10 rounded-xl shadow'>
              <Rating style={{ maxWidth: 150}} value={4} itemStyles={styleRating} readOnly/>
              <p className='italic'>"It’s intuitive, functional, easy-to-setup and presents content in an interactive and interesting way."</p>
              <div className="flex flex-row gap-3 items-center">
                <img src={profileJohn} alt="Icon Profile" className="w-15" />
                <span>
                  <p className="font-semibold">John Smith</p>
                  <p className="text-sm text-gray-500">
                    UI Designer @Flowbase
                  </p>
                </span>
              </div>
            </div>
          </div>
          <div className="absolute z-10 w-full h-full bg-gradient-to-r from-[#46F883] to-[#FFDD00] opacity-36 blur-[99px] rounded-full border-b-2 border-black"></div>
        </div>
        <div className='flex flex-col gap-10 lg:px-36'>
          <h4 className='uppercase text-gray-500 text-center'>Clients Using Sublime</h4>
          <span className='flex flex-row flex-wrap gap-10 justify-center lg:justify-between items-center'>
            <img src={invoice2go} className='w-30' />
            <img src={tribal} className='w-20' />
            <img src={xpeng} className='w-30' />
            <img src={veroxfloor} className='w-30' />
          </span>
        </div>
      </div>
    </Container>
  )
}

export default Testimonial