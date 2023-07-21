import React, { useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";


const HamburgerNavList = () => {
    return (
      <ul className="z-100 nav__list bg-black text-white">
        <li className="nav__item">
          <Link href="/aboutUs" className="nav__link font-bold">
            O Peřince
          </Link>
        </li>
        <li className="nav__item">
          <Link href="/aktualni-cislo" className="nav__link font-bold">
            Aktuální Číslo
          </Link>
        </li>
        <li className="nav__item">
          <Link href="/archiv" className="nav__link font-bold">
            Archiv
          </Link>
        </li>
        <li className="nav__item">
          <Link href="/bonus" className="nav__link font-bold">
            Bonusove Čtení
          </Link>
        </li>
        <li className="nav__item">
          <Link href="/aboutUs" className="nav__link font-bold">
            Home
          </Link>
        </li>
      </ul>
    );
  };
  
  export default HamburgerNavList;