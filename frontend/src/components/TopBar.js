import React, { useState, useCallback } from "react";
import Filter from "./Filter";

export default function TopBar(props) {
  // const handleClick = () => {
  //   console.log("triggered");
  //   setSelectedDateOrder(dateOptions[0]);
  //   setselectedCategory(categoriesOptions[0]);
  // };

  return (
    <div className="topbar-container">
      <h3>Filter entries:</h3>
      <Filter
        // selectedFilter={selectedDateOrder}
        options={props.dateOptions}
        callback={props.callbackDate}
        selectedOption={props.selectedDateOrder}
        disabled={true}
        label={props.filterDateLabel}
      />
      <Filter
        // selectedFilter={selectedCategory}
        options={props.categoriesOptions}
        callback={props.callbackCategories}
        selectedOption={props.selectedCategory}
        label={props.filterCategoriesLabel}
      />

      {/* <button onClick={handleClick}>Reset all filter</button> */}
    </div>
  );
}
