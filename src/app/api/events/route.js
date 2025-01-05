import { getEventDetails } from "../../../../utils/fetchFromTicketMaster.js";

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const location = searchParams.get("location");
  const startDate = searchParams.get("startDate");
  const endDate = searchParams.get("endDate");
  const events = await getEventDetails(location, startDate, endDate);

  if (!events) {
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
        events,
    }),
    {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
}
