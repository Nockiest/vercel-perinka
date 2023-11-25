// "use client"
import React from 'react'
// import NewsletterForm from './NewsletterSubscribe'
import Contacts from './Contacts'
import NavigationCol from './NavigationCol'

const Footer = () => {
  return (
    <div className='flex flex-wrap  space-y-4 w-full bg-ternary-color-60 p-8'>
      <div className='flex flex-col flex-grow '>
      <button className="big-btn  mx-auto px-auto bg-secondary-color-80 hover:bg-secondary-color">
        ODESLAT SVŮJ ČLÁNEK
      </button>
      <button className="big-btn  mx-auto px-auto bg-secondary-color-80 hover:bg-secondary-color">
        OHODNOTIT PEŘINKU
      </button>
      </div>

      <Contacts />
      {/* <NewsletterForm/>  */}
      <NavigationCol />
    </div>
  )
}

export default Footer