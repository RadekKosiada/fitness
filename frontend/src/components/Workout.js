import React from "react";
import { useHistory } from "react-router-dom";

export default function Workout(props) {
  const history = useHistory();
  const lang = document.documentElement.lang;
  const optionsForDate = {
    weekday: "short",
    year: "numeric",
    month: "short",
    day: "numeric"
  };

  const handleClick = () => {
    history.push("/data/" + props.selectedPage);
  };
  return (
    <div>
      <button onClick={handleClick}>Back to workouts</button>
      <div className="workout-container">
        <p className="workout-index">{props.data.index}</p>
        <h1>Name: {props.data.name}</h1>
        <p>Description: {props.data.description}</p>
        <p>
          Start date:{" "}
          {new Date(props.data.startDate).toLocaleDateString(
            lang,
            optionsForDate
          )}
        </p>
        <p>Category: {props.data.category}</p>
      </div>
    </div>
  );
}
