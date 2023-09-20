import React from 'react'
import Weather from '../components/Weather'

const LocationWeather = ({coordinates}) => {
  return (
    <Weather coordinates={coordinates}/>
  )
}

export default LocationWeather