import React from 'react'

const Forecast = ({forecastWeatherData}) => {

  console.log("test 1 ==> " +  forecastWeatherData.list)

  return (
    <>
      {forecastWeatherData.list.splice(0, 7).map((item, idx) => (
        <p key={idx}>{item.main.temp}</p>
      ))}
    </>
  )
}

export default Forecast