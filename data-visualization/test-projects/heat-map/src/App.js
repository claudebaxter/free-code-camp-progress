import React, { useState, useRef, useEffect } from 'react';
import * as d3 from 'd3';
import './App.css';

function App() {
  const [data, setData] = useState([])

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/global-temperature.json');
      const data = await response.json();
      setData(data);
      console.log("data", data);
    }
    fetchData();
  }, []);

  return (
    <div className="App">
      <h1 id="title">Monthly Global Land-Surface Temperature</h1>
      <h4 id="description">Temperatures from 1753 - 2015. Average is 8.66℃</h4>
      <Heatmap data={data}/>
    </div>
  );
}

function Heatmap ({ data }) {
  const [height, setHeight] = useState(600);
  const [width, setWidth] = useState(1200);
  const [padding, setPadding] = useState(60);

  useEffect(() => {
    createHeatMap();
  }, [data]);

  const createHeatMap = () => {
    console.log("baseTemperature", data.baseTemperature);
    console.log("monthlyVariance", data.monthlyVariance);

    let baseTemp 
    let values = [];

    let generateScales = () => {
      xScale = d3.scaleLinear()
          .range([padding, width - padding])
    }
    
    let drawCanvas = () => {
        svg.attr('width', width)
        svg.attr('height', height)
    }
    
    let drawCells = () => {
      
    }
    
    let generateAxes = () => {
     let xAxis = d3.axisBottom(xScale)

      svg.append('g')
        .call(xAxis)
        .attr('id', 'x-axis')
        .attr('transform', 'translate(0, ' + (height-padding) + ')')
    }

    //define axes scale xScale yScale

    let xScale

    let yScale 

    //define xAxis and yAxis

    let xAxis

    let yAxis 

    //define svg

    let svg = d3.select('svg')

    //add div for tooltip?

    //define gridlines

    //svg.select(".x-axis & .y-axis")

    //define data points (rectangles) on chart
      //.on("mouseover / mouseout") functions for tooltip

    //title & subtitle (svg.append("text"))

    //let legendContainer = svg.append("g").attr("id", "legend");
      //let legend = legendContainer.selectAll(#legend")....
      //append legend rects
      //append legend text

    //call functions:
    drawCanvas()
    generateScales()
    drawCells()
    generateAxes()
  };

  return (
    <>
      <svg width={width} height={height} padding={padding}></svg>
    </>
  )

}

export default App;
