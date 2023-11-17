'use client'
import { useState } from 'react';
import styles from '../../flipBookStyle.css'; // Import your CSS file if you have one
import  Image  from 'next/image';
 
const FlipBook = () => {
  // References to DOM Elements
  const [currentLocation, setCurrentLocation] = useState(1);
  const numOfPapers = 3;
  const maxLocation = numOfPapers + 1;

  const goNextPage = () => {
    console.log('click',currentLocation)
    if (currentLocation < maxLocation) {
      // Your existing goNextPage logic
     
      setCurrentLocation(currentLocation + 1);
    }
  };

  const goPrevPage = () => {
    console.log('click',currentLocation)
    if (currentLocation > 1) {
      // Your existing goPrevPage logic
      setCurrentLocation(currentLocation - 1);
    }
  };

  return (
    <div className='bookContainer'>
      <button id="prev-btn" onClick={goPrevPage}  style={{ backgroundColor: 'green', color: 'black' }} >
       <Image   src="chevron-left-solid.svg" alt="  left" height={28} width={28} />
      </button>

      <div id="book" className={styles.book}>
      <div id="book" class="book">
        <div id="p1" class="paper">
          <div class="front">
            <div id="f1" class="front-content">
              <h1>Front 1</h1>
            </div>
          </div>
          <div class="back">
            <div id="b1" class="back-content">
              <h1>Back 1</h1>
            </div>
          </div>
        </div>

        <div id="p2" class="paper">
          <div class="front">
            <div id="f2" class="front-content">
              <h1>Front 2</h1>
            </div>
          </div>
          <div class="back">
            <div id="b2" class="back-content">
              <h1>Back 2</h1>
            </div>
          </div>
        </div>

        <div id="p3" class="paper">
          <div class="front">
            <div id="f3" class="front-content">
              <h1>Front 3</h1>
            </div>
          </div>
          <div class="back">
            <div id="b3" class="back-content">
              <h1>Back 3</h1>
            </div>
          </div>
        </div>
      </div>
      </div>

      <button id="next-btn" onClick={goNextPage}>
      <Image src="chevron-right-solid.svg" alt="  left" height={28} width={28} />
      </button>
    </div>
  );
};

export default FlipBook;
