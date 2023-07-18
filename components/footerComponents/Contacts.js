"use client"

import React from 'react'
import Contact from './Contact'

const Contacts = () => {
  return (
    <div className="flex flex-col flex-grow items-center border-4 border-ternary-color">
   <Contact contactName={"Instagram"} contactSvgUrl={"/instagram.svg"}/>
   <Contact contactName={"G-mail"} contactSvgUrl={"/e-mail.svg"}/>
   <Contact contactName={"Telonym"} contactSvgUrl={"/telonym.svg"}/>
  </div>
  )
}

export default Contacts