import { getAttractions } from "../../../../utils/fetchTripAdvisor.js";

export async function GET(req, res) {
  const { searchParams } = new URL(req.url);
  console.log(searchParams);
  const location = searchParams.get("location");
  const attractions = await getAttractions(location);

  return new Response(
    JSON.stringify({
      attractions,
    }),
    {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
}
