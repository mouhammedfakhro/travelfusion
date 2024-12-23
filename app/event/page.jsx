"use client";
import "../global.css";
import React from "react";

function ResultPage() {

    // buttons clicked
    const aboutClicked = () => {alert("about clicked");}
    const eventsClicked = () => {alert("events clicked");}
    const attractionsClicked = () => {alert("attractions clicked");}
    const foodClicked = () => {alert("food clicked");}
    const hotelClicked = () => {alert("hotel clicked");}
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
            <div className="w-[15%] text-m space-y-1">
                {/*about*/}
                <button id="about-button" className="w-full bg-blue-800 rounded-md p-2
                hover:text-gray-800 hover:bg-blue-200"
                onClick={aboutClicked}>ABOUT</button>

                {/*events*/}
                <button id="events-button" className="w-full bg-blue-200 rounded-md p-2 
                text-gray-800 hover:text-gray-800 hover:bg-blue-200"
                onClick={eventsClicked}>EVENTS</button>

                {/*attractions*/}
                <button id="attractions-button" className="w-full bg-blue-800 rounded-md p-2
                hover:text-gray-800 hover:bg-blue-200"
                onClick={attractionsClicked}>ATTRACTIONS</button>

                {/*food*/}
                <button id="food-button" className="w-full bg-blue-800 rounded-md p-2
                hover:text-gray-800 hover:bg-blue-200"
                onClick={foodClicked}>FOOD</button>

                {/*hotel*/}
                <button id="hotel-button" className="w-full bg-blue-800 rounded-md p-2
                hover:text-gray-800 hover:bg-blue-200"
                onClick={hotelClicked}>HOTEL</button>
            </div>

            {/*div contains body of the page*/}
            <div className="p-8 rounded-md w-full min-h-full space-y-3
            bg-gradient-to-br from-blue-800 to-blue-400 text-gray-900">

                <div className="sticky bg-blue-100 rounded-full justify-center items-center flex w-[8%] aspect-square text-sm">
                    23 DEC
                </div>

                
                
            </div>
        </div>
    </div>
    );
}

export default ResultPage;
