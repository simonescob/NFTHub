import React, { ImgHTMLAttributes } from 'react'
import checkIcon from "../../assets/checkmark-outline.svg"

interface ICardRoadmapProps {
  phrase: string;
  title: string;
  text: string;
  items: string[];
  image: ImgHTMLAttributes<HTMLImageElement>;
} 

function CardRoadmap(props: ICardRoadmapProps) {
  const { phrase, title, text, items, image } = props;
  return (
    <div className="relative">
      <div className="absolute top-[20px] right-[20px] rounded-full">
        <img src={image.src} alt="" />
      </div>
      <div className='lg:w-[368px] p-10 border space-y-6 rounded-3xl mb-6'>
        <div className="text-sm font-bold text-gradient">{phrase}</div>
        <div className="text-3xl font-bold">{title}</div>
        <div className="text-gray-500">{text}</div>
        <div className="text-sm space-y-3 ">
          {items.map((item, key) =>
            <div key={key} className="flex"> <img className='mr-2' src={checkIcon.src} alt="" /> {item}</div>
          )}
        </div>
      </div>
    </div>
  )
}

export default CardRoadmap;