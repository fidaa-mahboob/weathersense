import React from 'react'
import CurrentWeather from './CurrentWeather'
import DailyWeather from './DailyWeather'
import LocationWeatherSummary from './LocationWeatherSummary'
import useWeatherData from '../hook/useWeatherData'

const Weather = ({weather}) => {
  const{} = useWeatherData(weather)
  



  return (
    <>
    <LocationWeatherSummary/>
    <CurrentWeather/>
    <DailyWeather/>
    </>
  )
}

export default Weather