"use client"
import Link from "next/link";
import BigGallery from "../../components/bonuspagecomponents/BigGallerry";
import BonusPost from "../../components/bonuspagecomponents/BonusPost";
import Hero from "../../components/global/Hero";
import   { useState } from "react";





const Bonus = () => {
  const links = [
    { href: 'bonus/0', label: 'Lihihvy', image: '/randomPics/pic1.jpg' },
    { href: 'bonus/1', label: 'Pro Hráče z Opatova', image: '/randop/pic1.jpg' },
    { href: 'bonus/2', label: 'Lihihvy', image: '/randop/pic1.jpg' },
    { href: 'bonus/3', label: 'Lihihvy', image: '/randop/pic1.jpg' },
  ];

  return (
    <div className=" ">
      <>
        <Hero firstHeading={"BONUSOVÉ ČLÁNKY"} secondHeading={"BONUSOVÉ ČLÁNKY"} />
        <div className=" h-350 flex items-center justify-evenly">
          {links.map((link, index) => (
            <div
              key={index}
              className="bg-primary-color-80 hover-trigger text-white font-bold rounded-lg p-16 shadow-md flex flex-col items-center group relative overflow-hidden m-2"
            >
              <Link  className="  text-lg" href={link.href}>
                {link.label}
              </Link>
              <div className="hovered-content absolute -bottom-16 transition-all duration-300 opacity-0 group-hover:opacity-100">

                <img src={link.image} alt={`Hovered Image ${index}`} className="w-16 h-16 rounded-full" />
              </div>
            </div>
          ))}
        </div>
      </>
    </div>
  );
};

export default Bonus;
