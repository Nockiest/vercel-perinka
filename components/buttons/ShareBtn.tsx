import React from 'react'
import { useState } from 'react';

const ShareBtn = ({ link }) => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const shareOnTwitter = () => {
    const tweetUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(link)}`;
    window.open(tweetUrl, '_blank');
    setShowModal(false);
  };

  const shareOnInstagram = () => {
    // Use a service like Share Link Generator for Instagram
    const instagramUrl = `https://instagr.am/share?url=${encodeURIComponent(link)}`;
    window.open(instagramUrl, '_blank');
    setShowModal(false);
  };

  return (
    <div>


      {showModal?   (
        <div className="modal flex flex-row z-10">
          <button className='btn-clicked z-10' onClick={shareOnTwitter}>SDÍLET NA TWITTERU</button>
          <button className='btn-clicked z-10' onClick={shareOnInstagram}>SDÍLET NA INSTAGRAMU</button>
          <button className='action-button z-10' onClick={toggleModal}>ZAVŘÍT</button>
        </div>
      ):(
        <button
        className="bg-secondary-color-80 hover:bg-secondary-color"
        onClick={toggleModal}
      >
        SDÍLET
      </button>
      )}
    </div>
  );
};

export default ShareBtn;
