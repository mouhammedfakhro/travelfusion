import { getID, getAttractions } from "../../../utils/fetchTripAdvisor.js";

export default async function handler(req, res) {
  const city = req.query;
  const attractions = await getAttractions("malmö");
  res.status(200).json({ attractions });
  console.log(attractions);
}
