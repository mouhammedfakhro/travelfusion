"use client";
import React from "react";

const EventBox = () => {

  const eventImage = "https://www.rollingstone.com/wp-content/uploads/2022/10/Post-Pandemic-and-Beyond-Looking-Ahead-to-the-Future-of-Live-Concerts.jpg";

  return (
    <div
      id="event"
      className="min-h-fit flex space-x-3 bg-white rounded-md p-1
      shadow-md shadow-black/20"
    >
      <img
        alt=""
        src={eventImage}
        className="w-[25%] aspect-auto rounded-md shadow-md shadow-black/20"
      ></img>
      <div className="space-y-0.5">
        <h1 id="event-name" className="">
          Malmö Redhawks-Växjö Lakers
        </h1>
        <p id="event-location" className="text-xs">
          Malmö Arena
        </p>
        <p id="event-date" className="text-xs">
          2024/12/06
        </p>
        <p id="event-time" className="text-xs">
          15:15
        </p>
        <br/>
        <button
          id="booking-button"
          className="w-fit h-fit bg-sky-800 text-white text-sm justify-self-end
                                rounded-md p-2 hover:bg-sky-700
                                shadow-black/20 shadow-sm"
        >
          {" "}
          Find Tickets{" "}
        </button>
      </div>
    </div>
  );
};

export default EventBox;
