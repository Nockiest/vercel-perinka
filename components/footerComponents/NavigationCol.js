import React from 'react'

const NavigationCol = () => {
    return (
        <ul className="m-auto  flex flex-col pl-8 rounded-lg w-56 list-disc">
        <h2 className="mb-4">Navigace</h2>
        <li className="bg-transparent hover:bg-primary-color transition-colors duration-300">Komiks</li>
        <li className="bg-transparent hover:bg-primary-color transition-colors duration-300">Redakce</li>
        <li className="bg-transparent hover:bg-primary-color transition-colors duration-300">Aktuální Číslo</li>
        <li className="bg-transparent hover:bg-primary-color transition-colors duration-300">Archiv</li>
        <li className="bg-transparent hover:bg-primary-color transition-colors duration-300">Bonus</li>
      </ul>
      
    );
  };

  

export default NavigationCol