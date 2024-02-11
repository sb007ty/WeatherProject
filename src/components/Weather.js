import React from "react";
import tempSvg from "../icons/temp.svg";
import humiditySvg from "../icons/humidity.svg";
import pressureSvg from "../icons/pressure.svg";
import sunRiseTime from "../icons/day.svg";
// import temp from "../icons/temp.svg";

function Weather({ weatherData, setSearch, searchText }) {
  // sunrise humidity wind pressure
  console.log(weatherData);
  const { sunrise } = weatherData.sys;

  const { pressure, humidity, temp } = weatherData.main;
  const { speed } = weatherData.wind;
  let humidityPercentage = humidity + " %";
  let tempCel = (temp - 273.15).toFixed(2) + " C";
  let pressureHpa = pressure + " hPa";
  return (
    <div className="weather">
      <div className="weather-item">
        <h2>{searchText}</h2>
      </div>
      <div className="weather-details weather-item">
        <div className="weather-details-item">
          <span>Humidity: {humidityPercentage} </span>
          <img src={humiditySvg} alt="" srcset="" />
        </div>
        <div className="weather-details-item">
          <span>Temperature: {tempCel} </span>
          <img src={tempSvg} alt="" srcset="" />
        </div>
        <div className="weather-details-item">
          <span>Pressure: {pressureHpa} </span>
          <img src={pressureSvg} alt="" srcset="" />
        </div>
        <div className="weather-details-item">
          <span>Sunrise: {sunrise}</span>
          <img src={sunRiseTime} alt="" srcset="" />
        </div>
      </div>
      <div className="weather-item">
        <button
          type="button"
          onClick={() => {
            setSearch(false);
          }}
        >
          Back
        </button>
      </div>
    </div>
  );
}

export default Weather;
