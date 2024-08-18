import React from 'react'
import { TimeAndLocation } from 'src/components/TimeAndLocation'
import * as iconscout from '@iconscout/react-unicons'
import home from 'src/assets/home button.png'

interface Weather {
  main: String
  icon: String
}

interface CurrentWeatherData {
  weather: Weather[]
  main: {
    temp: number
    feels_like: number
    humidity: number
    temp_max: number
    temp_min: number
  }
  wind: {
    speed: number
  }
}

interface Props {
  setDataLoaded: (dataloaded: boolean) => void
  currentWeatherData: CurrentWeatherData
}

const CurrentWeather = ({ currentWeatherData, setDataLoaded }: Props) => {

  const reset = () => {
    setDataLoaded(false);
  }

  return (
    <section>
      <div className="flex flex-col items-center">
        <a onClick={() => { reset() }} className='cursor-pointer'><img src={home} width={50} /></a>
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
            <iconscout.UilTemperature size={18} className="mr-1" />
            Feels Like:
            <span className="font-medium ml-1"> {Math.floor(currentWeatherData.main.feels_like)} °C</span>
          </div>
          <div className='flex font-light text-sm items-center justify-center'>
            <iconscout.UilTear size={18} className="mr-1" />
            Humidity:
            <span className="font-medium ml-1"> {Math.floor(currentWeatherData.main.humidity)} %</span>
          </div>
          <div className='flex font-light text-sm items-center justify-center'>
            <iconscout.UilWind size={18} className="mr-1" />
            Wind Speed:
            <span className="font-medium ml-1"> {Math.floor(currentWeatherData.wind.speed)} m/s</span>
          </div>
        </div>
      </div>
      <div className="flex flex-row items-center justify-center space-x-2 text-white text-sm py-3">
        <iconscout.UilArrowUp />
        <p className="font-light">
          High:<span className="font-medium ml-1">{Math.floor(currentWeatherData.main.temp_max)} °C</span>
        </p>
        <p className='font-light'>|</p>
        <iconscout.UilArrowDown />
        <p className="font-light">
          Low:<span className="font-medium ml-1">{Math.floor(currentWeatherData.main.temp_min)} °C</span>
        </p>
        <p className='font-light'>|</p>
      </div>
    </section>
  )
}

export default CurrentWeather