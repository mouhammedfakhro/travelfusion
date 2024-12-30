"use client";
import FoodBox from "../components/FoodBox";
import Sidebar from "../components/Sidebar";
import "../global.css";
import React from "react";

function FoodPage() {

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
                
                <FoodBox
                foodImage="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/21/78/55/6e/la-selva-corcega-steakhouse.jpg?w=1400&h=800&s=1"
                placeName="Braseria La Selva Corcega Barcelona"
                foodType="Steakhouse, Barbecue"
                priceRange="$$-$$$"
                description="-"
                foodLink="https://www.tripadvisor.com/Restaurant_Review-g187497-d23765322-Reviews-Braseria_La_Selva_Corcega_Barcelona-Barcelona_Catalonia.html"
                />

                <FoodBox/><FoodBox/><FoodBox/><FoodBox/><FoodBox/><FoodBox/><FoodBox/><FoodBox/>
                               
            </div>
        </div>
    </div>
    );
}

export default FoodPage;
