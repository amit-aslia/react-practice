import React, { useEffect, useRef, useState } from "react";
import "./styles.css";

function CountdownTimer() {
  const [time, setTime] = useState({
    hours: 1,
    minutes: 1,
    seconds: 10,
  });

  const getTotalSeconds = () => {
    const convertHoursToSeconds = time.hours * 3600;
    const convertMinutesToSeconds = time.minutes * 60;
    return convertHoursToSeconds + convertMinutesToSeconds + time.seconds;
  };

  const [totalSeconds, setTotalSeconds] = useState(getTotalSeconds);

  useEffect(() => {
    const hours = totalSeconds / 3600;
    
  }, totalSeconds);

  const interval = useRef(null);

  const runTimer = () => {
    interval.current = setInterval(() => {
      setTotalSeconds((totalSeconds) => totalSeconds - 1);
    }, 1000);
  };

  const pauseTimer = () => {
    clearInterval(interval.current);
  };

  const { hours, minutes, seconds } = time;

  const handleInputChange = (e) => {
    setTime({ ...time, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    return () => {
      clearInterval(interval.current);
    };
  }, []);

  return (
    <div className="container">
      <h1>Count down timer</h1>
      <div className="timerContainer">
        <div>
          <div>Hours</div>
          <input
            name="hours"
            className="input"
            value={hours}
            type="text"
            onChange={handleInputChange}
          />
        </div>
        <div>
          <div>Minutes</div>
          <input
            name="minutes"
            className="input"
            value={minutes}
            type="text"
            onChange={handleInputChange}
          />
        </div>
        <div>
          <div>Seconds</div>
          <input
            name="seconds"
            className="input"
            value={seconds}
            type="text"
            onChange={handleInputChange}
          />
        </div>
      </div>
      <div className="buttonsContainer">
        <button onClick={runTimer} className="button continue">
          Continue
        </button>
        <button onClick={pauseTimer} className="button reset">
          Reset
        </button>
      </div>
    </div>
  );
}

export default CountdownTimer;
