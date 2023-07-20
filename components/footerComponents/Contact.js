import React from "react";
import Image from "next/image";
// import { FontAwesomeIcon } from '@fontawesome/react-fontawesome';
// import { faInstagram, faEnvelope } from '@fontawesome/free-brands-svg-icons';
// import { faPen } from '@fontawesome/free-solid-svg-icons';

const Contact = ({ contactName, contactSvgUrl, contactLink }) => {
  const handleContactClick = () => {
    window.open(contactLink, '_blank');
  };

  return (
    <div className="flex flex-row hover:brightness-0 cursor-pointer" onClick={handleContactClick}>
      <Image width={50} height={50} src={contactSvgUrl} alt={contactName} />
      <button className="flex-grow w-64 mt-4 border-t-4 border-primary-color p-4 text-center">
        {contactName}
      </button>
    </div>
  );
};

export default Contact;