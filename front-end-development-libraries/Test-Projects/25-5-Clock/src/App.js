import React, { useEffect, useState } from 'react';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRefresh, faPlay, faPause, faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons'

/*const beepSound = [{
  keyCode: 1, 
  key: 'A', 
  id: 'Beep', 
  url: 'https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav'}
]

const BeepSound = ({ beep, sound: { keyCode, key, id, url } }) = {}*/

const App = () => {
  const [sessionLength, setSessionLength] = useState(25); //will toggle up/down to set sessionTime
  const [breakLength, setBreakLength] = useState(5); //will toggle up/down to set breakTime
  const [sessionTime, setSessionTime] = useState(1500); // session countdown timer
  const [timerLabel, setTimerLabel] = useState("SESSION"); //will set timer label as Session or Break
  const [play, setPlay] = useState(false); //determines if play function is active or off with a boolean

  const timeout = setTimeout(() => {
    if ( sessionTime && play ){
      setSessionTime(sessionTime - 1);
    }
  }, 1000);

  const sessionIncrement = () => {
    if (sessionLength < 60) {
      setSessionLength(sessionLength + 1);
      setSessionTime(sessionTime + 60);
    }
  }

  const sessionDecrement = () => {
    if (sessionLength > 1) {
      setSessionLength(sessionLength - 1);
      setSessionTime(sessionTime - 60);
    } 
  }

  const breakIncrement = () => {
    if (breakLength < 60) {
      setBreakLength(breakLength + 1);
    }
  }

  const breakDecrement = () => {
    if (breakLength > 1){
      setBreakLength(breakLength - 1);
    }
  }

  const handleReset = () => {
    clearTimeout(timeout);
    setPlay(false);
    setSessionTime(1500);
    setBreakLength(5);
    setSessionLength(25);
    setTimerLabel("SESSION");
    const audio = document.getElementById("beep");
    audio.pause()
    audio.currentTime = 0;
  };

  const playPause = () => {
    clearTimeout(timeout);
    setPlay(!play);
  };

  const resetTimer = () => {
    const audio = document.getElementById("beep");
    if(!sessionTime && timerLabel === "SESSION"){
      setSessionTime(breakLength * 60)
      setTimerLabel("BREAK")
      audio.play()
    }
    if(!sessionTime && timerLabel === "BREAK"){
      setSessionTime(sessionLength * 60)
      setTimerLabel("SESSION")
      audio.pause()
      audio.currentTime = 0;
    }
  }

  const clock = () => {
    if(play){
      timeout
      resetTimer()
    }else {
      clearTimeout(timeout)
    }
  }

  React.useEffect(() => {
    clock()
  }, [play, sessionTime, timeout])

  const timeFormatter = () => {
    const minutes = Math.floor(sessionTime / 60);
    const seconds = sessionTime - minutes * 60;
    const formattedSeconds = seconds < 10 ? '0' + seconds : seconds;
    const formattedMinutes = minutes < 10 ? '0' + minutes : minutes;
    return `${formattedMinutes}:${formattedSeconds}`;
  }
  

  const title = timerLabel === "SESSION" ? "Session" : "Break";

  return (
    <div className="body">
      <div className="title">
        <h1>Adjustable Timer</h1>
      </div>
      <div className="switch-wrappers">
        <div className="toggle-switch">
          <h2 id="session-label">Session Length</h2>
            <FontAwesomeIcon className="arrow" id="session-increment" icon={faArrowUp} style={{ color: "red" }} onClick={() => sessionIncrement()}></FontAwesomeIcon>
            <h1 id="session-length">{sessionLength}</h1>
            <FontAwesomeIcon className="arrow" id="session-decrement" icon={faArrowDown} style={{ color: "red" }} onClick={() => sessionDecrement()}></FontAwesomeIcon>
        </div>
        <div className="toggle-switch">
          <h2 id="break-label">Break Length</h2>
            <FontAwesomeIcon className="arrow" id="break-increment" icon={faArrowUp} style={{ color: "red" }} onClick={() => breakIncrement()}></FontAwesomeIcon>
              <h1 id="break-length">{breakLength}</h1>
            <FontAwesomeIcon className="arrow" id="break-decrement" icon={faArrowDown} style={{ color: "red" }} onClick={() => breakDecrement()}></FontAwesomeIcon>
        </div>
      </div>
      <div className="timer-wrapper">
        <div id="timer">
          <div id="timer-label">
            <h2>{title}</h2>
          </div>
          <div id="time-left-wrapper">
            <h1 className="time-left">{timeFormatter()}</h1>
          </div>
        </div>
      </div>
      <div className="control-wrapper">
        <div id="start_stop" onClick={() => playPause()}>
          <FontAwesomeIcon id="play-btn" icon={faPlay} style={{ color: "red", height: "2em" }}></FontAwesomeIcon>
          <FontAwesomeIcon id="pause-btn" icon={faPause} style={{ color: "red", height: "2em" }}></FontAwesomeIcon>
        </div>
        <div id="reset" onClick={() => handleReset()}>
          <FontAwesomeIcon id="refresh-btn" icon={faRefresh} style={{ color: "red", height: "2em" }}></FontAwesomeIcon>
        </div>
      </div>
      <audio
        id="beep" 
        preload="auto"
        src="https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav"
      />
    </div>
  );
}

export default App;
