"use client"
import React from 'react'
import NewsletterSubscribe from './NewsletterSubscribe'
import Contacts from './Contacts'
import NavigationCol from './NavigationCol'
 

const Footer = () => {
  return (
    <div className='flex flex-wrap  space-y-4 w-full bg-ternary-color-60 p-8'>
          
      <Contacts />
      <NewsletterSubscribe/>
      <NavigationCol />
    </div>
  )
}

export default Footer