const apiKey = "6275F32A7C734D788D9ADCCBDC2B76F4";

export async function getID(city) {
  try {
    //const encodedCity = encodeURIComponent(city);
    const url = `https://api.content.tripadvisor.com/api/v1/location/search?key=${apiKey}&searchQuery=${city}&language=en`;
    const response = await fetch(url);
    const data = await response.json();
    const firstLocation = data.data[0];
    const locationId = firstLocation.location_id;
    return locationId;
  } catch (error) {
    console.error(error);
    return "Failed to fetch id";
  }
}
export async function getDesAndCountry(id) {
  try {
    const url =
      "https://api.content.tripadvisor.com/api/v1/location/" +
      id +
      `/details?language=en&currency=USD&key=${apiKey}`;
    //hämta beskriving och landet.
    const tripResponse = await fetch(url);
    const tripData = await tripResponse.json();
    const description = tripData.description;
    const country = tripData.address_obj.country;

    return {
      country: country,
      description: description,
      pic: await fetchImageUrlByLocationId(id),
    };
  } catch (error) {
    console.error(error);
    return "Failed to fetch destination";
  }
}

export async function fetchImageUrlByLocationId(id) {
  //const imageURL = `https://api.content.tripadvisor.com/api/v1/${id}/photos?key=66AAEE6BF4B449879C185EC041EE876F&language=en`;
  const imageURL =
    `https://api.content.tripadvisor.com/api/v1/location/` +
    id +
    `/photos?key=${apiKey}&language=en`;

  const imageResponse = await fetch(imageURL);
  const imageData = await imageResponse.json();
  // console.log(id);
  // console.log(imageData);
  const firstOriginalImageUrl = imageData.data[0].images.original.url;
  //const firstOriginalImageUrl = 'amer';
  return firstOriginalImageUrl;
}

export async function createHotelObjects(city) {
  const hotelsUrls = `https://api.content.tripadvisor.com/api/v1/location/search?key=${apiKey}&key=66AAEE6BF4B449879C185EC041EE876F&searchQuery=${city}&category=hotels&language=en`;
  const hotelsResponse = await fetch(hotelsUrls);
  const hotelsData = await hotelsResponse.json();

  const hotelPromises = hotelsData.data.map(async (hotel) => {
    const { location_id, name, address_obj } = hotel;
    const addressString = address_obj.address_string;
    const imageUrl = await fetchImageUrlByLocationId(location_id);

    return {
      name,
      address_string: addressString,
      imageUrl,
    };
  });

  return Promise.all(hotelPromises);
}

export async function getRestaurang(city) {
  //const encodedCity = encodeURIComponent(city);
  const url = `https://api.content.tripadvisor.com/api/v1/location/search?key=${apiKey}&searchQuery=${city}&category=restaurants&language=en`;
  const respons = await fetch(url);
  const data = await respons.json();

  const restaurangPromises = data.data.map(async (restaurang) => {
    const { location_id, name, address_obj } = restaurang;
    const addressString = address_obj.address_string;
    const imageUrl = await fetchImageUrlByLocationId(location_id);

    return {
      name,
      address_string: addressString,
      imageUrl,
    };
  });

  return Promise.all(restaurangPromises);
}

export async function getAttractions(city) {
  const encodedCity = encodeURIComponent;
  const url =
    `https://api.content.tripadvisor.com/api/v1/location/search?key=${apiKey}&searchQuery=` +
    city +
    `&category=attractions&language=en`;
  const respons = await fetch(url);
  const data = await respons.json();
  //console.log(data);

  const attractionPromises = data.data.map(async (attraction) => {
    const { location_id, name, address_obj } = attraction;
    const addressString = address_obj.address_string;
    const imageUrl = await fetchImageUrlByLocationId(location_id);

    return {
      name,
      address_string: addressString,
      imageUrl,
    };
  });
  return Promise.all(attractionPromises);
}
