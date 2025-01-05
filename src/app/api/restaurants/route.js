import { getRestaurants } from "../../../../utils/fetchTripAdvisor";

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const location = searchParams.get("location");
  const restaurants = await getRestaurants(location);

  console.log(restaurants);
  if (!restaurants) {
    return new Response(
      JSON.stringify({
        error: "Error fetching restaurants. Please enter a valid location.",
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
      restaurants,
    }),
    {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
}
