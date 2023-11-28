import React from "react";
import SlideGallery from "./SlideGallery";
import { useMediaQuery } from "@react-hook/media-query";
import { URLwithAlt } from "../../app/bonus/[article]/page";
import DOMPurify from "dompurify";
import ShareBtn from "../buttons/ShareBtn";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";

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
  const pathname = usePathname();
  const handleGalleryButtonClick = () => {
    setShowFullScreenGallery(true);
    console.log("hello");
  };

  const handlePrevButtonClick = () => {
    const segments = pathname.split("/");
    const lastSegment = segments[segments.length - 1];
    console.log(lastSegment);
    if (lastSegment && typeof Number(lastSegment) === "number") {
      router.push(`/bonus/${Number(lastSegment) - 1}`);
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
        <div className="flex flex-row absolute left-1/2 transform -translate-x-1/2 items-center">
          <Image
            onClick={handlePrevButtonClick}
            className="select-none cursor-pointer"
            src="/svg/chevron-left-solid.svg"
            alt="Left"
            height={28}
            width={28}
          />

          <h1 className="w-full text-center md:text-left">{title}</h1>

          <Image
            onClick={handleNextButtonClick}
            className="select-none cursor-pointer"
            src="/svg/chevron-right-solid.svg"
            alt="Right"
            height={28}
            width={28}
          />
        </div>

        <ShareBtn link={""} />
      </div>
      <div className="w-full px-8   items-center">
        <div className="mb-8">
          <Article author={author} textContent={textContent} title={title} />
        </div>

        <div>
          <SlideGallery
            images={pictures}
            handleGalleryButtonClick={handleGalleryButtonClick}
          />
        </div>
      </div>
    </>
  );
};

const Article = ({ title, textContent, author }) => {
  return (
    <div className="items-center">
      <div
        className="m-2 gap-16 lg:w-2/3 mx-auto mt-4 p-8   border-x-8 border-primary-color"
        style={{ fontSize: "18px", lineHeight: "2", textAlign: "justify" }} // Adjust the values as needed
        dangerouslySetInnerHTML={{ __html: sanitizeHtml(textContent) }}
      />

      <h2 className="text-right mr-32 leading-tight">{author}</h2>
    </div>
  );
};

export default BonusPost;
