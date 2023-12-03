import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import React from 'react'
import ShareBtn from '../buttons/ShareBtn';

const PostHeader = ({ changeViewedArticle, title, contentLength }) => {
    const router = useRouter();
    const pathname = usePathname();
    const segments = pathname.split("/");
    const currentPostNumber = Number(segments[segments.length - 1]);

    return (
      <div className="bg-stone-100 relative flex items-center">
        <div className="flex flex-row absolute left-1/2 transform -translate-x-1/2 items-center">
          {Number(currentPostNumber) > 0&& <Image
            onClick={() => changeViewedArticle(Number(currentPostNumber) - 1)}
            className="select-none cursor-pointer mr-4"
            src="/svg/chevron-left-solid.svg"
            alt="Left"
            height={14}
            width={14}
          />}

          <h1 className="w-full text-center md:text-left">{title}</h1>

         {Number(currentPostNumber)  < contentLength-1 && <Image
            onClick={() => changeViewedArticle(Number(currentPostNumber) + 1)}
            className="select-none cursor-pointer ml-4"
            src="/svg/chevron-right-solid.svg"
            alt="Right"
            height={14}
            width={14}
          />}
        </div>
        <ShareBtn link={""} />
      </div>
    );
  };

export default PostHeader