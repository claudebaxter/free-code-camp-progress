import './App.css';
import * as d3 from 'd3';
import React, { useState, useRef, useEffect } from 'react';

function App() {
  const [cycleData, setCycleData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        "https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/cyclist-data.json"
      );
      const data = await response.json();
      console.log(data);
      setCycleData(data);
    }
    fetchData();
    console.log("cycleData", cycleData);
  }, []);

  return (
    <div className="App">
      <h1 id="title">Doping in Professional Bicycling</h1>
      <div className="visHolder">
        <ScatterPlot data={cycleData} width={800} height={400} />
      </div>
    </div>
  );
}

function ScatterPlot ({ data, width, height }) {
  const svgRef = useRef();


  useEffect(() => {
    if (data.length === 0) return;
    const svg = d3.select(svgRef.current).attr("id","svg");

    //define margins
    const margin = { top: 20, right: 20, bottom: 50, left: 50 };
    const chartWidth = width - margin.left - margin.right;
    const chartHeight = height - margin.top - margin.bottom;
    
   /* //x-axis scale years
    const xScale;

    //y-axis scale time in minutes
    const yScale;

    //add x-axis
    svg
      .select('.x-axis');

    //add y-axis
    svg
      .select('.y-axis');

    //add dots, tooltip w/mouseover & mouseout functions
    svg
      .select('.dot');

    //add x axis label
    svg
      .select('x-axis-label');

    //add y axis label
    svg
      .select('y-axis-label');*/



  }, [data, width, height]);

  return (
    <svg ref={svgRef} width={width} height={height}>
      <g id="x-axis" />
      <g id="y-axis" />
      <g className="dot" />
      <text className="x-axis-label" textAnchor="middle" />
      <text className="y-axis-label" textAnchor="middle" />
    </svg>
  )

}

export default App;
