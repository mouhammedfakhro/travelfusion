"use client";
import React from "react";

const EventBox = () => {
  return (
    <div
      id="event"
      className="min-h-fit flex space-x-3 border border-blue-500 bg-blue-200 rounded-md p-1"
    >
      <img
        alt=""
        src="https://www.rollingstone.com/wp-content/uploads/2022/10/Post-Pandemic-and-Beyond-Looking-Ahead-to-the-Future-of-Live-Concerts.jpg"
        className="w-[30%] aspect-auto rounded-md"
      ></img>
      <div className="space-y-0.5">
        <h1 id="event-name" className="text-xl">
          Malmö Redhawks-Växjö Lakers
        </h1>
        <p id="event-location" className="text-sm">
          Malmö Arena
        </p>
        <p id="event-date" className="text-sm">
          2024/12/06
        </p>
        <p id="event-time" className="text-sm">
          15:15
        </p>
        <button
          id="booking-button"
          className="w-fit h-fit bg-blue-800 text-white text-sm
                                rounded-md p-2 hover:text-gray-800 hover:bg-blue-300"
        >
          {" "}
          Find Tickets{" "}
        </button>
      </div>
    </div>
  );
};

export default EventBox;
