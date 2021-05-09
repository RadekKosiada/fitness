import React from "react";

export default function Workout(props) {

  console.log(props.data)
  const lang = document.documentElement.lang;
  const optionsForDate = {
    weekday: "short",
    year: "numeric",
    month: "short",
    day: "numeric"
  };

  return (
    <div className="workout-container">
      <h1>
        Name: {props.data.name}, Index: {props.data.index}
      </h1>
      <p>Description: {props.data.description}</p>
      <p>
        Start date:{" "}
        {new Date(props.data.startDate).toLocaleDateString(lang, optionsForDate)}
      </p>
      <p>Category: {props.data.category}</p>
    </div>
  );
}
