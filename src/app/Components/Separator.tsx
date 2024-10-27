import React from 'react'
import separatorIcon from "../../assets/separator.svg"

function Separator() {
  return (
    <div className='flex justify-center py-24'>
      <img src={separatorIcon.src} alt="" />
    </div>
  )
}

export default Separator;