import React, { useState } from 'react'

const useWeatherData = (data) => {
    const [icon, setIcon] = useState('')
    const [weatherHour, setWeatherHour] = useState([])
    const [weatherDaily, setWeatherDaily] = useState([])
    const [weatherCurrent, setWeatherCurrent] = useState([])

    const getTemperature = () => {
    
    }

    const getAirPressure = () => {

    }

    const getHumidity = () => {

    }

    const getWindSpeed = () => {

    }

    const getCloudinessPercent = () => {

    }

    const getUltraVioletIndex = () => {

    }

    const getDateAndTime = () => {

    }
 

    return {icon, weatherHour, weatherDaily, weatherCurrent}
}

export default useWeatherData