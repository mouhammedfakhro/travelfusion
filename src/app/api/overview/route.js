import { getID, getDesAndCountry } from "../../../../utils/fetchTripAdvisor.js";

import {
  getIDGoogle,
  getImageRef,
  getImageAsImage,
} from "../../../../utils/fetchFromGoogle.js";

export async function GET(req, res) {
  const id = await getID("malmö");
  const overviewInfo = await getDesAndCountry(id);

  //const googleID =  await getIDGoogle('beirut');
  // const imageRef = await getImageRef(googleID);

  //res.setHeader("Content-Type", "image/jpeg");
  //res.send(imageRef);
  //res.status(200).json({overvieInfo, imageRef});
  return new Response(
    JSON.stringify(overviewInfo, {
      status: 200,
      headers: { "Content-Type": "application/json" },
    })
  );
}
