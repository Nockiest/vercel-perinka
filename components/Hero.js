"use client"
import React from 'react'
import Image from 'next/image'
import Link from 'next/link';
 
const Hero = ({ firstHeading, secondHeading, showReadButton }) => {
  return (
    <div className="w-full relative" style={{ height: '518px' }}>
      <div className='w-full'> 
        <Image src="/books.jpg" alt="Books" layout="fill" objectFit="cover" />
      </div>
      <div className="absolute top-1/5 right-0 w-150  left-1/16 md:right-1/2 pr-24 pt-8 pl-8 pb-6 flex flex-col items-start gap-2 bg-gradient-to-br from-primary-color to-white shadow-lg">
        <h1 className="p-0 text-white whitespace-normal leading-relaxed outlined-text">
          {/* <span dangerouslySetInnerHTML={{ __html: firstHeading }} /> */}
          STUDENTSKÝ <br /> ČASOPIS
        </h1>
        {secondHeading !== '' && (
          <h2 className="leading-tight">
            {secondHeading}
          </h2>
        )}
      </div>
     
        <Link href="/read"> 
          <button className="flex absolute bottom-1/5 left-1/16  z-20 rounded bg-neutral text-text-color-80 items-center space-x-2"  >
            <span className="mr-2">ČÍST AKTUÁLNÍ ČÍSLO</span>
            <Image src="/right.svg" width={12} height={12} alt="right arrow" />
          </button>
        </Link>
     
    </div>
  );
};


export default Hero;
