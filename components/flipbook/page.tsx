import React from 'react'
import FlipBook from './flipBook'

const Page = () => {
  return (
    <div>
      <FlipBook numberOfFiles={12} directory="leden-unor-jpg"  />
      <FlipBook numberOfFiles={24} directory="březen-duben-jpg"   />
      <FlipBook numberOfFiles={24} directory="květen-červen-jpg"  />
    </div>
  );
};

export default Page;