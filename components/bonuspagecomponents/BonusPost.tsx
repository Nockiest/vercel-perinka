import React, { useState } from "react";
import SlideGallery from "./SlideGallery";
import { useMediaQuery } from "@react-hook/media-query";
import { URLwithAlt } from "../../app/bonus/[article]/page";

import ShareBtn from "../buttons/ShareBtn";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";
import Article from "./Article";
import PostHeader from "./PostHeader";
import Section from "../global/Section";

const BonusPost: React.FC<{
  reversed: boolean;
  pictures: Array<URLwithAlt>;
  title: string;
  setShowFullScreenGallery: (show: boolean) => void;
  textContent: string;
  author: string;
  contentLength: number;
}> = ({
  reversed,
  pictures,
  title,
  setShowFullScreenGallery,
  textContent,
  author,
  contentLength,
}) => {
  const router = useRouter();
  const pathname = usePathname();
  const [animationClass, setAnimationClass] = useState("");
  const handleGalleryButtonClick = () => {
    setShowFullScreenGallery(true);
    console.log("hello");
  };

  const changeViewedArticle = (number) => {
    const segments = pathname.split("/");
    const lastSegment = segments[segments.length - 1];
    console.log(lastSegment);
    setAnimationClass(reversed ? "translate-x-full" : "-translate-x-full");
    if (lastSegment && typeof Number(lastSegment) === "number") {
      setTimeout(() => {
        router.push(`/bonus/${number}`);
      }, 500); // Adjust the delay to match your transition duration
    }
  };

  const isMediumScreenOrSmaller = useMediaQuery("(max-width: 1000px)");

  return (


      <div className="bg-primary-color-40 overflow-y-auto ">
      <PostHeader
        contentLength={contentLength}
        changeViewedArticle={changeViewedArticle}
        title={title}
      />
        <div
          className={`bonus-post transform transition-transform duration-500 ease-in-out  w-full    items-center ${animationClass}`}
        >
          <Section classNames="  gap-2  ">
            <Article author={author} textContent={textContent} title={title} />

            <SlideGallery
              images={pictures}
              handleGalleryButtonClick={handleGalleryButtonClick}
            />
          </Section>
          di
        </div>
      </div>

  );
};

export default BonusPost;
