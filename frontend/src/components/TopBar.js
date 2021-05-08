import React, { useState, useCallback } from "react";
import Filter from "./Filter";

export default function TopBar() {
  const [selectedDateOrder, setSelectedDateOrder] = useState("");
  const [selectedCategory, setselectedCategory] = useState("");

  const callbackDate = useCallback(filter => {
    setSelectedDateOrder(filter);
    console.log("triggered", selectedDateOrder);
  }, []);

  const callbackCategories = useCallback(filter => {
    setselectedCategory(filter);
    console.log("triggered", selectedCategory);
  }, []);

  const dateOptions = ["", "ascending", "descending"];
  const categoriesOptions = ["", "c1", "c2", "c3", "c5", "c6", "c7"];

  const handleClick = () => {
    console.log("triggered");
    setSelectedDateOrder(dateOptions[0]);
    setselectedCategory(categoriesOptions[0]);
  };

  return (
    <div>
      <p>Filter entries:</p>
      <Filter
        selectedFilter={selectedDateOrder}
        options={dateOptions}
        callback={callbackDate}
      />
      <Filter
        selectedFilter={selectedCategory}
        options={categoriesOptions}
        callback={callbackCategories}
      />

      <button onClick={handleClick}>Reset all filter</button>
      <p>{selectedCategory}</p>
      <p>{selectedDateOrder}</p>
    </div>
  );
}
