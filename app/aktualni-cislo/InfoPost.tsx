'use client'
import Image from "next/image";
import { Vector2 } from "../../Types";
import { InfoPostProps } from "../../type/types";
import { useEffect, useState } from "react";
import { getDownloadURL, ref } from "firebase/storage";
import { storage } from "../../firebase";

const InfoPost: React.FC<InfoPostProps> = ({ title, textContent, image, author, imageUrlOrId }) => {
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const textContentStyle: React.CSSProperties = {
    width: '100%',
    display: 'block',
    textAlign: 'justify',
  };

  useEffect(() => {
    if (typeof imageUrlOrId === 'string') {
      // If imageUrlOrId is a string, assume it's a Firebase ID
      const imageRef = ref(storage, `images/${imageUrlOrId}`);
      getDownloadURL(imageRef)
        .then((url) => setImageUrl(url))
        .catch((error) => console.error('Error fetching image:', error));
    } else if (imageUrlOrId instanceof File) {
      // If imageUrlOrId is a File, create a local URL for preview
      const localImageUrl = URL.createObjectURL(imageUrlOrId);
      setImageUrl(localImageUrl);
    }
  }, [imageUrlOrId]);

  return (
    <div className={`p-4 md:my-2 mx-0 md:mx-10 flex flex-col md:flex-row items-center justify-center gap-8`}>
      <div className={`md:${image ? 'md:w-1/2' : 'w-full'} p-2`}>
        {title && <h2 className="font-bold mb-4">{title}</h2>}
        <p style={textContentStyle} className=" ">
          {textContent}{image.size.y}
        </p>
        <p>{author}</p>
      </div>

  {imageUrl&& <div className={`max-w-32 md:${image.position === 'left' ? 'order-first' : 'order-last'}`}>
    <Image src={imageUrl} alt={image.alt} className="w-full h-auto" layout="fixed" width={image.size.x} height={image.size.y} />
  </div>}

      {/* {!(imageUrlOrId instanceof File) ? (

      ) : (
        <div
          className={`max-w-32 md:${image.position === 'left' ? 'order-first' : 'order-last'} border border-solid border-black`}
          style={{ width: `${image.size.x}px`, height: `${image.size.y}px` }}
        />
      )} */}
    </div>
  );
};

export default InfoPost;
