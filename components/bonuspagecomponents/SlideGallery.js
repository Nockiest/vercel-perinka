"use client"
import React, {useState} from 'react'
import Slider from './Slider';
 import Image from 'next/image';
 const SlideGallery = ({ images }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const goToNextSlide = () => {
    const nextSlide = (currentSlide + 1) % images.length;
    setCurrentSlide(nextSlide);
  };

  const goToPreviousSlide = () => {
    const previousSlide = (currentSlide - 1 + images.length) % images.length;
    setCurrentSlide(previousSlide);
  };

  return (
    <div className='m-12 '>
      <div>
        {images.map((image, index) => (
          <div key={index} style={{ display: index === currentSlide ? 'block' : 'none' }}>
            <div className='w-64 h-64'>
            <div className="flex justify-center items-center w-full h-full">
              <Image src={image.src} alt={image.alt} width={300} height={300} />
            </div>

            </div>
          </div>
        ))}
      </div>
      <div className="flex flex-col mw-auto space-x-4">
        <Slider number={currentSlide} setCurrentNumber={setCurrentSlide} maxNumber={images.length - 1} />
        {currentSlide+1}/{images.length}
      </div>
      <div className="flex justify-center space-x-4">
        <button className="btn-clicked">GALERIE</button>
        <button className="btn-clicked">SDÍLET</button>
      </div>
    </div>
  );
};

 

export default SlideGallery;
