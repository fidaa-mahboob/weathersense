import React from 'react'
import LocationWeatherSearch from '../components/LocationWeatherSearch'

const LocationSearch = ({setLocationName, setPostCode, locationName}) => {
  return (
    <LocationWeatherSearch setLocationName={setLocationName} setPostCode={setPostCode} locationName={locationName}/>
  )
}

export default LocationSearch