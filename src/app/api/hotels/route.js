import { createHotelObjects } from "../../../../utils/fetchTripAdvisor";

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const location = searchParams.get("location");
  const hotels = await createHotelObjects(location);

  if (!hotels) {
    return new Response(
      JSON.stringify({
        error: "Error fetching hotels. Please enter a valid location.",
      }),
      {
        status: 400,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }

  return new Response(
    JSON.stringify({
      hotels,
    }),
    {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
}
