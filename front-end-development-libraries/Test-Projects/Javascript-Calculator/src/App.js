import React, { useState } from 'react';
import './App.css';
import OperatorPad from './components/OperatorPad';
import NumPad from './components/NumPad';

const numberButtons = [
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
];
const operatorButtons = [
  { name: "clear", id: "AC", key: 1 },
  { name: "equals", id: "=", key: 2 },
  { name: "add", id: "+", key: 3 },   
  { name: "subtract", id: "-", key: 4 }, 
  { name: "multiply", id: "X", key: 5 },
  { name: "divide", id: "/", key: 6 },
  { name: "decimal", id: ".", key: 7 }
];

const operators = ["AC", "/", "X", "+", "-", "="];

const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

const App = () => {
  const [count, setCount] = useState("0");
  const [countTwo, setCountTwo] = useState("");
  const [calculatorData, setCalculatorData] = useState("");
  


  const handleEquals = () => {
    console.log({ calculatorData });

    const total = eval(calculatorData);
    setCount(total);
    setCountTwo(`${total} = ${total}`);
    setCalculatorData(`${total}`);
  };

  const handleClear = () => {
    setCount("0");
    setCalculatorData("");
  };

  const handleValues = (value) => {
    if (!calculatorData.length) {
      setCount(`${value}`);
      setCalculatorData(`${value}`);
    } else {
      if (value === 0 && (calculatorData === "0" || count === "0")) {
        setCalculatorData(`${calculatorData}`);
      } else {
        const lastChat = calculatorData.charAt(calculatorData.length - 1);
        const isLastChatOperator =
          lastChat === "*" || operators.includes(lastChat);

        setCount(isLastChatOperator ? `${value}` : `${count}${value}`);
        setCalculatorData(`${calculatorData}${value}`);
      }
    }
  };

  const handleDecimal = () => {
    const lastChat = calculatorData.charAt(calculatorData.length - 1);
    if (!calculatorData.length) {
      setCount("0.");
      setCalculatorData("0.");
    } else {
      if (lastChat === "*" || operators.includes(lastChat)) {
        setCount("0.");
        setCalculatorData(`${calculatorData} 0.`);
      } else {
        setCount(
          lastChat === "." || count.includes(".") ? `${count}` : `${count}.`
        );
        const formattedValue =
          lastChat === "." || count.includes(".")
            ? `${calculatorData}`
            : `${calculatorData}.`;
        setCalculatorData(formattedValue);
      }
    }
  };


  const handleOperators = (value) => {
    if (calculatorData.length) {
      setCount(`${value}`);
      const beforeLastChat = calculatorData.charAt(calculatorData.length - 2);

      const beforeLastChatIsOperator =
        operators.includes(beforeLastChat) || beforeLastChat === "*";

      const lastChat = calculatorData.charAt(calculatorData.length - 1);
      
      const lastChatIsOperator = operators.includes(lastChat) || lastChat === "*";
      
      const validOp = value === "X" ? "*" : value;
      if (
        (lastChatIsOperator && value !== "-") ||
        beforeLastChatIsOperator && lastChatIsOperator
      ) {
        if (beforeLastChatIsOperator) {
          const updatedValue = `${calculatorData.substring(
            0,
            calculatorData.length - 2
          )}${value}`;
          setCalculatorData(updatedValue);
        } else {
          setCalculatorData(`${calculatorData.substring(0, calculatorData.length - 1)}${validOp}`);
        }
      } else {
        setCalculatorData(`${calculatorData}${validOp}`);
      }
    }
  };

  const handleFunction = (value) => {
    const number = numbers.find((num) => num === value);
    const operator = operators.find((op) => op === value);

    switch (value) {
      case "=":
        handleEquals();
        break;
      case "AC":
        handleClear();
        break;
      case number:
        handleValues(value);
        break;
      case ".":
        handleDecimal(value);
        break;
      case operator:
        handleOperators(value);
        break;
      default:
        break;
    }
  };

  const handleFunctionTwo = () => {
    setCountTwo(calculatorData);
  };

  React.useEffect(() => {
    handleFunctionTwo();
  }, [calculatorData]);

  return (
    <div className="Calculator">
      <div id="display">{count}</div>
      <div id="secondary-display">{countTwo}</div>
      <OperatorPad operatorButtons={operatorButtons} handleFunction={handleFunction} />
      <NumPad numberButtons={numberButtons} handleFunction={handleFunction} />
    </div>
  );
}

export default App;
