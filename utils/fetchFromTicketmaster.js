const apiKey = "u4U7AL6iIbEtHaQWPyPyt6wAFsYUyFZt"

export async function getEventDetails(city, startDate, endDate) {
  try {
    const url = `https://app.ticketmaster.com/discovery/v2/events.json?apikey=${apiKey}&city=${encodeURIComponent(city)}&startDateTime=${startDate}T00:00:00Z&endDateTime=${endDate}T23:59:59Z`;

    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Error: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();

    if (data._embedded && data._embedded.events) {
      return data._embedded.events.map(event => ({
        image: event.images?.[0]?.url || "No image found",
        name: event.name || "Unknown title",
        location: event._embedded?.venues?.[0]?.name || "Unknown location",
        date: event.dates?.start?.localDate || "Unknown date",
        time: event.dates?.start?.localTime || "Unknown time",
        link: event.url || "Event-link not found"
      }));
    } else {
      return ["Something went wrong whem fetching the data"];
    }
  } catch (error) {
    console.error("API-request failed:", error.message);
    return (`Error: ${error.message}`);
  }
}
