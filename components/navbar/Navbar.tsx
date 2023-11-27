"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import NavList from "./NavList";
import HamburgerNavList from "./HamburgerNavList";
import { useMediaQuery } from "react-responsive";
import { useRouter, usePathname } from "next/navigation";
import React from "react";

const Navbar = () => {
  const router = useRouter();
  const [activeButton, setActiveButton] = useState("");
  const pathname = usePathname();
  const isMobile = useMediaQuery({ maxWidth: 858 });

  const handleButtonClick = (buttonName) => {
    if (buttonName === "home") {
      router.push("/");
    } else {
      router.push(buttonName);
    }
  };

  useEffect(() => {
    let newPathname = pathname;
    if (newPathname?.startsWith("/")) {
      newPathname = newPathname.substring(1);
    }
    if (newPathname === "") {
      setActiveButton("home");
    } else {
      setActiveButton(newPathname);
    }

    console.log(newPathname);
  }, [pathname]);

  return (
    <div className="h-20 flex px-8 justify-between items-center bg-[var(--primary-color-20)] xl:box-shadow-xl">
      <div className="flex items-center gap-8   pr-0">
        <Link href="/">
          <Image
            src="/logo/logofull.png"
            alt="peřinka logo"
            width={56}
            height={31}
            className="cursor-pointer"
          />
        </Link>
        <h1 className=" ">Peřinka</h1>
      </div>
      {isMobile ? (
        <>
          <button className="nav-toggle mt-0" aria-label="toggle navigation">
            <span className={`hamburger`}></span>
          </button>
          <div className="right-nav nav">
            <HamburgerNavList />
          </div>
        </>
      ) : (
        <NavList
          handleButtonClick={handleButtonClick}
          activeButton={activeButton}
        />
      )}
    </div>
  );
};

export default Navbar;
