import React from 'react';
import darkModeIcon from "../../assets/darkmode-trigger.svg";

function DarkModeTrigger() {
  return (
    <div className='fixed bottom-10 right-10 p-3 bg-[#1B1128] rounded-full cursor-pointer'>
      <img width={20} src={darkModeIcon.src} alt="" />
    </div>
  )
}

export default DarkModeTrigger;