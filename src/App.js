import logo from './logo.svg';
import './App.css';
import LocationSearch from './pages/LocationSearch'
import LocationWeather from './pages/LocationWeather'
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LocationSearch />} />
        <Route path="/Location/Weather/Data" element={<LocationWeather/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
