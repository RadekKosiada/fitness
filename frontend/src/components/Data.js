import React, { useState, useEffect } from "react";
import Pagination from "./Pagination";
import { useHistory } from "react-router-dom";

const lang = document.documentElement.lang;
const optionsForDate = {
  weekday: "short",
  year: "numeric",
  month: "short",
  day: "numeric"
};

export default function Data(props) {
  const [workouts, setWorkouts] = useState([]);
  const [pagination, setPagination] = useState("");
  const history = useHistory();

  useEffect(() => {
    fetch("/data/" + props.selectedPage)
      .then(response => {
        if (response.ok) {
          return response.json();
        }
      })
      .then(jsonResponse => {
        setWorkouts(jsonResponse.workouts);
        setPagination(jsonResponse.sumOfPages);
      })
      .catch(error => {
        console.log(error.message);
      });
  }, [props.selectedPage]);

  const handleClick = event => {
    let index = Number(event.target.id);

    let workoutObject = {};
    workouts.forEach(workout => {
      if (index === workout.index) {
        workoutObject = workout;
      }
    });

    props.getWorkspaceId(workoutObject);
    history.push("/" + index);
  };

  let newWorkouts = [];
  const dateOptions = props.dateOptions;
  const currentMonthNumber = new Date().getMonth();

  for (let i = 1; i <= dateOptions.length; i++) {
    if (props.selectedDateOrder === dateOptions[i]) {
      newWorkouts = workouts.filter(workout => {
        return (
          Number(workout.startDate.split("-")[1]) === i + currentMonthNumber
        );
      });
    } else if (props.selectedDateOrder === dateOptions[0]) {
      newWorkouts = workouts;
    }
  }

  return (
    <div>
      {newWorkouts.map(function(workout, i) {
        return (
          <div className="workout-container" key={workout.index}>
            <h1 onClick={handleClick} id={workout.index}>
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
      <Pagination
        sumOfPages={pagination}
        currentPage={props.selectedPage}
        getSelectedPage={props.getSelectedPage}
      />
    </div>
  );
}
