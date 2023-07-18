import React from 'react'
import Link from "next/link";
const NavList = ({ handleButtonClick, activeButton }) => {
    console.log(activeButton);
    return (
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
    );
  };
  
  export default NavList;
  