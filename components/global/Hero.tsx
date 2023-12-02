"use client"
import React from 'react'
import Image from 'next/legacy/image'
import Link from 'next/link';
import { FC , useState, useEffect } from 'react';

interface HeroProps {
  firstHeading: string;
  secondHeading: string;
  showReadButton?: boolean;
}

const Hero: FC<HeroProps> = ({ firstHeading, secondHeading, showReadButton = true }) => {
  const [currentImage, setCurrentImage] = useState<number>(6);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage === 3 ? 1 : prevImage + 1));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const imageUrls = [1, 2, 3, 4, 5, 6].map((num) => `/randomPics/pic${num}.jpg`);
  const transitionStyle = { transition: 'opacity 1s ease-in-out' };

  return (
    <div className="relative flex flex-col items-start w-full" style={{ height: '518px', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' }}>
      <div className="w-full h-full relative overflow-hidden">
        {imageUrls.map((imageUrl, index) => (
          <Image
            key={index}
            className="w-full h-full absolute top-0 left-0 opacity-0"
            src={imageUrl}
            alt={`HERO-${imageUrl}`}
            objectFit='cover'
            layout='fill'
            style={{ ...transitionStyle, opacity: currentImage === index + 1 ? 1 : 0,  }}
          />
        ))}
      </div>
      <div
        className="absolute top-1/5 right-0 w-150 left-1/16 md:right-1/2 pr-24 py-4 pl-8 flex flex-col items-start gap-2 bg-gradient-to-br from-primary-color  via-primary-color  to-transparent shadow-lg"
        style={{ boxShadow: '0 2px 6px rgba(0, 0, 0, 0.1)', zIndex: 1 }}
      >
        <h1 className="  w-2/3   text-white whitespace-normal leading-relaxed outlined-text" >
          STUDENTSKÝ <br /> ČASOPIS {}
        </h1>
        {secondHeading !== '' && <h2 className="leading-tight">{secondHeading}</h2>}

        {showReadButton && (
          <Link href="/read">
            <button
              className="p-4 ml-0 absolute bottom-[-16] z-0 rounded bg-neutral text-text-color-80 items-center space-x-2 border-none"
              style={{ boxShadow: '0 2px 6px rgba(0, 0, 0, 0.1)', zIndex: 1 }}
            >
              <span className="mr-2">ČÍST AKTUÁLNÍ ČÍSLO</span>
              <Image src="/svg/right.svg" width={12} height={12} alt="right arrow" />
            </button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Hero;