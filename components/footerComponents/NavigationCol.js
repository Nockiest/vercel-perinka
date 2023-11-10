import React from 'react'
// NavigationCol.js
import NavigationItem from './NavigationItem';

const NavigationCol = () => {
  return (
    <ul className="m-auto flex flex-col pl-8 rounded-lg w-56 list-disc">
      <h2 className="mb-4">Navigace</h2>
      <NavigationItem href="/read/komiks.pdf" label="Komiks" />
      <NavigationItem href="/about" label="Redakce" />
      <NavigationItem href="/aktualni-cislo" label="Aktuální Číslo" />
      <NavigationItem href="/archiv" label="Archiv" />
      <NavigationItem href="/bonus" label="Bonus" />
      <NavigationItem href="/" label="Home" />
    </ul>
  );
};

export default NavigationCol;
