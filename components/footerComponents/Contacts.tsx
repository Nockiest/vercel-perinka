"use client"

import React from 'react';
import Contact from './Contact';

const Contacts = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center border-4 border-primary-color w-full md:w-auto  p-2  mx-auto">
      <Contact
        contactName="Instagram"
        contactSvgUrl="/svg/instagram.svg"
        contactLink="https://instagram.com/perinka_go?igshid=NTc4MTIwNjQ2YQ=="
      />
      <Contact
        contactName="G-mail"
        contactSvgUrl="/svg/e-mail.svg"
        contactLink="mailto:casopisgo@gopat.cz"
      />
      <Contact contactName="Tellonym" contactSvgUrl="/svg/telonym.svg" contactLink="https://tellonym.me/perinka_go" />
    </div>
  );
};

export default Contacts;