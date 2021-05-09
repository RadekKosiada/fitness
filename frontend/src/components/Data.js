import React, { useState, useEffect } from "react";

const lang = document.documentElement.lang;
const optionsForDate = {
  weekday: "short",
  year: "numeric",
  month: "short",
  day: "numeric"
};

export default function Data(props) {
  const [workouts, setWorkouts] = useState([]);
  // const [sortedWorkouts, setSorterWorkouts] = useState([]);

  console.log("Data props: ", props);

  useEffect(() => {
    fetch("/data")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
      })
      .then(jsonResponse => {
        setWorkouts(jsonResponse);
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

  let newWorkouts = [];
  const categoriesOptions = props.categoriesOptions;
  for(let i = 1; i <= categoriesOptions.length; i++) {
    if (props.selectedCategory === categoriesOptions[i]) {
      console.log(categoriesOptions[i]);
      newWorkouts = workouts.filter((workout) => {
        return workout.category === categoriesOptions[i];
      })
      console.log(newWorkouts);
    } else if (props.selectedCategory === categoriesOptions[0]) {
      newWorkouts = workouts;
    }
  }
  
  return (
    <div>
      {newWorkouts.map(function(workout, i) {
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
