import React from 'react';
import BioCard from '../../components/BioCard';
import Hero from '@/components/Hero';

const AboutUs = () => {
  const cards = [
    { title: 'Card 1' },
    { title: 'Card 2' },
    { title: 'Card 3' },
    { title: 'Card 4' },
    { title: 'Card 5' },
    { title: 'Card 6' },
    { title: 'Card 7' },
    { title: 'Card 8' },
  ];

  return (
    <div>
    <Hero  firstHeading={" STUDENTSKÝ</br>ČASOPIS"} secondHeading={"O PEŘINCE"} />
    <p className="p-4 text-left md:w-1/2 md:text-center mx-auto mt-3"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque
        sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis
        imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. Curabitur pellentesque nibh nibh.
    </p>
    <h1 className='text-center m-5'>REDAKCE</h1>
    <div className="bio-grid w-full grid bg-primary-color-20   p-16  ">
        {cards.map((card, index) => (
          <BioCard
            key={index}
            title={card.title}
            index={index}
          />
        ))}
      </div>
    </div>
 
  );
};

export default AboutUs;