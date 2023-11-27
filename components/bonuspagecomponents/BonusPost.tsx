import React from "react";
import SlideGallery from "./SlideGallery";
import { useMediaQuery } from "@react-hook/media-query";
import { URLwithAlt } from "../../app/bonus/[article]/page";
import DOMPurify from "dompurify";

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
  const handleGalleryButtonClick = () => {
    setShowFullScreenGallery(true);
    console.log("hello");
  };

  const isMediumScreenOrSmaller = useMediaQuery("(max-width: 1000px)");

  return (
    <div className={`p-2 w-full items-center justify-center flex  flex-wrap mx-8  ${reversed ? 'md:flex-row-reverse' : 'md:flex-row'}   `}>
      <Article author={author} textContent={textContent} title={title} />
      <SlideGallery images={pictures} handleGalleryButtonClick={handleGalleryButtonClick} />
    </div>

  );

};


const Article = ({title, textContent,author}) => {
  return (
    <div className="items-center lg:w-2/3">
        <h1 className="text-center md:text-left ml-2">{title}</h1>
        <div
          className="m-2      mt-8 p-8 border-r-4 border-primary-color"
          style={{
            border: "1px solid var(--main-main-100, #9E8751)",
            background: "#FFF",
          }}
          dangerouslySetInnerHTML={{ __html: sanitizeHtml(textContent) }}
        />
        {/* <div className="mx-auto sm:mx-0 sm:ml-auto w-64"> */}
          <h6 className="text-right m-0 mr-8 leading-tight">{author}</h6>
        {/* </div> */}
      </div>

  )
}


export default BonusPost;
