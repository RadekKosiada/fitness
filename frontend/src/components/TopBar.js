import React, { useState, useCallback } from "react";
import FilterDate from "./FilterDate";
import FilterCategory from "./FilterCategory";

export default function TopBar() {

  const [selectedFilter, setSelectedFilter] = useState();

  const callback = useCallback((filter) => {
    setSelectedFilter(filter);
    console.log('triggered', selectedFilter);
  }, []);

  return (
    <div>
      
        <p>Filter entries:</p> 
        <FilterDate callback={callback}/>
        <FilterCategory callback={callback}/>
      
      <p>{selectedFilter}</p>
    </div>
  );
}
