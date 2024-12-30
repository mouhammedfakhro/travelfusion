"use client";
import React from "react";

const AttractionBox = ({
  attractionImage,
  attractionName,
  attractionDescription,
  attractionLink,
}) => {
  return (
    <div
      id="attraction"
      className="min-h-fit flex space-x-3 bg-white rounded-md p-1
      shadow-md shadow-black/20"
    >
      <img
        alt=""
        src={attractionImage}
        className="w-[25%] aspect-auto rounded-md shadow-md shadow-black/20"
      ></img>

      <div className="space-y-0.5">
        <h1 className="text-lg">
          {attractionName}
        </h1>
        <p className="text-xs">
          {attractionDescription}
        </p>
        <button
          id="link-button"
          className="w-fit h-fit bg-sky-800 text-white text-sm justify-self-end
                                rounded-md p-2 hover:bg-sky-700
                                shadow-black/20 shadow-sm"
          onClick={() => window.open(attractionLink, "_blank")}
        >
          Read More
        </button>
      </div>
    </div>
  );
};

export default AttractionBox;
