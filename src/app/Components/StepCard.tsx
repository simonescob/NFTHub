import React, { ImgHTMLAttributes, ReactElement } from 'react'

interface IStepCard {
  step: string;
  image: ImgHTMLAttributes<HTMLImageElement>;
  title: string;
  content: ReactElement;
  imageDirection: "left" | "right" | string;
}

function StepCard(props: IStepCard) {
  const { step, image, title, content, imageDirection } = props;
  return (
    <div className={`flex ${ imageDirection === 'right' ? 'flex-row-reverse' : 'flex-row' } justify-between w-[85%]`}>
      <div className="w-1/2 flex items-center">
        <img src={image.src} />
      </div>
      <div className="w-1/2 flex flex-col justify-start items-start space-y-8 p-10">
        <div className="space-y-2">
          <div className="text-gradient font-bold">{step}</div>
          <div className="font-bold text-5xl">{title}</div>
        </div>
        <div className="text-gray-500 text-sm">{content}</div>
        <div className="border-b cursor-pointer">Learn more</div>
      </div>
    </div>
  )
}

export default StepCard;