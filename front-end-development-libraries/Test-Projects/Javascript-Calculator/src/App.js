import React, { useEffect } from 'react';
import { useState } from 'react';
import './App.css';
import OperatorPad from './components/OperatorPad';
import NumPad from './components/NumPad';

const App = () => {
  const [count, setCount] = useState(null);
  const [countTwo, setCountTwo] = useState("0");
  const [operator, setOperator] = useState(null);
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
  const [operatorButtons] = useState([
    { name: "clear", id: "AC", key: 1 },
    { name: "equals", id: "=", key: 2 },
    { name: "add", id: "+", key: 3 },   
    { name: "subtract", id: "-", key: 4 }, 
    { name: "multiply", id: "*", key: 5 },
    { name: "divide", id: "/", key: 6 },
    { name: "decimal", id: ".", key: 7 }
  ]);

  useEffect(() => {}, [count, countTwo, operator]);

  const CalculatorFunctions = {
    "/": (firstNumber, secondNumber) => firstNumber / secondNumber,
    "*": (firstNumber, secondNumber) => firstNumber * secondNumber,
    "+": (firstNumber, secondNumber) => firstNumber + secondNumber,
    "-": (firstNumber, secondNumber) => firstNumber - secondNumber,
    "=": (firstNumber, secondNumber) => secondNumber,
  };

  const executeFunction = () => {
    let temp = CalculatorFunctions[operator](
      parseFloat(count),
      parseFloat(countTwo)
    );
    setOperator(null);
    setCountTwo(String(temp));
    setCount(null);
  };

  const handleCount = (number) => {
    setCountTwo(countTwo === "0" ? String(number) : countTwo + number);
  };

  const insertDecimal = () => {
    if (!/\./.test(countTwo)) {
      setCountTwo(countTwo + ".");
    }
  };

  const clearDisplay = () => {
    setCountTwo("0");
    setCount(0);
  };

  const handleFunction = (value) => {
    if (Number.isInteger(value)) {
      handleCount(parseInt(value, 10));
    } else if (value in CalculatorFunctions) {
      if (operator === null) {
        setOperator(value);
        setCount(countTwo);
        setCountTwo("");
      }
      if (operator) {
        setOperator(value);
      }
      if (count && operator && countTwo) {
        executeFunction();
      }
    } else if (value === "AC") {
      clearDisplay();
    } else if (value === ".") {
      insertDecimal();
    }
  };

  return (
    <div className="Calculator">
      <div id="display">{countTwo}</div>
      <OperatorPad operatorButtons={operatorButtons} handleFunction={handleFunction} />
      <NumPad numberButtons={numberButtons} handleFunction={handleFunction} />
    </div>
  );
}

export default App;
