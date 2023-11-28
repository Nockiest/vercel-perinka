import React from "react";
import SlideGallery from "./SlideGallery";
import { useMediaQuery } from "@react-hook/media-query";
import { URLwithAlt } from "../../app/bonus/[article]/page";

import ShareBtn from "../buttons/ShareBtn";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";
import Article from "./Article";
import PostHeader from "./PostHeader";



const BonusPost: React.FC<{
  reversed: boolean;
  pictures: Array<URLwithAlt>;
  title: string;
  setShowFullScreenGallery: (show: boolean) => void;
  textContent: string;
  author: string;
}> = ({
  reversed,
  pictures,
  title,
  setShowFullScreenGallery,
  textContent,
  author,
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
      <PostHeader changeViewedArticle={changeViewedArticle} title={title} />
      <div className="w-full px-8   items-center">
        <div className="mb-8">
          <Article author={author} textContent={textContent} title={title} />
        </div>

   
          <SlideGallery
            images={pictures}
            handleGalleryButtonClick={handleGalleryButtonClick}
          />

      </div>
    </>
  );
};





export default BonusPost;
