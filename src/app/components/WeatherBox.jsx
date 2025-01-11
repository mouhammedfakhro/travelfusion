"use client";
import React from "react";

const WeatherBox = ({ degrees, status, main }) => {
  let weatherIcon;

  switch (status) {
    case "clear sky":
      weatherIcon = "https://openweathermap.org/img/wn/01d@2x.png";
      break;
    case "few clouds":
      weatherIcon = "https://openweathermap.org/img/wn/02d@2x.png";
      break;
    case "scattered clouds":
      weatherIcon = "https://openweathermap.org/img/wn/03d@2x.png";
      break;
    case "broken clouds":
      weatherIcon = "https://openweathermap.org/img/wn/04d@2x.png";
      break;
    case "shower rain":
      weatherIcon = "https://openweathermap.org/img/wn/09d@2x.png";
      break;
    case "rain":
      weatherIcon = "https://openweathermap.org/img/wn/10d@2x.png";
      break;
    case "thunderstorm":
      weatherIcon = "https://openweathermap.org/img/wn/11d@2x.png";
      break;
    case "snow":
      weatherIcon = "https://openweathermap.org/img/wn/13d@2x.png";
      break;
    case "mist":
      weatherIcon = "https://openweathermap.org/img/wn/50d@2x.png";
      break;
    default:
      weatherIcon = "https://cdn-icons-png.flaticon.com/512/3534/3534501.png";
  }

  return (
    <div className="w-full space-y-0.5">
      {/*main window: TODAYS weather*/}
      <div
        className="h-[50%] rounded-md flex space-x-5
        text-gray-300 p-5
        bg-gradient-to-br from-blue-950 to-blue-800
        hover:bg-gradient-to-r"
      >
        <div className="">
          <p className="text-xl">TODAY</p>
          <p className="text-md">{status}</p>
          <p className="text-6xl">{degrees}°C</p>
        </div>

        <div className="">
          <img alt="" src={weatherIcon} className="max-w-25 max-h-[90%]"></img>
        </div>
      </div>

      {/*upcoming day 1*/}
      <div
        className="h-[50%] rounded-md flex space-x-5
        text-gray-300 p-5
        bg-gradient-to-tl from-blue-900 to-blue-800
        hover:bg-gradient-to-r"
      >
        <p className="text-xs">2025-01-11 {main} </p>
        <p className="text-xs">{degrees}°C</p>
      </div>

      {/*upcoming day 2*/}
      <div
        className="h-[50%] rounded-md flex space-x-5
        text-gray-300 p-5
        bg-gradient-to-tr from-blue-950 to-blue-800
        hover:bg-gradient-to-r"
      >
        <p className="text-xs">2025-01-11 {main} </p>
        <p className="text-xs">{degrees}°C</p>
      </div>

      {/*upcoming day 3*/}
      <div
        className="h-[50%] rounded-md flex space-x-5
        text-gray-300 p-5
        bg-gradient-to-tr from-blue-950 to-blue-800
        hover:bg-gradient-to-r"
      >
        <p className="text-xs">2025-01-11 {main} </p>
        <p className="text-xs">{degrees}°C</p>
      </div>

      {/*upcoming day 4*/}
      <div
        className="h-[50%] rounded-md flex space-x-5
        text-gray-300 p-5
        bg-gradient-to-br from-blue-950 to-blue-800
        hover:bg-gradient-to-r"
      >
        <p className="text-xs">2025-01-11 {main} </p>
        <p className="text-xs">{degrees}°C</p>
      </div>
    </div>
  );
};

export default WeatherBox;
