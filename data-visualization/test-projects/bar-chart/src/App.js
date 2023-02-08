import './App.css';
import * as d3 from "d3";

console.log(d3.json(
  'https://raw.githubusercontent.com/FreeCodeCamp/ProjectReferenceData/master/GDP-data.json'
));

function App() {
  return (
    <div className="bar-chart">
      <header className="chart-header">
      </header>
    </div>
  );
}

export default App;
