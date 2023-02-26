import React, { useRef, useState } from "react";
import "../styles/App.css";
const App = () => {
  const startTimeRef = useRef(0);
  const intervalRef = useRef(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [laps, setLaps] = useState([]);

  const handleStart = () => {
    // setCurrentTime(true);
    startTimeRef.current = Date.now() - currentTime;
    intervalRef.current = setInterval(() => {
      setCurrentTime(Date.now() - startTimeRef.current);
    }, 10);
  };
  const handleStop = () => {
    clearInterval(intervalRef.current);
    setCurrentTime(false);
  };

  const handleReset = () => {
    clearInterval(intervalRef.current);
    setCurrentTime(false);
    setLaps([]);
    startTimeRef.current = null;
  };
  function handleLap() {
    setLaps((laps) => [...laps, currentTime / 1000]);
  }

  return (
    <div id="main">
      <section>
        <h1 className="seconds-elapsed">Stopwatch Time</h1>
        <p>{(currentTime / 1000).toFixed(3)}</p>
        <section className="buttons">
          <button className="start-btn" onClick={handleStart}>
            START
          </button>
          <button className="stop-btn" onClick={handleStop}>
            STOP
          </button>
          <button className="lap-btn" onClick={handleLap}>
            LAP
          </button>
          <button className="reset-btn" onClick={handleReset}>
            RESET
          </button>
        </section>
      </section>
      <section className="lap-section">
        <h2>Laps</h2>
        <section className="laps">
          <ul>
            {laps.map((lap, index) => (
              <li key={index}>{lap.toFixed(3)}</li>
            ))}
          </ul>
        </section>
      </section>
    </div>
  );
};

export default App;
