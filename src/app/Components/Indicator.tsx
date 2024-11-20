import React from 'react'

interface IIndicatorProps {
  amount: string;
  label: string;
}

function Indicator(props: IIndicatorProps) {
  const { amount, label } = props;
  return (
    <div className='space-y-4 lg:border-r px-10 text-center'>
      <div className="font-bold text-5xl">{amount}</div>
      <div className="text-gray-500 text-sm capitalize">{label}</div>
    </div>
  )
}

export default Indicator;