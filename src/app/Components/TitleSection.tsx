import React from 'react'

interface ITitleSectionProps {
  title: string;
  titleColored: string;
  noMargin?: boolean;
  breakActived?: boolean;
}

function TitleSection(props: ITitleSectionProps) {
  const { title, titleColored, noMargin, breakActived } = props;
  return (
    <h2 className={`text-center text-6xl font-bold ${!noMargin && 'mb-10'}`}>{title} {breakActived && <br/>}<span className='text-gradient'>{titleColored}</span></h2>
  )
}

export default TitleSection;