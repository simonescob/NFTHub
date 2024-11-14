import React from 'react'

interface ITitleSectionProps {
  title: string;
  titleColored: string;
  noMargin?: boolean;
}

function TitleSection(props: ITitleSectionProps) {
  const { title, titleColored, noMargin } = props;
  return (
    <h2 className={`text-center text-6xl font-bold ${!noMargin && 'mb-10'}`}>{title} <span className='text-gradient'>{titleColored}</span></h2>
  )
}

export default TitleSection;