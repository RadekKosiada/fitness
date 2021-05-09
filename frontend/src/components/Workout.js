import React from "react";

export default function Workout(props) {

  const lang = document.documentElement.lang;
  const optionsForDate = {
    weekday: "short",
    year: "numeric",
    month: "short",
    day: "numeric"
  };

  return (
    <div className="workout-container" 
    // key={props.index}
    >Hallo workout
      {/* <h1>
        Name: {props.name}, Index: {props.index}
      </h1>
      <p>Description: {props.description}</p>
      <p>
        Start date:{" "}
        {new Date(props.startDate).toLocaleDateString(lang, optionsForDate)}
      </p>
      <p>Category: {props.category}</p> */}
    </div>
  );
}
