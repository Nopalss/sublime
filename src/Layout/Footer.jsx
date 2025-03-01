import React from 'react'
import { BsStars } from 'react-icons/bs'
import Button from '../components/Button'
import Container from '../components/Container'

const Footer = () => {
  return (
    <Container>
      <div className='flex flex-row flex-wrap justify-between'>
        <div className='flex flex-col justify-center items-start gap-6 max-w-2/8'>
          <h2 className='text-2xl font-bold'>
            Sublime
            <BsStars className="text-2xl inline ml-3" />
          </h2>
          <p>Powering business to streamline processes and grow sales.</p>
          <Button customClass='bg-gray-100 rounded-full hover:bg-gray-200'>(01) 0000 0000</Button>
        </div>
        <div className='flex flex-row gap-10 w-2/5 justify-evenly'>
          <div className='text-gray-600'>
            <h3 className='font-semibold uppercase'>Product</h3>
            <ul className='flex flex-col gap-3 mt-3'>
              <li>Home</li>
              <li>About</li>
              <li>Pricing</li>
              <li>Blog</li>
              <li>Contact</li>
            </ul>
          </div>
          <div className='text-gray-600'>
            <h3 className='font-semibold uppercase'>Features</h3>
            <ul className='flex flex-col gap-3 mt-3'>
              <li>Home</li>
              <li>About</li>
              <li>Pricing</li>
              <li>Blog</li>
              <li>Contact</li>
            </ul>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default Footer