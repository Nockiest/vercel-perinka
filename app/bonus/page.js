"use client";
import BigGallery from "@/components/bonuspagecomponents/BigGallerry";
import BonusPost from "@/components/bonuspagecomponents/BonusPost";
import Hero from "@/components/Hero";
import React, { useState } from "react";

const Bonus = () => {
  const [allPictures, setAllPictures] = useState([
    [
      { src: "/instagram.svg", alt: "Image X" },
      { src: "/logo copy.png", alt: "Image Y" },
      { src: "/logofull.png", alt: "Image Z" },
      { src: "/logofull.png", alt: "Image Z" },
      { src: "/logofull.png", alt: "Image Z" },
    ],
    [
      { src: "/books.jpg", alt: "Image X" },
      { src: "/logo copy.png", alt: "Image Y" },
      { src: "/logofull.png", alt: "Image Z" },
    ],
  ]);
  const [showFullScreenGallery, setShowFullScreenGallery] = useState(false);
  const [fullScreenGalleryIndex, setFullScreenGalleryIndex] = useState(null);

  const closeFullScreenGallery = () => {
    setShowFullScreenGallery(false);
    setFullScreenGalleryIndex(null);
  };

  return (
    <div className="bg-primary-color-20">
      <Hero firstHeading={"BONUSOVÉ ČLÁNKY"} secondHeading={"BONUSOVÉ ČLÁNKY"} />
      {allPictures.map((pictures, index) => (
        <BonusPost
          key={index}
          reversed={index % 2 === 1}
          pictures={pictures}
          setShowFullScreenGallery={setShowFullScreenGallery}
          setFullScreenGalleryIndex={setFullScreenGalleryIndex}
          index={index}
        />
      ))}
      {showFullScreenGallery && (
        <BigGallery
          pics={allPictures[fullScreenGalleryIndex]}
          closeFullScreenGallery={closeFullScreenGallery}
         
        />
      )}
    </div>
  );
};
 
export default Bonus;
