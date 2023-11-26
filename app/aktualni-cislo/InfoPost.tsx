import Image from "next/image";
import { Vector2 } from "../../Types";

interface InfoPostProps {
    title?: string;
    textContent: string;
    image?: {
      src: string;
      position: 'left' | 'right';
      alt: string;
      size: Vector2
    };
    author?: string
  }

  const InfoPost: React.FC<InfoPostProps> = ({ title, textContent, image,   author }) => {
    const textContentStyle:React.CSSProperties= {
        width: '100%',
        display: 'block'  ,
        textAlign: 'justify'
      }
    return (
      <div className={`p-4 md:my-2 mx-0 md:mx-10 flex flex-col md:flex-row items-center   justify-center   gap-8`}>
        <div className={`  md:${image ? 'md:w-1/2' : 'w-full'} p-2`}>
          {title && <h2 className="text-2xl font-bold mb-4">{title}</h2>}
          <p style={textContentStyle}className=" ">{textContent}</p>
          <p>{author}</p>
        </div>
        {image && (
          <div className={`max-w-32  md:order-${image.position === 'left' ? 'first' : 'last'}`}>
          <Image
            src={image.src}
            alt={image.alt}
            className="w-full h-auto"
            layout="cover"
            width={image.size.x}
            height={image.size.y}

            />

          </div>
        )}
      </div>
    );
  };


  export default InfoPost