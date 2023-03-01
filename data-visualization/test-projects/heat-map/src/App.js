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
    }
    console.log("data", data);
    fetchData();
  }, []);

  return (
    <div className="App">
      <h1 id="title">Monthly Global Land-Surface Temperature</h1>
      <div className="visHolder">
        <Heatmap data={data}/>
      </div>
    </div>
  );
}

function Heatmap ({ data }) {
  const [height, setHeight] = useState(700);
  const [width, setWidth] = useState(1000);
  const [padding, setPadding] = useState(40);

  useEffect(() => {
    createHeatMap();
  }, [data]);

  const createHeatMap = () => {
    console.log("data2", data);

    //define axes scale xScale yScale

    //define xAxis and yAxis

    //add div for tooltip?

    //define svg

    //define gridlines

    //svg.select(".x-axis & .y-axis")

    //define data points (rectangles) on chart
      //.on("mouseover / mouseout") functions for tooltip

    //title & subtitle (svg.append("text"))

    //let legendContainer = svg.append("g").attr("id", "legend");
      //let legend = legendContainer.selectAll(#legend")....
      //append legend rects
      //append legend text
  };

  return (
    <>
      <svg width={width} height={height} padding={padding}></svg>
    </>
  )

}

export default App;
