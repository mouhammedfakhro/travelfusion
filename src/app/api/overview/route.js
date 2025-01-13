import {
  getCityID,
  getDesAndCountry,
} from "../../../../utils/fetchTripAdvisor.js";

import { getWeather } from "../../../../utils/fetchWeather.js";

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const location = searchParams.get("location");

  const id = await getCityID(location);
  if (!id) {
    return new Response(
      JSON.stringify({
        error: "Location ID not found. Please provide a valid city name.",
      }),
      {
        status: 400,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }

  const overviewInfo = await getDesAndCountry(id);
  console.log(overviewInfo);
  if (!overviewInfo) {
    return new Response(
      JSON.stringify({
        error: "Location details not found.",
      }),
      {
        status: 400,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }

  const combinedData = {
    ...overviewInfo,
    weather: await getWeather(location) || "Not available",
  }

  return new Response(
    JSON.stringify(combinedData, {
      status: 200,
      headers: { "Content-Type": "application/json" },
    })
  );
}
