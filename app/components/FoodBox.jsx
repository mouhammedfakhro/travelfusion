"use client";
import React from "react";

const FoodBox = () => {
  return (
    <div
      id="attraction"
      className="min-h-fit flex space-x-3 border border-blue-500 bg-blue-200 rounded-md p-1"
    >
      <img
        alt=""
        src="https://media-cdn.tripadvisor.com/media/photo-s/21/c6/16/6b/broccoli-cheese-gratin.jpg"
        className="w-[30%] aspect-auto rounded-md"
      ></img>
      <div className="space-y-1">
        <h1 id="foodplace-name" className="text-xl">
        Bodega Biarritz
        </h1>
        <p id="food-type" className="text-xs">Mediterranean, European</p>
        <p id="food-price-range" className="text-sm">$$$</p>
        <p id="foodplace-desc" className="text-xs">
            No reservation. Tiny place. Place possible at the bar . Time to wait estimated 15/30 minutes Menu tapas & cash only
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

export default FoodBox;
