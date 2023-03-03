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
  
    //check to verify that data has been fetched, to avoid
    //passing empty array to functions below:
    if (data.length === 0) {
      return;
    }
  
    let baseTemp = data.baseTemperature;
    let values = data.monthlyVariance;
    console.log('values', values);
    console.log('baseTemp', baseTemp);
    let xScale
    let yScale 
    let xAxis
    let yAxis 
    let svg = d3.select('svg')
  
    let generateScales = () => {
      xScale = d3.scaleLinear()
          .range([padding, width - padding]);
        
          yScale = d3.scaleTime()
          .domain([new Date(0,0,0,0, 0, 0, 0), new Date(0,12,0,0,0,0,0)])
          .range([padding, height - padding])
    };
      
    let drawCanvas = () => {
      svg.attr('width', width)
      svg.attr('height', height)
    };
      
    let drawCells = (values) => {
      svg.selectAll('rect')
        .data(values)
        .enter()
        .append('rect')
        .attr('class','cell')
        .attr('fill', (item) => {
            let variance = item['variance']
            if(variance <= -4){
                return 'SteelBlue'
            }else if(variance <= 0){
                return 'LightSteelBlue'
            }else if(variance <= 2){
                return 'Orange'
            }else{
                return 'Crimson'
            }
        })
        .attr('data-year', (item) => {
          return item['year']
        })
        .attr('data-month', (item) => {
            return item['month'] - 1
        })
        .attr('data-temp', (item) => {
            return baseTemp + item['variance']
        })
        .attr('height', (item)=> {
          return (height - (2 * padding)) / 12
        })
        .attr('y', (item) => {
            return yScale(new Date(0, item['month']-1, 0, 0, 0, 0, 0))
        })
    };
      
    let generateAxes = () => {
      let xAxis = d3.axisBottom(xScale)
      svg.append('g')
        .call(xAxis)
        .attr('id', 'x-axis')
        .attr('transform', 'translate(0, ' + (height-padding) + ')');
  
      let yAxis = d3.axisLeft(yScale)
      svg.append('g')
        .call(yAxis)
        .attr('id', 'y-axis')
        .attr('transform', 'translate(' + padding + ', 0)')
    };
  
    drawCanvas()
    generateScales()
    if (values) {
      drawCells(values)
    }
    generateAxes()
  };
  

  return (
    <>
      <svg width={width} height={height} padding={padding}></svg>
    </>
  )

}

export default App;
