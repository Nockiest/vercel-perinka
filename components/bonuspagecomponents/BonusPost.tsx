import React from "react";
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
  contentLength: number
}> = ({
  reversed,
  pictures,
  title,
  setShowFullScreenGallery,
  textContent,
  author,
  contentLength
}) => {
  const router = useRouter();
  const pathname = usePathname();
  const handleGalleryButtonClick = () => {
    setShowFullScreenGallery(true);
    console.log("hello");
  };

  const changeViewedArticle = (number) => {
    const segments = pathname.split("/");
    const lastSegment = segments[segments.length - 1];
    console.log(lastSegment);
    if (lastSegment && typeof Number(lastSegment) === "number") {
      router.push(`/bonus/${number}`);
    }
  };

  const isMediumScreenOrSmaller = useMediaQuery("(max-width: 1000px)");

  return (
    <>
      <PostHeader contentLength={contentLength} changeViewedArticle={changeViewedArticle} title={title} />
      <div className="w-full    items-center">
      <Section classNames="bg-primary-color-20 gap-2  ">
          <Article author={author} textContent={textContent} title={title} />


          <SlideGallery
            images={pictures}
            handleGalleryButtonClick={handleGalleryButtonClick}
          />
       </Section>
      </div>
    </>
  );
};





export default BonusPost;
