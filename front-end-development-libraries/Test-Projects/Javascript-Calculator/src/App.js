import React, { useEffect } from 'react';
import { useState } from 'react';
import './App.css';
import OperatorPad from './components/OperatorPad';
import NumPad from './components/NumPad';

const App = () => {
  const [count, setCount] = useState(null);
  const [countTwo, setCountTwo] = useState("0");
  const [operator, setOperator] = useState(null);

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
      <OperatorPad setOperator={setOperator} onClick={handleFunction} />
      <NumPad setCountTwo={setCountTwo} onClick={handleFunction} />
    </div>
  );
}

export default App;
