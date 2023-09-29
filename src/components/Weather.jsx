import React from 'react'
import CurrentWeather from './CurrentWeather'
import DailyWeather from './DailyWeather'
import LocationWeatherSummary from './LocationWeatherSummary'
import useWeatherData from '../hook/useWeatherData'

const Weather = ({currentWeatherData, forecastWeatherData}) => {
  const{getTemperature} = useWeatherData(currentWeatherData)
  const{} = useWeatherData(forecastWeatherData)
  
  console.log("printed json? ==> \n" + currentWeatherData)


  return (
    <>
    <LocationWeatherSummary/>
    <CurrentWeather currentWeatherData={currentWeatherData}/>
    <DailyWeather forecastWeatherData={forecastWeatherData}/>
    </>
  )
}

export default Weather