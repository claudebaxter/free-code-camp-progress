import React from 'react';
import { useState } from 'react';
import './App.css';

const App = () => {
  const [operatorButtons] = useState([
    { name: "clear", id: "AC", key: 1 },
    { name: "equals", id: "=", key: 2 },
    { name: "add", id: "+", key: 3 },   
    { name: "subtract", id: "-", key: 4 }, 
    { name: "multiply", id: "X", key: 5 },
    { name: "divide", id: "/", key: 6 },
    { name: "decimal", id: ".", key: 7 }
  ]);

  const [numberButtons] = useState([
    { name: "zero", id: 0 },
    { name: "one", id: 1 },
    { name: "two", id: 2 },
    { name: "three", type: "button", id: 3 },
    { name: "four", id: 4 },
    { name: "five", id: 5 },
    { name: "six", id: 6 },
    { name: "seven", id: 7 },
    { name: "eight", id: 8 },
    { name: "nine", id: 9 }
  ]);

  return (
    <div className="Calculator">
      <div id="display">123456789</div>
      <div id="operator-pad">
      {operatorButtons.map(operatorButton => (
        <button className="button" key={operatorButton.key} id={ operatorButton.name }>{ operatorButton.id }</button> 
      ))}
      </div>
      <div id="number-pad">
      {numberButtons.map(numberButton => (
        <button className="button" key={numberButton.id} id={ numberButton.name }>{ numberButton.id }</button>
      ))}
      </div>
    </div>
  );
}

export default App;
