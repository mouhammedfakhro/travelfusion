"use client";
import React from "react";

const AttractionBox = () => {
  return (
    <div
      id="attraction"
      className="min-h-fit flex space-x-3 border border-blue-500 bg-blue-200 rounded-md p-1"
    >
      <img
        alt=""
        src="https://images.travelandleisureasia.com/wp-content/uploads/sites/5/2024/04/01173504/barcelona-beautiful-places-1.jpeg"
        className="w-[30%] aspect-auto rounded-md"
      ></img>
      <div className="space-y-0.5">
        <h1 id="attraction-name" className="text-xl">
        Basílica de la Sagrada Familia
        </h1>
        <p id="attraction-location" className="text-sm"></p>
        <p id="attraction-desc" className="text-xs">
        Basilica de la Sagrada Familia is a church devoted to the Holy Family. One of Antoni Gaudi’s most famous works, the church is perhaps best known for still being under construction since 1882—with works funded purely by donations. Take a lift to the top of the towers for a panoramic view of the city and marvel at the ornate architecture. The nativity facade and crypt have also been awarded UNESCO World Heritage Status. Skip the line with a pre-booked tour with tower access, or combine your visit with another of Gaudi's work, Parc Guell.
        </p>
        <button
          id="link-button"
          className="w-fit h-fit bg-blue-800 text-white text-sm
                                rounded-md p-2 hover:text-gray-800 hover:bg-blue-300"
        >
          Read More
        </button>
      </div>
    </div>
  );
};

export default AttractionBox;
