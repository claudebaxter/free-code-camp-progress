import React from 'react';
import '../App.css';

const OperatorPad = ({operatorButtons, handleFunction}) => {

  return (
      <div id="operator-pad">
      {operatorButtons.map(operatorButton => (
        <button 
        className="button" 
        key={operatorButton.id} 
        id={ operatorButton.name} 
        onClick={() => handleFunction(operatorButton.id)}>
            { operatorButton.id }
        </button> 
      ))}
      </div>
  );
}

export default OperatorPad;