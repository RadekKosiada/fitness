import React, { useState } from 'react'

export default function FilterDate({callback}) {

  const [value, setValue] = useState(false);

  const handleClick = (event) => {
    console.log(event.target.name + ' was clicked');
    setValue(value => !value)
    callback(value => !value);
  }
  return (
    <button 
    onClick={handleClick} 
    name='startDate'
    
    >{value? 'Start date' : 'End date'}</button>
  )
}
