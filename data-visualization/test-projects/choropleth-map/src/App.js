import { useState, useEffect } from 'react';
import * as d3 from 'd3';
import * as topojson from 'topojson-client';
import './App.css';

function App() {
  const [educationData, setEducationData] = useState([]);
  const [countyData, setCountyData] = useState({});

  useEffect(() => {
    async function fetchData() {
    const educationResponse = await fetch('https://cdn.freecodecamp.org/testable-projects-fcc/data/choropleth_map/for_user_education.json');
    const eduData = await educationResponse.json();
    setEducationData(eduData);
    console.log("Education Data", educationData);
  
    const couResponse = await fetch('https://cdn.freecodecamp.org/testable-projects-fcc/data/choropleth_map/counties.json');
    const couData = await couResponse.json();
    setCountyData(couData);
    console.log("County Data", countyData);
    };
    fetchData();
  }, []);

  return (
    <div className="App">
      <h2 id='title'>United States Adult Education</h2>
      <div id='description'>Percentage of adults age 25 and older with a bachelor's degree or higher (2010-2014). Source: <a href='https://www.ers.usda.gov/data-products/county-level-data-sets/download-data.aspx'>USDA Economic Research Service</a></div>
      <div id="tooltip"></div>
      <ChoroplethMap eduData={educationData} couData={countyData} />
    </div>
  );
}

function ChoroplethMap ({ eduData, couData }) {
  const [height, setHeight] = useState(600);
  const [width, setWidth] = useState(1000);
  const [padding, setPadding] = useState(60);

  useEffect(() => {
    createChoroplethMap();
  }, [eduData, couData]);

  const createChoroplethMap = () => {

    //check to verify that data has been fetched, to avoid
    //passing empty array or object functions below:
    if (eduData.length === 0) {
      return;
    } else if (Object.keys(couData).length === 0) { return; }

    let countyData = topojson.feature(couData, couData.objects.counties).features;
    let educationData = eduData;

    console.log("countyData", countyData);
    console.log("educationData", educationData);

    let canvas = d3.select('#canvas')
    let tooltip = d3.select('#tooltip')

    let drawMap = () => {
      canvas.selectAll('path')
        .data(countyData)
        .enter()
        .append('path')
        .attr('d', d3.geoPath())
        .attr('class', 'county')
        .attr('fill', (item) => {
          let fips = item['id']
          let county = educationData.find((county) => {
              return county['fips'] === fips
          })
          let percentage = county['bachelorsOrHigher']
          if (percentage <= 15){
              return 'crimson'
          }else if (percentage <= 30){
              return 'orange'
          } else if (percentage <= 45){
              return 'lightsteelblue'
          } else {
              return 'steelblue'
          }
        })
        .attr('data-fips', (item) => {
          return item['id']
      })
      .attr('data-education', (item) => {
          let fips = item['id']
          let county = educationData.find((county) => {
              return county['fips'] === fips
          })
          let percentage = county['bachelorsOrHigher']
          return percentage
      })
      .on('mouseover', function (event, countyDataItem) {
        tooltip.transition()
                .style('visibility', 'visible')
    
        let fips = countyDataItem['id']
        let county = educationData.find((county) => {
            return county['fips'] === fips
        })
    
        tooltip.text(county['fips'] + ' - ' + county['area_name'] + ', ' + 
            county['state'] + ' : ' + county['bachelorsOrHigher'] + '%')
        tooltip.attr('data-education', county['bachelorsOrHigher'] )
        })
        .on('mouseout', function (countyDataItem) {
            tooltip.transition()
                    .style('visibility', 'hidden')
        })
    }

    drawMap();
  }
  return (
    <>
      <svg id="canvas" width={width} height={height} padding={padding}></svg>
      <svg id="legend">
        <g>
         <rect x="10" y="0" width="40" height="40" fill="crimson"></rect>
         <text x="60" y="20" fill="black">Less than 15%</text>
       </g>
       <g>
         <rect x="10" y="40" width="40" height="40" fill="orange"></rect>
         <text x="60" y="60" fill="black">15% to 30%</text>
        </g>
        <g>
          <rect x="10" y="80" width="40" height="40" fill="lightsteelblue"></rect>
          <text x="60" y="100" fill="black">30% to 45%</text>
        </g>
        <g>
          <rect x="10" y="120" width="40" height="40" fill="steelblue"></rect>
          <text x="60" y="140" fill="black">More than 45%</text>
        </g>
      </svg>
    </>
  )
}

export default App;
