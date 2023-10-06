import React from 'react'

const LocationWeatherSearch = ({fetchCoordinates, setInput, input}) => {
  
  let searchButton

  if(input === ''){
    searchButton = <button type="submit" disabled>Search</button>
  } else {
    searchButton = <button type="submit">Search</button>
  }

  return(
    <>
     <div>LocationWeatherSearch</div>
     <section className='search-wrapper'>
       <div>WeatherSense Logo</div>
       <form onSubmit={fetchCoordinates}>
        <img className='logo' src='assets/searching-magnifying-glass.png' alt='logo'/>
        <div>
          <input placeholder="Enter location or postcode" type="text" onChange={(e) => setInput(e.target.value)}/>
        </div>
        <div className="button">
          {searchButton}
          <button type="button">Current Location</button>
        </div>
       </form>
     </section>
    </>
  )
}

export default LocationWeatherSearch