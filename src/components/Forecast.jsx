import React from 'react'

const Forecast = ({ forecastWeatherData }) => {

  return (
    <div>
      <div className="flex items-center justify-start-my-6">
        <p className="text-white font-medium uppercase">forecast </p>
      </div>
      <hr className="my-2" />

      <div className="flex flex-row items-center justify-between text-white">

        {forecastWeatherData.list.splice(0, 6).map((item, idx) => (
          <div key={item.dt_txt} className="flex flex-col items-center justify-center">
            <p className="font-light text-sm">
              {item.dt_txt.slice(10,16)}
            </p>
            <img src={`https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`} alt="weather icon" className='w-20' />
            <p className="font-medium">{Math.floor(item.main.temp)}°C</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Forecast