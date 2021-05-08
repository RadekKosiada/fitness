import React, { useState } from "react";

export default function FilterCategory({callback}) {

  const categories = ["c1", "c2", "c3", "c5", "c6", "c7"];

  const [value, setValue] = useState('');

  const handleChange = (event) => {
    console.log(event.target.name + ' was selected');
    setValue(event.target.value)
    callback(event.target.value);
  }

  return (
    <div>
      <form>
        <label>
          <select value={value} onChange={handleChange}>
            <option disabled></option>
            {categories.map((category, index) => {
              return <option key={index} value={category}>{category}</option>;
            })}
          </select>
        </label>
      </form>
      <p>{value}</p>
    </div>
  );
}
