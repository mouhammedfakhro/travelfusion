"use client";
import React from "react";
import { useRouter } from "next/navigation";

const Sidebar = () => {
    const router = useRouter();
    // buttons clicked
    const aboutClicked = () => {router.push("/about");}
    const eventsClicked = () => {router.push("/event");}
    const attractionsClicked = () => {alert("attractions clicked");}
    const foodClicked = () => {alert("food clicked");}
    const hotelClicked = () => {alert("hotel clicked");}

  return (
    <div className="w-[15%] text-m space-y-1">
      {/*about*/}
      <button
        id="about-button"
        className="w-full bg-blue-200 rounded-md p-2 
    text-gray-800 hover:text-gray-800 hover:bg-blue-200"
        onClick={aboutClicked}
      >
        ABOUT
      </button>

      {/*events*/}
      <button
        id="events-button"
        className="w-full bg-blue-800 rounded-md p-2
    hover:text-gray-800 hover:bg-blue-200"
        onClick={eventsClicked}
      >
        EVENTS
      </button>

      {/*attractions*/}
      <button
        id="attractions-button"
        className="w-full bg-blue-800 rounded-md p-2
    hover:text-gray-800 hover:bg-blue-200"
        onClick={attractionsClicked}
      >
        ATTRACTIONS
      </button>

      {/*food*/}
      <button
        id="food-button"
        className="w-full bg-blue-800 rounded-md p-2
    hover:text-gray-800 hover:bg-blue-200"
        onClick={foodClicked}
      >
        FOOD
      </button>

      {/*hotel*/}
      <button
        id="hotel-button"
        className="w-full bg-blue-800 rounded-md p-2
    hover:text-gray-800 hover:bg-blue-200"
        onClick={hotelClicked}
      >
        HOTEL
      </button>
    </div>
  );
};

export default Sidebar;
