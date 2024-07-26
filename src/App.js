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
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(async (pos) => {
        lat = pos.coords.latitude
        lon = pos.coords.longitude

        await Axios.get(
          `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=9febc35812425cf718ad7e6c9ba49d6f&units=metric`
        ).then((res) => { setCurrentWeatherData({ ...res.data }) })

        await Axios.get(
          `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=9febc35812425cf718ad7e6c9ba49d6f&units=metric`
        ).then((res) => {
          setForecastWeatherData({ ...res.data })
        }).then(() => { setDataLoaded(true) })
      })
    }
  }

  const fetchWeatherData = async (e) => {
    e.preventDefault()
    try {
      let response

      // line 34 tests input for valid GB Post Code format
      if (/^[A-Za-z]{1,2}[0-9]{1,2}[A-Za-z]?[0-9][A-Za-z]{2}$/.test(input) || /^[A-Za-z]{1,2}[0-9]{1,2}[A-Za-z]?\s[0-9][A-Za-z]{2}$/.test(input)) {
        response = await Axios.get(
          `https://api.openweathermap.org/geo/1.0/zip?zip=${input},GB&appid=9febc35812425cf718ad7e6c9ba49d6f`
        )
        lat = response.data.lat
        lon = response.data.lon
      } else {
        response = await Axios.get(
          `https://api.openweathermap.org/geo/1.0/direct?q=${input}&limit=5&appid=9febc35812425cf718ad7e6c9ba49d6f`
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
      }).then(() => { setDataLoaded(true) })
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div className="relative flex flex-col h-screen">
      <main className='container mx-auto max-w-7xl pt-1 px-1 flex-grow'>
        {
          dataLoaded ?
            <Weather currentWeatherData={currentWeatherData} forecastWeatherData={forecastWeatherData} /> :
            <Search fetchWeatherData={fetchWeatherData} setInput={setInput} input={input} currentLocationWeather={getCurrentLocationWeather} />
        }
      </main>
      <footer className="w-full flex items-center justify-center py-3">
        <div className="md:flex md:items-end md:justify-center">
          <span className=" text-black-500 sm:text-center font-bold dark:text-gray-400">© 2023 WeatherSense. All Rights Reserved. | Powered by AWS
          </span>
        </div>
      </footer>
    </div>
  )
}

export default App;
