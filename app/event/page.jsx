"use client";
import EventBox from "../components/EventBox";
import Sidebar from "../components/Sidebar";
import "../global.css";
import React from "react";

function EventPage() {

    // for each event, adds an event component and populates it
    function addEvents() {

    }

    return (
    <div className="bg-sky-700 justify-center w-full min-h-screen flex">

        {/*main div contains all contents*/}
        <div className="h-fit  w-[80%] mt-[1%] space-x-2 text-gray-300 flex">

            {/*div contains all buttons on left*/}
            <Sidebar/>

            {/*div contains body of the page*/}
            <div className="p-8 rounded-md w-full space-y-3 max-h-[575px]
            bg-gradient-to-br from-gray-100 to-blue-200 text-gray-900 overflow-y-scroll
            shadow-md shadow-black/20
            [&::-webkit-scrollbar]:w-2
            [&::-webkit-scrollbar-track]:rounded-full
            [&::-webkit-scrollbar-track]:bg-gray-100
            [&::-webkit-scrollbar-thumb]:rounded-full
            [&::-webkit-scrollbar-thumb]:bg-gray-300
            light:[&::-webkit-scrollbar-track]:bg-neutral-700
            light:[&::-webkit-scrollbar-thumb]:bg-neutral-500" >
                

                {/*div contains all events for that date*/}
                <div className="space-y-2">
                    <EventBox/>
                    <EventBox/>
                    <EventBox/>
                    <EventBox/>
                    <EventBox/>
                </div>                               
            </div>
        </div>
    </div>
    );
}

export default EventPage;
