import React from "react";
import { useHistory } from "react-router-dom";

export default function Pagination(props) {
  const pagesArray = [];
  const history = useHistory();

  for (let i = 1; i <= props.sumOfPages; i++) {
    pagesArray.push(i);
    counter++;
  }

  const handleClick = event => {
    props.getSelectedPage(event.target.id);
    history.push("/data/" + event.target.id);
  };

  return (
    <div className="pagination-container">
      {pagesArray.map((number, i) => (
        <span onClick={handleClick} id={i+1} key={i+1}>
          {number}
        </span>
      ))}
    </div>
  );
}
