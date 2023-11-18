import React from 'react'
import FlipBook from './flipBook'

const Page = () => {
  return (
    <div>
      <FlipBook numberOfFiles={12} directory="leden-unor-jpg" bookHeight={350} bookWidth={300} />
    </div>
  );
};

export default Page;