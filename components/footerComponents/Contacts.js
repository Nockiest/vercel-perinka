"use client"

import React from 'react';
import Contact from './Contact';

const Contacts = () => {
  return (
    <div className="flex flex-col flex-grow items-center border-4 border-primary-color">
      <Contact
        contactName="Instagram"
        contactSvgUrl="/instagram.svg"
        contactLink="https://instagram.com/perinka_go?igshid=NTc4MTIwNjQ2YQ=="
      />
      <Contact
        contactName="G-mail"
        contactSvgUrl="/e-mail.svg"
        contactLink="mailto:casopisgo@gopat.cz"
      />
      <Contact contactName="Tellonym" contactSvgUrl="/telonym.svg" contactLink="https://tellonym.me/perinka_go" />
    </div>
  );
};

export default Contacts;