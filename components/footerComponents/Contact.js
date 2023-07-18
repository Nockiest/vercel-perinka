import React from "react";
import Image from "next/image";
const Contact = ({ contactName, contactSvgUrl }) => {
    return (
      <div className="flex flex-row hover:brightness-0 cursor-pointer">
        <Image width={50} height={50} src={contactSvgUrl} alt={contactName} />
        <p className="mt-4 border-t border-black p-4 text-center">{contactName}</p>
      </div>
    );
  };
  
export default Contact;
