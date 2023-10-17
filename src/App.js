import './App.css';
import { useState } from 'react';
import Axios from 'axios';
import Search from './components/Search';
import Weather from './components/Weather';
import SearchError from './components/SearchError';

function App() {
  const [currentWeatherData, setCurrentWeatherData] = useState(null)
  const [forecastWeatherData, setForecastWeatherData] = useState(null) 
  const [input, setInput] = useState('')
  const [error, setError] = useState(null)
  const API_KEY = process.env.REACT_APP_API_KEY
  
  const fetchCoordinates = async (e) => {
    try{
      e.preventDefault()
      let response
      let lat
      let lon
      
      // line 34 tests input for valid GB Post Code format
      if(/^[A-Za-z]{1,2}[0-9]{1,2}[A-Za-z]?[0-9][A-Za-z]{2}$/.test(input)){
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

      const responseCurrentWeatherData = await Axios.get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=9febc35812425cf718ad7e6c9ba49d6f&units=metric`
      )

      const responseForcastWeatherData = await Axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=9febc35812425cf718ad7e6c9ba49d6f&units=metric`
      )

      setCurrentWeatherData({...responseCurrentWeatherData.data})
      setForecastWeatherData({...responseForcastWeatherData.data})

    } catch (err){
      console.log(err)
    } 
  }

  return (
    <div >
      {
        currentWeatherData && forecastWeatherData? 
        <Weather currentWeatherData={currentWeatherData} forecastWeatherData={forecastWeatherData}/> : 
        <Search fetchCoordinates={fetchCoordinates} setInput={setInput} input={input}/>
      }
    </div>
  )
}

export default App;
