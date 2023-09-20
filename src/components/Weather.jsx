import React from 'react'

const Weather = ({coordinates}) => {
  let lon = coordinates[0]
  let lat = coordinates[1]

  return (
    <div>Weather data: {lon} : {lat}</div>
  )
}

export default Weather