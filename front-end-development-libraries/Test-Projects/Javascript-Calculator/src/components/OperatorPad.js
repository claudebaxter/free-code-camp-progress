import React from 'react';
import { useState } from 'react';
import '../App.css';

const OperatorPad = (props) => {
  const [operatorButtons] = useState([
    { name: "clear", id: "AC", key: 1 },
    { name: "equals", id: "=", key: 2 },
    { name: "add", id: "+", key: 3 },   
    { name: "subtract", id: "-", key: 4 }, 
    { name: "multiply", id: "*", key: 5 },
    { name: "divide", id: "/", key: 6 },
    { name: "decimal", id: ".", key: 7 }
  ]);

  return (
      <div id="operator-pad">
      {operatorButtons.map(operatorButton => (
        <button 
        className="button" 
        key={operatorButton.id} 
        id={ operatorButton.name} 
        onClick={() => props.setOperator(operatorButton.id)}>
            { operatorButton.id }
        </button> 
      ))}
      </div>
  );
}

export default OperatorPad;