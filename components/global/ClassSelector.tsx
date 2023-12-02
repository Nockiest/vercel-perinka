import React, { useState } from 'react';

const GOClassSelector = ({onSelection}) => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
    onSelection(event.target.value)
  };

  return (
    <div>
      <label htmlFor="dropdown">Choose an option:</label>
      <select id="dropdown" value={selectedOption} onChange={handleOptionChange}>
        <option value="">Select an option</option>
        <option value="1.E">1.E</option>
        <option value="1.F">1.F</option>
        <option value="2.Q">2.Q</option>
        <option value="2.P">2.P</option>
        <option value="2.P">3.x</option>
        <option value="2.P">3.x</option>
        <option value="2.P">4.x</option>
        <option value="2.P">4.x</option>
        <option value="2.P">5.T</option>
        <option value="2.P">5.U</option>
        <option value="5.M">6.M</option>
        <option value="5.M">6.L</option>
        <option value="5.M">7.A</option>
        <option value="5.M">7.B</option>
        <option value="5.M">8.C</option>
        <option value="5.M">8.D</option>
        <option value="5.M">1.x</option>
        <option value="5.M">2.Y</option>
        <option value="5.M">3.Z</option>
        <option value="5.M">4.V</option>
      </select>

      {selectedOption && (
        <p>You selected: {selectedOption}</p>
      )}
    </div>
  );
};

export default GOClassSelector;