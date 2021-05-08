import React, { useState, useCallback } from "react";
import Filter from "./Filter";

export default function TopBar() {
  const [selectedDateOrder, setSelectedDateOrder] = useState();
  const [selectedCategory, setselectedCategory] = useState();

  const callbackDate = useCallback(filter => {
    setSelectedDateOrder(filter);
    console.log("triggered", selectedDateOrder);
  }, []);

  const callbackCategories = useCallback(filter => {
    setselectedCategory(filter);
    console.log("triggered", selectedCategory);
  }, []);

  return (
    <div>
      <p>Filter entries:</p>
      <Filter
      options={['ascending', 'descending']}
      callback={callbackDate} 
      />
      <Filter
        options={["c1", "c2", "c3", "c5", "c6", "c7"]}
        callback={callbackCategories}
      />
      <p>{selectedCategory}</p>
      <p>{selectedDateOrder}</p>
    </div>
  );
}
