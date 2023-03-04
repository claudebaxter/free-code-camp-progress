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
              return 'tomato'
          }else if (percentage <= 30){
              return 'orange'
          } else if (percentage <= 45){
              return 'lightgreen'
          } else {
              return 'limegreen'
          }
        })
    }

    drawMap();
  }
  return (
    <>
      <svg id="canvas" width={width} height={height} padding={padding}></svg>
    </>
  )
}

export default App;
