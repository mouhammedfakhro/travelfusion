"use client";
import "./global.css";
import React, { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { Autocomplete, useLoadScript } from "@react-google-maps/api";
const libraries = ["places"];

function App() {
  const router = useRouter();
  const [selectedCity, setSelectedCity] = useState("");
  const autocompleteRef = useRef(null);

  // extracts text in input field
  const [text, setText] = useState("");

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyAbwVanV2LY5cdcSIDEvmLtTlcs5Ea1P4k",
    libraries,
  });

  // text for the error label
  const [errorLabel, setErrorLabel] = useState("");

  const handlePlaceChanged = () => {
    if (autocompleteRef.current !== null) {
      const place = autocompleteRef.current.getPlace();
      if (place && place.address_components) {
        let city = place.address_components.find(
          (component) =>
            component.types.includes("locality") ||
            component.types.includes("postal_town")
        )?.long_name;

        if (city) {
          setSelectedCity(city);
          setText(place.name); // Update input text
          console.log("Nearest City:", city);
        } else {
          console.log("City not found in address components");
        }
      }
    } else {
      console.warn("Autocomplete reference is null");
    }
  };

  const goClicked = () => {
    setErrorLabel("");
    // dates are in string format "yyyy-mm-dd"
    const startDate = document.getElementById("startdate").value;
    const endDate = document.getElementById("enddate").value;

    // show error(s) if input is invalid
    if (text === "") {
      setErrorLabel("Please type in and select a location.");
    } else if (startDate === "" || endDate === "") {
      setErrorLabel("Please choose both a start and end date.");
    } else if (startDate > endDate) {
      setErrorLabel("End date cannot be before start date.");
    } else {
      apiRequest(startDate, endDate);
    }
  };

  function apiRequest(startDate, endDate) {
    router.push(
      `/about?startDate=${startDate}&endDate=${endDate}&location=${encodeURIComponent(
        selectedCity
      )}`
    );
  }

  return (
    <div className="items-center justify-center bg-sky-700 w-screen min-h-screen flex text-sm">
      {/*main div contains all contents*/}
      <div className="space-y-3 text-white">
        <h1 className="text-xl text-center">WHERE TO?</h1>

        {/*second div contains input field and buttons*/}
        <div className="space-x-2 flex w-full min-h-fit-content min-w-fit-content">
          {/*search field*/}
          {isLoaded && (
            <Autocomplete
              onLoad={(autocomplete) => (autocompleteRef.current = autocomplete)}
              onPlaceChanged={handlePlaceChanged}
            >
              <input
                id="textfield"
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                className="rounded-md p-2 focus:outline-none text-black"
                placeholder="Barcelona, Spain"
                style={{ width: "200px" }}
              />
            </Autocomplete>
          )}

          {/*calendar buttons*/}
          <input
            id="startdate"
            type="date"
            className="bg-sky-900 hover:bg-sky-800 rounded-md p-2 text-center shadow-md shadow-black/20"
          ></input>
          <p className="text-xl">→</p>
          <input
            id="enddate"
            type="date"
            className="bg-sky-900 hover:bg-sky-800 rounded-md p-2 text-center shadow-md shadow-black/20"
          ></input>

          {/*GO button*/}
          <button
            className="bg-sky-900 hover:bg-sky-800 rounded-md p-2 shadow-md shadow-black/20"
            onClick={goClicked}
          >
            GO
          </button>
        </div>
        <br />

        {/*div contains error message*/}
        <div className="items-center justify-center flex">
          <p id="errorlabel" className="text-opacity-70 text-sm absolute">
            {errorLabel}
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
