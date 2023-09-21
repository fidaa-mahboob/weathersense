import React, { useEffect, useState } from 'react'

const LocationWeatherSearch = ({setLocationName, setPostCode, locationName}) => {
  
  const [input, setInput] = useState('')

  const handleInput = (value) => {
    setInput(value)
  }
  
  let bool = true
  let arr = []

  const addLocationName = (name) =>{
    setLocationName(name)
  }


  useEffect(() => {
    addLocationName("Dewsbury")
  })

  if (bool) {
    return(
      <>
       <div>LocationWeatherSearch</div>
       <div>location: {locationName}</div>
       <button disabled>Search</button>
       <form>
         <label>Input Value:
	        <input  type="text"  value={input} onChange={handleInput} />
         </label>
       </form>
      </>
    )
  } else {
    return (
      <>
       <div>LocationWeatherSearch</div>
       <button disabled>Search</button>
      </>
    )
  }
}

export default LocationWeatherSearch