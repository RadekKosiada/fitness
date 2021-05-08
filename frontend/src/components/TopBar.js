import React from "react";
import Filter from "./Filter";

export default function TopBar() {
  return (
    <div>
      <p>
        Filter entries: 
        <Filter filter={"Date"} />
        <Filter filter={"Category"} />
        <Filter filter={"Index"} />
        <Filter filter={"Name"} />
      </p>
    </div>
  );
}
