import React, { ImgHTMLAttributes } from 'react'

type TypeNetworkArtist = {
  icon: ImgHTMLAttributes<HTMLImageElement>;
  url: string;
}

interface ICardArtistProps {
  image: ImgHTMLAttributes<HTMLImageElement>;
  name: string;
  role: string;
  networks: TypeNetworkArtist[];
  topSpace?: boolean;
}

function CardArtist(props: ICardArtistProps) {
  const { image, name, role, networks, topSpace } = props;
  return (
    <div className={`space-y-4 w-[305px] text-center py-10 ${topSpace === true && 'mt-10'}`}>
      <div className="flex justify-center">
        <img src={image.src} alt="" />
      </div>
      <div className="font-bold text-xl">{name}</div>
      <div className="text-gray-400">{role}</div>
      <div className="flex justify-center items-center space-x-4">
        {networks.map((network, key) =>
          <a href={network.url} target="_blank" key={key}>
            <img width={20} src={network.icon.src} alt="" />
          </a>
        )}
      </div>
    </div>
  )
}

export default CardArtist;