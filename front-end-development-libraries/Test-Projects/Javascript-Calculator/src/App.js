import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
  return (
    <div className="Calculator">
      <div id="display"></div>
      <div id="operator-pad">
        <button id="clear"></button>
        <button id="equals">=</button>
        <button id="add">+</button>
        <button id="subtract">-</button>
        <button id="multiply">X</button>
        <button id="divide">/</button>
        <button id="decimal">.</button>

      </div>
      <div id="number-pad">
        <button id="zero">0</button>
        <button id="one">1</button>
        <button id="two">2</button>
        <button id="three">3</button>
        <button id="four">4</button>
        <button id="five">5</button>
        <button id="six">6</button>
        <button id="seven">7</button>
        <button id="eight">8</button>
        <button id="nine">9</button>
      </div>
      
    </div>
  );
  }
}

export default App;
