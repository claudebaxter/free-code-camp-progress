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
      <BarChart data={countryData} height={500} widthOfBar={5} width={countryData.length * 5} dataType={"data"}/>
    </div>
  );
}

function BarChart ({data, height, width, widthOfBar, dataType}) {
  useEffect(() => {
    createBarChart();
  }, [data])

  const createBarChart = () => {
    const countryData = data;

    console.log("countryData", countryData);

    const years = data.map(function (item) {
      var quarter;
      var temp = item[0].substring(5, 7);

      if (temp === "01") {
        quarter = "Q1";
      } else if (temp === '04') {
        quarter = 'Q2';
      } else if (temp === '07') {
        quarter = 'Q3';
      } else if (temp === '10') {
        quarter = 'Q4';
      }

      return item[0].substring(0, 4) + ' ' + quarter;
    });

    console.log("years", years);

    var GDP = data.map(function (item) {
      return item[1];
    });

    var dataDate = data.map(function (item) {
      return item[0];
    });

    console.log("dataDate", dataDate);

    console.log("GDP", GDP);

    var scaledGDP = [];

    var gdpMax = d3.max(GDP);

    console.log("gdpMax", gdpMax);

    var linearScale = d3.scaleLinear().domain([0, gdpMax]).range([0, height]);

    scaledGDP = GDP.map(function (item) {
      return linearScale(item);
    });
    console.log("scaledGDP", scaledGDP);
    //const dataMax = d3.max(countryData);
    const yScale = d3.scaleLinear().domain([0, gdpMax]).range([0, height]);
    const xScale = d3.scaleLinear().domain([years[0], years[247]]).range([0, width]);
    console.log("yScale", yScale);
    console.log("xScale", xScale);
    d3.select("svg")
      .selectAll("rect")
      .data(countryData)
      .enter()
      .append("rect");
    d3.select("svg")
      .selectAll("rect")
      .data(scaledGDP)
      .style("fill", (d, i) => (i % 2 === 0 ? "#9595ff" : "44ff44"))
      .attr("y", (d, i) => {
        return height - d;
      })
      .style("height", (d) => d)
      .attr("class", "bar")
      .attr("x", (d, i) => i * widthOfBar)
      .attr("width", widthOfBar)
      .attr('data-date', function (d, i) {
        return dataDate[i];
      })
      .attr('data-gdp', function (d, i) {
        return GDP[i];
      });

    //set up axis:

    const xAxis = d3.axisBottom(xScale)
      .ticks(years.length);
    const yAxis = d3.axisLeft(yScale)
      .ticks(GDP.length);
    d3.select("svg")
      .append('g')
      .call(xAxis)
      .attr('transform', `translate(0, ${height})`)
      .attr('id', "x-axis");
    d3.select("svg")
      .append('g')
      .call(yAxis)
      .attr('id', 'y-axis');

  }

  return (
    <>
      <svg width={width} height={height}></svg>
    </>
  )

}

export default App;