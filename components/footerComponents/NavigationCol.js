import React from 'react'

import Link from "next/link";

const NavigationCol = () => {
  return (
    <ul className="m-auto flex flex-col pl-8 rounded-lg w-56 list-disc">
      <h2 className="mb-4">Navigace</h2>
      <li className="bg-transparent hover:bg-primary-color transition-colors duration-300">
        <Link href="/read/komiks.pdf">Komiks</Link>
      </li>
      <li className="bg-transparent hover:bg-primary-color transition-colors duration-300">
        <Link href="/about">Redakce</Link>
      </li>
      <li className="bg-transparent hover:bg-primary-color transition-colors duration-300">
        <Link href="/aktualni-cislo">Aktuální Číslo</Link>
      </li>
      <li className="bg-transparent hover:bg-primary-color transition-colors duration-300">
        <Link href="/archiv">Archiv</Link>
      </li>
      <li className="bg-transparent hover:bg-primary-color transition-colors duration-300">
        <Link href="/bonus">Bonus</Link>
      </li>
      <li className="bg-transparent hover:bg-primary-color transition-colors duration-300">
        <Link href="/">Home</Link>
      </li>
    </ul>
  );
};

export default NavigationCol;
