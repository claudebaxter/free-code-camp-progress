import React from 'react';
import '../App.css';

const NumPad = ({numberButtons, handleFunction}) => {

  return (
      <div id="number-pad">
      {numberButtons.map(numberButton => (
        <button 
        className="button" 
        key={numberButton.id} 
        id={ numberButton.name } 
        onClick={() => handleFunction(numberButton.id)}>
            {numberButton.id}
        </button>
      ))}
      </div>
  );
}

export default NumPad;