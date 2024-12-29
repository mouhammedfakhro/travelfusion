"use client";
import React from "react";
import "../global.css"; 
import Sidebar from "../components/Sidebar";
import WeatherBox from "../components/WeatherBox";


function AboutPage() {

    // placeholder data
    const cityName = "BARCELONA";
    const countryName = "SPAIN";
    const description = "When it comes to history, art, and architecture, Barcelona delivers. There’s Gaudí’s iconic Basílica de la Sagrada Familia, the Picasso Museum, and the Gothic Quarter. But look beyond the landmarks and busy mercados and you’ll notice how nature steals the show—the city’s literally surrounded by it. On one side you’ve got three miles of gorgeous sandy beaches that give the neighboring Balearic Islands a run for their money, and on the other, the Serra de Collserola mountains, home to Parc de Collserola—one of the biggest city parks in the world. It’s probably why bike culture’s big here: Over 180 miles of bike lanes make it easy to get around the Catalan capital. Spend a low-key afternoon cruising the revamped La Rambla (you’ll have to walk your bike once you hit the pedestrian-only drag) and stop for tapas and sangria.";
    const cityImage = "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1c/ae/5d/da/caption.jpg?w=2400&h=1000&s=1";

    return (
    <div className="bg-sky-700 justify-center w-full min-h-screen flex">

        {/*main div contains all contents*/}
        <div className="h-fit w-[80%] mt-[1%] space-x-2 text-gray-300 flex ">

            {/*sidebar on left*/}
            <Sidebar/>

            {/*div contains body of the page*/}
            <div className="p-8 rounded-md w-full space-y-3 h-fit max-h-[575px]
            bg-gradient-to-br from-gray-100 to-blue-200 text-gray-900 overflow-y-scroll
            shadow-md shadow-black/20
            [&::-webkit-scrollbar]:w-2
            [&::-webkit-scrollbar-track]:rounded-full
            [&::-webkit-scrollbar-track]:bg-gray-100
            [&::-webkit-scrollbar-thumb]:rounded-full
            [&::-webkit-scrollbar-thumb]:bg-gray-300
            light:[&::-webkit-scrollbar-track]:bg-neutral-700
            light:[&::-webkit-scrollbar-thumb]:bg-neutral-500">

                {/*1.upper section - contains title, description*/}
                <div className="flex space-x-3">
                    {/*title and description*/}
                    <div className="text-sm  flex flex-col justify-end p-2">
                        <p className="text-2xl">{cityName}</p>
                        <p className="text-lg"><strong>{countryName}</strong></p>
                        <p className="text-xs">{description}</p>
                    </div>
                    
                </div>

                {/*2.lower section - contains an image and weather*/}
                <div className=" flex space-x-3">

                    {/*an image*/}
                    <div className="w-[60%]">
                    <img src={cityImage} className="rounded-md shadow-md shadow-black/30" alt=""></img>
                    </div>
                    
                    {/*weather*/}
                    <WeatherBox
                        degrees="30" status="sunny"
                    />
                    
                </div>
            </div>
        </div>
    </div>
    );
}

export default AboutPage;
