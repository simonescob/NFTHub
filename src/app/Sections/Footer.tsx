import React from 'react';
import logoColored from "../../assets/logo-colored.svg";
import twitterIcon from "../../assets/twitter.svg";
import discordIcon from "../../assets/discord.svg";
import instagramIcon from "../../assets/instagram.svg";
import arrowUpGray from "../../assets/arrow-up-gray.svg";

function Footer() {
  return (
    <footer className='border-t w-full flex flex-col items-center justify-center py-12'>
      <div className="w-full max-w-6xl">
        <div className="flex flex-column flex-wrap lg:flex-row items-start justify-between mb-20">
          <div className="lg:mr-[250px] space-y-8">
            <img src={logoColored.src} alt="" />
            <p className='lg:w-[372px] text-gray-500'>
              Join our Discord channel or follow us on
              Twitter to keep up to date with our latest work
              and announcements.
            </p>
            <div className="flex space-x-3">
              <a href={'#'} target="_blank" >
                <img width={20} src={twitterIcon.src} alt="" />
              </a>
              <a href={'#'} target="_blank" >
                <img width={20} src={instagramIcon.src} alt="" />
              </a>
              <a href={'#'} target="_blank" >
                <img width={25} src={discordIcon.src} alt="" />
              </a>
            </div>
          </div>
          <div className="flex flex-col space-y-4 mt-5">
            <div className="font-bold">Quick Link</div>
            <a href={'#'} className='text-gray-500 text-sm'>About</a>
            <a href={'#'} className='text-gray-500 text-sm'>Collection</a>
            <a href={'#'} className='text-gray-500 text-sm'>Roadmaa</a>
            <a href={'#'} className='text-gray-500 text-sm'>FAQs</a>
          </div>
          <div className="flex flex-col space-y-4 mt-5">
            <div className="font-bold">Community</div>
            <a href={'#'} className='text-gray-500 text-sm'>How it works!</a>
            <a href={'#'} className='text-gray-500 text-sm'>Blockchain</a>
            <a href={'#'} className='text-gray-500 text-sm'>Get in touch</a>
          </div>
        </div>
        <div className="flex justify-between text-gray-500 text-sm">
          <div className="">Copyright © 2023 Nfthub All Rights Reserved.</div>
          <div className="flex items-center space-x-4">
            <a href="">Privacy policy</a>
            <a href="">Terms of Use</a>
            <a href=""><img src={arrowUpGray.src} alt="" /></a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;