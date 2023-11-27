"use client";
import React from "react";
import Image from "next/image";

const BioCard = ({ title, index, imagePath }) => {
  return (
    <div
      className={`m-auto card ${
        index % 2 === 0 ? "bg-primary-color-60" : " gap-16 bg-white border-solid border-black"
      } w-72 border-solid border-black p-6 `}
    >
      <div className="flex justify-center  ">
        <Image width={200} height={200} src={imagePath} alt={title} />
      </div>

      <h3>{title}  </h3>
      <p className="h-32 ml-2   text-base  leading-8   overflow-hidden">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque
        sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis
        imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. Curabitur pellentesque nibh nibh,
        at maximus ante fermentum sit amet. Pellentesque commodo lacus at sodales sodales. Quisque sagittis orci ut diam
        condimentum, vel euismod erat placerat.
      </p>
      <div className="flex justify-center m-2">
        <Image src="/svg/chat-dots.svg" width={24} height={24} alt={"redakce"} />
      </div>
    </div>
  );
};

export default BioCard;
