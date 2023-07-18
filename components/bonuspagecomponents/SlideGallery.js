"use client"
import React, {useState} from 'react'
 
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
    <div className='bg-primary-color'>
      <div>
        {images.map((image, index) => (
          <div
            key={index}
            style={{ display: index === currentSlide ? 'block' : 'none' }}
          >
            <img src={image.src} alt={image.alt} width={400} height={300} />
          </div>
        ))}
      </div>
      <div className="flex justify-center space-x-4">
        <button className="btn-clicked bg-color-red" onClick={goToPreviousSlide}>
          Previous
        </button>
        <button  className="btn-clicked" onClick={goToNextSlide}>Next</button>
      </div>
      <div className="flex justify-center space-x-4">
        <butto className="btn-clicked">GALERIE</butto>
        <button  className="btn-clicked">SDÍLET</button>
      </div>
    </div>
  );
};


 

export default SlideGallery;
