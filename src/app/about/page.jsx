"use client";
import React, { useEffect, useState, Suspense } from "react";
import "../global.css";
import Sidebar from "../components/Sidebar";
import WeatherBox from "../components/WeatherBox";
import { getLocationDetails } from "../../../lib/api";
import { useSearchParams } from "next/navigation";
import { ClipLoader } from "react-spinners";

// Separate Suspense Component
function AboutContent() {
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
  //const [weatherCondition, setWeatherCondition] = useState("");
  //const [weatherDescription, setWeatherDescription] = useState("");
  //const [temperature, setTemperature] = useState(0);
  const [weatherArray, setWeatherArray] = useState([]);

  const getDetails = async () => {
    try {
      const details = await getLocationDetails(location);

      if (details) {
        setDescription(details.description);
        setCityName(details.city);
        setCountryName(details.country);
        setCityImage(details.image);
        //setWeatherCondition(details.weather?.condition || "Unknown");
        //setWeatherDescription(details.weather?.description || "Unknown");
        //setTemperature(Math.round(details.weather?.temperature || 0));
        setWeatherArray(details.weather);

        setLoading(false);
      } else {
        throw new Error("Failed to fetch details");
      }
    } catch (error) {
      console.error("Error fetching location details:", error);
      setTimeout(() => {
        setLoading(false);
        setLoadingError(true);
      }, 3000);
    }
  };

  useEffect(() => {
    if (location) {
      getDetails();
    } else {
      setLoading(false);
      setLoadingError(true);
    }
  }, [location]);

  return (
    <div className="bg-sky-700 justify-center w-full min-h-screen flex">
      {/* Main div contains all contents */}
      <div className="h-fit w-[80%] mt-[1%] space-x-2 text-gray-300 flex">
        {/* Sidebar on the left */}
        <Sidebar
          startDate={startDate}
          endDate={endDate}
          selectedCity={location}
        />

        {/* Page content */}
        <div
          className="p-8 rounded-md w-full space-y-3 flex min-h-fit 
            bg-gradient-to-br from-gray-100 to-blue-200 text-gray-900 
            shadow-md shadow-black/20"
        >
          {/* Loading State */}
          {loading && (
            <div className="text-center w-full">
              <ClipLoader color="#36d7b7" loading={loading} size={50} />
              <p>Loading...</p>
            </div>
          )}

          {/* Error State */}
          {loadingError && (
            <div className="text-center text-3xl font-bold">
              <p>Failed to load...</p>
            </div>
          )}

          {/* Success State */}
          {!loading && !loadingError && (

            <div className="flex space-x-5 min-h-[100%]">

              {/*1.left section*/}
              <div className=" w-[65%] ">

                {/*title, country, description*/}
                <div className="text-sm h-[40%] overflow-y-hidden">
                  <p className="text-2xl font-bold">{cityName}</p>
                  <p className="text-lg font-bold">{countryName}</p>
                  <p className="text-xs">{description}</p>
                </div>

                {/*image*/}
                <img
                  src={cityImage}
                  alt="City"
                  className="h-[60%] w-full overflow-hidden object-cover rounded-md shadow-md shadow-black/30"
                />

              </div>


              {/*2.right section - contains weather*/}
              <div className="h-full w-[45%] bottom-0 justify-self-end flex">
                <div className="w-full">
                  <WeatherBox
                    weather={weatherArray}
                  />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function AboutPage() {
  return (
    <Suspense
      fallback={
        <div className="text-center mt-8">
          <ClipLoader color="#36d7b7" size={50} /> Loading...
        </div>
      }
    >
      <AboutContent />
    </Suspense>
  );
}

export default AboutPage;
