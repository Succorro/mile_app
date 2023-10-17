import React, { useState } from "react";
import Stopwatch from "./Stopwatch";

function Home({ students }) {
  const [stopwatchStates, setStopwatchStates] = useState(
    students.reduce((acc, student) => {
      acc[student.id] = false;
      return acc;
    }, {})
  );
  const [results, setResults] = useState(
    students.reduce((acc, student) => {
      acc[student.id] = 0;
      return acc;
    }, {})
  );

  const toggleAllStopwatches = () => {
    const allRunning = Object.values(stopwatchStates).every(
      (isRunning) => isRunning
    );

    const newStates = { ...stopwatchStates };
    for (const student of students) {
      newStates[student.id] = !allRunning;
    }
    setStopwatchStates(newStates);
  };

  const stopAllStopwatchesAndSaveResults = () => {
    const stopStates = {};
    for (const student of students) {
      stopStates[student.id] = false;
    }
    setStopwatchStates(stopStates);
    saveResults();
  };

  const saveResults = () => {
    const studentResults = students.map((student) => ({
      ...student,
      result: results[student.id],
    }));
    // You can save the studentResults as needed, for example, send them to an API or display them.
    console.log(studentResults);
  };
  return (
    <div>
      <button onClick={toggleAllStopwatches}>
        {Object.values(stopwatchStates).every((isRunning) => isRunning)
          ? "Stop All"
          : "Start All"}
      </button>
      <button onClick={stopAllStopwatchesAndSaveResults}>
        Stop All and Save
      </button>
      {students.map((student) => (
        <Stopwatch
          key={student.id}
          student={student}
          isRunning={stopwatchStates[student.id]}
          setStopwatchStates={setStopwatchStates}
          studentId={student.id}
          results={results}
          setResults={setResults}
        />
      ))}
      <div>Results:</div>
      <ul>
        {students.map((student) => (
          <li key={student.id}>
            {student.name}: {results[student.id]} seconds
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home;
