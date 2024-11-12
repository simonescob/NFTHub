import React from 'react'
import CardVertical from '../Components/CardVertical';
import icon1 from "../../assets/why_icon_1.svg";
import icon2 from "../../assets/why_icon_2.svg";
import icon3 from "../../assets/why_icon_3.svg";
import icon4 from "../../assets/why_icon_4.svg";

function Why() {
  const razons = [
    {
      icon: icon1,
      title: 'Huge collection',
      text: 'A collection of 890 unique Nerkos built to go beyond the digital space.',
    },
    {
      icon: icon2,
      title: 'High quality',
      text: "The nerko’s collection includes dozens of rare costumes ands colorways of artist's.",
    },
    {
      icon: icon3,
      title: 'Top resource',
      text: 'Tasty design resources made with care for each pixel. NFTs and game resources.',
    },
    {
      icon: icon4,
      title: 'Big community',
      text: 'Be part of a community of nerko owners and create user generated items.',
    },
  ]
  return (
    <section className=''>
      <h2 className='text-center text-4xl font-bold mb-10'>Why <span className='text-gradient'>choose us?</span></h2>
      <div className="flex justify-between flex-wrap">
        {razons.map((razon, key) => 
          <CardVertical key={key} icon={razon.icon} title={razon.title} text={razon.text} topSpace={key % 2 === 1} />
        )}
      </div>
    </section>
  )
}

export default Why;