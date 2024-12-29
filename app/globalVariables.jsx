import React, { createContext, useContext, useState } from "react";

/* contains global variables to be accessed by all pages.
 has default values */

const GlobalContext = createContext();
export const GlobalProvider = ({ children }) => {

  // about page data
    const [cityName, setCityName] = useState("Barcelona");
  const [countryName, setCountryName] = useState("Spain");
  const [cityDescription, setCityDescription] = useState("When it comes to history, art, and architecture, Barcelona delivers. There’s Gaudí’s iconic Basílica de la Sagrada Familia, the Picasso Museum, and the Gothic Quarter. But look beyond the landmarks and busy mercados and you’ll notice how nature steals the show—the city’s literally surrounded by it. On one side you’ve got three miles of gorgeous sandy beaches that give the neighboring Balearic Islands a run for their money, and on the other, the Serra de Collserola mountains, home to Parc de Collserola—one of the biggest city parks in the world. It’s probably why bike culture’s big here: Over 180 miles of bike lanes make it easy to get around the Catalan capital. Spend a low-key afternoon cruising the revamped La Rambla (you’ll have to walk your bike once you hit the pedestrian-only drag) and stop for tapas and sangria.");
  const [cityImageURL, setCityImageURL] = useState("https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1c/ae/5d/da/caption.jpg?w=2400&h=1000&s=1");

  // events page data
  const [eventsArray, setEventsArray] = useState([
    { eventImage: "https://www.rollingstone.com/wp-content/uploads/2022/10/Post-Pandemic-and-Beyond-Looking-Ahead-to-the-Future-of-Live-Concerts.jpg",
        eventName: "Malmö Redhawks-Växjö Lakers",
        eventLocation: "Malmö Arena",
        eventDate: "2024/12/06",
        eventTime: "15:15",
        eventLink: "" },
  ]);

  // attractions page data
  const [attractionsArray, setAttractionsArray] = useState([
    { attractionImage: "https://images.travelandleisureasia.com/wp-content/uploads/sites/5/2024/04/01173504/barcelona-beautiful-places-1.jpeg",
        attractionName: "Basílica de la Sagrada Familia",
        attractionDescription: "Basilica de la Sagrada Familia is a church devoted to the Holy Family. One of Antoni Gaudi’s most famous works, the church is perhaps best known for still being under construction since 1882—with works funded purely by donations. Take a lift to the top of the towers for a panoramic view of the city and marvel at the ornate architecture. The nativity facade and crypt have also been awarded UNESCO World Heritage Status. Skip the line with a pre-booked tour with tower access, or combine your visit with another of Gaudi's work, Parc Guell.",
        attractionLink: "",},
  ]);

  return (
    <GlobalContext.Provider value={{ cityName, setCityName, countryName, setCountryName, cityDescription, setCityDescription,
                                    cityImageURL, setCityImageURL, eventsArray, setEventsArray, attractionsArray, setAttractionsArray }}>
      {children}
    </GlobalContext.Provider>
  );
};


export const useGlobalContext = () => {
  return useContext(GlobalContext);
};
