"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
const ArchiveMagazinePreview = ({ name, border, color, bgColor, pdfSrc, contents }) => {
  const router = useRouter();

  const handleCistClick = () => {
    router.push(`/read/${pdfSrc}`);
  };

  const column1 = contents.slice(0, Math.ceil(contents.length / 2));
  const column2 = contents.slice(Math.ceil(contents.length / 2));


  return (
    <div
      className={`${bgColor} flex flex-col sm:flex-row   border-solid ${border} border-4 p-4   gap-y-1 gap-x-4  m-1 `}
    >
      <div className=" sm:ml-12  mt-2 space-y-4 flex-1">
        <h1 className={`whitespace-normal font-weight-900  ${color}`}>{name}</h1>
        <h3 className={`pt-4 text-center  border-b-8 md:mr-8  ${color}`} style={{ borderColor: color }}>  OBSAH</h3>
        <div className="max-h-48   overflow-auto grid grid-cols-1 md:grid-cols-2 gap-x-1/2 sm:flex-row">
        <div className="gap-y-2 gap-x-4 pl-4 text-base leading-8">
            {column1.map((word, index) => (
              <li key={index}>{word}</li>
            ))}
          </div>
          <div className="gap-y-2 gap-x-4 pl-4 text-base leading-8">
            {column2.map((word, index) => (
              <li key={index}>{word}</li>
            ))}
          </div>

        </div>
      </div>
      <div className="mt-6 sm:mt-0 max-w-96  md:mr-8  mx-auto">
        <div className="pt-10 w-full   border-3 border-black">
          <Image
            height={256}
            width={256}
            src="/randomPics/pic1.jpg"
            alt="Titulní stránka časopisu"
            className="w-full h-full border border-black"
          />
        </div>
        <div className="flex justify-center">
          <button
            onClick={handleCistClick}
            className="big-btn px-auto mx-auto bg-secondary-color"
          >
            ČÍST
          </button>
        </div>

        <div className="ml-auto w-full mt-4 text-right">2022/2023</div>
      </div>
    </div>
  );
};

export default ArchiveMagazinePreview;