import React from "react";
import SlideGallery from "./SlideGallery";
import { useMediaQuery } from '@react-hook/media-query';

const BonusPost = ({ reversed, pictures, setFullScreenGalleryIndex, setShowFullScreenGallery, index, textContent }) => {
  const handleGalleryButtonClick = (index) => {
    setFullScreenGalleryIndex(index);
    setShowFullScreenGallery(true);
    console.log("hello", index);
  };

  const isMediumScreenOrSmaller = useMediaQuery('(max-width: 1000px)'); 
  return (
    <div className="p-2 w-full space-y-2  items-center flex justify-center flex-col lg:flex-row ">
       {reversed && !isMediumScreenOrSmaller && (
        <SlideGallery index={index} images={pictures} handleGalleryButtonClick={handleGalleryButtonClick} />
      )}
      <div className=" ml-8 mr-8 lg:w-1/2 ">
        <div
          className=" mt-8 p-8 border-r-4 items-center border-primary-color"
          style={{ border: "1px solid var(--main-main-100, #9E8751)", background: "#FFF" }}
        >
          <h1 className="ml-2">TITLE</h1>
          <p className="m-2">
            {textContent}
          </p>

          <div className="mx-auto  sm:mx-0 sm:ml-auto w-64">
            <h6 className="text-center m-0 mr-8 leading-tight">HONZA NOVÁK</h6>
            <br />
            <h6 className="text-center m-0 mr-8 leading-tight">9.O</h6>
          </div>
        </div>
      </div>
      {!reversed && !isMediumScreenOrSmaller && (
        <SlideGallery index={index} images={pictures} handleGalleryButtonClick={handleGalleryButtonClick} />
      )}
      {isMediumScreenOrSmaller && (
        <SlideGallery index={index} images={pictures} handleGalleryButtonClick={handleGalleryButtonClick} />
      )}
    </div>
  );
};

export default BonusPost;
