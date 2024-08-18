import React from 'react'
import CurrentWeather from './CurrentWeather'
import Forecast from './Forecast'

interface Props {
  setDataLoaded: () => void
  currentWeatherData: any
  forecastWeatherData: any
}

const Weather = ({ currentWeatherData, forecastWeatherData, setDataLoaded }: Props) => {
  return (
    <div className="mx-auto max-w-screen-md mt-4 py-5 px-32 bg-gradient-to-br from-cyan-700 to-blue-700 h-fit shadow-xl shadow-gray-400">
      <CurrentWeather currentWeatherData={currentWeatherData} setDataLoaded={setDataLoaded} />
      <Forecast forecastWeatherData={forecastWeatherData} />
    </div>
  )
}

export default Weather