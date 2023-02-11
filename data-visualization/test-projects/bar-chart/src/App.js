import React, { useState, useRef, useEffect } from 'react';
import * as d3 from 'd3';
import './App.css';

function App() {
  const [countryData, setCountryData] = useState([]);
  const svgRef = useRef();

  //anything written in useEffect will be relevant to D3 code
  useEffect(() => {

    //fetch JSON data
    async function fetchData() {
      const response = await fetch("https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/GDP-data.json");
      const data = await response.json();
      console.log(data);
      setCountryData(data.data);
    }
    fetchData();

    console.log(countryData);

    // 1 set up svg container
    const w = 400;
    const h = 300;
    const svg = d3.select(svgRef.current)
      .attr('width', w)
      .attr('height', h)
      .style('overflow', 'visible')
      .style('margin-top', '75px');

    // 2 set up scaling
    const xScale = d3.scaleBand()
      .domain(countryData.map((val, i) => i)) //maps x scale to show # of data points desired
      .range([0, w])
      .padding(0.5);
    const yScale = d3.scaleLinear()
      .domain([0, h])
      .range([h, 0]); //inverting range, since y scale always starts from the top left

    // 3 set up the axis
    const xAxis = d3.axisBottom(xScale)
      .ticks(countryData.length);
    const yAxis = d3.axisLeft(yScale)
      .ticks(5);
    svg.append('g')
      .call(xAxis)
      .attr('transform', `translate(0, ${h})`)
      .attr('id', "x-axis");
    svg.append('g')
      .call(yAxis)
      .attr('id', 'y-axis');

    // 4 set up the svg data
    svg.selectAll('.bar')
      .data(countryData)
      .join('rect')
        .attr('x', (v, i) => xScale(i))
        .attr('y', yScale)
        .attr('width', xScale.bandwidth())
        .attr('height', val => h - yScale(val))
        .attr('class', 'bar');

  }, [countryData]);
  //passing svgRef to svg lets svg control the DOM
  //react and D3 both control the DOM, so we are using useRef
  //to allow D3 to control the DOM.
  return (
    <div className="App">
      <h1 id="title">United States GDP</h1>
      <svg ref={svgRef}></svg>
    </div>
  );
}

export default App;