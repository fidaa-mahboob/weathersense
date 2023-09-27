import React from 'react'
import CurrentWeather from './CurrentWeather'
import DailyWeather from './DailyWeather'
import LocationWeatherSummary from './LocationWeatherSummary'
import useWeatherData from '../hook/useWeatherData'

const Weather = ({currentWeatherData, forecastWeatherData}) => {
  const{} = useWeatherData(currentWeatherData)
  const{} = useWeatherData(forecastWeatherData)
  



  return (
    <>
    <LocationWeatherSummary/>
    <CurrentWeather currentWeatherData={currentWeatherData}/>
    <DailyWeather forecastWeatherData={forecastWeatherData}/>
    </>
  )
}

export default Weather