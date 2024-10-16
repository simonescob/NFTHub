import React, { ReactNode } from 'react'

type ButtonCTAType = {
  children: ReactNode
}

function ButtonCTA(props: ButtonCTAType) {
  const { children } = props;
  return (
    <button className="bg-gradient-to-tr from-[#2600FC] to-[#FF00EA] text-white px-8 rounded-full font-semibold text-sm flex items-center h-[55px]">{children}</button>
  )
}

export default ButtonCTA;