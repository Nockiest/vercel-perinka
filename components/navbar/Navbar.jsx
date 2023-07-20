"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import NavList from "@/components/navbar/NavList";
import HamburgerNavList from "@/components/navbar/HamburgerNavList";
import { useMediaQuery } from "react-responsive";
import { useRouter } from "next/navigation";
const Navbar = () => {
  const router = useRouter();
  const [activeButton, setActiveButton] = useState("home");

  const isMobile = useMediaQuery({ maxWidth: 788 });

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
  };

  // Extract the second segment from the pathname
  useEffect(() => {
    const pathname = router.pathname;
    console.log(pathname, router)
    const segments = pathname?.split("/");
    console.log(segments)
    if (segments && segments.length >= 2) {
      console.log(segments)
      setActiveButton(segments[1]);
    }
  }, [router]);

  useEffect(() => {
    const navToggle = document.querySelector(".nav-toggle");
    const navLinks = document.querySelectorAll(".nav__link");

    const handleNavToggle = () => {
      document.body.classList.toggle("nav-open");
    };
    const handleNavLinkClick = () => {
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
          <button className="nav-toggle" aria-label="toggle navigation">
            <span className={`hamburger`}></span>
          </button>

          <div className="right-nav">
            <div className="nav">
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
