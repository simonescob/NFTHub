import React from 'react'
import metamask from '../../assets/metamask.svg'
import bitgo from '../../assets/bitgo.svg'
import coinbase from '../../assets/coinbase.svg'
import trustwallet from '../../assets/trust-wallet.svg'
import exodus from '../../assets/exodus.svg'

function Partners() {

  const icons = [
    metamask,
    bitgo,
    coinbase,
    trustwallet,
    exodus,
  ]

  return (
    <div id="partners" className='flex flex-wrap justify-center space-x-3 space-y-4 lg:space-x-10 lg:space-y-0 px-5 lg:px-0'>
      {icons.map((icon: any, key) => (
        <div key={key} className="max-sm:w-[145px] max-sm:h-[27px]">
          <img className="" src={icon.src} alt="" />
        </div>
      ))}
    </div>
  )
}

export default Partners;