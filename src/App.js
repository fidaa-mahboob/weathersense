import './App.css';
import { useEffect, useState } from 'react';
import Axios from 'axios';
import LocationWeatherSearch from './components/LocationWeatherSearch';
import Weather from './components/Weather';
import SearchError from './components/SearchError';

// "coord":{}, "weather":[], "base":"", "main":{}, "visibility":0, "wind":{}, "clouds":{}, "dt":0, "timezone":0, "id":0, "name":"", "cod":0

function App() {
  const [currentWeatherData, setCurrentWeatherData] = useState()
  const [forecastWeatherData, setForecastWeatherData] = useState() 
  const [latitude, setLatitude] = useState(0)
  const [longitude, setLongitude] = useState(0)
  const [input, setInput] = useState('')
  const [error, setError] = useState(null)
  const API_KEY = process.env.REACT_APP_API_KEY
  
  const fetchCoordinates = async (e) => {
    try{
      let response
      let lat
      let lon
      e.preventDefault()
      // line 34 tests input for valid GB Post Code format
      if(/^[A-Za-z]{1,2}[0-9]{1,2}[A-Za-z]?[0-9][A-Za-z]{2}$/.test(input) || /^[A-Za-z]{1,2}[0-9]{1,2}[A-Za-z]?[0-9][A-Za-z]{2}$/.test(input)){
        response = await Axios.get(
          `http://api.openweathermap.org/geo/1.0/zip?zip=${input},GB&appid=9febc35812425cf718ad7e6c9ba49d6f`
        )
        lat = response.data.lat
        lon = response.data.lon
      } else {
        response = await Axios.get(
          `http://api.openweathermap.org/geo/1.0/direct?q=${input}&limit=5&appid=9febc35812425cf718ad7e6c9ba49d6f`
        )
        lat = response.data[0].lat
        lon = response.data[0].lon
      }

      
      setLatitude(lat)
      setLongitude(lon)

    } catch (err){
      if (err) setError('Invalid Postcode or Location Name')
    } 
  }

  const fetchWeatherData = async () => {
    try{
      let responseCurrentWeatherData
      let responseForcastWeatherData
      
      if(latitude && longitude){
        responseCurrentWeatherData = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=9febc35812425cf718ad7e6c9ba49d6f&units=metric`
        )

        let jsonData1 = await responseCurrentWeatherData.json()

        setCurrentWeatherData(jsonData1)

        

        console.log(typeof jsonData1)

      
        responseForcastWeatherData = await Axios.get(
          `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=9febc35812425cf718ad7e6c9ba49d6f&units=metric`
        )

        let obj2 = await responseForcastWeatherData.data

        setForecastWeatherData(obj2)
      }
      

      
    } catch (err) {
      if (err) {
        setError('404')
      }
    }
  }

  useEffect(() => {
    console.log('refresh .........')
    fetchWeatherData()
  }, [longitude, latitude])

  return (
    <>
      {
        currentWeatherData && forecastWeatherData? 
        <Weather currentWeatherDataweather={currentWeatherData} forecastWeatherData={forecastWeatherData} /> : <LocationWeatherSearch fetchCoordinates={fetchCoordinates} setInput={setInput} input={input}/>
      }
      {latitude} : {longitude}
    </>
  )
}

export default App;
