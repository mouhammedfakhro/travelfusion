"use client";
import React from "react";

const FoodBox = ({
  foodImage,
  placeName,
  foodType,
  priceRange,
  description,
  foodLink
}) => {
  return (
    <div
      id="food-box"
      className="min-h-fit flex space-x-3  bg-white rounded-md p-1 shadow-md shadow-black/20"
    >
      <img
        alt=""
        src={foodImage}
        className="w-[25%] aspect-auto rounded-md shadow-md shadow-black/20"
      ></img>
      <div className="space-y-1">
        <h1 className="text-lg">{placeName}</h1>
        <p id="food-type-price-range" className="text-xs">
          {priceRange} • {foodType}{" "}
        </p>
        <p id="foodplace-desc" className="text-xs">
          {description}
        </p>
        <br />
        <button
          id="link-button"
          className="w-fit h-fit bg-sky-800 text-white text-sm justify-self-end
                                rounded-md p-2 hover:bg-sky-700
                                shadow-black/20 shadow-sm"
          onClick={() => window.open(foodLink, "_blank")}
        >
          Read More
        </button>
      </div>
    </div>
  );
};

export default FoodBox;
