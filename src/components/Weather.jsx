import React from 'react'
import CurrentWeather from './CurrentWeather'
import Forecast from './Forecast.jsx'

const Weather = ({currentWeatherData, forecastWeatherData}) => {
  return (
    <>
    <CurrentWeather currentWeatherData={currentWeatherData}/>
    <Forecast forecastWeatherData={forecastWeatherData}/>
    </>
  )
}

export default Weather