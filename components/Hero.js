import React from 'react'
import Image from 'next/image'
 
const Hero = ({ firstHeading, secondHeading, showReadButton }) => {
  return (
    <div className="relative w-screen" style={{ height: '518px' }}>
      <Image src="/books.jpg" alt="Books" layout="fill" objectFit="cover" />

      <div className="absolute top-1/2 left-1/4  transform -translate-x-1/2 -translate-y-1/2 w-150 pr-8 pt-4 pl-6 pb-4 flex flex-col items-start  gap-2 bg-gradient-to-br from-primary-color to-white shadow-lg">
      <h1 className="p-0 text-white whitespace-normal leading-relaxed outlined-text">
  <span dangerouslySetInnerHTML={{ __html: firstHeading }} />
</h1>
        
          {secondHeading !== "" && 
           <h2 className="leading-tight">
         { secondHeading}
          </h2>
          }

      
      </div>
     {showReadButton && <button className='flex absolute bottom-1/16 right-1/16 p-2 z-20 rounded bg-neutral text-text-color-80 items-center space-x-2'>
        <span className=' mr-2'>ČÍST AKTUÁLNÍ ČISLO</span> 
        <Image src="/right.svg" width={12} height={12} alt="right arrow" />
      </button>}

    </div>
  );
};

export default Hero;

 
