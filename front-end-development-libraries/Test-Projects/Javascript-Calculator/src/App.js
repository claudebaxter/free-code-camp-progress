import React from 'react';
import { useState } from 'react';
import './App.css';
import OperatorPad from './components/OperatorPad';
import NumPad from './components/NumPad';

const App = () => {
  const [count, setCount] = useState(0);
  const [countTwo, setCountTwo] = useState(0);
  const [operator, setOperator] = useState('');

  return (
    <div className="Calculator">
      <div id="display">{count}</div>
      <OperatorPad />
      <NumPad />
    </div>
  );
}

export default App;
