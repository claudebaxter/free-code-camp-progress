import { useState, useEffect } from 'react';
import * as d3 from 'd3';
import './App.css';

function App() {
  const [pledgeData, setPledgeData] = useState({});
  const [movieSales, setMovieSales] = useState({});
  const [gameSales, setGameSales] = useState({});

  useEffect(() => {
    async function fetchData() {
      const pledgeResponse = await fetch("https://cdn.freecodecamp.org/testable-projects-fcc/data/tree_map/kickstarter-funding-data.json");
      const pData = await pledgeResponse.json();
      setPledgeData(pData);
      const movieResponse = await fetch("https://cdn.freecodecamp.org/testable-projects-fcc/data/tree_map/movie-data.json");
      const mSales = await movieResponse.json();
      setMovieSales(mSales);
      const gameResponse = await fetch("https://cdn.freecodecamp.org/testable-projects-fcc/data/tree_map/video-game-sales-data.json");
      const gSales = await gameResponse.json();
      setGameSales(gSales);
    };
    fetchData();
  }, []);

  return (
    <div className="App">
      <h2 id='title'>Movie Tree Map</h2>
      <div id='description'>Top 100 Highest Grossing Movies</div>
      <TreemapDiagram pledgeData={pledgeData} movieSales={movieSales} gameSales={gameSales} />      
    </div>
  );
}

function TreemapDiagram ({ pledgeData, movieSales, gameSales }) {
  const [height, setHeight] = useState(600);
  const [width, setWidth] = useState(1000);
  const [padding, setPadding] = useState(10);

  useEffect(() => {
    createTreemap();
  }, [pledgeData, movieSales, gameSales]);

  const createTreemap = () => {
    //check to verify data has been fetched before moving forward
    if (Object.keys(pledgeData).length === 0) {
      return;
    } else if (Object.keys(movieSales).length === 0) {
      return;
    } else if (Object.keys(gameSales).length === 0) { return; }

    let movieData = movieSales;
    let canvas = d3.select('#canvas');
    //let tooltip = d3.select('#tooltip');
    

    //set up call back functions = () => {}
    let drawTreeMap = () => {
      let hierarchy = d3.hierarchy(movieData,
        (node) => {
          return node['children']
        }).sum((node) => {
          return node['value']
        }).sort((node1, node2) => {
          return node2['value'] - node1['value']})
      
      d3.treemap()
        .size([1000,600])
        (hierarchy)
      
      let movieTiles = hierarchy.leaves()
      console.log(movieTiles)

      let block = canvas.selectAll('g')
                .data(movieTiles)
                .enter()
                .append('g')
                .attr('transform', (movie) => {
	                return 'translate (' + movie['x0'] + ', ' + movie['y0'] +')'
	              })

      block.append('rect')
            .attr('class', 'tile')
            .attr('fill', (movie) => {
              let category = movie['data']['category']
              if(category === 'Action'){
                  return 'orange'
              }else if(category === 'Drama'){
                  return 'lightgreen'
              }else if(category === 'Adventure'){
                  return 'crimson'
              }else if(category === 'Family'){
                  return 'steelblue'
              }else if(category === 'Animation'){
                  return 'pink'
              }else if(category === 'Comedy'){
                  return 'khaki'
              }else if(category === 'Biography'){
                  return 'tan'
              }
          })
          .attr('data-name', (movie) => {
              return movie['data']['name']
          })
          .attr('data-category', (movie) => {
              return movie['data']['category']
          })
          .attr('data-value', (movie) => {
              return movie['data']['value']
          })
          .attr('width', (movie) => {
              return movie['x1'] - movie['x0']
          })
          .attr('height', (movie) => {
              return movie['y1'] - movie['y0']
          })
      
    block.append('text')
          .text((movie) => {
              return movie['data']['name']
          })
          .attr('x', 5)
          .attr('y', 30)

    }


    console.log("pledge data", pledgeData);
    console.log("movie sales", movieSales);
    console.log("game sales", gameSales);
    drawTreeMap();
  }
  return (
    <>
      <svg id="canvas" width={width} height={height} padding={padding}></svg>
      <svg id='legend'>
        <g>
          <rect class="legend-item" x="10" y="0" width="40" height="40" fill="orange"></rect>
          <text x="60" y="20" fill="black">Action</text>
        </g>
        <g>
            <rect class="legend-item" x="10" y="40" width="40" height="40" fill="lightgreen"></rect>
            <text x="60" y="60" fill="black">Drama</text>
        </g>
        <g>
            <rect class="legend-item" x="10" y="80" width="40" height="40" fill="crimson"></rect>
            <text x="60" y="100" fill="black">Adventure</text>
        </g>
        <g>
            <rect class="legend-item" x="10" y="120" width="40" height="40" fill="steelblue"></rect>
            <text x="60" y="140" fill="black">Family</text>
        </g>
        <g>
            <rect class="legend-item" x="10" y="160" width="40" height="40" fill="pink"></rect>
            <text x="60" y="180" fill="black">Animation</text>
        </g>
        <g>
            <rect class="legend-item" x="10" y="200" width="40" height="40" fill="khaki"></rect>
            <text x="60" y="220" fill="black">Comedy</text>
        </g>
        <g>
            <rect class="legend-item" x="10" y="240" width="40" height="40" fill="tan"></rect>
            <text x="60" y="260" fill="black">Biography</text>
        </g> 
      </svg>
    </>
  )
}

export default App;
