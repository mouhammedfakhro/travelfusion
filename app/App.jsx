"use client";
import "./global.css";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

function App() {

  const router = useRouter();

  // extracts text in input field
  const [text, setText] = useState("");
  const updateText = (e) => {
    setText(e.target.value);
  };
  
  // text for the error label
  const [errorLabel, setErrorLabel] = useState("");

  const goClicked = () => {

    setErrorLabel("");
    // dates are in string format "yyyy-mm-dd"
    const startDate = document.getElementById("startdate").value;
    const endDate = document.getElementById("enddate").value;

    // show error(s) if date input is invalid
    if (startDate==="" || endDate==="") {
      setErrorLabel("Please choose both a start and end date.");
    }
    else if (startDate > endDate) {
      setErrorLabel("End date cannot be before start date.");
    }
    else {
      apiRequest(startDate, endDate);
    }
  };

  function apiRequest(startDate, endDate) {
    // vi har: startDate, endDate, text
    // vi behöver: en vald plats (om vi inte ska göra keyword search bara)
    router.push("/about");    
  }

  return (
    <div className="items-center justify-center bg-blue-950 w-screen min-h-screen flex">
      {/*main div contains all contents*/}
      <div className="space-y-3 text-white">
        <h1 className="text-2xl text-center">WHERE TO?</h1>

        {/*second div contains input field and buttons*/}
        <div className="space-x-2 flex w-full min-h-fit-content min-w-fit-content">
          
          {/*search field*/}
          <input
            id="textfield"
            type="text"
            value={text}
            onChange={updateText}
            className=" rounded-md p-2 focus:outline-none"
            placeholder="Barcelona, Spain"
            style={{ width: "200px" }}>
          </input>

          {/*calendar buttons*/}
          <input id="startdate" type="date"
            className="bg-blue-800 hover:bg-blue-900 rounded-md p-2 text-center">
          </input>
          <p className="text-xl">→</p>
          <input id="enddate" type="date"
            className="bg-blue-800 hover:bg-blue-900 rounded-md p-2 text-center">
          </input>

          {/*GO button*/}
          <button
            className="bg-blue-800 hover:bg-blue-900 rounded-md p-2"
            onClick={goClicked}>GO</button>
        </div>
        <br/>

        {/*div contains error message*/}
        <div className="items-center justify-center flex">
          <p id="errorlabel"
          className="text-opacity-70 text-sm absolute">{errorLabel}</p>
        </div>
      </div>
    </div>
  );
}

export default App;
