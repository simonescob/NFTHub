import React from 'react'
import TitleSection from '../Components/TitleSection';
import step1 from "../../assets/step-01.png"; 
import step2 from "../../assets/step-02.png"; 
import step3 from "../../assets/step-03.png"; 
import StepCard from '../Components/StepCard';

function HowItWorks() {
  const stepList = [
    { 
      step: '01.', 
      image: step1, 
      title: "Setup and connect your wallet.", 
      content: 
      <>
        Use Trust Wallet, Metamask or any wallet to connect to
        multiple chains the app.

        <br />
        <br />

        Lorem ipsum dolor sit amet consectetur adipisicing elit
        Metamask or any wallet ipsam temporibus.
      </>
      , 
      imageDirection: "left"
    },
    { 
      step: '02.', 
      image: step2, 
      title: "Create your own digital artwork", 
      content: 
      <>
        Quality comes first. we took our time to plan out everything
        and build our production pipeline for a good quality
        artwork's & digital artwork.

        <br />
        <br />

        Starting the production on the procedurally generated
        planets and the smart contract for minting.
      </>
      , 
      imageDirection: "right"
    },
    { 
      step: '03.', 
      image: step3, 
      title: "Choose a platform to sell your NFT", 
      content: 
      <>
        Earn ETH and BIT for all your NFTs that you sell on our
        marketplace.

        <br />
        <br />

        Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        Recusandae doloremque a officiis quasi autem!
      </>
      , 
      imageDirection: "left"
    },
  ]
  return (
    <section id='how-it-works'>
      <TitleSection title='How it' titleColored='works?'/>
      <div className="flex flex-col items-center space-y-10">
        {stepList.map((step, key) =>
          <StepCard 
            key={key} 
            step={step.step} 
            image={step.image} 
            title={step.title} 
            content={step.content} 
            imageDirection={step.imageDirection} 
          />
        )}
      </div>
    </section>
  )
}

export default HowItWorks;