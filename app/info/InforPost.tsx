import Image from "next/image";

interface InfoPostProps {
    title?: string;
    textContent: string;
    image?: {
      src: string;
      position: 'left' | 'right';
      alt: string;
    };
  }

  const InfoPost: React.FC<InfoPostProps> = ({ title, textContent, image }) => {
    const textContentStyle:React.CSSProperties= {
        width: '100%',
        display: 'block'  ,
        textAlign: 'justify'
      }
    return (
      <div className={`p-4 md:m-16 flex flex-col ${image ? 'md:flex-row' : ''} items-center md:items-start justify-center md:justify-start gap-4`}>
        <div className={`  md:${image ? 'md:w-1/2' : 'w-full'} p-2`}>
          {title && <h2 className="text-2xl font-bold mb-4">{title}</h2>}
          <p style={textContentStyle}className=" ">{textContent}</p>
        </div>
        {image && (
          <div className={`md:max-w-1/4 md:order-${image.position === 'left' ? 'first' : 'last'}`}>
          <Image
            src={image.src}
            alt={image.alt}
            className="w-full h-auto"
            layout="cover"
            width={200}
            height={200}
            objectFit="contain" // Or use "cover", "fill", etc., based on your preference
            />

          </div>
        )}
      </div>
    );
  };


  export default InfoPost