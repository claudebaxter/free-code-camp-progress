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

    //declare / assign variables

    //set up call back functions = () => {}

    //call functions

    console.log("pledge data", pledgeData);
    console.log("movie sales", movieSales);
    console.log("game sales", gameSales);
  }
  return (
    <>
      <svg id="canvas" width={width} height={height} padding={padding}></svg>
    </>
  )
}

export default App;
