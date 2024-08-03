import { render, screen } from '@testing-library/react';
import Weather from './components/Weather';
import forecastData from './test-data/data'


const currentWeatherdata = {
  "coord": {
      "lon": -1.6302,
      "lat": 53.6909
  },
  "weather": [
      {
          "id": 800,
          "main": "Clear",
          "description": "clear sky",
          "icon": "01n"
      }
  ],
  "base": "stations",
  "main": {
      "temp": 14.39,
      "feels_like": 13.87,
      "temp_min": 13.8,
      "temp_max": 14.9,
      "pressure": 1011,
      "humidity": 76,
      "sea_level": 1011,
      "grnd_level": 994
  },
  "visibility": 10000,
  "wind": {
      "speed": 1.54,
      "deg": 280
  },
  "clouds": {
      "all": 0
  },
  "dt": 1722032328,
  "sys": {
      "type": 2,
      "id": 2072872,
      "country": "GB",
      "sunrise": 1721967118,
      "sunset": 1722024830
  },
  "timezone": 3600,
  "id": 2651286,
  "name": "Dewsbury",
  "cod": 200
};

const forecastWeatherdata = {...forecastData};


test('Current weather component renders and displays location name called Dewsbury', () => {
  render(<Weather currentWeatherData={currentWeatherdata} forecastWeatherData={forecastWeatherdata}/>);
  const locationText = screen.getByText(/Dewsbury, GB/);
  expect(locationText).toBeInTheDocument;
});

test("The forecast weather successfully renders and displays a time 03:00", () => {
  render(<Weather currentWeatherData={currentWeatherdata} forecastWeatherData={forecastWeatherdata}/>);
  const forecastTimeText = screen.getByText(/03:00/);
  expect(forecastTimeText).toBeInTheDocument;
});



