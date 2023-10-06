import React from 'react'
import useWeatherData from '../hook/useWeatherData'

const CurrentWeather = ({currentWeatherData}) => {

  console.log("CurrentweatherData ===> " + currentWeatherData.main.temp)



  return (
  <>
    <img src={`https://openweathermap.org/img/wn/${currentWeatherData.weather[0].icon}@2x.png.png`} alt="weather icon"/>
    <p>{currentWeatherData.weather[0].main}</p>
    <div>CurrentWeather</div>
    <div className="mdc-data-table">
    <div className="mdc-data-table__table-container">
      <table className="mdc-data-table__table" aria-label="Dessert calories">
        <thead>
          <tr className="mdc-data-table__header-row">
            <th className="mdc-data-table__header-cell" role="columnheader" scope="col">Current Temperature</th>
            <th className="mdc-data-table__header-cell mdc-data-table__header-cell--numeric" role="columnheader" scope="col">Current Wind Speed</th>
            <th className="mdc-data-table__header-cell mdc-data-table__header-cell--numeric" role="columnheader" scope="col">Current Humidity</th>
            <th className="mdc-data-table__header-cell" role="columnheader" scope="col">Pressure</th>
            <th>Cloudiness</th>
            <th>UVi</th>
          </tr>
        </thead>
        <tbody className="mdc-data-table__content">
          <tr className="mdc-data-table__row">
          <td className="mdc-data-table__cell">{currentWeatherData.main.temp} C</td>
          <td className="mdc-data-table__cell mdc-data-table__cell--numeric">{currentWeatherData.wind.speed} m/s</td>
          <td className="mdc-data-table__cell mdc-data-table__cell--numeric">{currentWeatherData.main.humidity} %</td>
          <td className="mdc-data-table__cell">{currentWeatherData.main.pressure} Pa</td>
          <td>{currentWeatherData.clouds.all} %</td>
          <td>1.2</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>
</>
  )
}

export default CurrentWeather