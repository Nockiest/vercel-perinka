"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import NavList from "@/components/navbar/NavList";
import HamburgerNavList from "@/components/navbar/HamburgerNavList";
import { useMediaQuery } from "react-responsive";
import { useRouter, usePathname } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars} from "@fortawesome/free-solid-svg-icons";
const Navbar = () => {
  const router = useRouter();
  const [activeButton, setActiveButton] = useState("");
  const pathname = usePathname()
  const isMobile = useMediaQuery({ maxWidth: 858 });

  const handleButtonClick = (buttonName) => {
   if(buttonName === "home"){
    router.push("/")
   } else {
    router.push(buttonName)
   }
  };
  
  useEffect(() => {
    console.log(pathname);
  }, []);
  // Extract the second segment from the pathname
  useEffect(() => {
    let newPathname =  pathname;
    if (newPathname?.startsWith("/")) {
      newPathname = newPathname.substring(1);
    }
    if(newPathname===""){
      setActiveButton("home");
    } else {
      setActiveButton(newPathname);
    }
   
    console.log(newPathname)
  }, [pathname]);
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
    <div className="h-20 flex px-8 justify-between items-center bg-[var(--primary-color-20)] xl:box-shadow-xl">
      <div className="flex items-center gap-8 w-212 pr-0">
        <Link href="/">
          <Image src="/logofull.png" alt="peřinka logo" width={56} height={31} className="cursor-pointer" />
        </Link>
        <h1 className=" ">Peřinka</h1>
      </div>
      {isMobile ? (
        <>
          <button className="nav-toggle" aria-label="toggle navigation" onClick={() => handleNavToggle}>
            <span className={`hamburger`}></span>
          </button>

          <div className="right-nav">
            <div className="nav">
            {/* <FontAwesomeIcon icon="fa-solid fa-bars" /> */}
              <HamburgerNavList handleButtonClick={handleButtonClick} activeButton={activeButton} />
            </div>
          </div>
        </>
      ) : (
        <NavList handleButtonClick={handleButtonClick} activeButton={activeButton} />
      )}
    </div>
  );
};

export default Navbar;
