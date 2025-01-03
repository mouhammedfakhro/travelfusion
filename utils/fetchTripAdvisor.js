const apiKey = "66AAEE6BF4B449879C185EC041EE876F";

export async function getID(city) {
  try {
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
    const url ="https://api.content.tripadvisor.com/api/v1/location/" +id +`/details?language=en&currency=USD&key=${apiKey}`;
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
  try{
  const imageURL =`https://api.content.tripadvisor.com/api/v1/location/` +id +`/photos?key=${apiKey}&language=en`;
  const imageResponse = await fetch(imageURL);
  const imageData = await imageResponse.json();

  const firstOriginalImageUrl = imageData.data[0].images.original.url;
  //const firstOriginalImageUrl = 'amer';
  return firstOriginalImageUrl;
  } catch (error) {
    console.error(error);
    return "Failed to fetch image";
  }
}

export async function createHotelObjects(city) {
  try{
  const hotelsUrls = `https://api.content.tripadvisor.com/api/v1/location/search?key=${apiKey}&key=66AAEE6BF4B449879C185EC041EE876F&searchQuery=${city}&category=hotels&language=en`;
  const hotelsResponse = await fetch(hotelsUrls);
  const hotelsData = await hotelsResponse.json();

  const hotelPromises = hotelsData.data.map(async (hotel) => {
    const { location_id, name, address_obj } = hotel;
    const addressString = address_obj.address_string;

    const imageUrl = await fetchImageUrlByLocationId(location_id);
    const { description, link, price } = await getReviewAndLinkAndPrice(location_id);


    return {
      name,
      address_string: addressString,
      imageUrl,
      description,
      link,
      price
    };
  });

  return Promise.all(hotelPromises);
} catch (error) {
  console.error(error);
  return "Failed to fetch hotels";
}
}

export async function getRestaurang(city) {
  try{
  const url = `https://api.content.tripadvisor.com/api/v1/location/search?key=${apiKey}&searchQuery=${city}&category=restaurants&language=en`;
  const respons = await fetch(url);
  const data = await respons.json();

  const restaurangPromises = data.data.map(async (restaurang) => {
    const { location_id, name, address_obj } = restaurang;
    const addressString = address_obj.address_string;
    const imageUrl = await fetchImageUrlByLocationId(location_id);
    const { description, link, price } = await getReviewAndLinkAndPrice(location_id);
  
    return {
      name,
      address_string: addressString,
      imageUrl,
      description,
      link,
      price
    };
  });

  return Promise.all(restaurangPromises);
} catch (error) {
  console.error(error);
  return "Failed to fetch restaurants";
}
}

export async function getAttractions(city) {

  try{
  const url =`https://api.content.tripadvisor.com/api/v1/location/search?key=${apiKey}&searchQuery=` +city +`&category=attractions&language=en`;
  const respons = await fetch(url);
  const data = await respons.json();

  const attractionPromises = data.data.map(async (attraction) => {
    const { location_id, name, address_obj } = attraction;
    const addressString = address_obj.address_string;

    const imageUrl = await fetchImageUrlByLocationId(location_id);
    const { description, link, price } = await getReviewAndLinkAndPrice(location_id);

    return {
      name,
      address_string: addressString,
      imageUrl,
      description, 
      link,
      price
    };
  });
  return Promise.all(attractionPromises);
}catch (error) {
    console.error(error);
    return "Failed to fetch attractions";
  }
}

export async function getReviewAndLinkAndPrice(id) {
  try{
  
  const url = `https://api.content.tripadvisor.com/api/v1/location/${id}/details?key=${apiKey}&language=en&currency=USD`;
  const respons = await fetch(url);
  const data = await respons.json();
  
  let description = data.description;
  let link = data.web_url;
  let price = data.price_level;

  if(price === undefined){
    price = "No price available";
  }
  if(description === undefined){
    description = "No descripton available";
  }
  if(link === undefined){
    link = "No link available";
  }
 
  return {
    description: description, 
    link: link,
    price: price
  };
}catch (error) {
    console.error(error);
    return "Failed to fetch review, link and price";
  }
  
}


