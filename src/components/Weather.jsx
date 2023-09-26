import React from 'react'
import CurrentWeather from './CurrentWeather'
import DailyWeather from './DailyWeather'
import LocationWeatherSummary from './LocationWeatherSummary'
import useWeatherData from '../hook/useWeatherData'

const Weather = ({coordinates}) => {
  const{} = useWeatherData()
  
  let lon = coordinates[0]
  let lat = coordinates[1]



  return (
    <>
    <div>Weather data: {lon} : {lat}</div>
    <LocationWeatherSummary/>
    <CurrentWeather/>
    <DailyWeather/>
    </>
  )
}

export default Weather