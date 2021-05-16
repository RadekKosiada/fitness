import React from "react";
import { useHistory } from "react-router-dom";

export default function Pagination(props) {
  const pagesArray = [];
  const history = useHistory();

  console.log(props.currentPage);
  for (let i = 1; i <= props.sumOfPages; i++) {
    pagesArray.push(i);
  }

  const handleClick = event => {
    props.getSelectedPage(event.target.id);
    history.push("/data/" + event.target.id);
  };

  return (
    <div className="pagination-container">
      <p>Number of all workouts: {props.sumOfAllWorkouts}</p>
      {pagesArray.map(number => {
        return (
          <span
            onClick={handleClick}
            id={number}
            key={number}
            className={number === Number(props.currentPage) ? "bold" : null}
          >
            {number}
          </span>
        );
      })}
    </div>
  );
}
