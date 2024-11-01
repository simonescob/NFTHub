"use client";
import React, { useState } from 'react'
import Slider, { CustomArrowProps } from "react-slick";

function Collections() {
  const [display, setDisplay] = useState(true);
  const [width, setWidth] = useState(600);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />
  };

  function NextArrow(props: CustomArrowProps) {
    const { onClick } = props;
    return (
      <div style={{ width: 55 }} className='relative left-[96%] -top-[232px] cursor-pointer' onClick={onClick}>
        <svg width="55" height="55" viewBox="0 0 55 55" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g filter="url(#filter0_d_1_203)">
        <rect x="7.80078" y="4.9834" width="40" height="40" rx="20" fill="white"/>
        <rect x="8.30078" y="5.4834" width="39" height="39" rx="19.5" stroke="#838383" stroke-opacity="0.25"/>
        <path d="M31.4604 25.3564L25.7769 31.0693C25.4839 31.333 25.0444 31.333 24.7808 31.0693L24.1069 30.3955C23.8433 30.1318 23.8433 29.6924 24.1069 29.3994L28.6187 24.8584L24.1069 20.3467C23.8433 20.0537 23.8433 19.6143 24.1069 19.3506L24.7808 18.6768C25.0444 18.4131 25.4839 18.4131 25.7769 18.6768L31.4604 24.3896C31.7241 24.6533 31.7241 25.0928 31.4604 25.3564Z" fill="#7B7583"/>
        </g>
        <defs>
        <filter id="filter0_d_1_203" x="0.800781" y="0.983398" width="54" height="54" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feMorphology radius="1" operator="erode" in="SourceAlpha" result="effect1_dropShadow_1_203"/>
        <feOffset dy="3"/>
        <feGaussianBlur stdDeviation="4"/>
        <feComposite in2="hardAlpha" operator="out"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.08 0"/>
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_203"/>
        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_203" result="shape"/>
        </filter>
        </defs>
        </svg>
      </div>
    );
  }
  
  function PrevArrow(props: CustomArrowProps) {
    const { onClick } = props;
    return (
      <div style={{ width: 55 }} className='relative -bottom-[180px] right-[5px] z-10 cursor-pointer' onClick={onClick}>
        <svg width="54" height="54" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g filter="url(#filter0_d_200_2)">
        <rect x="46.9999" y="44" width="40" height="40" rx="20" transform="rotate(-180 46.9999 44)" fill="white"/>
        <rect x="46.4999" y="43.5" width="39" height="39" rx="19.5" transform="rotate(-180 46.4999 43.5)" stroke="#838383" stroke-opacity="0.25"/>
        <path d="M23.3402 23.627L29.0238 17.9141C29.3168 17.6504 29.7562 17.6504 30.0199 17.9141L30.6937 18.5879C30.9574 18.8516 30.9574 19.291 30.6937 19.584L26.182 24.125L30.6937 28.6367C30.9574 28.9297 30.9574 29.3691 30.6937 29.6328L30.0199 30.3066C29.7562 30.5703 29.3168 30.5703 29.0238 30.3066L23.3402 24.5938C23.0765 24.3301 23.0765 23.8906 23.3402 23.627Z" fill="#7B7583"/>
        </g>
        <defs>
        <filter id="filter0_d_200_2" x="-0.00012207" y="0" width="54" height="54" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feMorphology radius="1" operator="erode" in="SourceAlpha" result="effect1_dropShadow_200_2"/>
        <feOffset dy="3"/>
        <feGaussianBlur stdDeviation="4"/>
        <feComposite in2="hardAlpha" operator="out"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.08 0"/>
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_200_2"/>
        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_200_2" result="shape"/>
        </filter>
        </defs>
        </svg>
      </div>
    );
  }

  const CollectionCard = () => {
    return (
      <div className="mx-5 text-center">
        <div className="bg-green-400 w-full h-[352px] mb-4">
          <img src="" alt="" />
        </div>
        <div className="">#Metaverse</div>
        <div className="text-sm">By TheSalvare</div>
      </div>
    )
  }

  return (
    <section>
      <h2>Nfthub's collection</h2>
      <div className=''>
        <Slider {...settings}>
          <CollectionCard/>
          <CollectionCard/>
          <CollectionCard/>
          <CollectionCard/>
          <CollectionCard/>
          <CollectionCard/>
          <CollectionCard/>
          <CollectionCard/>
        </Slider>
      </div>
    </section>
  )
}

export default Collections;