import React, { useState, useRef, useEffect } from 'react';
import * as d3 from 'd3';
import './App.css';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('https://raw.githubusercontent.com/FreeCodeCamp/ProjectReferenceData/master/GDP-data.json');
      const data = await response.json();
      setData(data.data);
    }

    console.log(data);

    fetchData();
  }, []);

  return (
    <div className="App">
      <h1 id="title">United States GDP</h1>
      <BarChart data={data} width={800} height={400} />
    </div>
  );
}

function BarChart({ data, width, height }) {
  const svgRef = useRef();

  useEffect(() => {
    const svg = d3.select(svgRef.current);

    // Define the margins
    const margin = { top: 20, right: 20, bottom: 50, left: 50 };
    const chartWidth = width - margin.left - margin.right;
    const chartHeight = height - margin.top - margin.bottom;
    var GDP = data.map(function (item) { return item[1]; });
    console.log("GDP", GDP);
    var dataDate = data.map(function (item) { return item[0]; });
    console.log("dataDate", dataDate);

    // Create x-axis scale
    const xScale = d3
      .scaleBand()
      .domain(data.map((d) => d[0]))
      .range([margin.left, chartWidth + margin.left])
      .padding(0.1);

    // Create y-axis scale
    const yScale = d3
      .scaleLinear()
      .domain([0, d3.max(data, (d) => d[1])])
      .range([chartHeight, 0]);

    // Add x-axis
    svg
      .select('.x-axis')
      .attr('transform', `translate(0,${chartHeight + margin.top})`)
      .call(d3.axisBottom(xScale).tickFormat((d) => {
        return dataDate;
      }))
      .attr('id', "x-axis")
      .selectAll("text")
        .style("text-anchor", "end")
        .attr("dx", "-.8em")
        .attr("dy", ".15em")
        .attr("transform", "rotate(-45)");

    // Add y-axis
    svg
      .select('.y-axis')
      .attr('transform', `translate(${margin.left},${margin.top})`)
      .call(d3.axisLeft(yScale))
      .attr('id', 'y-axis');

    // Add bars
    svg
      .select('.bars')
      .selectAll('rect')
      .data(data)
      .join('rect')
      .attr('x', (d) => xScale(d[0]))
      .attr('y', (d) => yScale(d[1]) + margin.top)
      .attr('width', xScale.bandwidth())
      .attr('height', (d) => chartHeight - yScale(d[1]))
      .attr('data-date', function (d, i) { return dataDate[i]; })
      .attr('data-gdp', function (d, i) { return GDP[i]; })
      .attr("class", "bar");

    // Add x-axis label (commenting out because I don't want to use these for this project)
    /*svg
      .select('.x-axis-label')
      .attr('transform', `translate(${width / 2})`)
      .text('Year');

    // Add y-axis label (commenting out because I don't want to use these for this project)
    svg
      .select('.y-axis-label')
      .attr('transform', `rotate(-90) translate(${-height / 2}, 15)`)
      .text('Value');*/
  }, [data, width, height]);

  return (
    <svg ref={svgRef} width={width} height={height}>
      <g className="x-axis" />
      <g className="y-axis" />
      <g className="bars" />
      <text className="x-axis-label" textAnchor="middle" />
      <text className="y-axis-label" textAnchor="middle" />
    </svg>
  );
}

export default App;
