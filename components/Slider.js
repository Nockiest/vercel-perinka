"use client";
import React, { useState, useEffect } from "react";
 
import Image from "next/image";
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
    <div className="flex items-center justify-center" style={{userSelect: "none" }}>
      <div
        className={`hover:pointer ${hideLeftArrow ? "invisible" : ""}
        transition-all cursor-pointer transform-gpu text-ternary-color-80 hover:scale-110 focus:scale-90 ${
          number === 0 ? "invisible" : ""
        } opacity-${hideLeftArrow ? 0 : 1} `}
        onClick={() => handleClick(-1)}
        style={{ transition: "opacity 0.3s" }}
      >
        <Image src="chevron-left-solid.svg" alt="chevron left" height={28} width={28} />

        {/* <FontAwesomeIcon
          icon={faAngleLeft}
          size="3x"
          className={`transition-all cursor-pointer transform-gpu text-ternary-color-80 hover:scale-110 focus:scale-90 ${
            number === 0 ? "invisible" : ""
          }`}
          style={{ opacity: hideLeftArrow ? 0 : 1 }}
        /> */}
      </div>
      <div className="space-x-1 flex">
        {[-2, -1, 0, 1, 2].map((move, index) => {
          const dotNumber = number + move;
          const isVisible = dotNumber >= 0 && dotNumber <= maxNumber;
          const dotStyle = {
            transform: `translateX(${dotPositions[index]})`,
            transition: "transform 0.3s ease-in-out",
            opacity: Math.abs(move) === 0 ? 1 : Math.abs(move) === 1? 0.8 : 0.6
          };

          return (
            <div
              key={move}
              className={`flex cursor-pointer hover:scale-110  focus:scale-90 ${
                isVisible ? "text-primary-color-80" : "invisible"
              }  `}
              style={dotStyle }
              onClick={() => handleClick(move)}
            >
              <Image
                src="circle-solid.svg"
                height={Math.abs(move) === 0 ? 20 : Math.abs(move) === 1? 16 : 12}
                width={Math.abs(move) === 0 ? 20 : Math.abs(move) === 1? 16 : 12}
              />
            </div>
          );
        })}
      </div>

      <div
        className={`hover:pointer ${
          hideRightArrow ? "invisible" : ""
        } transition-all cursor-pointer transform-gpu text-ternary-color-80 hover:scale-110  click:scale-50 ${
          number === maxNumber ? "invisible" : ""
        } opacity-${hideLeftArrow ? 0 : 1}`}
        onClick={() => handleClick(1)}
        style={{ transition: "opacity 0.3s" }}
      >
        <Image src="chevron-right-solid.svg" alt="chevron left" height={28} width={28} />
        {/* <FontAwesomeIcon
          icon={faAngleRight}
          size="3x"
          className={`transition-all cursor-pointer transform-gpu text-ternary-color-80 hover:scale-110  click:scale-50 ${
            number === maxNumber ? "invisible" : ""
          }`}
          style={{ opacity: hideRightArrow ? 0 : 1 }}
        /> */}
      </div>
    </div>
  );
};

export default Slider;

// <FontAwesomeIcon
//   key={move}
//   icon={faCircle}
//   size={Math.abs(move) === 0 ? "lg" : Math.abs(move) === 1 ? "sm" : "xs"}
//   className={`cursor-pointer hover:scale-110  focus:scale-90 ${
//     isVisible ? "text-primary-color-80" : "invisible"
//   }`}
//   style={dotStyle}
//   onClick={() => handleClick(move)}
// />
