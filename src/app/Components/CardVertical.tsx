import React, { ImgHTMLAttributes } from 'react'

interface ICardVerticalProps {
  icon: ImgHTMLAttributes<HTMLImageElement>;
  title: string;
  text: string;
  topSpace: boolean;
}

function CardVertical(props: ICardVerticalProps) {
  const { icon, title, text, topSpace } = props;
  return (
    <div className={`flex flex-col justify-evenly items-start border w-[260px] h-[350px] p-7 rounded-2xl space-y-3 ${topSpace === true && 'mt-10'}`}>
      <img src={icon.src} alt="" />
      <div className="font-bold text-2xl w-1/3">{title}</div>
      <div className="text-gray-600 w-[85%]">{text}</div>
    </div>
  )
}

export default CardVertical;