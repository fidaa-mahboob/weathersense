import React from 'react'
import useWeatherData from '../hook/useWeatherData'

const DailyWeather = ({forecastWeatherData}) => {
  const{} = useWeatherData(forecastWeatherData)

  return (
    <div>DailyWeather</div>
  )
}

export default DailyWeather