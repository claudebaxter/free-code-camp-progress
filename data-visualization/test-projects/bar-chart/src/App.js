import React, { useState, useRef, useEffect } from 'react';
import './App.css';

function App() {
  const [data] = useState([200, 250, 60, 150, 175]);
  const svgRef = useRef();

  useEffect(() => {

  }, [data]);

  return (
    <div className="App">
      <svg ref={svgRef}></svg>
    </div>
  );
}

export default App;