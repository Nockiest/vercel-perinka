import React from "react";
import SlideGallery from "./SlideGallery";
import { useMediaQuery } from "@react-hook/media-query";
import { URLwithAlt } from "../../app/bonus/[article]/page";
import DOMPurify from "dompurify";
import ShareBtn from "../buttons/ShareBtn";
import {usePathname, useRouter } from "next/navigation";

const sanitizeHtml = (htmlString) => {
  return DOMPurify.sanitize(htmlString);
};

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
  const pathname = usePathname()
  const handleGalleryButtonClick = () => {
    setShowFullScreenGallery(true);
    console.log("hello");
  };

  const handlePrevButtonClick = () => {
    const segments = pathname.split("/");
    const lastSegment = segments[segments.length - 1];
    console.log(lastSegment);
    if (lastSegment && typeof Number(lastSegment) === "number") {
      router.push(`/bonus/${Number(lastSegment) -1}`);
    }
    // Assuming your current URL is something like '/bonus/x'


  };

  const handleNextButtonClick = () => {
    const segments = pathname.split("/");
    const lastSegment = segments[segments.length - 1];
    console.log(lastSegment);
    if (lastSegment && typeof Number(lastSegment) === "number") {
      router.push(`/bonus/${Number(lastSegment) + 1}`);
    }

  };

  const isMediumScreenOrSmaller = useMediaQuery("(max-width: 1000px)");

  return (
    <>
      <div className="relative flex items-center">
        <button onClick={handlePrevButtonClick} className="mr-2">
          Previous
        </button>
        <ShareBtn link={''} />
        <h1 className="absolute left-1/2 transform -translate-x-1/2 text-center md:text-left">
          {title}
        </h1>
        <button onClick={handleNextButtonClick} className="ml-2">
          Next
        </button>
      </div>

      <div
        className={`  w-full items-center justify-center flex  flex-wrap  px-8  ${
          reversed ? "md:flex-row-reverse" : "md:flex-row"
        }   `}
      >
        <Article author={author} textContent={textContent} title={title} />
        <SlideGallery
          images={pictures}
          handleGalleryButtonClick={handleGalleryButtonClick}
        />
      </div>
    </>
  );
};

const Article = ({ title, textContent, author }) => {
  return (
    <div className="items-center   lg:w-2/3">

      <div
        className="m-2    mt-4 p-8  border-2   border-primary-color "
        dangerouslySetInnerHTML={{ __html: sanitizeHtml(textContent) }}
      />

      <h6 className="text-right  pr-8 leading-tight">{author}</h6>
    </div>
  );
};

export default BonusPost;
