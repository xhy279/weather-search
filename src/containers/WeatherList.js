import React, { Component } from 'react';
import { connect } from "react-redux";
import WeatherChart from '../components/WeatherChart';
import GoogleMap from '../components/GoogleMap';
class WeatherList extends Component {

  renderWeather = (cityData, index) => {
    const cityName = cityData.city.name;
    const temps = cityData.list.map(weather => weather.main.temp);
    const pressure = cityData.list.map(weather => weather.main.pressure);
    const humidity = cityData.list.map(weather => weather.main.humidity);
    const { lon, lat } = cityData.city.coord;

    return (
      <tr key={cityName}>
        <td><GoogleMap lon={lon} lat={lat}/></td>
        <td>
          <WeatherChart color={"red"} data={temps} units="&#8451;"/>
        </td>
         <td>
          <WeatherChart color={"orange"} data={pressure} units="hPa"/>
         </td>
         <td>
          <WeatherChart color={"blue"} data={humidity} units="%"/>
         </td>
      </tr>
    );
  }

  render() {
    return (
      <div>
        <table className="table table-hover">
          <thead>
            <tr>
              <th>City Name</th>
              <th>Temperature (&#8451;)</th>
              <th>Pressure (hPa)</th>
              <th>Humidity (%)</th>
            </tr>
          </thead>
          <tbody>
            {this.props.weather.map(this.renderWeather)}
          </tbody>
        </table>
      </div>
    );
  }
}

function mapStateToProps({weather}) {
  return {
    weather
  }
}

export default connect(mapStateToProps)(WeatherList);