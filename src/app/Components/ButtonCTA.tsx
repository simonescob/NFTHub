import React, { ReactNode } from 'react'

type ButtonCTAType = {
  children: ReactNode;
  typeForm?: boolean;
}

function ButtonCTA(props: ButtonCTAType) {
  const { children, typeForm } = props;
  return (
    <button type={typeForm ? 'submit' : 'button'} className="bg-gradient-to-tr from-[#2600FC] to-[#FF00EA] text-white px-8 rounded-full font-semibold text-sm flex items-center h-[55px]">{children}</button>
  )
}

export default ButtonCTA;