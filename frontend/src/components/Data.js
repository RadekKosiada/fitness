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
  // const [sortedWorkouts, setSorterWorkouts] = useState([]);

  const currentPage = 1;
  console.log("Data props: ", props);

  useEffect(() => {
    fetch("/data/1")
      .then(response => {
        if (response.ok) {
          console.log(response);
          return response.json();
        }
      })
      .then(jsonResponse => {
        console.log(jsonResponse.workouts);
        setWorkouts(jsonResponse.workouts);
        setPagination(jsonResponse.sumOfPages);
        console.log(workouts);
      })
      .catch(error => {
        console.log(error.message);
      });
  }, []);

  // useEffect(() => {
  //   console.log('selectedDateOrder: ', props.selectedDateOrder);
  //   if(props.selectedDateOrder === "descending") {
  //     let newWorkouts = workouts.sort(function(a, b) {
  //       // console.log(a, b)
  //       return new Date(b.startDate) - new Date(a.startDate);
  //   });
  //   setSorterWorkouts(newWorkouts);
  //   } else if (props.selectedDateOrder === "ascending") {
  //     let newWorkouts = workouts.sort(function(b, a) {
  //       // console.log(a, b)
  //       return new Date(b.startDate) - new Date(a.startDate);
  //   });
  //   setSorterWorkouts(newWorkouts);
  //   }

  // }, [props.selectedDateOrder]);

  // let newWorkouts = workouts.length ? workouts : [];
  // console.log("NW2", workouts);
  // if (props.selectedDateOrder === "descending") {
  //   newWorkouts.sort(function(a, b) {
  //     // console.log(a, b)
  //     return new Date(b.startDate) - new Date(a.startDate);
  //   });
  // } else if (props.selectedDateOrder === "ascending") {
  //   newWorkouts.sort(function(b, a) {
  //     // console.log(a, b)
  //     return new Date(b.startDate) - new Date(a.startDate);
  //   });
  // }
  // else if (!props.selectedDateOrder.length) {
  //   newWorkouts = workouts;
  //   console.log('nW: ', workouts);
  // }

  const handleClick = (event) => {
    console.log(event.target.id);
    props.getWorkspaceId(event.target.id);
    history.push("/" + event.target.id);
  }

  let newWorkouts = [];
  console.log(props);
  const dateOptions = props.dateOptions;
  const currentMonthNumber = new Date().getMonth();

  for (let i = 1; i <= dateOptions.length; i++) {
    if (props.selectedDateOrder === dateOptions[i]) {
      console.log(dateOptions[i]);
      newWorkouts = workouts.filter(workout => {
        return (
          Number(workout.startDate.split("-")[1]) === i + currentMonthNumber
        );
      });
      console.log(newWorkouts);
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
      <Pagination sumOfPages={pagination} currentPage={currentPage} />
    </div>
  );
}
