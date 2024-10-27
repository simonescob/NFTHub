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
    <div className='flex justify-center space-x-10'>
      {icons.map((icon: any) => (
        <img src={icon.src} alt="" />
      ))}
    </div>
  )
}

export default Partners;