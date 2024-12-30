import axios from "axios";

export async function getLocationDetails(locationName) {
  try {
    const response = await axios.get("/api/location/details", {
      params: {
        location: locationName,
      },
    });

    return response.data;
  } catch (error) {
    console.error("Error fetching location details:", error.response?.data || error.message);
  }
}
