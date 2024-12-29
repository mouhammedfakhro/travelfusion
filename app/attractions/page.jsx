"use client";
import AttractionBox from "../components/AttractionBox";
import Sidebar from "../components/Sidebar";
import "../global.css";
import React from "react";

function EventPage() {
  // for each item, adds an attractionBox component and populates it
  function addEvents() {}

  return (
    <div className="bg-sky-700 justify-center w-full min-h-screen flex">
      {/*main div contains all contents*/}
      <div className="h-fit  w-[80%] mt-[1%] space-x-2 text-gray-300 flex">
        {/*div contains all buttons on left*/}
        <Sidebar />

        {/*div contains body of the page*/}
        <div
          className="p-8 rounded-md w-full space-y-2 max-h-[575px]
            bg-gradient-to-br from-gray-100 to-blue-200 text-gray-900 overflow-y-scroll
            shadow-md shadow-black/20
            [&::-webkit-scrollbar]:w-2
            [&::-webkit-scrollbar-track]:rounded-full
            [&::-webkit-scrollbar-track]:bg-gray-100
            [&::-webkit-scrollbar-thumb]:rounded-full
            [&::-webkit-scrollbar-thumb]:bg-gray-300
            light:[&::-webkit-scrollbar-track]:bg-neutral-700
            light:[&::-webkit-scrollbar-thumb]:bg-neutral-500"
        >
          <AttractionBox
            attractionImage="https://images.travelandleisureasia.com/wp-content/uploads/sites/5/2024/04/01173504/barcelona-beautiful-places-1.jpeg"
            attractionName="Basílica de la Sagrada Familia"
            attractionDescription="Basilica de la Sagrada Familia is a church devoted to the Holy Family.
                One of Antoni Gaudi’s most famous works, the church is perhaps best
                known for still being under construction since 1882—with works funded
                purely by donations. Take a lift to the top of the towers for a
                panoramic view of the city and marvel at the ornate architecture. The
                nativity facade and crypt have also been awarded UNESCO World Heritage
                Status. Skip the line with a pre-booked tour with tower access, or
                combine your visit with another of Gaudi's work, Parc Guell."
            attractionLink="https://www.tripadvisor.com/Attraction_Review-g562814-d667082-Reviews-PortAventura-Salou_Costa_Dorada_Province_of_Tarragona_Catalonia.html"
          />
        </div>
      </div>
    </div>
  );
}

export default EventPage;
