// "use client"
import React from "react";

import Contacts from "./Contacts";
import NavigationCol from "./NavigationCol";

const Footer = () => {
  return (
    <div className="flex relative flex-wrap space-y-4 w-full bg-ternary-color-60 overflow-x-hidden">
      <Contacts />
      <div className="flex flex-row lg:flex-none lg:relative w-full items-end justify-center lg:justify-end">
        <ButtonsRow />
        <NavigationCol />
      </div>
    </div>
  );
};

export default Footer;

const ButtonsRow = () => {
  return (
    <div className="flex flex-col mx-auto flex-grow pl-2 lg:absolute right-1/2 transform lg:translate-x-2/4">
      <button className="big-btn mx-auto px-auto bg-secondary-color-80 hover:bg-secondary-color">
        ODESLAT SVŮJ ČLÁNEK
      </button>
      <button className="big-btn mx-auto px-auto bg-secondary-color-80 hover:bg-secondary-color">
        OHODNOTIT PEŘINKU
      </button>
    </div>

  );
};
