import React from 'react'

export default function Pagination(props) {

  const pagesArray = [];
  for(let i = 1; i <= props.sumOfPages; i++) {
    pagesArray.push(i);
  }
  console.log(pagesArray);
  return (
    <div className="pagination-container">
      {pagesArray.map(number => <span>{number}</span>)}
    </div>
  )
}
