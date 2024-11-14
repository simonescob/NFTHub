import React from 'react'
import CardRoadmap from '../Components/CardRoadmap';
import TitleSection from '../Components/TitleSection';
import icon1 from "../../assets/icon_roadmap_1.svg";

function Roadmap() {
  const listRoadmap = [
    {
      image: icon1,
      phrase: 'Phase 01',
      title: 'Planning',
      text: 'Quality comes first. we took our time to plan out everything and build our production pipeline for a good quality artworks.',
      items: [
        'Release website and logo',
        'Grow community',
        'Launch the project',
      ],
    },
    {
      image: icon1,
      phrase: 'Phase 01',
      title: 'Planning',
      text: 'Quality comes first. we took our time to plan out everything and build our production pipeline for a good quality artworks.',
      items: [
        'Release website and logo',
        'Grow community',
        'Launch the project',
      ],
    },
    {
      image: icon1,
      phrase: 'Phase 01',
      title: 'Planning',
      text: 'Quality comes first. we took our time to plan out everything and build our production pipeline for a good quality artworks.',
      items: [
        'Release website and logo',
        'Grow community',
        'Launch the project',
      ],
    },
    {
      image: icon1,
      phrase: 'Phase 01',
      title: 'Planning',
      text: 'Quality comes first. we took our time to plan out everything and build our production pipeline for a good quality artworks.',
      items: [
        'Release website and logo',
        'Grow community',
        'Launch the project',
      ],
    },
    {
      image: icon1,
      phrase: 'Phase 01',
      title: 'Planning',
      text: 'Quality comes first. we took our time to plan out everything and build our production pipeline for a good quality artworks.',
      items: [
        'Release website and logo',
        'Grow community',
        'Launch the project',
      ],
    },
    {
      image: icon1,
      phrase: 'Phase 01',
      title: 'Planning',
      text: 'Quality comes first. we took our time to plan out everything and build our production pipeline for a good quality artworks.',
      items: [
        'Release website and logo',
        'Grow community',
        'Launch the project',
      ],
    },
  ]
  return (
    <section id="roadmap">
      <TitleSection title="Nfthub's " titleColored='Roadmap' />
      <div className="flex flex-wrap justify-between items-start">
        {listRoadmap.map((roadmap, key) => 
          <CardRoadmap key={key} phrase={roadmap.phrase} text={roadmap.text} title={roadmap.title} items={roadmap.items} image={roadmap.image} />
        )}
      </div>
    </section>
  )
}

export default Roadmap;