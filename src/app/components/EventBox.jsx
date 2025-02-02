"use client";
import React, { useState, useEffect } from "react";

const EventBox = ({
  eventImage,
  eventName,
  eventLocation,
  eventDate,
  eventTime,
  eventLink,
  description,
}) => {
  const [isValidImage, setIsValidImage] = useState(true);

  const validateImage = async (url) => {
    try {
      const res = await fetch(url, { method: "HEAD" });
      if (res.ok && res.headers.get("content-type").startsWith("image")) {
        setIsValidImage(true);
      } else {
        setIsValidImage(false);
      }
    } catch (error) {
      setIsValidImage(false);
    }
  };

  useEffect(() => {
    if (eventImage) {
      validateImage(eventImage);
    }
  }, [eventImage]);

  return (
    <div
      id="event"
      className="min-h-fit flex space-x-3 bg-white rounded-md p-1
      shadow-md shadow-black/20"
    >
      {isValidImage ? (
        <img
          alt={eventName}
          src={eventImage}
          className="w-64 h-32 object-cover rounded-md shadow-md shadow-black/20"
        />
      ) : (
        <div
          className="w-64 h-32 flex items-center justify-center bg-gray-200
          text-gray-700 text-sm font-semibold rounded-md shadow-md shadow-black/20"
        >
          Image not available
        </div>
      )}
      <div className="space-y-0.5">
        <h1 className="">{eventName}</h1>
        <p className="text-xs">{eventLocation}</p>
        <p className="text-xs">{eventDate}</p>
        <p className="text-xs">{eventTime}</p>
        <p className="text-xs">{description}</p>
        <br />
      </div>
    </div>
  );
};

export default EventBox;
