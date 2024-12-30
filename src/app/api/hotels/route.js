import { createHotelObjects } from "../../../../utils/fetchTripAdvisor";

export async function GET(req, res) {
  const restaurang = await createHotelObjects("Malmö");
  console.log(restaurang);

  return new Response(
    JSON.stringify(restaurang, {
      status: 200,
      headers: { "Content-Type": "application/json" },
    })
  );
}
