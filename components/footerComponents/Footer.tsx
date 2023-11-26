// "use client"
import React from 'react'
// import NewsletterForm from './NewsletterSubscribe'
import Contacts from './Contacts'
import NavigationCol from './NavigationCol'

const Footer = () => {
  return (
    <div className='flex flex-wrap space-y-4 w-full bg-ternary-color-60 overflow-x-hidden'>


        <Contacts />
      <div className='flex  flex-row w-full items-end '>
        <div className='flex flex-col mx-auto flex-grow pl-2  '>
          <button className="big-btn   mx-auto px-auto bg-secondary-color-80 hover:bg-secondary-color">
            ODESLAT SVŮJ ČLÁNEK
          </button>
          <button className="big-btn mx-auto px-auto bg-secondary-color-80 hover:bg-secondary-color">
            OHODNOTIT PEŘINKU
          </button>
        </div>

        <NavigationCol  />
        </div>
    </div>
  );
};

export default Footer;
