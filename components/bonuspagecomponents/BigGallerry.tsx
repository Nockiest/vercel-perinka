import React, { useState } from "react";


import Image from "next/image";
import Slider from "../global/Slider";

const BigGallery = ({ pics, closeFullScreenGallery }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const goToNextSlide = () => {
    const nextSlide = (currentSlide + 1) % pics.length;
    setCurrentSlide(nextSlide);
  };

  const goToPreviousSlide = () => {
    const previousSlide = (currentSlide - 1 + pics.length) % pics.length;
    setCurrentSlide(previousSlide);
  };

  return (
    <div className="flex flex-col fixed top-0 left-0 w-screen h-screen bg-black opacity-90 z-10   items-center justify-center">
        <button className="sticky top-0 left-0 m-4" onClick={closeFullScreenGallery}>JÍT ZPÁTKY</button>
      <div className="relative">
        {pics.map((image, index) => (
          <div key={index} style={{ display: index === currentSlide ? "block" : "none" }}>
            <div className="w-64 h-64">
              <div className="flex opacity-100 justify-center items-center w-full h-full">
                <Image src={image.src} alt={image.alt} width={2000} height={2000} />
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex flex-col mw-auto space-x-4">
        <Slider number={currentSlide} setCurrentNumber={setCurrentSlide} maxNumber={pics.length - 1} />
      </div>
      <div className="absolute top-0 left-0 m-8" onClick={closeFullScreenGallery}>
        <Image height={32} width={32} src="/svg/circle-left-solid.svg" alt={"escape"} />

      </div>
    </div>
  );
};

export default BigGallery;
