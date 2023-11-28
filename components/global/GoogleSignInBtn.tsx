import React, { CSSProperties } from 'react';

interface GoogleButtonProps {
  onClick: () => void;
}

const GoogleButton: React.FC<GoogleButtonProps> = ({ onClick }) => {
  return (
    <div
      className="g-sign-in-button transition-transform transform hover:scale-105 cursor-pointer"
      onClick={onClick}
    >
      <div className="content-wrapper flex items-center justify-center border border-transparent rounded-md">
        <div className="logo-wrapper p-3 bg-white rounded-l-md">
          <img
            src="https://developers.google.com/identity/images/g-logo.png"
            alt="Google Logo"
            className="w-6 h-6"
          />
        </div>
        <span className="text-container flex-1 text-center p-2">
          Sign in with Google
        </span>
      </div>
    </div>
  );
};

export default GoogleButton;
