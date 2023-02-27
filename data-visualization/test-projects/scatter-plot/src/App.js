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
  const [height, setHeight] = useState(500);
  const [width, setWidth] = useState(840);  

  useEffect(() => {
    createBarChart();
  }, [data]);

  const createBarChart = () => {
    console.log(data);

    //define axes
    let x = d3.scaleLinear().range([0, width]);
    x.domain([
      d3.min(data, (d) => d.Year -1),
      d3.max(data, (d) => d.Year + 1),
    ]);

    let y = d3.scaleTime().range([0, height]);
    //change up time format so yAxis has time displayed
    data.forEach(function (d) {
      d.Place = +d.Place;
      let parsedTime = d.Time.split(":");
      d.Time = new Date(Date.UTC(1970, 0, 1, 0, parsedTime[0], parsedTime[1]));
    });

    y.domain(d3.extent(data, (d) => d.Time));

    let timeFormat = d3.timeFormat("%M:%S");

    let xAxis = d3.axisBottom(x).tickFormat(d3.format("d"));
    let yAxis = d3.axisLeft(y).tickFormat(timeFormat);

    //define the div for tooltip
    let div = d3
      .select(".visHolder")
      .append("div")
      .style("opacity", 0);

      //define svg
      let svg = d3
        .select("svg")
        .attr("width", width + 80)
        .attr("height", height + 130)
        .attr("class", "graph")
        .append("g")
        .attr("transform", "translate(" + 60 + "," + 100 + ")");

        //make the axes
        svg 
          .append("g")
          .attr("class", "x-axis")
          .attr("id", "x-axis")
          .attr("transform", "translate(0," + height + ")")
          .call(xAxis)
          .append("text")
          .attr("class", "x-axis-label")
          .attr("x", width)
          .attr("y", -6)
          .style("text-anchor", "end")
          .text("Year");

        svg
          .append('g')
          .attr("class", "y-axis")
          .attr("id", "y-axis")
          .call(yAxis)
          .append("text")
          .attr("class", "label")
          .attr("transform", "rotate(-90)")
          .attr("y", 6)
          .attr("dy", ".71em")
          .style("text-anchor", "end")
          .text("Best Time in Minutes");
        
        //define separate g element for x & y axis gridlines
        let xGrid = svg
          .append("g")
          .attr("class", "x-grid-lines")
          .attr("transform", "translate(0," + height + ")");

        let yGrid = svg.append("g").attr("class", "y-grid-lines");

        //append x / y axis gridlines to g x/yGrid g element
        xGrid
          .selectAll(".x-grid-line")
          .data(x.ticks())
          .enter()
          .append("line")
          .attr("class", "x-grid-line")
          .attr("x1", (d) => x(d))
          .attr("y1", 0)
          .attr("x2", (d) => x(d))
          .attr("y2", -height);

        yGrid
          .selectAll(".y-grid-line")
          .data(y.ticks())
          .enter()
          .append("line")
          .attr("class", "y-grid-line")
          .attr("x1", 0)
          .attr("y1", (d) => y(d))
          .attr("x2", width)
          .attr("y2", (d) => y(d));

        svg.select(".x-axis")
          .selectAll("g.tick")
          .append("line")
          .attr("class", "x-grid-line")
          .attr("x1", 0)
          .attr("y1", 0)
          .attr("x2", 0)
          .attr("y2", -height);

        svg.select(".y-axis")
          .selectAll("g.tick")
          .append("line")
          .attr("class", "y-grid-line")
          .attr("x1", 0)
          .attr("y1", 0)
          .attr("x2", width)
          .attr("y2", 0);

        //put in data points
        svg
          .selectAll(".dot")
          .data(data)
          .enter()
          .append("circle")
          .attr("class", "dot")
          .attr("r", 6)
          .attr("cx", function (d) {
            return x(d.Year);
          })
          .attr("cy", function (d) {
            return y(d.Time);
          })
          .attr("data-xvalue", function (d) {
            return d.Year;
          })
          .attr("data-yvalue", function (d) {
            return d.Time.toISOString();
          })
          .style("fill", function (d) {
            return d.Doping !== "" ? "#ff2222" : "#22ff22";
          })
          .on("mouseover", function (event, d) {
            console.log('event', event);
            console.log('d', d);
            div.style("opacity", 0.9);
            div.attr("data-year", d.Year)
              .attr("id", "tooltip");
            div.html(`
                ${d.Name}: ${d.Nationality}<br/>
                Year: ${d.Year}, Time: ${timeFormat(d.Time)}${
                  d.Doping ? "<br/><br/>" + d.Doping : ""
                }`)
              .style('left', '10px')
              .style('top', `${height + 20}px`);
          })
          .on("mouseout", function() {
            div.style("opacity", 0);
          });

          //title
          svg
            .append("text")
            .attr("id", "title")
            .attr("x", width / 2)
            .attr("y", 0)
            .attr("text-anchor", "middle")
            .style("font-size", "30px")
            .text("Doping in Pro Bicycle Racing");

          //subtitle
          svg
            .append("text")
            .attr("x", width / 2)
            .attr("y", 25)
            .attr("text-anchor", "middle")
            .style("font-size", "20px")
            .text("35 Fastest Times up Alpe d'Huez");

          let legendContainer = svg.append("g").attr("id", "legend");

          let legend = legendContainer
            .selectAll("#legend")
            .data(["#ff2222", "#22ff22"])
            .enter()
            .append("g")
            .attr("class", "legend-label")
            .attr("transform", function (d, i) {
              return "translate(0," + (height / 2 - i * 20) + ")";
            });

          legend
            .append("rect")
            .attr("x", width - 18)
            .attr("width", 18)
            .attr("height", 18)
            .style("fill", (d) => d);

          legend
            .append("text")
            .attr("x", width - 24)
            .attr("y", 9)
            .attr("dy", ".35em")
            .style("text-anchor", "end")
            .text(function (d) {
              if (d == "#ff2222") {
                return "Riders with doping allegations.";
              } else {
                return "No doping allegations.";
              }
            });

  };

  return (
    <>
      <svg width={width} height={height}></svg>
    </>
  );

}

export default App;