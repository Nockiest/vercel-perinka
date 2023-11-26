"use client"
import Link from "next/link";
import BigGallery from "../../components/bonuspagecomponents/BigGallerry";
import BonusPost from "../../components/bonuspagecomponents/BonusPost";
import Hero from "../../components/global/Hero";
import   { useState } from "react";



const Bonus = () => {
  // const contents:Array<BonusPost> = [
  //   {
  //     textContent: "x",
  //     imageContent: [
  //       { src: "/svg/instagram.svg", alt: "Image X" },
  //       { src: "/svg/logo copy.png", alt: "Image Y" },
  //       { src: "/svg/logofull.png", alt: "Image Z" },
  //       { src: "/svg/instagram.svg", alt: "Image Z" },
  //       { src: "/svg/logo copy.png", alt: "Image Z" },
  //     ]
  //   },
  //   {
  //     textContent: "y",
  //     imageContent: [
  //       { src: "/svg/books.jpg", alt: "Image X" },
  //       { src: "/svg/logo copy.png", alt: "Image Y" },
  //       { src: "/svg/logofull.png", alt: "Image Z" },
  //     ]
  //   }
  // ]

  // const [showFullScreenGallery, setShowFullScreenGallery] = useState(false);
  // const [fullScreenGalleryIndex, setFullScreenGalleryIndex] = useState(null);


  return (
    <div className="bg-primary-color-20">


         <>
        <Hero firstHeading={"BONUSOVÉ ČLÁNKY"} secondHeading={"BONUSOVÉ ČLÁNKY"} />
        <ul>
          <li>
            <Link href="bonus/0">Lihihvy</Link>
          </li>
          <li>
           <Link href="bonus/1">Lihihvy</Link>
          </li>
          <li>
          <Link href="bonus/2">Lihihvy</Link>
          </li>
          <li>
          <Link href="bonus/3">Lihihvy</Link>
          </li>
        </ul>
        {/* {contents.map((content, index) => (
          <BonusPost
            key={index}
            reversed={index % 2 === 1}
            pictures={content.imageContent}
            setShowFullScreenGallery={setShowFullScreenGallery}
            setFullScreenGalleryIndex={setFullScreenGalleryIndex}
            index={index}
            textContent={content.textContent}
          />
        ))} */}
       </>

    </div>
  );
};

export default Bonus;
