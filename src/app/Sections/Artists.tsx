import React from 'react'
import twitterIcon from "../../assets/twitter.svg";
import discordIcon from "../../assets/discord.svg";
import instagramIcon from "../../assets/instagram.svg";
import TitleSection from '../Components/TitleSection';
import CardArtist from '../Components/CardArtist';
import artist1 from "../../assets/artist_01.png";
import artist2 from "../../assets/artist_02.png";
import artist3 from "../../assets/artist_03.png";
import artist4 from "../../assets/artist_04.png";

function Artists() {
  const listArtist = [
    {
      image: artist1,
      name: 'Steve Jobs',
      role: 'Artist',
      networks: [
        {
          icon: twitterIcon,
          url: '',
        },
        {
          icon: discordIcon,
          url: '',
        },
        {
          icon: instagramIcon,
          url: '',
        },
      ],
    },
    {
      image: artist2,
      name: 'Andry Moray',
      role: 'Blockchain',
      networks: [
        {
          icon: twitterIcon,
          url: '',
        },
        {
          icon: discordIcon,
          url: '',
        },
        {
          icon: instagramIcon,
          url: '',
        },
      ],
    },
    {
      image: artist3,
      name: 'Zaid Ed',
      role: 'Developer',
      networks: [
        {
          icon: twitterIcon,
          url: '',
        },
        {
          icon: discordIcon,
          url: '',
        },
        {
          icon: instagramIcon,
          url: '',
        },
      ],
    },
    {
      image: artist4,
      name: 'Laila Ed',
      role: 'Marketing',
      networks: [
        {
          icon: twitterIcon,
          url: '',
        },
        {
          icon: discordIcon,
          url: '',
        },
        {
          icon: instagramIcon,
          url: '',
        },
      ],
    },
  ]
  return (
    <section id='artists'>
      <TitleSection title='Meet' titleColored='the artists' />
      <div className="flex flex-col lg:flex-row">
        {listArtist.map((artist, key) => 
          <CardArtist key={key} name={artist.name} role={artist.role} image={artist.image} networks={artist.networks} topSpace={key % 2 === 0} />
        )}
      </div>
    </section>
  )
}

export default Artists;