import React from 'react'
import Inputs from './Inputs'
import UilReact from '@iconscout/react-unicons/icons/uil-react'

const LocationWeatherSearch = ({ fetchCoordinates, setInput, input }) => {

  let searchButton

  if (input === '') {
    searchButton = <button type="submit" disabled>Search</button>
  } else {
    searchButton = <button type="submit">Search</button>
  }

  return (
    <div className="mx-auto max-w-screen-md mt-4 py-5 px-32 bg-gradient-to-br from-cyan-700 to-blue-700 h-fit shadow-xl shadow-gray-400">
      <Inputs />
      <form onSubmit={fetchCoordinates}>
        <div>
          <input placeholder="Enter location or postcode" type="text" onChange={(e) => setInput(e.target.value)} />
        </div>
        <div className="button"> 
          {searchButton}
          <button type="button">Current Location</button>
        </div>
      </form>
    </div>
  )
}

export default LocationWeatherSearch