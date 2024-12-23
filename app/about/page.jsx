"use client";
import React from "react";
import "../global.css"; 
import { useRouter } from "next/navigation";
import Sidebar from "../components/Sidebar";


function AboutPage() {
    const weatherWidgetClicked = () => {alert("weather widget clicked");}

    // placeholder data
    const cityName = "BARCELONA";
    const countryName = "SPAIN";
    const description = "When it comes to history, art, and architecture, Barcelona delivers. There’s Gaudí’s iconic Basílica de la Sagrada Familia, the Picasso Museum, and the Gothic Quarter. But look beyond the landmarks and busy mercados and you’ll notice how nature steals the show—the city’s literally surrounded by it. On one side you’ve got three miles of gorgeous sandy beaches that give the neighboring Balearic Islands a run for their money, and on the other, the Serra de Collserola mountains, home to Parc de Collserola—one of the biggest city parks in the world. It’s probably why bike culture’s big here: Over 180 miles of bike lanes make it easy to get around the Catalan capital. Spend a low-key afternoon cruising the revamped La Rambla (you’ll have to walk your bike once you hit the pedestrian-only drag) and stop for tapas and sangria.";
    const shortImage = "https://www.cataloniahotels.com/en/blog/wp-content/uploads/2023/12/barcelona-city-overview.jpg";
    const wideImage = "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1c/ae/5d/da/caption.jpg?w=2400&h=1000&s=1";
    const weatherIcon = "https://cdn-icons-png.freepik.com/512/263/263883.png";

    return (
    <div className="bg-blue-950 items-center justify-center w-full h-full min-h-screen flex">

        {/*main div contains all contents*/}
        <div className=" m2 w-[85%] space-x-2 text-gray-300 flex absolute">

            {/*div contains all buttons on left*/}
            <Sidebar/>

            {/*div contains body of the page*/}
            <div className="p-8 rounded-md w-full min-h-full space-y-3
            bg-gradient-to-br from-blue-200 to-blue-400 text-gray-900">

                {/*1.upper section - contains title, description and an image*/}
                <div className="flex space-x-3">
                    {/*title and description*/}
                    <div className="text-sm w-[60%] flex flex-col justify-end p-2">
                        <p className="text-3xl">{cityName}</p>
                        <p className="text-xl"><strong>{countryName}</strong></p>
                        <p className="">{description}</p>
                    </div>
                    {/*an image*/}
                    <div className="w-[40%] flex flex-col justify-end ">
                            <img alt="" src={shortImage} className="w-fit rounded-md"></img>
                    </div>
                </div>

                {/*2.lower section - contains an image and weather*/}
                <div className=" flex space-x-3">

                    {/*an image*/}
                    <div className="w-[60%]">
                    <img src={wideImage} className="rounded-md" alt=""></img>
                    </div>
                    
                    {/*weather*/}
                    <button className="w-[40%] rounded-md flex space-x-10 p-5
                        text-gray-300
                        bg-gradient-to-br from-blue-950 to-blue-800
                        hover:bg-gradient-to-r"
                        onClick={weatherWidgetClicked}>
                        <div className="max-w-[50%]">
                            <p className="text-xl">WEATHER</p>
                            <p className="text-6xl">30°C</p>
                        </div>
                        <div className="">
                            <img alt="" src={weatherIcon}
                            className="max-w-20 mt-[50%]">
                            </img>
                        </div>
                    </button>
                </div>
            </div>
        </div>
    </div>
    );
}

export default AboutPage;
