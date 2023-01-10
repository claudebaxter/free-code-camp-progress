import React from 'react';
import { useState } from 'react';
import '../App.css';

const NumPad = (props) => {
  const [numberButtons] = useState([
    { name: "zero", id: 0 },
    { name: "one", id: 1 },
    { name: "two", id: 2 },
    { name: "three", id: 3 },
    { name: "four", id: 4 },
    { name: "five", id: 5 },
    { name: "six", id: 6 },
    { name: "seven", id: 7 },
    { name: "eight", id: 8 },
    { name: "nine", id: 9 }
  ]);
  

  return (
      <div id="number-pad">
      {numberButtons.map(numberButton => (
        <button 
        className="button" 
        key={numberButton.id} 
        id={ numberButton.name } 
        onClick={() => props.setCountTwo(numberButton.id)}>
            {numberButton.id}
        </button>
      ))}
      </div>
  );
}

export default NumPad;