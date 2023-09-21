import logo from './logo.svg';
import './App.css';
import LocationSearch from './pages/LocationSearch'
import LocationWeather from './pages/LocationWeather'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import useLocationData from './hook/useLocationData';
import { useEffect } from 'react';

function App() {
  const {locationName, coordinates, postCode, setCoordinates, setLocationName, setPostCode} = useLocationData(null)

  // useEffect(() => {
  //   if(locationName !== ''){
  //     fetch("http://api.openweathermap.org/geo/1.0/direct?q="+ {locationName} + "&limit=5&appid={API key}")
  //     .then((data) => data.json)
  //     .then((json) => setCoordinates([json.lat, json.lon]))
  //     .catch((e) => console.log(e))
  //     setLocationName('')
  //   } else if (postCode !== ''){
  //     fetch("http://api.openweathermap.org/geo/1.0/zip?zip=" + {postCode} + "&appid={API key}")
  //     .then((data) => data.json)
  //     .then((json) => setCoordinates([json.lat, json.lon]))
  //     .catch((e) => console.log(e))
  //     setPostCode('')
  //   }
  //   }, [setLocationName, setPostCode])

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LocationSearch setLocationName={setLocationName} setPostCode={setPostCode} locationName={locationName}/>} />
        <Route path="/Location/Weather/Data" element={<LocationWeather coordinates={coordinates}/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
