import './App.css';
import { useState } from 'react';
import Axios from 'axios';
import Search from './components/Search';
import Weather from './components/Weather';
import SearchError from './components/SearchError';
import { async } from 'q';

function App() {
  const [currentWeatherData, setCurrentWeatherData] = useState(null)
  const [forecastWeatherData, setForecastWeatherData] = useState(null)
  const [dataLoaded, setDataLoaded] = useState(false)
  const [input, setInput] = useState('')
  const [error, setError] = useState(null)
  const API_KEY = process.env.REACT_APP_API_KEY
  let lat
  let lon

  

  const getCurrentLocationWeather = () => {
    if(navigator.geolocation){  
      navigator.geolocation.getCurrentPosition((pos)=>{console.log(pos.coords.latitude + ' ' + pos.coords.longitude)})
    } else (
      console.log('else')
    )
  }

  const fetchWeatherData = async (e) => {
    e.preventDefault()
    try {
      let response
    
      // line 34 tests input for valid GB Post Code format
      if (/^[A-Za-z]{1,2}[0-9]{1,2}[A-Za-z]?[0-9][A-Za-z]{2}$/.test(input) || /^[A-Za-z]{1,2}[0-9]{1,2}[A-Za-z]?\s[0-9][A-Za-z]{2}$/.test(input)) {
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

      await Axios.get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=9febc35812425cf718ad7e6c9ba49d6f&units=metric`
      ).then((res) => { setCurrentWeatherData({ ...res.data }) })

      await Axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=9febc35812425cf718ad7e6c9ba49d6f&units=metric`
      ).then((res) => {
        setForecastWeatherData({ ...res.data })
      }).then(() => {setDataLoaded(true)})
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div >
      {
        dataLoaded ?
          <Weather currentWeatherData={currentWeatherData} forecastWeatherData={forecastWeatherData} /> :
          <Search fetchWeatherData={fetchWeatherData} setInput={setInput} input={input} currentLocationWeather={getCurrentLocationWeather}/>
      }
    </div>
  )
}

export default App;
