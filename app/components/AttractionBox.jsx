"use client";
import React from "react";

const AttractionBox = () => {
  return (
    <div
      id="attraction"
      className="min-h-fit flex space-x-3 bg-white rounded-md p-1
      shadow-md shadow-black/20"
    >
      <img
        alt=""
        src="https://images.travelandleisureasia.com/wp-content/uploads/sites/5/2024/04/01173504/barcelona-beautiful-places-1.jpeg"
        className="w-[25%] aspect-auto rounded-md shadow-md shadow-black/20"
      ></img>
      <div className="space-y-0.5">
        <h1 id="attraction-name" className="text-lg">
        Basílica de la Sagrada Familia
        </h1>
        <p id="attraction-desc" className="text-xs">
        Basilica de la Sagrada Familia is a church devoted to the Holy Family. One of Antoni Gaudi’s most famous works, the church is perhaps best known for still being under construction since 1882—with works funded purely by donations. Take a lift to the top of the towers for a panoramic view of the city and marvel at the ornate architecture. The nativity facade and crypt have also been awarded UNESCO World Heritage Status. Skip the line with a pre-booked tour with tower access, or combine your visit with another of Gaudi's work, Parc Guell.
        </p>
        <button
          id="link-button"
          className="w-fit h-fit bg-sky-800 text-white text-sm justify-self-end
                                rounded-md p-2 hover:bg-sky-700
                                shadow-black/20 shadow-sm"
        >
          Read More
        </button>
      </div>
    </div>
  );
};

export default AttractionBox;
