"use client"
import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight, faCircle } from "@fortawesome/free-solid-svg-icons";

const Slider = ({ number, setCurrentNumber, maxNumber }) => {
  const [dotPositions, setDotPositions] = useState([]);
  const [hideLeftArrow, setHideLeftArrow] = useState(false);
  const [hideRightArrow, setHideRightArrow] = useState(false);

  useEffect(() => {
    const calculateDotPositions = () => {
      const positions = [-2, -1, 0, 1, 2].map((move) => {
        const dotNumber = number + move;
        const isVisible = dotNumber >= 0 && dotNumber <= maxNumber;
        const offScreenPosition = move > 0 ? "140%" : "-140%";
        const transitionPosition = isVisible ? "0%" : `${move * 20}%`;
        return transitionPosition;
      });
      setDotPositions(positions);
    };
    
    calculateDotPositions();
  }, [number, maxNumber]);

  useEffect(() => {
    const resetArrows = () => {
      setHideLeftArrow(false);
      setHideRightArrow(false);
    };
    resetArrows();
  }, [number]);

  const handleClick = (move) => {
    setCurrentNumber((prevNumber) => {
      const newNumber = prevNumber + move;
      const clampedNumber = Math.max(0, Math.min(newNumber, maxNumber));
      return clampedNumber;
    });
  };

  return (
    <div className="flex items-center justify-center">
      <div
        className={`hover:pointer ${hideLeftArrow ? "invisible" : ""}`}
        onClick={() => handleClick(-1)}
        style={{ transition: "opacity 0.3s" }}
      >
        <FontAwesomeIcon
          icon={faAngleLeft}
          size="3x"
          className={`transition-all cursor-pointer transform-gpu text-ternary-color-80 hover:scale-110 focus:scale-90 ${
            number === 0 ? "invisible" : ""
          }`}
          style={{ opacity: hideLeftArrow ? 0 : 1 }}
        />
      </div>
      <div className="space-x-1">
        {[-2, -1, 0, 1, 2].map((move, index) => {
          const dotNumber = number + move;
          const isVisible = dotNumber >= 0 && dotNumber <= maxNumber;
          const dotStyle = {
            transform: `translateX(${dotPositions[index]})`,
            transition: "transform 0.3s ease-in-out",
          };
          return (
            <FontAwesomeIcon
              key={move}
              icon={faCircle}
              size={Math.abs(move) === 0 ? "lg" : Math.abs(move) === 1 ? "sm" : "xs"}
              className={`cursor-pointer hover:scale-110  focus:scale-90 ${
                isVisible ? "text-primary-color-80" : "invisible"
              }`}
              style={dotStyle}
              onClick={() => handleClick(move)}
            />
          );
        })}
      </div>
      <div
        className={`hover:pointer ${hideRightArrow ? "invisible" : ""}`}
        onClick={() => handleClick(1)}
        style={{ transition: "opacity 0.3s" }}
      >
        <FontAwesomeIcon
          icon={faAngleRight}
          size="3x"
          className={`transition-all cursor-pointer transform-gpu text-ternary-color-80 hover:scale-110  click:scale-50 ${
            number === maxNumber ? "invisible" : ""
          }`}
          style={{ opacity: hideRightArrow ? 0 : 1 }}
        />
      </div>
    </div>
  );
};

export default Slider;
