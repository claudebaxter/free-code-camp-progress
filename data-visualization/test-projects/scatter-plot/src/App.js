import './App.css';
import * as d3 from 'd3';
import React, { useState, useEffect } from 'react';

function App() {
  const [cyclistData, setCyclistData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        "https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/cyclist-data.json"
      );
      const data = await response.json();
      console.log(data);
      setCyclistData(data);
    }
    fetchData();
    console.log("cyclistData", cyclistData);
  }, []);

  return (
    <div className="App">
      <div className="visHolder">
        <BarChart data={cyclistData} />
      </div>
    </div>
  );
}

function BarChart ({ data }) {
  const [height, setHeight] = useState(600);
  const [width, setWidth] = useState(800);
  const [padding, setPadding] = useState(40);  

  useEffect(() => {
    createBarChart();
  }, [data]);

  const createBarChart = () => {
    console.log(data);

    //check to verify that data has been fetched, to avoid
    //passing empty array to functions below:
    if (data.length === 0) {
      return;
    }

    let values = data;
    console.log('values', data);
    let xScale
    let yScale
    let xAxis
    let yAxis
    let svg = d3.select('svg')
    let tooltip = d3.select('#tooltip')

    let generateScales = () => {
      xScale = d3.scaleLinear()
        .domain([d3.min(values, (item) => {
            return item['Year']
        }) - 1 , d3.max(values, (item) => {
            return item['Year']
        }) + 1])
        .range([padding, width-padding]);

      yScale = d3.scaleTime()
        .domain([d3.min(values, (item) => {
            return new Date(item['Seconds'] * 1000)
        }), d3.max(values, (item) => {
            return new Date(item['Seconds'] * 1000)
        })])
        .range([padding, height-padding]);
    };

    let drawCanvas = () => {
      svg.attr('width', width)
      svg.attr('height', height)
    };

    let drawPoint = (values) => {
      svg.selectAll('circle')
            .data(values)
            .enter()
            .append('circle')
            .attr('class', 'dot')
            .attr('r', '5')
            .attr('data-xvalue', (item) => {
                return item['Year']
            })
            .attr('data-yvalue', (item) => {
                return new Date(item['Seconds'] * 1000)
            })
          .attr('cx', (item) => {
              return xScale(item['Year'])
          })         
            .attr('cy', (item) => {
                return yScale(new Date(item['Seconds'] * 1000))
            })
            .attr('fill', (item) => {
                if(item['URL'] === ""){
                    return 'lightgreen'
                }else{
                    return 'orange'
                }
            })
            .on('mouseover', function (event, item) {
                tooltip.transition()
                    .style('visibility', 'visible')
                
                if(item['Doping'] != ""){
                    tooltip.text(item['Year'] + ' - ' + item['Name'] + ' - ' + item['Time'] + ' - ' + item['Doping'])
                }else{
                    tooltip.text(item['Year'] + ' - ' + item['Name'] + ' - ' + item['Time'] + ' - ' + 'No Allegations')
                }
                
                tooltip.attr('data-year', item['Year'])
            })
            .on('mouseout', function (item) {
                tooltip.transition()
                    .style('visibility', 'hidden')
            })
    };

    let generateAxes = () => {
      xAxis = d3.axisBottom(xScale)
        .tickFormat(d3.format('d'));
                

      yAxis = d3.axisLeft(yScale)
        .tickFormat(d3.timeFormat('%M:%S'));


      svg.append('g')
        .call(xAxis)
        .attr('id', 'x-axis')
        .attr('transform', 'translate(0, ' + (height-padding) +')');

      svg.append('g')
        .call(yAxis)
        .attr('id', 'y-axis')
        .attr('transform','translate(' + padding + ', 0)');
    };



    drawCanvas()
    generateScales()
    if (values) {
      drawPoint(values)
    }
    generateAxes()
  };

  return (
    <>
      <svg id="canvas" width={width} height={height} padding={padding}>
        <text id='title' y='20' x='150'>Doping in Professional Bicycle Racing</text>
      </svg>
      <div id='legend'>
        YEAR (x) vs TIME (Y) <br />
        Orange = Doping Allegation <br />
        Green = No Doping Allegations
      </div>
      <div id="tooltip"></div>
    </>
  );

}

export default App;