import React from 'react'

export default function Filter(props) {
  console.log(props);

  const handleClick = () => {
    console.log(
    )
  }
  return (
    <button name={props.filter}>{props.filter}</button>
  )
}
