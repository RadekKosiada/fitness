import React, { useState } from "react";

export default function FilterCategory(props) {

  console.log(props);
  const [value, setValue] = useState('');

  const handleChange = (event) => {
    console.log(event.target.name + ' was selected');
    setValue(event.target.value)
    props.callback(event.target.value);
  }

  return (
    <div>
      <form>
        <label>
          <select value={value} onChange={handleChange}>
            <option disabled></option>
            {props.options.map((category, index) => {
              return <option key={index} value={category}>{category}</option>;
            })}
          </select>
        </label>
      </form>
    </div>
  );
}
