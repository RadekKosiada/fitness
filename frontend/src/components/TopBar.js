import React from "react";
import Filter from "./Filter";

export default function TopBar(props) {

  return (
    <div className="topbar-container">
      <h3>Filter entries:</h3>
      <Filter
        options={props.dateOptions}
        callback={props.callbackDate}
        selectedOption={props.selectedDateOrder}
        label={props.filterDateLabel}
      />
      <Filter
        options={props.categoriesOptions}
        callback={props.callbackCategories}
        selectedOption={props.selectedCategory}
        label={props.filterCategoriesLabel}
        disabled={true}
      />

    </div>
  );
}
