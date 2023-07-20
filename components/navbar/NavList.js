import React, {useState} from 'react'
import Link from "next/link";
import { useRouter } from "next/navigation";

const NavList = ({ handleButtonClick, activeButton }) => {
  const router = useRouter();
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  return (
    <div className="btn-row flex gap-4 mt-4 mb-4">
     
        <Link
      href="/"
      passHref // Add the passHref prop here
      className={`nav-btn ${activeButton === "home" ? "btn-clicked" : ""}`}
      onClick={() => handleButtonClick("home")}
    >
      Home
    </Link> 
    
      {router.pathname}
      <Link
        href="/aboutUs"
           passHref // Add the passHref prop here
        className={`nav-btn ${activeButton === "aboutUs" ? "btn-clicked" : ""}`}
        onClick={() => handleButtonClick("aboutUs")}
      >
        O Peřince
      </Link>
      <Link
        href="/aktualni-cislo"
           passHref // Add the passHref prop here
        className={`nav-btn ${activeButton === "Aktuální Číslo" ? "btn-clicked" : ""}`}
        onClick={() => handleButtonClick("Aktuální Číslo")}
      >
        Aktuální Číslo
      </Link>
      <Link
        href="/archiv"
           passHref // Add the passHref prop here
        className={`nav-btn ${activeButton === "Archiv" ? "btn-clicked" : ""}`}
        onClick={() => handleButtonClick("Archiv")}
      >
        Archiv
      </Link>
      <Link
        href="/bonus"
           passHref // Add the passHref prop here
        className={`nav-btn ${activeButton === "Bonusove Čtení" ? "btn-clicked" : ""}`}
        onClick={() => handleButtonClick("Bonusove Čtení")}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        Bonus 
     
      </Link>
      
    </div>
  );
};
 
  export default NavList;
  