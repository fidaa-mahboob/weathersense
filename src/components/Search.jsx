import React from 'react'
import { UilSearch, UilLocationPinAlt } from '@iconscout/react-unicons'
import WeatherSenseLogo from '../assets/images/WeatherSense.png'

const LocationWeatherSearch = ({ fetchWeatherData, setInput, input, currentLocationWeather}) => {

  let searchButton

  if (input === '') {
    searchButton = <button className="px-4 py-2 rounded bg-gray-300 transition-all duration-500 hover:shadow-md" type="submit" disabled>Search</button>
  } else {
    searchButton = <button className="px-4 py-2 rounded bg-gray-300 transition-all duration-500 hover:shadow-md" type="submit">Search</button>
  }

  return (
    <>
      <section>
        <form className="container px-4 mx-auto pt-24 mt-8 max-w-xl flex flex-col space-y-6" onSubmit={fetchWeatherData}>
          <img className="flex justify-center" src={WeatherSenseLogo} alt="weather sense logo" width="500" height="500"/>
          <div className="rounded py-2 px-4 flex border-2 border-gray-300">
            <div className="place-self-center text-gray-500 cursor-pointer">
              <UilSearch />
            </div>
            <div className='flex px-4 w-full'>
              <input className="w-full border-none outline-none text-base" placeholder="Enter Location or Post Code" type="text" onChange={(e) => setInput(e.target.value)} />
            </div>
            <div className="place-self-center text-gray-500 cursor-pointer">
              <UilLocationPinAlt />
            </div>
          </div>
          <div className="mx-auto flex space-x-2">
            {searchButton}
            <button className="px-4 py-2 rounded bg-gray-300 transition-all duration-500 hover:shadow-md" type="button" onClick={currentLocationWeather}>Current Location</button>
          </div>
        </form>
      </section>

      <footer className="bg-white rounded-lg shadow m-4 dark:bg-gray-800">
        <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-end md:justify-center">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 WeatherSense. All Rights Reserved.
          </span>
        </div>
      </footer>

    </>
  )
}

export default LocationWeatherSearch