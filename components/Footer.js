"use client"
import React from 'react'
import NewsletterForm from './footerComponents/NewsletterForm'
import Contacts from './footerComponents/Contacts'
import NavigationCol from './footerComponents/NavigationCol'

const Footer = () => {
  return (
    <div className='flex w-full bg-ternary-color-60 p-8'>
           <NewsletterForm />
      <Contacts />
 
      <NavigationCol />
    </div>
  )
}

export default Footer