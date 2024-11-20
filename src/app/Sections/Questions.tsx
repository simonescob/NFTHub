"use client";
import React, { ReactElement, useState } from 'react'
import TitleSection from '../Components/TitleSection';
import { useCollapse } from 'react-collapsed';
import arrowDownIcon from "../../assets/arrow-down.svg";

type CollapsibleItemProps = {
  title: string;
  content: ReactElement;
  isExpanded: boolean;
  onToggle: () => void;
};

const CollapsibleItem: React.FC<CollapsibleItemProps> = ({
  title,
  content,
  isExpanded,
  onToggle,
}) => {
  const { getCollapseProps, getToggleProps } = useCollapse({ isExpanded });

  return (
    <div className='border-b-2 last:border-b-0 py-4'>
      <button {...getToggleProps({ onClick: onToggle })} className="w-full flex justify-between">
        <span className='font-bold'>{title}</span> <img className={`  ${isExpanded ? 'rotate-180' : '' } `} src={arrowDownIcon.src} alt="" />
      </button>
      <div {...getCollapseProps()}>
        <p className='text-gray-500 py-3'>{content}</p>
      </div>
    </div>
  );
};

type Item = {
  id: number;
  title: string;
  content: ReactElement;
};

function Questions() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const data: Item[] = [
    { 
      id: 1, 
      title: "What is Nfthub's NFT Collection?", 
      content: <>
      Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat proident. <br /> <br />
      Voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat proident.
      </>
    },
    { 
      id: 1, 
      title: "How we can buy and invest NFT?", 
      content: <>
      Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat proident. <br /> <br />
      Voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat proident.
      </>
    },
    { 
      id: 1, 
      title: "Why we should choose Nerko's NFT?", 
      content: <>
      Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat proident. <br /> <br />
      Voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat proident.
      </>
    },
    { 
      id: 1, 
      title: "Where we can buy and sell NFts?", 
      content: <>
      Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat proident. <br /> <br />
      Voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat proident.
      </>
    },
    { 
      id: 1, 
      title: "How secure is this token?", 
      content: <>
      Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat proident. <br /> <br />
      Voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat proident.
      </>
    },
    { 
      id: 1, 
      title: "What is your contract address?", 
      content: <>
      Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat proident. <br /> <br />
      Voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat proident.
      </>
    },
  ];

  const toggleItem = (index: number) => {
    setExpandedIndex((prevIndex) => (prevIndex === index ? null : index));
  };
  return (
    <section id='questions' className='flex flex-col items-center'>
      <TitleSection title='Your questions, ' titleColored='answered!' breakActived={true} />
      <div className="border rounded-2xl lg:w-[680px] p-8">
        {data.map((item, index) => (
          <CollapsibleItem
            key={item.id}
            title={item.title}
            content={item.content}
            isExpanded={expandedIndex === index}
            onToggle={() => toggleItem(index)}
          />
        ))}
      </div>
    </section>
  )
}

export default Questions;