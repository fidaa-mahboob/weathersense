import React from 'react'
import * as iconscout from '@iconscout/react-unicons'
import WeatherSenseLogo from '../assets/images/WeatherSense.png'

interface Props {
  fetchWeatherData: (fetchData: { preventDefault: () => void; }) => void
  setInput: (e: string) => void
  input: string
  currentLocationWeather: () => void
}

const LocationWeatherSearch = ({ fetchWeatherData, setInput, input, currentLocationWeather }: Props) => {

  let searchButton

  if (input === '') {
    searchButton = <button className="px-4 py-2 rounded bg-gray-300 transition-all duration-500 hover:shadow-xl" type="submit" disabled>Search</button>
  } else {
    searchButton = <button className="px-4 py-2 rounded bg-gray-300 transition-all duration-500 hover:shadow-xl" type="submit">Search</button>
  }

  return (
    <section>
      <form className="container px-4 mx-auto pt-24 max-w-xl flex flex-col items-center justify-center space-y-6 " onSubmit={fetchWeatherData}>
        <img src={WeatherSenseLogo} alt="weather sense logo" width="300" height="300" />
        <div className="container rounded-xl py-2 px-4 flex border-2 border-gray-300 hover:outline-grey-600">
          <div className="place-self-center text-gray-500 cursor-pointer">
            <iconscout.UilSearch />
          </div>
          <div className='flex px-4 w-full'>
            <input className="w-full border-none outline-none text-base" placeholder='Enter postcode or City/Town' type="text" onChange={(e) => setInput(e.target.value)} />
          </div>
          <div className="place-self-center text-gray-500 cursor-pointer">
            <a onClick={currentLocationWeather}><iconscout.UilLocationPinAlt /></a>
          </div>
        </div>
        <div>
          {searchButton}
        </div>
      </form>
    </section>
  )
}

export default LocationWeatherSearch