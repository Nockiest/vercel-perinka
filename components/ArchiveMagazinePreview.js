"use client";
import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
const ArchiveMagazinePreview = ({ name, border, color, bgColor, pdfSrc }) => {
  const router = useRouter();

  const handleCistClick = () => {
    // Extract the PDF source name from pdfSrc prop and navigate the user to /read/pdfSrc
    const pdfSourceName = pdfSrc//.substring(1); // Remove the leading '/'
    router.push(`/read/${pdfSourceName}`);
  };

  return (
    <div
      className={`${bgColor} m-auto flex flex-col border-solid ${border} border-l-4 border-r-4 sm:flex-row   pt-10 pb-4`}
    >
      <div className="max-w-96 ml-auto mr-16 space-y-4">
        <h1 className={`  ${color}`}>{name}</h1>
        <h2 className={`ml-4 `}>OBSAH</h2>
        <ul className="space-y-2 pl-4  text-base  leading-8">
          <li>Word 1</li>
          <li>Word 2</li>
          <li>Word 3</li>
          <li>Word 1</li>
          <li>Word 2</li>
          <li>Word 3</li>
          <li>Word 1</li>
          <li>Word 2</li>
          <li>Word 3</li>
        </ul>
      </div>
      <div className="  max-w-96 mr-auto">
        <div className=" pt-10 w-full border-3 border-black">
          <Image height={256} width={256} src="/books.jpg" alt="Image" className="w-full border border-black" />
        </div>
        <div className=" ">
          {/* Use the handleCistClick function for the "ČÍST" button onClick */}
          <button onClick={handleCistClick} className="mr-0 btn bg-secondary-color">
            ČÍST
          </button>
          <button className="btn bg-secondary-color">KOMIKS</button>
        </div>
        <span className="ml-48 pl-2/3">2022/2023</span>
      </div>
    </div>
  );
};

export default ArchiveMagazinePreview;