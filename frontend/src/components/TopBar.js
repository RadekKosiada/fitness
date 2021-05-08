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
      <p>
        Filter entries: 
        <FilterDate callback={callback}/>
        {/* <FilterCategory onFilterUpdate={updateFilter}/> */}
      </p>
      <p>{selectedFilter? 'True' : 'False'}</p>
    </div>
  );
}
