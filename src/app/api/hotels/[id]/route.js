import { useSearchParams } from "next/navigation";
import { createHotelObjects } from "../../../../utils/fetchTripAdvisor";

export async function GET(req, res) {
  const { searchParams } = useSearchParams();
  console.log(searchParams);
  const restaurang = await createHotelObjects("Malmö");
  console.log(restaurang);

  return new Response(
    JSON.stringify(restaurang, {
      status: 200,
      headers: { "Content-Type": "application/json" },
    })
  );
}
