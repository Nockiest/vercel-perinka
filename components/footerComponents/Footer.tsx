"use client"
import React, {useState} from "react";
import RatingForm from "../global/RatingForm"; // Adjust the path accordingly
import { usePathname, useRouter } from 'next/navigation';
import { auth } from "../../firebase";
import Contacts from "./Contacts";
import NavigationCol from "./NavigationCol";
import Link from "next/link";
import LogOutBtn from "../global/LogOutBtn";

const Footer = () => {
  const [showForm, setShowForm] = useState(false);

  const handleRateButtonClick = () => {
    setShowForm(true);
  };

  const handleCloseForm = () => {
    setShowForm(false);
  };
  return (
    <div className=" ">
  <div className="flex relative flex-wrap w-full bg-ternary-color-60 overflow-x-hidden space-y-4">
    <Contacts />
    <div className="flex flex-row lg:flex-none lg:relative w-full justify-center lg:justify-end">
      <ButtonsRow handleRateButtonClick={handleRateButtonClick} />
      <NavigationCol />
    </div>
  </div>

  {showForm && <RatingForm onClose={handleCloseForm} />}
</div>

  );
};

export default Footer;


const ButtonsRow = ({ handleRateButtonClick }) => {
  const pathname = usePathname();

  return (
    <div className="flex flex-col mx-auto flex-grow pl-2 lg:absolute right-1/2 transform lg:translate-x-2/4">
      {/* { pathname !== '/write' && (
        <button className="big-btn mx-auto px-auto bg-secondary-color-80 hover:bg-secondary-color">
          <Link href="/write">ODESLAT SVŮJ ČLÁNEK</Link>
        </button>
      )} */}

      <button onClick={handleRateButtonClick} className="big-btn mx-auto px-auto bg-secondary-color-80 hover:bg-secondary-color">
        OHODNOTIT PEŘINKU
      </button>

      {auth.currentUser && <LogOutBtn/>}
    </div>
  );
};
