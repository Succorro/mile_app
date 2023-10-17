import React, { useState, useEffect } from "react";

function Stopwatch({
  student,
  isRunning,
  setStopwatchStates,
  studentId,
  results,
  setResults,
  stopwatchStates,
}) {
  const [time, setTime] = useState(0);

  const toggleOneStopwatch = () => {
    setStopwatchStates({
      ...stopwatchStates,
      [student.id]: !isRunning,
    });
  };

  useEffect(() => {
    let interval;
    if (isRunning) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    } else {
      clearInterval(interval);
      // Save the result when the stopwatch is paused
      const newResults = { ...results, [studentId]: time };
      setResults(newResults);
    }

    return () => clearInterval(interval);
  }, [isRunning, time]);
  return (
    <div>
      <div>Participant: {student.name}</div>
      <div>Timer: {time} seconds</div>
      <button onClick={toggleOneStopwatch}>
        {isRunning ? "Pause" : "Play"}
      </button>
    </div>
  );
}

export default Stopwatch;
