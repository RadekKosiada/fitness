import React from "react";
import { useHistory } from "react-router-dom";

export default function Pagination(props) {
  const pagesArray = [];
  const history = useHistory();

  console.log(props);

  const currentPageNumber = Number(props.currentPage);
  // if (currentPageNumber === 1) {
    for (let i = 1; i <= props.sumOfPages; i++) {
      pagesArray.push(i);
    }
  // } else if (1 < currentPageNumber < 50) {
  //   for (let i = 1; i <= props.sumOfPages; i++) {
  //     pagesArray.push(i);
  //   }
  // }

  const handleClick = event => {
    props.getSelectedPage(event.target.id);
    history.push("/data/" + event.target.id);
  };

  

  return (
    <div className="pagination-container">
      <p>Number of all workouts: {props.sumOfAllWorkouts}</p>
      {pagesArray.map(number => {
        //define classes for pagination
        const bold = number === currentPageNumber ? "bold" : null;
        let hidden;
        let red;
         if (currentPageNumber.toString().length < 2) {
          hidden = number < 10 ? "" : "hidden";
        } 
        else {
          let tenNumber = Number(currentPageNumber.toString()[0]);
          hidden = 10 * (tenNumber) <= number && number < 10 * (tenNumber +1) ? "" : "hidden";

        }
       
        return (
          <span
            onClick={handleClick}
            id={number}
            key={number}
            className={`${bold} ${hidden} ${red}`}
          >
            {number}
          </span>
        );
      })}
      {/* <span className={currentPageNumber == props.sumOfPages ? 'hidden' : null}>...</span> */}
    </div>
  );
}
