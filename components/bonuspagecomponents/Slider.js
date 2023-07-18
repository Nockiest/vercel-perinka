import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight, faCircle } from "@fortawesome/free-solid-svg-icons";
const Slider = ({ number, setCurrentNumber, maxNumber }) => {
  const handlePrevClick = () => {
    setCurrentNumber((prevNumber) => (prevNumber === 0 ? maxNumber : prevNumber - 1));
  };

  const handleNextClick = () => {
    setCurrentNumber((prevNumber) => (prevNumber === maxNumber ? 0 : prevNumber + 1));
  };

  const handleDotClick = (move) => {
    setCurrentNumber((prevNumber) => {
        console.log(prevNumber,Math.min(prevNumber+move, maxNumber),Math.max( prevNumber+move , 0))
       return  Math.max(Math.min(prevNumber+move, maxNumber), 0)});
  };

  return (
    <div className="flex items-center justify-center">
      <div className="hover:pointer" onClick={handlePrevClick}>
        <FontAwesomeIcon
          icon={faAngleLeft}
          size="3x"
          className="cursor-pointer transition-transform transform-gpu text-ternary-color-80 hover:scale-110"
        />
      </div>
      <div className="space-x-1">
        {[-2, -1, 0, 1, 2].map((move) => (
          <FontAwesomeIcon
            key={move}
            icon={faCircle}
            size={Math.abs(move) === 0 ? "lg" :  Math.abs(move) === 1? "md":"sm"}
            className={`cursor-pointer hover:scale-110 ${
              Math.abs(move) === 0 ? "text-primary-color-80" : "text-primary-color-40"
            }`}
            onClick={() => handleDotClick(move)}
          />
        ))}
      </div>
      <div className="hover:pointer" onClick={handleNextClick}>
        <FontAwesomeIcon
          icon={faAngleRight}
          size="3x"
          className="cursor-pointer transition-transform transform-gpu text-ternary-color-80 hover:scale-110"
        />
      </div>
    </div>
  );
};

export default Slider;
