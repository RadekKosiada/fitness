import React, { useState, useContext } from "react";
import { DateContext, DEBUG } from "../App";


export default function Filter(props) {
  const [value, setValue] = useState("");
  const { dateOptions } = useContext(DateContext);
  DEBUG && console.log('dateOptions: ', dateOptions)

  const handleChange = (event) => {
    setValue(event.target.value);
    props.callback(event.target.value);
  };

  return (
    <div className="filter-container">
      <form className="filter-form">
        <label>
          <h3>{props.label}</h3>
          <select
            value={value}
            onChange={handleChange}
            disabled={props.disabled}
          >
            {props.options.map((category, index) => {
              return (
                <option key={index} value={category}>
                  {category}
                </option>
              );
            })}
          </select>
        </label>
      </form>
      <p className="filter-output">
        {props.selectedOption ? props.selectedOption : "your filter"}
      </p>
    </div>
  );
}
