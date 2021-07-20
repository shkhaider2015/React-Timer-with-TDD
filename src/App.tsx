import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [timerValue, setTimerValue] = React.useState<number>(0)
  return (
    <div style={{ display : 'grid', placeContent : 'center' }} >
      <h1> Timer App using TDD </h1>
      <div id="timer-value" >
        {
          timerValue
        }
      </div>
      <div>
        <button className="start-btn" >
              START
        </button>
        <button className="stop-btn" >
              STOP
        </button>
      </div>
    </div>
  );
}

export default App;
