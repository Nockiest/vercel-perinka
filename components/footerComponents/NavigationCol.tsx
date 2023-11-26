import React from 'react'
// NavigationCol.js
import NavigationItem from './NavigationItem';
const NavigationCol = () => {
  return (
    <div className="   flex flex-col   rounded-lg w-72   ">

      <NavigationItem href="/read/komiks.pdf" label="Komiks" />
      <NavigationItem href="/about" label="Redakce" />
      <NavigationItem href="/aktualni-cislo" label="Aktuální Číslo" />
      <NavigationItem href="/archiv" label="Archiv" />
      <NavigationItem href="/bonus" label="Bonus" />
      <NavigationItem href="/" label="Home" />
    </div>
  );
};

export default NavigationCol;
