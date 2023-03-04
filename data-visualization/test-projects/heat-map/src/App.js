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
      <div id="tooltip"></div>
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
    let tooltip = d3.select('#tooltip')
  
    let generateScales = () => {
      let minYear = d3.min(values, (item) => {
          return item['year']
      })
      let maxYear = d3.max(values, (item) => {
          return item['year']
      })
      xScale = d3.scaleLinear()
          .domain([minYear, maxYear + 1])
          .range([padding, width - padding]);
        
      yScale = d3.scaleTime()
          .domain([new Date(0,0,0,0, 0, 0, 0), new Date(0,12,0,0,0,0,0)])
          .range([padding, height - padding]);
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
            if(variance <= -1){
                return 'SteelBlue'
            }else if(variance <= 0){
                return 'LightSteelBlue'
            }else if(variance <= 1){
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
        .attr('width', (item) => {
          let minYear = d3.min(values, (item) => {
              return item['year']
          })
          
          let maxYear = d3.max(values, (item) => {
              return item['year']
          })
      
          let yearCount = maxYear - minYear
      
          return (width - (2 * padding)) / yearCount
        })
        .attr('x', (item) => {
            return xScale(item['year'])
        })
        .on('mouseover', function (event, item) {
          tooltip.transition()
              .style('visibility', 'visible')
          
          let monthNames = ["January", "February", "March", "April", "May", "June",
          "July", "August", "September", "October", "November", "December"]
      
          tooltip.text(item['year'] + ' ' + monthNames[item['month'] -1 ] + ' : ' + item['variance'])

          tooltip.attr('data-year', item['year'])
        })
        .on('mouseout', function() {
          tooltip.style('visibility', 'hidden');

        })
      
    };
      
    let generateAxes = () => {
      let xAxis = d3.axisBottom(xScale).tickFormat(d3.format('d'))
      svg.append('g')
        .call(xAxis)
        .attr('id', 'x-axis')
        .attr('transform', 'translate(0, ' + (height-padding) + ')');
  
      let yAxis = d3.axisLeft(yScale).tickFormat(d3.timeFormat('%B'))
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
      <svg id="canvas" width={width} height={height} padding={padding}></svg>
      <svg id='legend'>
        <g>
            <rect x="10" y="0" width="40" height="40" fill="SteelBlue"></rect>
            <text x="60" y="20" fill="black">Variance of -1 or less</text>
        </g>
        <g>
            <rect x="10" y="40" width="40" height="40" fill="LightSteelBlue"></rect>
            <text x="60" y="60" fill="black">On or Below Average</text>
        </g>
        <g>
            <rect x="10" y="80" width="40" height="40" fill="Orange"></rect>
            <text x="60" y="100" fill="black">Above Average</text>
        </g>
        <g>
            <rect x="10" y="120" width="40" height="40" fill="Crimson"></rect>
            <text x="60" y="140" fill="black">Variance of +1 or more</text>
        </g>
    </svg>
    </>
  )

}

export default App;
