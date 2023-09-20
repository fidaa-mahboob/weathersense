import React from 'react'
import LocationWeatherSearch from '../components/LocationWeatherSearch'

const LocationSearch = ({setLocationName, setPostCode}) => {
  return (
    <LocationWeatherSearch setLocationName={setLocationName} setPostCode={setPostCode}/>
  )
}

export default LocationSearch