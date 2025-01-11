"use client";
import React from "react";

const WeatherBox = ({ weather, degrees, status, main }) => {

  function getDateByIndex(index) {
    return (weather.at(index)?.date || "unknown");
  }

  function getDegreeByIndex(index) {
    return Math.round(weather.at(index)?.temperature || "unknown");
  }

  function getMainConditionByIndex(index) {
    return (weather.at(index)?.condition || "unknown");
  }

  function getDetailsByIndex(index) {
    return (weather.at(index)?.description || "unknown");
  }

  function getImageByIndex(index) {
    switch (weather.at(index)?.description || "Unknown") {
      case "clear sky":
        return "https://openweathermap.org/img/wn/01d@2x.png";
        break;
      case "few clouds":
        return "https://openweathermap.org/img/wn/02d@2x.png";
        break;
      case "scattered clouds":
        return "https://openweathermap.org/img/wn/03d@2x.png";
        break;
      case "broken clouds":
        return "https://openweathermap.org/img/wn/04d@2x.png";
        break;
      case "shower rain":
        return "https://openweathermap.org/img/wn/09d@2x.png";
        break;
      case "rain":
        return "https://openweathermap.org/img/wn/10d@2x.png";
        break;
      case "thunderstorm":
        return "https://openweathermap.org/img/wn/11d@2x.png";
        break;
      case "snow":
        return "https://openweathermap.org/img/wn/13d@2x.png";
        break;
      case "mist":
        return "https://openweathermap.org/img/wn/50d@2x.png";
        break;
      default:
        return "https://cdn-icons-png.flaticon.com/512/3534/3534501.png";
    }
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
          <p className="text-md">{getMainConditionByIndex(0)}</p>
          <p className="text-6xl">{getDegreeByIndex(0)}°C</p>
        </div>

        <div className="">
          <img alt="" src={getImageByIndex(0)} className="max-w-20 "></img>
        </div>
      </div>

      {/*upcoming day 1*/}
      <div
        className=" rounded-md flex space-x-5 max-h-[25%]
        text-gray-300 p-5
        bg-gradient-to-tl from-blue-900 to-blue-800
        hover:bg-gradient-to-r"
      >
        <p className="text-xs">TOMORROW</p>
        <p className="text-xs">{getMainConditionByIndex(1)} </p>
        <p className="text-xs">{getDegreeByIndex(1)}°C</p>
        <img alt="" src={getImageByIndex(1)} className="w-[10%]"></img>
      </div>

      {/*upcoming day 2*/}
      <div
        className=" rounded-md flex space-x-5 max-h-[25%]
        text-gray-300 p-5
        bg-gradient-to-tl from-blue-900 to-blue-800
        hover:bg-gradient-to-r"
      >
        <p className="text-xs">{getDateByIndex(2)}</p>
        <p className="text-xs">{getMainConditionByIndex(2)} </p>
        <p className="text-xs">{getDegreeByIndex(2)}°C</p>
        <img alt="" src={getImageByIndex(2)} className="w-[10%]"></img>
      </div>

      {/*upcoming day 3*/}
      <div
        className=" rounded-md flex space-x-5 max-h-[25%]
        text-gray-300 p-5
        bg-gradient-to-tl from-blue-900 to-blue-800
        hover:bg-gradient-to-r"
      >
        <p className="text-xs">{getDateByIndex(3)}</p>
        <p className="text-xs">{getMainConditionByIndex(3)} </p>
        <p className="text-xs">{getDegreeByIndex(3)}°C</p>
        <img alt="" src={getImageByIndex(3)} className="w-[10%]"></img>
      </div>

      {/*upcoming day 4*/}
      <div
        className=" rounded-md flex space-x-5 max-h-[25%]
        text-gray-300 p-5
        bg-gradient-to-tl from-blue-900 to-blue-800
        hover:bg-gradient-to-r"
      >
        <p className="text-xs">{getDateByIndex(4)}</p>
        <p className="text-xs">{getMainConditionByIndex(4)} </p>
        <p className="text-xs">{getDegreeByIndex(4)}°C</p>
        <img alt="" src={getImageByIndex(4)} className="w-[10%]"></img>
      </div>
      
    </div>
  );
};

export default WeatherBox;
