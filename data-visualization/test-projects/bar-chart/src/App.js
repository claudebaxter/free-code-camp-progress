import React, { useState, useEffect } from 'react';
import * as d3 from 'd3';
import './App.css';

function App() {
  const [countryData, setCountryData] = useState([]);

  useEffect(() => {
  async function fetchData() {
    const response = await fetch("https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/GDP-data.json");
    const data = await response.json();
    console.log("data", data.data);
    setCountryData(data.data);
  }
    fetchData();
  }, []);
  
  return (
    <div className="App">
      <h1 id="title">United States GDP</h1>
      <BarChart data={countryData} height={500} widthOfBar={5} width={countryData.length * 5.25} />
    </div>
  );
}

function BarChart ({data, height, width, widthOfBar}) {
  useEffect(() => {
    createBarChart();
  }, [data])

  const createBarChart = () => {
    const countryData = data;

    console.log("countryData", countryData);

    var GDP = data.map(function (item) { return item[1]; });

    var dataDate = data.map(function (item) { return item[0]; });

    console.log("dataDate", dataDate);

    console.log("GDP", GDP);

    var scaledGDP = [];

    var gdpMax = d3.max(GDP);

    console.log("gdpMax", gdpMax);

    var linearScale = d3.scaleLinear().domain([0, gdpMax]).range([0, height]);

    scaledGDP = GDP.map(function (item) { return linearScale(item); });
    console.log("scaledGDP", scaledGDP);

    function getYears(dateStrings) {
      let years = [];
      for (let i = 0; i < dateStrings.length; i++) {
        let date = new Date(dateStrings[i]);
        let year = date.getFullYear();
        years.push(year);
      }
      return years;
    }

    let years = getYears(dataDate);
    console.log("years", years);

    var padding = 5;

    const yScale = d3.scaleLinear()
      .domain([0, Math.ceil(d3.max(data, d => d[1]) / 1000) * 1000])
      .range([height - padding, padding]);

    const xScale = d3.scaleTime()
      .domain(years)
      .range([padding, width - padding]);

    const xAxis = d3.axisBottom(xScale);

    const yAxis = d3.axisLeft(yScale)
      .tickValues(d3.range(0, Math.ceil(d3.max(data, d => d[1]) / 1000) * 1000 + 1, 1000));

    d3.select("svg")
      .append('g')
      .call(xAxis)
      .attr('transform', `translate(45, 483)`)
      .attr('id', "x-axis");

    d3.select("svg")
      .append('g')
      .call(yAxis)
      .attr('id', 'y-axis')
      .attr('transform', `translate(45, -20)`);

    d3.select("svg")
      .selectAll("rect")
      .data(countryData)
      .enter()
      .append("rect")
      .attr('transform', 'translate(45, -20)');

    d3.select("svg")
      .selectAll("rect")
      .data(scaledGDP)
      .style("fill", (d, i) => (i % 2 === 0 ? "#9595ff" : "44ff44"))
      .attr("y", (d, i) => { return height - d; })
      .style("height", (d) => d)
      .attr("class", "bar")
      .attr("x", (d, i) => i * widthOfBar)
      .attr("width", widthOfBar)
      .attr('data-date', function (d, i) { return dataDate[i]; })
      .attr('data-gdp', function (d, i) { return GDP[i]; })
      .append("title")
      .text(function (d, i) { return dataDate[i]; })
        .attr("id", "tooltip");

  }

  return (
    <>
      <svg width={width} height={height}></svg>
    </>
  )

}

export default App;