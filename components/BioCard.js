"use client"
import React from 'react';
import Image from 'next/image';

const BioCard = ({ title, index }) => {
  return (
    <div className={`card ${index % 2 === 0 ? 'bg-primary-color-60' : ' gap-16 bg-white border-solid border-black'} w-64 border-solid border-black p-6`}>
      <Image width={100} height={100} src="/test" alt="xyz" />
      <h3>{title}</h3>
      <p className="h-32 ml-2  overflow-hidden">
        lorem ipsgup sagssdp jag gasjg las g§asgdsj pgd ap jdsdg sadj dsagpgjddajdslj lgj sadgilsjd
        glsdijg dps gjdsali gjdsalgjs sd l aepofjw gúwq jgoagw wpig jdasg jsgs jla jd
      </p>
     
      <Image src="/chat-dots.svg" width={24} height={24} />
    </div>
  );
};

export default BioCard;
