import React from "react";

export default function Pagination(props) {
  const pagesArray = [];
  var counter = 0;
  var hideRestOfPages = false;

  for (let i = 1; i <= props.sumOfPages; i++) {
    pagesArray.push(i);
    counter++;
    if (counter >= 10) {
      hideRestOfPages = true;
      break;
    }
  }

  return (
    <div className="pagination-container">
      {pagesArray.map((number, i) => (
        <span key={i}>{number}</span>
      ))}
      <span>{hideRestOfPages ? "..." : null}</span>
    </div>
  );
}
