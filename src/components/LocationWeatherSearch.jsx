import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'

const LocationWeatherSearch = ({fetchCoordinates, setInput, input}) => {
  
  
  let searchButton

  // const validPostCodeFormatAndExists = (postCode) => {
  //   if(/^[A-Za-z]{1,2}[0-9]{1,2}[A-Za-z]?[0-9][A-Za-z]{2}$/.test(postCode)){
  //     fetch("https://api.postcodes.io/postcodes/" + postCode + "/validate")
  //     .then(data => data.json())
  //     .then(json => setPostCodeExists(json.result))
  //     console.log("test1")
  //     return postCodeExists
  //   }else{
  //     return false
  //   }
  // }

  // const handleClick = () => {
  //   if(validPostCodeFormatAndExists(input)){
  //     setPostCode(input)
  //     console.log("using postcode")    
  //     } else {
  //     setLocationName(input)
  //     console.log("using location name")
  //   }
  // }

  // const handleCurrentLocationButtonClick = () => {
  //   console.log("current location button clicked")
  //   console.log(validPostCodeFormatAndExists("wf133ag"))
  // }


  if(input === ''){
    searchButton = <button type="submit" disabled>Search</button>
  } else {
    searchButton = <button type="submit">Search</button>
  }

  return(
    <>
     <div>LocationWeatherSearch</div>
     {/* <div>location: {CityName}</div> */}
     <section className='search-wrapper'>
       <div>WeatherSense Logo</div>
       <form onSubmit={fetchCoordinates}>
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