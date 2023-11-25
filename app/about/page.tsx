import React from 'react';
import BioCard from '../../components/about/BioCard';
import Hero from '../../components/global/Hero';

type BioCardType = {
  name: string
  description: string
  imagePath: string
}

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
    [],
    [],
    [],
    [],
    []
  ];

  return (
    <div>
    <Hero  firstHeading={" STUDENTSKÝ</br>ČASOPIS"} secondHeading={"O PEŘINCE"}   />
    <p className="p-4 text-left md:w-1/2 md:text-center mx-auto mt-3"> Sem přidejte krátký text o vaší redakci. 40-80 slov
    </p>
    <h1 className='text-center m-5'>REDAKCE</h1>
    <div className="bio-grid w-full grid bg-primary-color-20 py-16 px-32  ">
        {cards.map((card, index) => (
          <BioCard
            key={index}
            title={index}
            index={index}
            imagePath={`/RedakcePics/img-${index+1}.jpg`}
          />
        ))}
      </div>
    </div>

  );
};

export default AboutUs;