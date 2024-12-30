"use client";
import React from "react";

const WeatherBox = ({ degrees, status }) => {
  
    let weatherIcon;
  
    switch (status) {
    case "rain":
        weatherIcon = "https://cdn2.iconfinder.com/data/icons/weather-flat-14/64/weather07-512.png";
        break;
    case "half rainy":
        weatherIcon = "https://cdn-icons-png.freepik.com/512/263/263883.png";
        break;
    case "sunny":
        weatherIcon = "https://cdn.iconscout.com/icon/free/png-256/free-sunny-icon-download-in-svg-png-gif-file-formats--sun-sunlight-summer-weather-forecast-outline-flat-pack-icons-781177.png";
        break;
    case "half sunny":
        weatherIcon = "https://cdn2.iconfinder.com/data/icons/weather-flat-14/64/weather02-512.png";
        break;
    case "night":
        weatherIcon = "https://cdn-icons-png.flaticon.com/512/208/208293.png";
        break;
    case "cloudy":
        weatherIcon = "https://cdn-icons-png.flaticon.com/512/1163/1163634.png";
        break;
    case "snow":
        weatherIcon = "https://cdn1.iconfinder.com/data/icons/weather-forecast-meteorology-color-1/128/weather-snow-light-512.png";
        break;
    case "rain and snow":
        weatherIcon = "https://cdn1.iconfinder.com/data/icons/weather-forecast-meteorology-color-1/128/weather-sleet-512.png";
        break;
    default:
        weatherIcon = "https://cdn-icons-png.flaticon.com/512/3534/3534501.png"
  }

  return (
    <button
      className="w-[40%] rounded-md flex space-x-10 p-5
  text-gray-300
  bg-gradient-to-br from-blue-950 to-blue-800
  hover:bg-gradient-to-r"
    >
      <div className="max-w-[50%]">
        <p className="text-lg">WEATHER NOW</p>
        <p className="text-6xl">{degrees}°C</p>
      </div>
      <div className="">
        <img alt="" src={weatherIcon} className="max-w-20 mt-[50%]"></img>
      </div>
    </button>
  );
};

export default WeatherBox;
