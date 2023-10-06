import React, { useState } from 'react'

const useWeatherData = (data) => {
    const [icon, setIcon] = useState('')
    const [currentTemperature, setCurrentTemperature] = useState()
    const [currentAirPressure, setCurrentAirPressure] = useState()
    const [currentHumidity, setCurrentHumidity] = useState()
    const [currentWindSpeed, setCurrentWindSpeed] = useState()

    const [weatherHour, setWeatherHour] = useState([])
    const [weatherDaily, setWeatherDaily] = useState([])
    const [weatherCurrent, setWeatherCurrent] = useState([])

    const getCurrentWeatherIcon = () => {
        
        
    }

    const getCurrentTemperature = () => {
        setCurrentTemperature(data.main.temp)
    }

    const getCurrentAirPressure = () => {

    }

    const getCurrentHumidity = () => {

    }

    const getCurrentWindSpeed = () => {

    }

    const getCurrentCloudinessPercent = () => {

    }

    const getCurrentUltraVioletIndex = () => {

    }

    const getCurrentDateAndTime = () => {

    }

    const getAllCurrentWeatherData = () => {
        
    }
 

    return {icon, weatherHour, weatherDaily, weatherCurrent}
}

export default useWeatherData