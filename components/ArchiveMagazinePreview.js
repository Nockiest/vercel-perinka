"use client"
import React from 'react'
 import Image from 'next/image';
 const ArchiveMagazinePreview = ({ border, color, bgColor }) => {
    return (
      <div className={`${bgColor} m-auto flex flex-col border-solid ${border} border-l-4 border-r-4 sm:flex-row mr-4 pt-10 pb-4`}>
        <div className="max-w-96 ml-auto mr-16 space-y-4">
          <h1 className={`  ${color}`}>Červenec/Srpen</h1>
          <h2 className={`ml-4 `}>OBSAH</h2>
          <ul className="space-y-2 pl-4">
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
        <div className="pt-10 max-w-96 mr-auto">
          <div className="w-full border-3 border-black">
            <Image
              height={256}
              width={256}
              src="/books.jpg"
              alt="Image"
              className="w-full border border-black"
            />
          </div>
          <div>
            <button className="btn bg-secondary-color">Button 1</button>
            <button className="btn bg-secondary-color">Button 2</button>
          </div>
          <span className="ml-48 pl-2/3">2022/2023</span>
        </div>
      </div>
    );
  };

  export default ArchiveMagazinePreview