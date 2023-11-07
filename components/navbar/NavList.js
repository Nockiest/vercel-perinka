import { useState } from "react";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import React from "react"
 
const NavList = ({ handleButtonClick, activeButton }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const navButtons = [
    { name: "home", label: "Home" },
    { name: "about", label: "O Peřince" },
    { name: "aktualni-cislo", label: "Aktuální Číslo" },
    { name: "archiv", label: "Archiv" },
    { name: "bonus", label: "Bonus" },
  ];

 const router = useRouter();
  const   pathname   = usePathname();

  const handleCustomButtonClick = (buttonName) => {
    // Extract the current directory from the pathname (e.g., "/x")
    console.trace("hello", buttonName)
   if(buttonName === "home" ){
    router.push("/")
   } else {
    router.push(`/${buttonName}`)
   }
    
 
  };

  return (
    <div className="btn-row flex  m-4 ">
      {navButtons.map((button) => {
       
       return  (
        <button
          key={button.name}
          className={` nav-btn ${activeButton === button.name ? "btn-clicked" : ""}`}
          onClick={() => handleCustomButtonClick(  button.name )}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {button.label}
        </button>
      )})}
    </div>
  );
};

export default NavList;

 