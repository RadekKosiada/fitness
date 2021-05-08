import React, { useState, useCallback } from "react";
import FilterDate from "./FilterDate";
import FilterCategory from "./FilterCategory";

export default function TopBar() {

  const [selectedFilter, setSelectedFilter] = useState(false);

  const callback = useCallback((filter) => {
    setSelectedFilter(filter);
    console.log('triggered', selectedFilter);
  }, []);

  return (
    <div>
      
        <p>Filter entries:</p> 
        <FilterDate callback={callback}/>
        <FilterCategory />
      
      <p>{selectedFilter? 'True' : 'False'}</p>
    </div>
  );
}
