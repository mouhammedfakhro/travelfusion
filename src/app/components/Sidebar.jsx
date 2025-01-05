"use client";
import React from "react";
import { useRouter } from "next/navigation";

const Sidebar = ({ startDate, endDate, selectedCity }) => {
  const router = useRouter();
  // buttons clicked
  const aboutClicked = () => {
    router.push(
      `/about?startDate=${startDate}&endDate=${endDate}&location=${selectedCity}`
    );
  };
  const eventsClicked = () => {
    router.push(
      `/event?startDate=${startDate}&endDate=${endDate}&location=${selectedCity}`
    );
  };
  const attractionsClicked = () => {
    router.push(
      `/attractions?startDate=${startDate}&endDate=${endDate}&location=${selectedCity}`
    );
  };

  const foodClicked = () => {
    router.push(
      `/food?startDate=${startDate}&endDate=${endDate}&location=${selectedCity}`
    );
  };
  const hotelClicked = () => {
    router.push(
      `/hotel?startDate=${startDate}&endDate=${endDate}&location=${selectedCity}`
    );
  };

  function resetAllButtons() {}

  return (
    <div className="w-[15%] text-sm space-y-1 text-black">
      {/*about*/}
      <button
        id="about-button"
        className="w-full bg-sky-100 rounded-md p-2 
       hover:bg-blue-200 shadow-md shadow-black/20"
        onClick={aboutClicked}
      >
        ABOUT
      </button>

      {/*events*/}
      <button
        id="events-button"
        className="w-full bg-sky-100 rounded-md p-2
     hover:bg-blue-200 shadow-md shadow-black/20"
        onClick={eventsClicked}
      >
        EVENTS
      </button>

      {/*attractions*/}
      <button
        id="attractions-button"
        className="w-full bg-sky-100 rounded-md p-2
     hover:bg-blue-200 shadow-md shadow-black/20"
        onClick={attractionsClicked}
      >
        ATTRACTIONS
      </button>

      {/*food*/}
      <button
        id="food-button"
        className="w-full bg-sky-100 rounded-md p-2
     hover:bg-blue-200 shadow-md shadow-black/20"
        onClick={foodClicked}
      >
        FOOD
      </button>

      {/*hotel*/}
      <button
        id="hotel-button"
        className="w-full bg-sky-100 rounded-md p-2
     hover:bg-blue-200 shadow-md shadow-black/20"
        onClick={hotelClicked}
      >
        HOTEL
      </button>
    </div>
  );
};

export default Sidebar;
