import React, { useState, useCallback } from "react";
import Filter from "./Filter";

export default function TopBar(props) {
  const dateOptions = ["", "ascending", "descending"];
  const categoriesOptions = ["", "c1", "c2", "c3", "c5", "c6", "c7"];

  // const handleClick = () => {
  //   console.log("triggered");
  //   setSelectedDateOrder(dateOptions[0]);
  //   setselectedCategory(categoriesOptions[0]);
  // };

  return (
    <div>
      <p>Filter entries:</p>
      <Filter
        // selectedFilter={selectedDateOrder}
        options={dateOptions}
        callback={props.callbackDate}
        selectedOption={props.selectedDateOrder}
      />
      <Filter
        // selectedFilter={selectedCategory}
        options={categoriesOptions}
        callback={props.callbackCategories}
        selectedOption={props.selectedCategory}
      />

      {/* <button onClick={handleClick}>Reset all filter</button> */}
    </div>
  );
}
