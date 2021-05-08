import React, { useState } from "react";

export default function FilterCategory() {
  const categories = ["c1", "c2", "c3", "c5", "c6", "c7"];

  const [value, setValue] = useState('');

  const handleChange = (event) => {
    console.log(event.target.value);
    // setValue(event.target.value);
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
    </div>
  );
}
