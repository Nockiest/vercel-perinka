import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { storage } from "../../firebase";
import { getDownloadURL, ref } from "firebase/storage";
function PostPreview({ heading, text, image, releaseDate, href }) {
    const postTitle = heading.replace(/\s+/g, "-").toLowerCase();
    const [imageUrl, setImageUrl] = useState("");
    const router = useRouter();

    useEffect(() => {
      const fetchImageUrl = async () => {
        try {
          const imageRef = ref(storage, `images/${image}`);
          const url = await getDownloadURL(imageRef);
          setImageUrl(url);
        } catch (error) {
          console.error("Error fetching image URL:", error);
        }
      };

      fetchImageUrl();
    }, [image]);

    const handlePostClick = () => {
      router.push(`/${href}`);
    };

    return (
      <div className="flex relative flex-col w-2/3 md:gap-16 p-6 shadow-md">
        <a href={href}>



        <div className="flex flex-col  sm:flex-row md:h-32 bg-white border-b border-black">
        <div>
        <img
          src={image}
          alt={image}
          // className="object-fit-cover"
          style={{width: '120px', height: '120px', objectFit: 'cover'}}
          // width={120}
          // height={240}
        />
          </div>

          <div className="flex flex-col w-full md:gap-2 p-2">
            <h4 className="cursor-pointer" onClick={handlePostClick}>
              {heading}
            </h4>

            <p className="overflow-hidden h-32 md:h-auto  text-justify   overflow-ellipsis">{text}</p>
          </div>
          <p className=" absolute bottom-0 right-4">{releaseDate}</p>
         </div>
        </a>
      </div>
    );
  }

  export default PostPreview;


//   {
// // pathname: `/blog/${postTitle}` ,
// //   query: { postId: id, slug: heading },
// }
