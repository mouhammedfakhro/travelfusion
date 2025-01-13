import axios from "axios";

export async function getLocationDetails(locationName) {
  try {
    const response = await axios.get("/api/overview", {
      params: {
        location: locationName,
      },
    });
    
    if (response.data) {
      return response.data;
    }

    return null;
  } catch (error) {
    console.error("Error fetching location details.");
  }
}

export async function getAttractions(locationName) {
  try {
    const response = await axios.get("/api/attractions", {
      params: {
        location: locationName,
      },
    });
    
    if (response.data) {
      return response.data;
    }

    return null;
  } catch (error) {
    console.error("Error fetching attractions.");
  }
}

export async function getRestaurants(locationName) {
  try {
    const response = await axios.get("/api/restaurants", {
      params: {
        location: locationName,
      },
    });
    
    if (response.data && response.data?.restaurants) {
      return response.data.restaurants;
    }

    return null;
  } catch (error) {
    console.error("Error fetching restaurants.");
  }
}

export async function getHotels(locationName) {
  try {
    const response = await axios.get("/api/hotels", {
      params: {
        location: locationName,
      },
    });
    
    if (response.data) {
      return response.data;
    }

    return null;
  } catch (error) {
    console.error("Error fetching hotels.");
  }
}

export async function getEvents(locationName, startDate, endDate) {
  try {
    const response = await axios.get("/api/events", {
      params: {
        location: locationName,
        startDate: startDate,
        endDate: endDate
      },
    });
    
    if (response.data) {
      return response.data;
    }

    return null;
  } catch (error) {
    console.error("Error fetching events.");
  }
}
