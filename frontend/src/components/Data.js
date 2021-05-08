import React, { useState, useEffect } from "react";

export default function Data() {
  const [workouts, setWorkouts] = useState([]);

  useEffect(() => {
    fetch("/data")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
      })
      .then(jsonResponse => {
        console.log(jsonResponse);
        setWorkouts(jsonResponse);
      })
      .catch(error => {
        console.log(error.message);
      });
  }, []);

  return (
    <div>
      {workouts.map(function(workout, i) {
        return (
          <div key={workout.index}>
            <h1>{workout.name}</h1>
            <p>{workout.description}</p>
            <p>{workout.startDate}</p>
            <p>{workout.category}</p>

          </div>
        );
      })}
    </div>
  );
}
