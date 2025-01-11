const apiKey = process.env.GOOGLE_EVENTS_API_KEY;

export async function getEventDetails(city, startDate, endDate) {
    try {
      const url = `https://api.hasdata.com/scrape/google/events?q=Events in ${city}&location=${city}`;
  
      const response = await fetch(url, {
        method: "GET",
        headers: {
          "x-api-key": apiKey, 
          "Content-Type": "application/json", 
        },
      });
  
      if (!response.ok) {
        throw new Error(`Error: ${response.status} ${response.statusText}`);
      }
  
      const data = await response.json();
  
      if (data?.eventsResults) {
        const eventPromises = data.eventsResults.map(async (event) => {
          const { title, thumbnail, address, description, venue, link, date } = event;
  
          // Parse the date string from the event
          const eventDate = new Date(`${new Date().getFullYear()}-${date.startDate}`);
  
          // Parse startDate and endDate into Date objects
          const start = new Date(startDate);
          const end = new Date(endDate);
  
          if (eventDate >= start && eventDate <= end) {
            return {
              title,
              thumbnail,
              address,
              description,
              venue,
              link,
              date
            };
          }
  
          return null;
        });
  
        const filteredEvents = (await Promise.all(eventPromises)).filter((event) => event !== null);
  
        return filteredEvents;
      }
  
      return null;
    } catch (error) {
      console.error("API-request failed:", error.message);
      return `Error: ${error.message}`;
    }
  }
  
