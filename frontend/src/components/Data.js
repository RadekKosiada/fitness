import React, { useState, useEffect } from "react";
import Pagination from "./Pagination";
import { useHistory } from "react-router-dom";


export default function Data(props) {
  const [workouts, setWorkouts] = useState([]);
  const [pagination, setPagination] = useState("");
  const [sumOfWorkouts, setSumOfWorkouts] = useState();
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
        setSumOfWorkouts(jsonResponse.sumOfWorkouts);
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
            <p className="workout-index">{workout.index}</p>
            <h1 onClick={handleClick} id={workout.index}>
              Name: {workout.name}
            </h1>
          </div>
        );
      })}
      <Pagination
        sumOfAllWorkouts={sumOfWorkouts}
        sumOfPages={pagination}
        currentPage={props.selectedPage}
        getSelectedPage={props.getSelectedPage}
      />
    </div>
  );
}
