"use client";
import React, { useEffect, useState } from "react";
import "../global.css";
import Sidebar from "../components/Sidebar";
import WeatherBox from "../components/WeatherBox";
import { getLocationDetails } from "../../../lib/api";
import { useSearchParams } from "next/navigation";
import { ClipLoader } from "react-spinners";

function AboutPage() {
  // placeholder data
  {
    /**
    const cityName = "BARCELONA";
  const countryName = "SPAIN";
  const description =
    "When it comes to history, art, and architecture, Barcelona delivers. There’s Gaudí’s iconic Basílica de la Sagrada Familia, the Picasso Museum, and the Gothic Quarter. But look beyond the landmarks and busy mercados and you’ll notice how nature steals the show—the city’s literally surrounded by it. On one side you’ve got three miles of gorgeous sandy beaches that give the neighboring Balearic Islands a run for their money, and on the other, the Serra de Collserola mountains, home to Parc de Collserola—one of the biggest city parks in the world. It’s probably why bike culture’s big here: Over 180 miles of bike lanes make it easy to get around the Catalan capital. Spend a low-key afternoon cruising the revamped La Rambla (you’ll have to walk your bike once you hit the pedestrian-only drag) and stop for tapas and sangria."; */
  }

  const params = useSearchParams();
  const location = params.get("location");
  const startDate = params.get("startDate");
  const endDate = params.get("endDate");

  const [description, setDescription] = useState("");
  const [cityName, setCityName] = useState("");
  const [countryName, setCountryName] = useState("");
  const [loading, setLoading] = useState(true);
  const [loadingError, setLoadingError] = useState(false);
  const [cityImage, setCityImage] = useState("");
  const [weatherCondition, setWeatherCondition] = useState("");
  const [weatherDescripiton, setWeatherDescription] = useState("");
  const [temperature, setTemperature] = useState(0);

  const getDetails = async () => {
    const details = await getLocationDetails(location);
    if (details) {
      setDescription(details.description);
      setCityName(details.city);
      setCountryName(details.country);
      setCityImage(details.image);
      setWeatherCondition(details.weather?.condition);
      setWeatherDescription(details.weather?.description);
      setTemperature(Math.round(details.weather?.temperature));


      console.log(details);
      

      // set loading to false after applying all the data  
      setLoading(false);
    } else {
      setTimeout(() => {
        setLoading(false);
        setLoadingError(true);
      }, 3000);
    }
  };

  useEffect(() => {
    getDetails();
  }, []);

  return (
    <div className="bg-sky-700 justify-center w-full min-h-screen flex">
      {/*main div contains all contents*/}
      <div className="h-fit w-[80%] mt-[1%] space-x-2 text-gray-300 flex">
        {/*sidebar on left*/}
        <Sidebar startDate={startDate} endDate={endDate} selectedCity={location}/>

        {/*div contains body of the page*/}
        <div
          className="p-8 rounded-md w-full space-y-3 h-fit max-h-[575px]
            bg-gradient-to-br from-gray-100 to-blue-200 text-gray-900 overflow-y-scroll
            shadow-md shadow-black/20
            [&::-webkit-scrollbar]:w-2
            [&::-webkit-scrollbar-track]:rounded-full
            [&::-webkit-scrollbar-track]:bg-gray-100
            [&::-webkit-scrollbar-thumb]:rounded-full
            [&::-webkit-scrollbar-thumb]:bg-gray-300
            light:[&::-webkit-scrollbar-track]:bg-neutral-700
            light:[&::-webkit-scrollbar-thumb]:bg-neutral-500"
        >
          {loading && (
            <div className="text-center mt-[20px]">
              <ClipLoader color="#36d7b7" loading={loading} size={50} />
              <p>Loading...</p>
            </div>
          )}

          {loadingError && (
            <div className="text-center text-3xl font-bold">
              <p>Failed to load...</p>
            </div>
          )}

          {!loading && !loadingError && (
            <div>
              {/*1.upper section - contains title, description*/}
              <div className="flex space-x-3">
                {/*title and description*/}
                <div className="text-sm  flex flex-col justify-end p-2">
                  <p className="text-2xl font-bold">{countryName}</p>
                  <p className="text-lg font-bold">{cityName}</p>
                  <p className="text-xs">{description}</p>
                </div>
              </div>

              {/*2.lower section - contains an image and weather*/}
              <div className=" flex space-x-3 ">
                {/*an image*/}
                <div className="w-[60%] h-[300px] overflow-hidden rounded-md shadow-md shadow-black/30">
                  <img
                    src={cityImage}
                    alt="City"
                    className="w-full h-full object-cover rounded-md"
                  />
                </div>

                {/*weather*/}
                
                <WeatherBox degrees={temperature} status={weatherDescripiton} main={weatherCondition}/>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
