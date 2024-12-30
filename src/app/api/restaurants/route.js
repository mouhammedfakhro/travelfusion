import { getRestaurang } from "../../../utils/fetchTripAdvisor.js";

export default async function handler(req, res) {
  //const city = req.query
  const restaurangs = await getRestaurang("malmö");
  console.log(restaurangs);
  res.status(200).json({ restaurangs });
}
