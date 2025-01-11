"use client";
import React from "react";

const EventBox = ({
  eventImage,
  eventName,
  eventLocation,
  eventDate,
  eventTime,
  eventLink,
  description,
}) => {
  return (
    <div
      id="event"
      className="min-h-fit flex space-x-3 bg-white rounded-md p-1
      shadow-md shadow-black/20"
    >
      <img
        alt=""
        src={eventImage}
        className="w-64 h-32 object-cover rounded-md shadow-md shadow-black/20"
      ></img>
      <div className="space-y-0.5">
        <h1 className="">{eventName}</h1>
        <p className="text-xs">{eventLocation}</p>
        <p className="text-xs">{eventDate}</p>
        <p className="text-xs">{eventTime}</p>
        <p className="text-xs">{description}</p>
        <br />
        <button
          className="w-fit h-fit bg-sky-800 text-white text-sm justify-self-end
                                rounded-md p-2 hover:bg-sky-700
                                shadow-black/20 shadow-sm"
          onClick={() => window.open(eventLink, "_blank")}
        >
          Find Tickets
        </button>
      </div>
    </div>
  );
};

export default EventBox;
