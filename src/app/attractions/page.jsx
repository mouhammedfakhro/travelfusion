"use client";
import { useSearchParams } from "next/navigation";
import ContentBox from "../components/ContentBox";
import Sidebar from "../components/Sidebar";
import "../global.css";
import React, { Suspense, useEffect, useState } from "react";
import { getAttractions } from "../../../lib/api";
import { ClipLoader } from "react-spinners";

function AttractionsContent() {
  // for each item, adds an ContentBox component and populates it
  const params = useSearchParams();
  const location = params.get("location");
  const startDate = params.get("startDate");
  const endDate = params.get("endDate");

  const [loading, setLoading] = useState(true);
  const [loadingError, setLoadingError] = useState(false);
  const [allAttractions, setAllAttractions] = useState([]);

  const setUpAttractions = async () => {
    if (!location) {
      console.warn("No location specified in the URL parameters.");
      setLoading(false);
      setLoadingError(true);
      return;
    }

    try {
      const attractions = await getAttractions(location);
      console.log(attractions.attractions);
      setAllAttractions(attractions.attractions);
    } catch (error) {
      console.error("Failed to fetch attractions:", error);
      setLoadingError(true);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    setUpAttractions();
  }, []);

  const renderAttractions = () => {
    if (allAttractions.length > 0) {
      return allAttractions.map((attraction, index) => {
        return (
          <ContentBox
            key={attraction.id || index} // Use unique ID or fallback to index
            contentImage={
              attraction.imageUrl || "https://placehold.co/600x400"
            }
            contentName={attraction.name}
            contentDescription={attraction.description}
            contentLink={attraction.link}
          />
        );
      });
    }
  };

  return (
    <div className="bg-sky-700 justify-center w-full min-h-screen flex">
      {/*main div contains all contents*/}
      <div className="h-fit  w-[80%] mt-[1%] space-x-2 text-gray-300 flex ">
        {/*div contains all buttons on left*/}
        <Sidebar
          startDate={startDate}
          endDate={endDate}
          selectedCity={location}
        />

        {/*div contains body of the page*/}
        <div
          className={`p-8 rounded-md w-full space-y-2 mb-10
            bg-gradient-to-br from-gray-100 to-blue-200 text-gray-900 overflow-y-scroll
            shadow-md shadow-black/20
            [&::-webkit-scrollbar]:w-2
            [&::-webkit-scrollbar-track]:rounded-full
            [&::-webkit-scrollbar-track]:bg-gray-100
            [&::-webkit-scrollbar-thumb]:rounded-full
            [&::-webkit-scrollbar-thumb]:bg-gray-300
            light:[&::-webkit-scrollbar-track]:bg-neutral-700
            light:[&::-webkit-scrollbar-thumb]:bg-neutral-500
            ${loading || loadingError ? "h-40" : "min-h-screen"}`}
        >
          {loading && (
            <div className="text-center mt-[20px]">
              <ClipLoader color="#36d7b7" loading={loading} size={50} />
              <p>Loading...</p>
            </div>
          )}

          {loadingError && (
            <div className="text-center text-3xl font-bold">
              <p>Failed to load...</p>
            </div>
          )}

          {!loading && !loadingError && (
            <div id="events-div" className="space-y-2">
              {renderAttractions()}
            </div>
          )}

        </div>
      </div>
    </div>
  );
}

function attractionsPage() {
  return (
    <Suspense fallback={<div className="text-center mt-8"><ClipLoader color="#36d7b7" size={50} /> Loading...</div>}>
      <AttractionsContent />
    </Suspense>
  );
}

export default attractionsPage;
