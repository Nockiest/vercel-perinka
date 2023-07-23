import React, { useState } from "react";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";

 
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
   
    
   
    // Push the new URL to navigate to the desired route
    // router.push(router.pathname, undefined, { shallow: true, replace: true });

    router.push(`/${buttonName}`);
  };

  return (
    <div className="btn-row flex  m-4 ">
      {navButtons.map((button) => (
        <button
          key={button.name}
          className={` nav-btn ${activeButton === button.name ? "btn-clicked" : ""}`}
          onClick={() => handleCustomButtonClick(button.name)}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {button.label}
        </button>
      ))}
    </div>
  );
};

export default NavList;

 