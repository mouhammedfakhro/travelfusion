"use client";
import React from "react";

const FoodBox = () => {
  return (
    <div
      id="food-box"
      className="min-h-fit flex space-x-3  bg-white rounded-md p-1 shadow-md shadow-black/20"
    >
      <img
        alt=""
        src="https://media-cdn.tripadvisor.com/media/photo-s/21/c6/16/6b/broccoli-cheese-gratin.jpg"
        className="w-[25%] aspect-auto rounded-md shadow-md shadow-black/20"
      ></img>
      <div className="space-y-1">
        <h1 id="foodplace-name" className="text-lg">
        Bodega Biarritz
        </h1>
        <p id="food-type-price-range" className="text-xs">$$$ • Mediterranean, European </p>
        <p id="foodplace-desc" className="text-xs">
            No reservation. Tiny place. Place possible at the bar . Time to wait estimated 15/30 minutes Menu tapas & cash only
            </p>
        <br/>
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

export default FoodBox;
