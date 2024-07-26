import React from 'react'
import CurrentWeather from './CurrentWeather.jsx'
import Forecast from './Forecast.jsx'

const Weather = ({ currentWeatherData, forecastWeatherData }) => {
  return (
    <div className="mx-auto max-w-screen-md mt-4 py-5 px-32 bg-gradient-to-br from-cyan-700 to-blue-700 h-fit shadow-xl shadow-gray-400">
      <CurrentWeather currentWeatherData={currentWeatherData} />
      <Forecast forecastWeatherData={forecastWeatherData} />
    </div>
  )
}

export default Weather