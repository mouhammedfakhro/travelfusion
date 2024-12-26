"use client";
import React from "react";

const HotelBox = () => {
  return (
    <div
      id="attraction"
      className="min-h-fit flex space-x-3 border border-blue-500 bg-blue-200 rounded-md p-1"
    >
      <img
        alt=""
        src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1e/22/ca/2b/andante-hotel.jpg?w=1400&h=-1&s=1"
        className="w-[30%] aspect-auto rounded-md"
      ></img>
      <div className="space-y-0.5">
        <h1 id="hotel-name" className="text-xl">
        Andante Hotel
        </h1>
        <p id="hotel-price" className="text-sm">from $86 per night</p>
        <button
          id="link-button"
          className="w-fit h-fit bg-blue-800 text-white text-sm
                                rounded-md p-2 hover:text-gray-800 hover:bg-blue-300"
        >
          Check Availability
        </button>
      </div>
    </div>
  );
};

export default HotelBox;
