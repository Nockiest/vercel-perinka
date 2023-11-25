"use client"
import BigGallery from "../../components/bonuspagecomponents/BigGallerry";
import BonusPost from "../../components/bonuspagecomponents/BonusPost";
import Hero from "../../components/global/Hero";
import   { useState } from "react";

type URLwithAlt = {
 src: string
 alt: string
}
type BonusPost = {

  textContent: string
  imageContent: Array<URLwithAlt>
}

const Bonus = () => {
  const contents:Array<BonusPost> = [
    {
      textContent: "x",
      imageContent: [
        { src: "/svg/instagram.svg", alt: "Image X" },
        { src: "/svg/logo copy.png", alt: "Image Y" },
        { src: "/svg/logofull.png", alt: "Image Z" },
        { src: "/svg/instagram.svg", alt: "Image Z" },
        { src: "/svg/logo copy.png", alt: "Image Z" },
      ]
    },
    {
      textContent: "y",
      imageContent: [
        { src: "/svg/books.jpg", alt: "Image X" },
        { src: "/svg/logo copy.png", alt: "Image Y" },
        { src: "/svg/logofull.png", alt: "Image Z" },
      ]
    }
  ]
  const [showFullScreenGallery, setShowFullScreenGallery] = useState(false);
  const [fullScreenGalleryIndex, setFullScreenGalleryIndex] = useState(null);

  const closeFullScreenGallery = () => {
    setShowFullScreenGallery(false);
    setFullScreenGalleryIndex(null);
  };

  return (
    <div className="bg-primary-color-20">

      {showFullScreenGallery? (
        <BigGallery
          pics={contents[fullScreenGalleryIndex].imageContent}
          closeFullScreenGallery={closeFullScreenGallery}

        />
      ): (
         <>
        <Hero firstHeading={"BONUSOVÉ ČLÁNKY"} secondHeading={"BONUSOVÉ ČLÁNKY"} />
        {contents.map((content, index) => (
          <BonusPost
            key={index}
            reversed={index % 2 === 1}
            pictures={content.imageContent}
            setShowFullScreenGallery={setShowFullScreenGallery}
            setFullScreenGalleryIndex={setFullScreenGalleryIndex}
            index={index}
            textContent={content.textContent}
          />
        ))}
       </>
      )

      }
    </div>
  );
};

export default Bonus;