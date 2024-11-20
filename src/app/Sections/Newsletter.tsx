"use client";
import React from 'react'
import ButtonCTA from '../Components/ButtonCTA';
import TitleSection from '../Components/TitleSection';

function Newsletter() {
  return (
    <section id='newsletter' className='border rounded-2xl p-10'>
      <div className="flex flex-col justify-center items-center space-y-7">
        <TitleSection title='Never' titleColored='miss a drop!' noMargin={true} />
        <div className="text-sm text-gray-500">Subscribe to our super-rare and exclusive drops & collectibles.</div>
        <form className='flex flex-column flex-wrap lg:flex-row space-x-3'>
          <input className='bg-gray-100 rounded-full w-[376px] h-[55px] px-5' type="text" placeholder='Enter your email' />
          <ButtonCTA children="Suscribe" typeForm={true} />
        </form>
      </div>
    </section>
  )
}

export default Newsletter;