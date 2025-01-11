"use client";
import { useSearchParams } from "next/navigation";
import EventBox from "../components/EventBox";
import Sidebar from "../components/Sidebar";
import "../global.css";
import React, { Suspense, useEffect, useState } from "react";
import { getEvents } from "../../../lib/api";
import { ClipLoader } from "react-spinners";

function EventsContent() {
  // for each item, adds an ContentBox component and populates it
  const params = useSearchParams();
  const location = params.get("location");
  const startDate = params.get("startDate");
  const endDate = params.get("endDate");

  const [loading, setLoading] = useState(true);
  const [loadingError, setLoadingError] = useState(false);
  const [allEvents, setAllEvents] = useState([]);

  const setUpEvents = async () => {
    if (!location || !startDate || !endDate) {
      console.warn("No location or start/end date specified in the URL parameters.");
      setLoading(false);
      setLoadingError(true);
      return;
    }

    try {
      const events = await getEvents(location, startDate, endDate);
      console.log(events.events);
      setAllEvents(events.events);
    } catch (error) {
      console.error("Failed to fetch events:", error);
      setLoadingError(true);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    setUpEvents();
  }, []);

  const renderEvents = () => {
    if (allEvents.length > 0) {
      return allEvents.map((event, index) => {
        return (
          <EventBox
            key={event.id || index} 
            eventImage={
              event.thumbnail || "https://placehold.co/600x400"
            }
            eventName={event.title}
            eventLink={event.venue.link}
            description={event.description}

            eventLocation={event.address[0]}
            eventDate={event.date.when}
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
              {renderEvents()}
            </div>
          )}

        </div>
      </div>
    </div>
  );
}





function eventsPage() {
  return (
    <Suspense fallback={<div className="text-center mt-8"><ClipLoader color="#36d7b7" size={50} /> Loading...</div>}>
      <EventsContent />
    </Suspense>
  );
}


export default eventsPage;
