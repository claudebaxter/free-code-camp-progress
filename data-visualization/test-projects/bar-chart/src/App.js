import React, { useState, useRef, useEffect } from 'react';
import './App.css';

function App() {
  const [data] = useState([200, 250, 60, 150, 175]);
  const svgRef = useRef();

  //anything written in useEffect will be relevant to D3 code
  useEffect(() => {
    // 1 set up svg container
    // 2 set up scaling
    // 3 set up the axis
    // 4 set up the svg data
  }, [data]);
  //passing svgRef to svg lets svg control the DOM
  //react and D3 both control the DOM, so we are using useRef
  //to allow D3 to control the DOM.
  return (
    <div className="App">
      <svg ref={svgRef}></svg>
    </div>
  );
}

export default App;