/* eslint no-eval: 0 */
import React, { useState } from 'react';
import './App.css';
import ButtonPad from './components/ButtonPad';

const btnDetails = [
  { id: "equals", value: "=" },
  { id: "clear", value: "AC" },
  { id: "divide", value: "/" },
  { id: "multiply", value: "X" },
  { id: "subtract", value: "-" },
  { id: "add", value: "+" },
  { id: "seven", value: 7 },
  { id: "eight", value: 8 },
  { id: "nine", value: 9 },
  { id: "four", value: 4 },
  { id: "five", value: 5 },
  { id: "six", value: 6 },
  { id: "one", value: 1 },
  { id: "two", value: 2 },
  { id: "three", value: 3 },
  { id: "zero", value: 0 },
  { id: "decimal", value: "." }
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
      <ButtonPad btnDetails={btnDetails} handleFunction={handleFunction} />
      
    </div>
  );
}

export default App;