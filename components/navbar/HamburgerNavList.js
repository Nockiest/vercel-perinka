"use client"

import React, { useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";


const HamburgerNavList = () => {

 
  // Extract the second segment from the pathname
  
  const handleNavToggle = () => {
    console.log("Nav-toggle")
    document.body.classList.toggle("nav-open");
  };
  useEffect(() => {
    const navToggle = document.querySelector(".nav-toggle");
    const navLinks = document.querySelectorAll(".nav__link");

    
    const handleNavLinkClick = () => {
      console.log("nav-open")
      document.body.classList.remove("nav-open");
    };

    navToggle?.addEventListener("click", handleNavToggle);

    navLinks.forEach((link) => {
      link.addEventListener("click", handleNavLinkClick);
    });

    return () => {
      navToggle.removeEventListener("click", handleNavToggle);

      navLinks.forEach((link) => {
        link.removeEventListener("click", handleNavLinkClick);
      });
    };
  }, []);

    return (
      <ul className="z-100 nav__list bg-black text-white">
      <li className="nav__item">
        <Link href="/" className="nav__link font-bold text-2xl md:text-base">
          Home
        </Link>
      </li>
      <li className="nav__item">
        <Link href="/about" className="nav__link font-bold text-2xl md:text-base">
          O Peřince
        </Link>
      </li>
      <li className="nav__item">
        <Link href="/aktualni-cislo" className="nav__link font-bold text-2xl md:text-base">
          Aktuální Číslo
        </Link>
      </li>
      <li className="nav__item">
        <Link href="/archiv" className="nav__link font-bold text-2xl md:text-base">
          Archiv
        </Link>
      </li>
      <li className="nav__item">
        <Link href="/bonus" className="nav__link font-bold text-2xl md:text-base">
          Bonusove Čtení
        </Link>
      </li>
    </ul>
    );
  };
  
  export default HamburgerNavList;