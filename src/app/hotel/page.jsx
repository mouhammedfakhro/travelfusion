"use client";
import Sidebar from "../components/Sidebar";
import HotelBox from "../components/HotelBox";
import "../global.css";
import React from "react";

function HotelPage() {

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
            light:[&::-webkit-scrollbar-thumb]:bg-neutral-500" >
                
                <HotelBox
                    hotelImage="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1e/22/ca/2b/andante-hotel.jpg?w=1400&h=-1&s=1"
                    hotelName="Andante Hotel"
                    priceFrom="86"
                    hotelLink="https://www.tripadvisor.com/Hotel_Review-g187497-d2545026-Reviews-Andante_Hotel-Barcelona_Catalonia.html"
                />                               
            </div>
        </div>
    </div>
    );
}

export default HotelPage;
