import React, { useState, useEffect } from 'react';

export default function Data() {

  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('/data')
    .then(response => {
      if(response.ok) {
        return response.json()
      }
    })
    .then((jsonResponse) => {
      console.log(jsonResponse)
      setData(jsonResponse[0])
    })
    .catch(error => {console.log(error.message)})

  }, [data.id])


  return (
    <div>
      <p>Data</p>
      <p>{data.id}</p>
    </div>
  )
}
