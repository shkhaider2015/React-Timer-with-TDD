import React from 'react';

function App() {
  let [timerValue, setTimerValue] = React.useState<number>(0)
  const [isStart, setIsStart] = React.useState<boolean>(false)

  React.useEffect(
    () => {
      var interval:NodeJS.Timeout;
      if(isStart)
      {
        if(timerValue === 0)
        {
          timerValue++
        }
        interval = setInterval(() => setTimerValue(timerValue++), 1000)
      }
      return () => {
        clearInterval(interval)
      }
      // eslint-disable-next-line
    }, [isStart]
  )
 

  return (
    <div style={{ display : 'grid', placeContent : 'center' }} >
      <h1> Timer App using TDD </h1>
      <div id="timer-value" style={{ marginLeft : 'auto', marginRight : 'auto' }} >
        {
          timerValue
        }
      </div>
      <div style={{ marginLeft : 'auto', marginRight : 'auto' }} >
        <button className="start-btn" disabled={isStart} onClick={() => setIsStart(!isStart)} >
              START
        </button>
        <button style={{marginLeft : '5px'}} className="stop-btn" disabled={!isStart} onClick={() => setIsStart(!isStart)} >
              STOP 
        </button>
      </div>
    </div>
  );
}

export default App;
