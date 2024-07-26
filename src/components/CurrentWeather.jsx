import React from 'react'
import TimeAndLocation from './TimeAndLocation'
import {
  UilArrowUp,
  UilArrowDown,
  UilTemperature,
  UilTear,
  UilWind,
 
} from "@iconscout/react-unicons"
import home from '../assets/home button.png'


const CurrentWeather = ({ currentWeatherData, setDataLoaded }) => {

  const reset = () => {
    setDataLoaded(false);
  }

  return (
    <>
    <div className="flex flex-col items-center">
      <a onClick={() => {reset()}} className='cursor-pointer'><img src={home} width={50}/></a>
      <TimeAndLocation data={currentWeatherData} />
    </div>
      <div className="flex items-center justify-center py-6 text-2xl text-cyan-300">
        <p>{currentWeatherData.weather[0].main}</p>
      </div>

      <div className="flex flex-row items-center justify-between text-white py-3">
          <img src={`https://openweathermap.org/img/wn/${currentWeatherData.weather[0].icon}@2x.png`} alt="weather icon" className='w-20' />
        <p className='text-5xl'>{Math.floor(currentWeatherData.main.temp)} °C</p>
        <div className="flex flex-col space-y-2">
          <div className='flex font-light text-sm items-center justify-center'>
            <UilTemperature size={18} className="mr-1" />
            Feels Like:
            <span className="font-medium ml-1"> {Math.floor(currentWeatherData.main.feels_like)} °C</span>
          </div>
          <div className='flex font-light text-sm items-center justify-center'>
            <UilTear size={18} className="mr-1" />
            Humidity:
            <span className="font-medium ml-1"> {Math.floor(currentWeatherData.main.humidity)} %</span>
          </div>
          <div className='flex font-light text-sm items-center justify-center'>
            <UilWind size={18} className="mr-1" />
            Wind Speed:
            <span className="font-medium ml-1"> {Math.floor(currentWeatherData.wind.speed)} m/s</span>
          </div>
        </div>
      </div>
      <div className="flex flex-row items-center justify-center space-x-2 text-white text-sm py-3">
        {/* <UilSun/>
        <p className="font-light">
          Rise:<span className="font-medium ml-1">06:55 AM</span>
        </p>
        <p className='font-light'>|</p>
        <UilSunset/>
        <p className="font-light">
          Sunset:<span className="font-medium ml-1">06:55 AM</span>
        </p>
        <p className='font-light'>|</p> */}
        <UilArrowUp/>
        <p className="font-light">
          High:<span className="font-medium ml-1">{Math.floor(currentWeatherData.main.temp_max)} °C</span>
        </p>
        <p className='font-light'>|</p>
        <UilArrowDown/>
        <p className="font-light">
          Low:<span className="font-medium ml-1">{Math.floor(currentWeatherData.main.temp_min)} °C</span>
        </p>
        <p className='font-light'>|</p>
        
      </div>
    </>
  )
}

export default CurrentWeather