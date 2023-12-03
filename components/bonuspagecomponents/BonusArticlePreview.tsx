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
      <div className="flex relative flex-col w-2/3 gap-16 p-6 shadow-md">
        <a href={href}>



        <div className="flex flex-row h-32 bg-white border-b border-black">
          <Image src={image} alt={image} width={120} height={240} />
          <div className="flex flex-col w-full gap-2 p-2">
            <h4 className="cursor-pointer" onClick={handlePostClick}>
              {heading}
            </h4>

            <p className="overflow-hidden   overflow-ellipsis">{text}</p>
          </div>
          <p className=" absolute bottom-0 right-2">{releaseDate}</p>
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
