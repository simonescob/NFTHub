"use client";
import React from 'react'
import ButtonCTA from '../Components/ButtonCTA';
import TitleSection from '../Components/TitleSection';
import bgCTA from "../../assets/cta-bg.png";

function GetStart() {
  return (
    <section className='flex flex-col justify-center items-center text-center w-full relative'>
      <div className="">
        <img src={bgCTA.src} alt="" />
      </div>
      <div className="absolute top-0 left-0 h-full w-full flex flex-col justify-center items-center">
        <div className="">
          <TitleSection title="let's start" titleColored='minting' breakActived={true} noMargin={true} />
          <p className='text-gray-500 py-5'>Invest and manage all your NFTs at one place.</p>
          <div className="flex justify-center">
            <ButtonCTA>Get started</ButtonCTA>
          </div>
        </div>
      </div>
    </section>
  )
}

export default GetStart;