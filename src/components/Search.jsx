import React from 'react'
import Inputs from './Inputs'
import { UilSearch, UilLocationPinAlt  } from '@iconscout/react-unicons'
import WeatherSenseLogo from '../assets/images/WeatherSense.png'

const LocationWeatherSearch = ({ fetchCoordinates, setInput, input }) => {

  let searchButton

  if (input === '') {
    searchButton = <button className="px-4 py-2 rounded bg-gray-300 transition-all duration-500 hover:shadow-md" type="submit" disabled>Search</button>
  } else {
    searchButton = <button className="px-4 py-2 rounded bg-gray-300 transition-all duration-500 hover:shadow-md"  type="submit">Search</button>
  }

  return (
    <div className='container px-4 mx-auto pt-24 mt-8 max-w-xl flex flex-col space-y-2'>
      <form className="container px-4 mx-auto pt-24 mt-8 max-w-xl flex flex-col space-y-6" onSubmit={fetchCoordinates}>
        <img src={WeatherSenseLogo}/>
        <div className="rounded py-2 px-4 flex border-2 border-gray-300">
          <div className="place-self-center text-gray-500 cursor-pointer">
            <UilSearch/>
          </div>
          <div className='flex px-4 w-full'>
            <input className="w-full border-none outline-none text-base" placeholder="Enter Location or Post Code" type="text" onChange={(e) => setInput(e.target.value)} />
          </div>
          <div className="place-self-center text-gray-500 cursor-pointer">
            <UilLocationPinAlt/>
          </div>
        </div>
        <div className="mx-auto flex space-x-2">
          {searchButton}
          <button className="px-4 py-2 rounded bg-gray-300 transition-all duration-500 hover:shadow-md" type="button">Current Location</button>
        </div>
      </form>
    </div>
  )
}

export default LocationWeatherSearch