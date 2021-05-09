import React, { useState } from "react";

export default function Filter(props) {
  console.log(props);
  const [value, setValue] = useState("");

  const handleChange = event => {
    console.log(event.target.name + " was selected");
    setValue(event.target.value);
    props.callback(event.target.value);
  };

  return (
    <div className="filter-container">
      <form className="filter-form">
        <label>
          <select value={value} onChange={handleChange} disabled={props.disabled} >
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
