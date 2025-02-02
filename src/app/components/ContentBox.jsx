"use client";
import React from "react";

const ContentBox = ({
  contentImage,
  contentName,
  contentDescription,
  contentLink,
}) => {
  return (
    <div
      className="min-h-fit flex space-x-3 bg-white rounded-md p-1
      shadow-md shadow-black/20"
    >
      <img
        alt=""
        src={contentImage}
        className="w-[25%] aspect-auto object-cover rounded-md shadow-md shadow-black/20"
      ></img>

      <div className="space-y-0.5">
        <h1 className="text-lg">
          {contentName}
        </h1>
        <p className="text-xs">
          {contentDescription}
        </p>
       {contentLink && (
         <button
          id="link-button"
          className="w-fit h-fit bg-sky-800 text-white text-sm justify-self-end
                                rounded-md p-2 hover:bg-sky-700
                                shadow-black/20 shadow-sm"
          onClick={() => window.open(contentLink, "_blank")}
        >
          Read More
        </button>
       )}
      </div>
    </div>
  );
};

export default ContentBox;
