"use client";
import React, { useState } from "react";
import Slider from "../global/Slider";
import Image from "next/image";
import { uuid } from "uuidv4";
const SlideGallery = ({ images, handleGalleryButtonClick }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const goToNextSlide = () => {
    const nextSlide = (currentSlide + 1) % images.length;
    setCurrentSlide(nextSlide);
  };

  const goToPreviousSlide = () => {
    const previousSlide = (currentSlide - 1 + images.length) % images.length;
    setCurrentSlide(previousSlide);
  };

  return (
    <div className="m-auto select-none flex flex-col justify-center align-center space-y-2 md:space-y-0">

      <div className="flex flex-col justify-center items-center mx-auto ">
      <GalleryButtonRow
          onGalleryButtonClick={() => handleGalleryButtonClick()}
        />
        <div className="flex mt-5   flex-col md:items-center   mw-auto space-x-4">

          <Slider
            number={currentSlide}
            setCurrentNumber={setCurrentSlide}
            maxNumber={images.length - 1}
          />
          <span className="ml-auto -translate-x-1/2  text-center select-none">
            {currentSlide + 1}/{images.length}
          </span>
        </div>




      </div>

      <div>
        {images.map((image, index) => (
         <div
         key={uuid()}
         style={{
           display: index === currentSlide ? "block" : "none",
           height: "300px",
           position: "relative",
           overflow : "visible",
         }}
         className="mx-auto flex justify-center items-center w-64"
       >
        <img  src={image.src}
           alt={image.alt} height='300px' />
           <p className='text-center'>{image.alt}</p>
         {/* <Image
           src={image.src}
           alt={image.alt}
           layout="fill"
           objectFit="cover"
           objectPosition="center top"
         /> */}
       </div>

        ))}

      </div>
    </div>
  );
};


const GalleryButtonRow = ({ onGalleryButtonClick }) => {
  return (
    <div className="flex justify-around md:mt-4  mw-auto ">
      <button className="big-btn bg-secondary-color-80 hover:bg-secondary-color" onClick={onGalleryButtonClick}>
        GALERIE
      </button>
      {/* <button className="btn-clicked">SDÍLET</button> */}
    </div>
  );
};

export default SlideGallery;
