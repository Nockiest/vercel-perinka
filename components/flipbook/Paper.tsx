import { useState, useEffect } from 'react';
const Paper = ({ frontContent, backContent }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className={`flip-paper ${isFlipped ? 'flipped' : ''}`}>
      <div className="front">
        <div className="content">
          <h1>{frontContent}</h1>
        </div>
      </div>
      <div className="back">
        <div className="content">
          <h1>{backContent}</h1>
        </div>
      </div>
      <button className="absolute text-black flip-button z-10" onClick={handleFlip}>
        Flip
      </button>
    </div>
  );
};

export default Paper;

// const Paper = ({ frontPage, backPage, curPage, index, turningThreshold }) => {
//   const [isTurning, setIsTurning] = useState(false);

//   useEffect(() => {
//     setIsTurning(true);

//     const animationTimeout = setTimeout(() => {
//       setIsTurning(false);
//     }, 500); // Adjust the duration of the animation, here it's set to 500ms

//     return () => {
//       clearTimeout(animationTimeout);
//     };
//   }, [curPage]);

//   const shouldTurn = index % 2 === 0 && (curPage === index + 1 || curPage === index) && curPage > turningThreshold;
//   console.log( index % 2 === 0,curPage === index + 1 , curPage === index  , curPage > turningThreshold )
//   const paperStyles = {
//     position: 'absolute',
//     width: '100%',
//     height: '100%',
//     top: '0',
//     left: '0',
//     perspective: '1500px',
//     transformOrigin: shouldTurn ? 'left' : 'right',
//     transition: 'transform 0.5s',
//     transform: isTurning ? `rotateY(${shouldTurn ? -180 : 180}deg)` : 'rotateY(0)',
//   };

//   return (
//     <div className="paper" style={paperStyles}>
//       <div className="front">
//         <div className="front-content">
//           <h1>{frontPage}</h1>
//         </div>
//       </div>
//       <div className="back">
//         <div className="back-content">
//           <h1>{backPage}</h1>
//         </div>
//       </div>
//       {curPage}
//     </div>
//   );
// };

// export default Paper;