"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const [activeButton, setActiveButton] = useState("");

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
  };

  return (
    <div className="flex px-8 justify-between items-center bg-[var(--primary-color-20)] xl:box-shadow-xl">
      <div className="flex items-center gap-8 w-212 pr-0">
        <Image src="/logofull.png" alt="peřinka logo" width={56} height={31} className="cursor-pointer" />
        <h1 className="cursor-pointer">Peřinka</h1>
      </div>
      <div className="btn-row flex gap-4 mt-4 mb-4">
        <Link
          href="/aboutUs"
          className={`nav-btn ${activeButton === "aboutUs" ? "btn-clicked" : ""}`}
          onClick={() => handleButtonClick("aboutUs")}
        >
          O Peřince
        </Link>
        <Link
          href="/aktualni-cislo"
          className={`nav-btn ${activeButton === "Aktuální Číslo" ? "btn-clicked" : ""}`}
          onClick={() => handleButtonClick("Aktuální Číslo")}
        >
          Aktuální Číslo
        </Link>
        <Link
          href="/archiv"
          className={`nav-btn ${activeButton === "Archiv" ? "btn-clicked" : ""}`}
          onClick={() => handleButtonClick("Archiv")}
        >
          Archiv
        </Link>
        <Link
          href="/bonus"
          className={`nav-btn ${activeButton === "Bonusove Čtení" ? "btn-clicked" : ""}`}
          onClick={() => handleButtonClick("Bonusove Čtení")}
        >
          Bonusove Čtení
        </Link>
      </div>
    </div>
  );
};

export default Navbar;

//https://ibb.co/Mhvsycy
