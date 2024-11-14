import React from 'react'
import Indicator from '../Components/Indicator';

function Indicators() {
  const indicatorList = [
    {
      amount: '400k+',
      label: 'Wallet connected',
    },
    {
      amount: '20k+',
      label: 'Wallet connected',
    },
    {
      amount: '230+',
      label: 'Creative artists',
    },
    {
      amount: '2.5x',
      label: 'Estimate value',
    },
  ] 
  return (
    <section id='indicators'>
      <div className="flex justify-center">
        {indicatorList.map((indicator, key) => 
          <Indicator key={key} label={indicator.label} amount={indicator.amount} />
        )}
      </div>
    </section>
  )
}

export default Indicators;