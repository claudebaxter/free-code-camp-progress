import React from 'react';
import './App.css';

let audio1 = new Audio('./Heater-1.mp3');
let audio2 = new Audio('/Heater-2.mp3');
let audio3 = new Audio('/Heater-3.mp3');
let audio4 = new Audio('/Heater-4_1.mp3');
let audio5 = new Audio('/Heater-6.mp3');
let audio6 = new Audio('/Dsc_Oh.mp3');
let audio7 = new Audio('/Kick_n_Hat.mp3');
let audio8 = new Audio('/RP4_KICK_1.mp3');
let audio9 = new Audio('/Cev_H2.mp3');

class App extends React.Component{

  playAudio1 = () => {
    audio1.play()
  }

  playAudio2 = () => {
    audio2.play()
  }

  playAudio3 = () => {
    audio3.play()
  }

  playAudio4 = () => {
    audio4.play()
  }

  playAudio5 = () => {
    audio5.play()
  }

  playAudio6 = () => {
    audio6.play()
  }

  playAudio7 = () => {
    audio7.play()
  }

  playAudio8 = () => {
    audio8.play()
  }

  playAudio9 = () => {
    audio9.play()
  }

render() {
  return (
    <div id="drum-machine">
      <div id="display">
        <div id="pad-container">
        <div id="drum-pad-1" className="drum-pad" onClick={playAudio1()}>
          Q
        </div>
        <div id="drum-pad-2" className="drum-pad">
          W
        </div>
        <div id="drum-pad-3" className="drum-pad">
          E
        </div>
        <div id="drum-pad-4" className="drum-pad">
          A
        </div>
        <div id="drum-pad-5" className="drum-pad">
          S
        </div>
        <div id="drum-pad-6" className="drum-pad">
          D
        </div>
        <div id="drum-pad-7" className="drum-pad">
          Z
        </div>
        <div id="drum-pad-8" className="drum-pad">
          X
        </div>
        <div id="drum-pad-9" className="drum-pad">
          C
        </div>
        </div>
      </div>
    </div>
  );
}
}

export default App;
