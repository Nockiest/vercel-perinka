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
    { title: 'Card 9' },
    { title: 'Card 10' },
    { title: 'Card 11' },
    { title: 'Card 12' },
    { title: 'Card 13' },
  ];

  return (
    <div>
    <Hero  firstHeading={" STUDENTSKÝ</br>ČASOPIS"} secondHeading={"O PEŘINCE"}   />
    <p className="p-4 text-left md:w-1/2 md:text-center mx-auto mt-3"> Školních časopisů se na naší škole vystřídala spousta. Ten první byl založen již rok po vzniku gymnázia a nesl název Peřinka Times. Právě jemu jsme se rozhodli vzdát hold a pojmenovat podle něj i ten náš, který vznikl po několikaleté pauze.
    </p>
    <h1 className='text-center m-5'>REDAKCE</h1>
    <div className="bio-grid w-full grid bg-primary-color-20 py-16 px-32  ">
        {cards.map((card, index) => (
          <BioCard
            key={index}
            title={card.title}
            index={index}
            imagePath={`/RedakPics/img-${index+1}.jpg`}
          />
        ))}
      </div>
    </div>

  );
};

export default AboutUs;