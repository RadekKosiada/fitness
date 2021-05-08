import React, { useState, useEffect } from "react";

const lang = document.documentElement.lang;
const optionsForDate = {
  weekday: "short",
  year: "numeric",
  month: "short",
  day: "numeric"
};

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
      {workouts
        .sort(function(a, b) {
          console.log(a, b)
          return new Date(b.startDate) - new Date(a.startDate);
      })
        .map(function(workout, i) {
          return (
            <div key={workout.index}>
              <h1>
                Name: {workout.name}, Index: {workout.index}
              </h1>
              <p>Description: {workout.description}</p>
              <p>
                Start date:{" "}
                {new Date(workout.startDate).toLocaleDateString(
                  lang,
                  optionsForDate
                )}
              </p>
              <p>Category: {workout.category}</p>
            </div>
          );
        })}
    </div>
  );
}
