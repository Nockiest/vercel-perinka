"use client";
import React, { useState } from "react";
import Slider from "../Slider";
import Image from "next/image";
const SlideGallery = ({ index, images, handleGalleryButtonClick }) => {
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
    <div className="m-auto flex flex-col md:flex-row lg:flex-col align-center space-y-2 md:space-y-0">
      <div>
        {images.map((image, index) => (
          <div key={index} style={{ display: index === currentSlide ? "block" : "none" }}>
            <div className="w-64 h-64">
              <div className="flex justify-center items-center w-full h-full">
                <Image src={image.src} alt={image.alt} width={300} height={300} />
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex flex-col justify-center items-center md:ml-4">
        <div className="flex flex-col   md:flex-row md:items-center  mw-auto space-x-4">
          <div className="flex pt-2 justify-center items-center">
            <Slider number={currentSlide} setCurrentNumber={setCurrentSlide} maxNumber={images.length - 1} />
          </div>
          <div className="ml-auto text-center" style={{ userSelect: "none" }}>
            {currentSlide + 1}/{images.length}
          </div>
        </div>

        <div className="flex justify-center md:mt-4  mw-auto ">
          <button className="btn-clicked" onClick={() => handleGalleryButtonClick(index)}>
            GALERIE
          </button>
          <button className="btn-clicked">SDÍLET</button>
        </div>
      </div>
    </div>
  );
};

export default SlideGallery;

 