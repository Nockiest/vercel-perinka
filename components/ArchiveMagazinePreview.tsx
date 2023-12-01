"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
const ArchiveMagazinePreview = ({ name, border, color, bgColor, pdfSrc }) => {
  const router = useRouter();

  const handleCistClick = () => {
    router.push(`/read/${pdfSrc}`);
  };

  return (
    <div
      className={`${bgColor} flex flex-row   border-solid ${border} border-4 p-4   gap-y-1 gap-x-4  m-1 `}
    >
      <div className=" ml-12  mt-2 space-y-4 flex-1">
        <h1 className={`whitespace-normal font-weight-900 ${color}`}>{name}</h1>
        <h3 className={`pt-4 ${color}`}>OBSAH</h3>
        <div className="max-h-48 overflow-auto grid grid-cols-1 md:grid-cols-2 gap-x-1/2 sm:flex-row">
          <div className="  gap-y-2 gap-x-4 pl-4 text-base leading-8">
            <li>Word 1</li>
            <li>Word 2</li>
            <li>Word 3</li>
            <li>Word 1</li>
            <li>Word 2</li>
          </div>
          <div className="   gap-y-2 gap-x-4 pl-4 text-base leading-8">
            <li>Word 3</li>
            <li>Word 1</li>
            <li>Word 2</li>
            <li>Word 3</li>
            <li>Word 1</li>
          </div>
        </div>
      </div>
      <div className="mt-6 sm:mt-0 max-w-96    mx-auto">
        <div className="pt-10 w-full   border-3 border-black">
          <Image
            height={256}
            width={256}
            src="/books.jpg"
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
