import React from 'react'

export default function FilterCategory() {

  const handleClick = (event) => {
    console.log(event.target.name + ' was clicked');
  }
  return (
    <button onClick={handleClick} name='category'>Category</button>
  )
}