import React, { useState, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom/client';
import SecondsCounter from './components/SecondsCounter';
import '../styles/index.css';

const App = () => {
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(true);
  const intervalRef = useRef(null);

  useEffect(() => {
    if (isRunning) {
      intervalRef.current = setInterval(() => {
        setSeconds(prevSeconds => prevSeconds + 1);
      }, 1000);
    }
    return () => clearInterval(intervalRef.current);
  }, [isRunning]);

  const handleStop = () => {
    setIsRunning(false);
  };

  const handleResume = () => {
    setIsRunning(true);
  };

  const handleReset = () => {
    setSeconds(0);
    setIsRunning(true);
  };

  return (
    <div className="app-container">
      <SecondsCounter seconds={seconds} />
      <div className="controls">
        <button onClick={handleStop}>Stop</button>
        <button onClick={handleResume}>Resume</button>
        <button onClick={handleReset}>Reset</button>
      </div>
    </div>
  );
};


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);


