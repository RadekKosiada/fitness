import React from "react";
import { useHistory } from "react-router-dom";

export default function Pagination(props) {
  const pagesArray = [];
  const history = useHistory();

  console.log(props);

  const currentPageNumber = Number(props.currentPage);
  let tenNumber =
    currentPageNumber.toString().length > 1
      ? Number(currentPageNumber.toString()[0])
      : 0;
  console.log(tenNumber);
  for (let i = 1; i <= props.sumOfPages; i++) {
    pagesArray.push(i);
  }

  const handleClick = event => {
    changePage(event.target.id);
  };

  const hidePreDots = currentPageNumber < 10 ? "pre-dots-hidden" : null;
  const hidePostDots =
    currentPageNumber === props.sumOfPages ? "post-dots-hidden" : null;

  const goToPreviousTen = () => {
    let newPage;
    if (tenNumber === 1) {
      newPage = 1;
    } else {
      newPage = Number(tenNumber.toString() + "0") - 10;
    }

    changePage(newPage);
  };

  const goToNextTen = () => {
    console.log(tenNumber);
    let newPage;
    if (tenNumber === 0) {
      newPage = 10;
    } else {
      newPage = Number(tenNumber.toString() + "0") + 10;
    }
    changePage(newPage);
  };

  const changePage = page => {
    props.getSelectedPage(page);
    history.push("/data/" + page);
  };

  return (
    <div className="pagination-container">
      <p>Number of all workouts: {props.sumOfAllWorkouts}</p>
      <span className={hidePreDots} onClick={goToPreviousTen}>
        ...
      </span>
      {pagesArray.map(number => {
        //define classes for pagination
        const bold = number === currentPageNumber ? "bold" : null;
        let hidden;
        if (currentPageNumber.toString().length < 2) {
          hidden = number < 10 ? "" : "hidden";
        } else {
          // will work as long as pages number < 100
          hidden =
            10 * tenNumber <= number && number < 10 * (tenNumber + 1)
              ? ""
              : "hidden";
        }

        return (
          <span
            onClick={handleClick}
            id={number}
            key={number}
            className={`${bold} ${hidden}`}
          >
            {number}
          </span>
        );
      })}
      <span className={hidePostDots} onClick={goToNextTen}>
        ...
      </span>
    </div>
  );
}
