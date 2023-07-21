"use client"
import React from 'react';
import Image from 'next/image';

const BioCard = ({ title, index }) => {
  return (
    <div className={`m-auto card ${index % 2 === 0 ? 'bg-primary-color-60' : ' gap-16 bg-white border-solid border-black'} w-72 border-solid border-black p-6`}>
     <div className="flex justify-center m-2">
     <Image width={200} height={200} src="/books.jpg" alt="xyz" />
     </div>
    
      <h3>{title}</h3>
      <p className="h-32 ml-2   text-base  leading-8   overflow-hidden">
        lorem ipsgup sagssdp jag gasjg las g§asgdsj pgd ap jdsdg sadj dsagpgjddajdslj lgj sadgilsjd
        glsdijg dps gjdsali gjdsalgjs sd l aepofjw gúwq jgoagw wpig jdasg jsgs jla jd
      </p>
      <div className="flex justify-center m-2"> 
      <Image src="/chat-dots.svg" width={24} height={24} />
      </div>
    </div>
  );
};

export default BioCard;
