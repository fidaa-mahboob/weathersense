import React, {useState} from 'react'

const LocationWeatherSearch = ({setLocationName, setPostCode, locationName}) => {
  
  const [input, setInput] = useState('')
  const [postCodeExists, setPostCodeExists] = useState(null)
  
  let searchButton

  const validPostCodeFormatAndExists = (postCode) => {
    if(/^[A-Za-z]{1,2}[0-9]{1,2}[A-Za-z]?[0-9][A-Za-z]{2}$/.test(postCode)){
      fetch("https://api.postcodes.io/postcodes/" + postCode + "/validate")
      .then(data => data.json())
      .then(json => setPostCodeExists(json.result))
      console.log("test1")
      return postCodeExists
    }else{
      return false
    }
  }

  const handleClick = () => {
    if(validPostCodeFormatAndExists(input)){
      setPostCode(input)
      console.log("using postcode")    
    } else {
      setLocationName(input)
      console.log("using location name")
    }
  }

  const handleCurrentLocationButtonClick = () => {
    console.log("current location button clicked")
    console.log(validPostCodeFormatAndExists("wf133ag"))
  }

  if(input === ''){
    searchButton = <button type="button" disabled>Search</button>
  } else {
    searchButton = <button type="button">Search</button>
  }

  return(
    <>
     <div>LocationWeatherSearch</div>
     <div>location: {locationName}</div>
     <section className='search-wrapper'>
       <div>WeatherSense Logo</div>
       <form onClick={handleClick}>
        <div>
          <input placeholder="Enter location or postcode" type="text" value={input} onChange={(e) => setInput(e.target.value)}/>
        </div>
        <div className="button">
          {searchButton}
          <button type="button" onClick={handleCurrentLocationButtonClick}>Current Location</button>
        </div>
       </form>
     </section>
    </>
  )
}

export default LocationWeatherSearch