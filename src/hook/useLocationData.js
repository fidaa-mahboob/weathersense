import React, { useState } from 'react'

const useLocationData = (locationData) => {
    const [coordinates, setCoordinates] = useState([])
    const [postCode, setPostCode] = useState('')
    const [LocationName, setLocationName] = useState('')

    return{coordinates, postCode}
}

export default useLocationData