import React, { useState } from 'react';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRefresh, faPlay, faPause, faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons'

const App = () => {
  const [sessionLength, setSessionLength] = useState(25); //will toggle up/down to set sessionTime
  const [breakLength, setBreakLength] = useState(5); //will toggle up/down to set breakTime
  const [sessionTime, setSessionTime] = useState("25:00"); // session countdown timer
  const [breakTime, setBreakTime] = useState("05:00"); // breaktime countdown timer
  const [timerLabel, setTimerLabel] = useState("Session"); //will set timer label as Session or Break

  const resetTime = () => {
    setSessionLength(25);
    setBreakLength(5);
    setSessionTime("25:00");
    setBreakTime("05:00");
  };

  const playPause = () => {};

  const sessionIncrement = () => setSessionLength(sessionLength + 1);

  const sessionDecrement = () => setSessionLength(sessionLength - 1);

  const breakIncrement = () => setBreakLength(breakLength + 1);

  const breakDecrement = () => setBreakLength(breakLength - 1);

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
            <h2>{timerLabel}</h2>
          </div>
          <div id="time-left">
            <h1 className="time-left-title">{sessionTime}</h1>
          </div>
        </div>
      </div>
      <div className="control-wrapper">
        <div id="start_stop" onClick={() => playPause()}>
          <FontAwesomeIcon id="break-decrement" icon={faPlay} style={{ color: "red", height: "2em" }}></FontAwesomeIcon>
          <FontAwesomeIcon id="break-decrement" icon={faPause} style={{ color: "red", height: "2em" }}></FontAwesomeIcon>
        </div>
        <div id="reset" onClick={() => resetTime()}>
          <FontAwesomeIcon id="break-decrement" icon={faRefresh} style={{ color: "red", height: "2em" }}></FontAwesomeIcon>
        </div>
      </div>
    </div>
  );
}

export default App;
