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
    <div className='flex flex-wrap justify-center space-x-10'>
      {icons.map((icon: any, key) => (
        <img key={key} src={icon.src} alt="" />
      ))}
    </div>
  )
}

export default Partners;