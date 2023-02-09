import React, { Component } from 'react'
import './App.css';
import * as d3 from "d3";
import BarChart from './BarChart'



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataset: d3.json('https://raw.githubusercontent.com/FreeCodeCamp/ProjectReferenceData/master/GDP-data.json')
    }
  }

  render() {
     console.log(this.state.dataset);
    return (
      <div className="App">
        <div id="title">
          <h2>United States GDP</h2>
        </div>
        <div>
          <BarChart data={[5,10,1,3]} size={[500,500]} />
        </div>
      </div>
    )
  }
}

export default App;
