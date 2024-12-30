"use client";
import EventBox from "../components/EventBox";
import Sidebar from "../components/Sidebar";
import "../global.css";
import React, { useState } from "react";

function EventPage() {
  // temporary data - "eventsArray" should be exported from globalVariables instead
  const eventsArray = [
    {
      eventImage:
        "https://www.rollingstone.com/wp-content/uploads/2022/10/Post-Pandemic-and-Beyond-Looking-Ahead-to-the-Future-of-Live-Concerts.jpg",
      eventName: "Malmö Redhawks-Växjö Lakers",
      eventLocation: "Malmö Arena",
      eventDate: "2024/12/06",
      eventTime: "15:15",
      eventLink: "",
    },
    {
      eventImage:
        "https://www.rollingstone.com/wp-content/uploads/2022/10/Post-Pandemic-and-Beyond-Looking-Ahead-to-the-Future-of-Live-Concerts.jpg",
      eventName: "Malmö Redhawks-Växjö Lakers",
      eventLocation: "Malmö Arena 2",
      eventDate: "2024/12/06",
      eventTime: "15:15",
      eventLink: "",
    },
  ];

  let eventItems = [];
  addEvents();

  // for each event in the array, adds a populated component to "eventItems"
  function addEvents() {
    let keyCount =  1;
    eventsArray.forEach((eventObject) => {
      eventItems.push( <EventBox
                        eventImage={eventObject.eventImage}
                        eventName={eventObject.eventName}
                        eventLocation={eventObject.eventLocation}
                        eventDate={eventObject.eventDate}
                        eventTime={eventObject.eventTime}
                        eventLink={eventObject.eventLink}
                        key={keyCount}
                    />
                );
        keyCount++;
    });
  }

  return (
    <div className="bg-sky-700 justify-center w-full min-h-screen flex">
      {/*main div contains all contents*/}
      <div className="h-fit  w-[80%] mt-[1%] space-x-2 text-gray-300 flex">
        {/*div contains all buttons on left*/}
        <Sidebar />

        {/*div contains body of the page*/}
        <div
          className="p-8 rounded-md w-full space-y-2 max-h-[575px]
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
          {/*div contains all events*/}
          <div id="events-div" className="space-y-2"> {eventItems} </div>
        </div>
      </div>
    </div>
  );
}

export default EventPage;
