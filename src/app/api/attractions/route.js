import { getAttractions } from "../../../utils/fetchTripAdvisor.js";

export default async function GET(req, res) {
  const attractions = await getAttractions("malmö");
  res.status(200).json({ attractions });
  console.log(attractions);
}
