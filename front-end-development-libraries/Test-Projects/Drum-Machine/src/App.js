import React, { Component } from 'react';
import './App.css';

import Heater_1 from './sounds/Heater-1.mp3';
import Heater_2 from './sounds/Heater-2.mp3';
import Heater_3 from './sounds/Heater-3.mp3';
import Heater_4 from './sounds/Heater-4_1.mp3';
import Heater_6 from './sounds/Heater-6.mp3';
import Dsc_Oh from './sounds/Dsc_Oh.mp3';
import Kick_n_Hat from './sounds/Kick_n_Hat.mp3';
import RP4_KICK from './sounds/RP4_KICK_1.mp3';
import Cev_H2 from './sounds/Cev_H2.mp3';

class App extends Component{
  constructor(props) {
    super(props);
    this.sounds = {
      heater1: new Audio(Heater_1),
      heater2: new Audio(Heater_2),
      heater3: new Audio(Heater_3),
      heater4: new Audio(Heater_4),
      heater6: new Audio(Heater_6),
      Dsc_Oh: new Audio(Dsc_Oh),
      kickNHat: new Audio(Kick_n_Hat),
      rp4Kick: new Audio(RP4_KICK),
      cevH2: new Audio(Cev_H2)
    };
    this.state = {
      heater1: "First Noise",
      heater2: "Second Noise",
      heater3: "Third Noise",
      heater4: "Fourth Noise",
      heater6: "Fifth Noise",
      Dsc_Oh: "Sixth Noise",
      kickNHat: "Seventh Noise",
      rp4Kick: "Eigth Noise",
      cevH2: "Ninth Noise"
    };
  this.handleClick = this.handleClick.bind(this);
  this.handleKeys = this.handleKeys.bind(this);
}

handleClick(event) {
  const log = event;
  console.log(log);
  switch (event.currentTarget.childNotes[1].id) {
    case "Q":
      this.sounds.heater1.currentTime = 0;
      this.setState({ default: this.state.heater1 });
      this.sounds.heater1.play();
      break;
    case "W":
      this.sounds.heater2.currentTime = 0;
      this.setState({ default: this.state.heater2 });
      this.sounds.heater2.play();
      break;
    case "E":
      this.sounds.heater3.currentTime = 0;
      this.setState({ default: this.state.heater3 });
      this.sounds.heater3.play();
      break;
    case "A":
      this.sounds.heater4.currentTime = 0;
      this.setState ({ default: this.state.heater4 });
      this.sounds.heater4.play();
      break;
    case "S":
      this.sounds.heater6.currentTime = 0;
      this.setState ({ default: this.state.heater6 });
      this.sounds.heater6.play();
      break;
    case "D":
      this.sounds.Dsc_Oh.currentTime = 0;
      this.setState ({ default: this.state.Dsc_Oh });
      this.sounds.Dsc_Oh.play();
      break;
    case "Z":
      this.sounds.kickNHat.currentTime = 0;
      this.setState ({ default: this.state.kickNHat });
      this.sounds.kickNHat.play();
      break;
    case "X":
      this.sounds.rp4Kick.currentTime = 0;
      this.setState ({ default: this.state.rp4Kick });
      this.sounds.rp4Kick.play();
      break;
    case "C":
      this.sounds.cevH2.currentTime = 0;
      this.setState ({ default: this.state.cevH2 });
      this.sounds.cevH2.play();
      break;
    default:
      console.log("Nothing was played or somethingw went wrong.")
      break;
  }

  console.dir(event.currentTarget);
}

handleKeys(keyCode) {

  switch (keyCode) {
    case 81:
      this.sounds.heater1.currentTime = 0;
      this.setState({ default: this.state.heater1 });
      this.sounds.heater1.play();
      break;
    case 87:
      this.sounds.heater2.currentTime = 0;
      this.setState({ default: this.state.heater2 });
      this.sounds.heater2.play();
      break;
    case 69:
      this.sounds.heater3.currentTime = 0;
      this.setState({ default: this.state.heater3 });
      this.sounds.heater3.play();
      break;
    case 65:
      this.sounds.heater4.currentTime = 0;
      this.setState({ default: this.state.heater4 });
      this.sounds.heater4.play();
      break;
    case 83:
      this.sounds.heater6.currentTime = 0;
      this.setState({ default: this.state.heater6 });
      this.sounds.heater6.play();
      break;
    case 68:
      this.sounds.Dsc_Oh.currentTime = 0;
      this.setState({ default: this.state.Dsc_Oh });
      this.sounds.Dsc_Oh.play();
      break;
    case 90:
      this.sounds.kickNHat.currentTime = 0;
      this.setState({ default: this.state.kickNHat });
      this.sounds.kickNHat.play();
      break;
    case 88:
      this.sounds.rp4Kick.currentTime = 0;
      this.setState({ default: this.state.rp4Kick });
      this.sounds.rp4Kick.play();
      break;
    case 67:
      this.sounds.cevH2.currentTime = 0;
      this.setState({ default: this.state.cevH2 });
      this.sounds.cevH2.play();
      break;
    default:
    console.log("Something went wrong on keypress");
  }
}

render() {
  return (
    <div id="drum-machine">
      <div id="display"
        tabIndex={-1}
        onKeyDown={event => this.handleKeys(event.keyCode)}
      >
        <div id="pad-container">
        <div id="drum-pad-1" className="drum-pad" onClick={e => this.handleClick(e)}>
          Q
          <audio className="clip" id="Q" src={Heater_1}></audio>
        </div>
        <div id="drum-pad-2" className="drum-pad" onClick={e => this.handleClick(e)}>
          W
          <audio className="clip" id="W" src={Heater_2}></audio>
        </div>
        <div id="drum-pad-3" className="drum-pad" onClick={e => this.handleClick(e)}>
          E
          <audio className="clip" id="E" src={Heater_3}></audio>
        </div>
        <div id="drum-pad-4" className="drum-pad" onClick={e => this.handleClick(e)}>
          A
          <audio className="clip" id="A" src={Heater_4}></audio>
        </div>
        <div id="drum-pad-5" className="drum-pad" onClick={e => this.handleClick(e)}>
          S
          <audio className="clip" id="S" src={Heater_6}></audio>
        </div>
        <div id="drum-pad-6" className="drum-pad" onClick={e => this.handleClick(e)}>
          D
          <audio className="clip" id="D" src={Dsc_Oh}></audio>
        </div>
        <div id="drum-pad-7" className="drum-pad" onClick={e => this.handleClick(e)}>
          Z
          <audio className="clip" id="Z" src={Kick_n_Hat}></audio>
        </div>
        <div id="drum-pad-8" className="drum-pad" onClick={e => this.handleClick(e)}>
          X
          <audio className="clip" id="X" src={RP4_KICK}></audio>
        </div>
        <div id="drum-pad-9" className="drum-pad" onClick={e => this.handleClick(e)}>
          C
          <audio className="clip" id="C" src={Cev_H2}></audio>
        </div>
        </div>
      </div>
    </div>
  );
}
}

export default App;
