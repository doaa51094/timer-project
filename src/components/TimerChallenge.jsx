import React, { useRef, useState } from "react";
import ResultModal from "./ResultModal";

const TimerChallenge = ({ title, targetTime }) => {
  const timer = useRef();
  const [timerExpired, setTimerExpired] = useState(false);
  const [timeStarted, setTimeStarted] = useState(false);
  function handleStart() {
    setTimeStarted(true);
    timer.current = setTimeout(() => {
      setTimerExpired(true);
    }, targetTime * 1000);
  }
  function handleStop() {
    clearTimeout(timer.current);
  }
  return (
    <>
    {timerExpired &&<ResultModal targetTime={targetTime} result='lost'/> }
    
      <section className="challenge">
        <h2>{title}</h2>
        <p className="challenge-time">
          {targetTime} second{targetTime > 1 ? "s" : ""}
        </p>
        <p>
          <button onClick={timeStarted ? handleStop : handleStart}>
            {timeStarted ? "Stop" : "Start"} Challenge
          </button>
        </p>
        <p className={timeStarted ? "active" : undefined}>
          {" "}
          {timeStarted ? "Time is running....." : "Timer inactive"}
        </p>
      </section>
    </>
  );
};

export default TimerChallenge;
