import React, { useState } from 'react'

//Deprecate and remove"

const useLocationData = (locationData) => {
    const [coordinates, setCoordinates] = useState([10.0, 2.0])
    const [postCode, setPostCode] = useState('')
    const [locationName, setLocationName] = useState('')

   
    return{coordinates, postCode, locationName, setCoordinates, setPostCode, setLocationName}
}

export default useLocationData