export async function getIDGoogle(city) {
  const url =
    "https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=+city+&inputtype=textquery&key=AIzaSyDEYsSvIa8UyTN2ABBU-ER60NlfgikoTWQ";
  const response = await fetch(url);
  const data = await response.json();
  return data.candidates[0].place_id;
}

export async function getImageRef(id) {
  const url =
    "https://maps.googleapis.com/maps/api/place/details/json?placeid=+id+&key=AIzaSyDEYsSvIa8UyTN2ABBU-ER60NlfgikoTWQ";
  const response = await fetch(url);
  const data = await response.json();
  const imageRef = data.result.photos[0].photo_reference;
  //const image = getImageUrl(imageRef);
  const image = getImageAsImage(imageRef);
  return image;
}

export async function getImageUrl(imageRef) {
  const url =
    "https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=+imageRef+&key=AIzaSyDEYsSvIa8UyTN2ABBU-ER60NlfgikoTWQ";
  return url;
}

export async function getImageAsImage(imageRef) {
  console.log(imageRef);
  const url =
    "https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference=+imageRef+&key=AIzaSyDEYsSvIa8UyTN2ABBU-ER60NlfgikoTWQ";
  const response = await fetch(url);

  const arrayBuffer = await response.arrayBuffer();
  const imageBuffer = Buffer.from(arrayBuffer);
  return imageBuffer;
}
