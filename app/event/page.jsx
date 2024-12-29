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
            <div className="p-8 rounded-md w-full space-y-2 max-h-[575px]
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
                

                {/*div contains all events for that date*/}
                <div className="space-y-2">
                    <EventBox
                        eventImage="https://www.rollingstone.com/wp-content/uploads/2022/10/Post-Pandemic-and-Beyond-Looking-Ahead-to-the-Future-of-Live-Concerts.jpg"
                        eventName="Malmö Redhawks-Växjö Lakers"
                        eventLocation="Malmö Arena"
                        eventDate="2024/12/06"
                        eventTime="15:15"
                        eventLink="https://redhawks.tmtickets.se/EDP/Event/Index/176?position=9&_gl=1*1dy7omi*_gcl_au*MzA1MzMxMzI3LjE3MzQ5NzIzMzE."
                    />
                    <EventBox
                        eventImage="https://npr.brightspotcdn.com/19/18/3b537c99414c85783fbe3c43c1d8/20230717-rwt-louisville-dakdouk-jd2-7282-v1-tp.jpg"
                        eventName="Beyonce Concert"
                        eventLocation="Copenhagen Arena"
                        eventDate="2024/12/30"
                        eventTime="20:00"
                        eventLink="https://redhawks.tmtickets.se/EDP/Event/Index/176?position=9&_gl=1*1dy7omi*_gcl_au*MzA1MzMxMzI3LjE3MzQ5NzIzMzE."
                    />

                </div>                               
            </div>
        </div>
    </div>
    );
}

export default EventPage;
