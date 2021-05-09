import React from "react";
import { useHistory } from "react-router-dom";

export default function Pagination(props) {
  const pagesArray = [];
  var counter = 0;
  var hideRestOfPages = false;
  const history = useHistory();

  for (let i = 1; i <= props.sumOfPages; i++) {
    pagesArray.push(i);
    counter++;
    if (counter >= 10) {
      hideRestOfPages = true;
      break;
    }
  }

  const handleClick = event => {
    console.log(event.target.id);
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
      <span>{hideRestOfPages ? "..." : null}</span>
    </div>
  );
}
