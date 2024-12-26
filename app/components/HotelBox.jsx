"use client";
import React from "react";

const HotelBox = () => {
  return (
    <div
      id="attraction"
      className="min-h-fit flex space-x-3  bg-white rounded-md p-1 shadow-md shadow-black/20"
    >
      <img
        alt=""
        src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1e/22/ca/2b/andante-hotel.jpg?w=1400&h=-1&s=1"
        className="w-[25%] aspect-auto rounded-md shadow-md shadow-black/20"
      ></img>
      <div className="space-y-0.5">
        <h1 id="hotel-name" className="text-lg">
        Andante Hotel
        </h1>
        <p id="hotel-price" className="text-sm">from $86 per night</p>
        <br/>
        <button
          id="link-button"
          className="w-fit h-fit bg-sky-800 text-white text-sm justify-self-end
                                rounded-md p-2 hover:bg-sky-700
                                shadow-black/20 shadow-sm"
        >
          Check Availability
        </button>
      </div>
    </div>
  );
};

export default HotelBox;
