import React, { useRef, useState } from "react";
import ResultModal from "./ResultModal";

const TimerChallenge = ({ title, targetTime }) => {
  const timer = useRef();
  const dialog = useRef();
  const [timeRemaining, settimeRemaining] = useState(targetTime*1000);
  const timerIsAtive=timeRemaining>0 && timeRemaining<targetTime*1000;
  if (timeRemaining <=0) {
    clearInterval(timer.current);
    settimeRemaining(targetTime*1000);
    dialog.current.open();
  }
  function handleStart() {
    timer.current = setInterval(() => {
      settimeRemaining(prevTimeRemaining => prevTimeRemaining-10)
    }, 10);
    setTimeStarted(true);
  }
  function handleStop() {
    dialog.current.open();
    clearInterval(timer.current);
  }
  return (
    <>
    
    <ResultModal ref={dialog} targetTime={targetTime} remainingTime={timeRemaining}/>
      <section className="challenge">
        <h2>{title}</h2>
        <p className="challenge-time">
          {targetTime} second{targetTime > 1 ? "s" : ""}
        </p>
        <p>
          <button onClick={timerIsAtive ? handleStop : handleStart}>
            {timerIsAtive ? "Stop" : "Start"} Challenge
          </button>
        </p>
        <p className={timerIsAtive ? "active" : undefined}>
          {" "}
          {timerIsAtive ? "Time is running....." : "Timer inactive"}
        </p>
      </section>
    </>
  );
};

export default TimerChallenge;
