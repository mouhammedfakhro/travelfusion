const apiKey = "CD678A669501410DA16D6EBE3DF571D5";

export async function getCityID(city) {
  try {
    const url = `https://api.content.tripadvisor.com/api/v1/location/search?key=${apiKey}&searchQuery=${city}&language=en`;
    const response = await fetch(url);
    const data = await response.json();
    if (data.data && data.data[0]) {
      const firstLocation = data.data[0];
      const locationId = firstLocation.location_id;
      return locationId;
    }
  } catch (error) {
    console.error(error);
  }
}

export async function getDesAndCountry(id) {
  try {
    const url = `https://api.content.tripadvisor.com/api/v1/location/${id}/details?language=en&currency=USD&key=${apiKey}`;

    const tripResponse = await fetch(url);
    const tripData = await tripResponse.json();

    if (
      tripData.description &&
      tripData.name &&
      tripData.address_obj?.country
    ) {
      return {
        country: tripData.address_obj.country,
        description: tripData.description,
        city: tripData.name,
        image: await fetchImageUrlByLocationId(id),
      };
    }

    // If required fields are missing
    return null;
  } catch (error) {
    console.error("Error fetching location details:", error);
    return null;
  }
}

export async function fetchImageUrlByLocationId(id) {
  try {
    const imageURL = `https://api.content.tripadvisor.com/api/v1/location/${id}/photos?key=${apiKey}&language=en`;

    const imageResponse = await fetch(imageURL);
    const imageData = await imageResponse.json();

    // Validate data structure
    if (!imageData?.data?.length) {
      console.warn(`No images found for ID: ${id}`);
      return null; // Return null if no images are found
    }

    // Safely extract image URLs
    const firstImage = imageData.data[0];
    const firstOriginalImageUrl =
      firstImage?.images?.original?.url ||
      firstImage?.images?.large?.url ||
      null; // Fallback to null if no valid image is found

    if (!firstOriginalImageUrl) {
      console.warn(`No valid image URL found for ID: ${id}`);
      return null;
    }

    return firstOriginalImageUrl;
  } catch (error) {
    console.error(`Error in fetchImageUrlByLocationId for ID ${id}:`, error);
    return null; // Return null on any error
  }
}

export async function createHotelObjects(city) {
  try {
    const hotelsUrls = `https://api.content.tripadvisor.com/api/v1/location/search?key=${apiKey}&key=66AAEE6BF4B449879C185EC041EE876F&searchQuery=${city}&category=hotels&language=en`;
    const hotelsResponse = await fetch(hotelsUrls);
    const hotelsData = await hotelsResponse.json();

    if (hotelsData?.data) {
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
  } catch (error) {
    console.error("Error fetching hotels: " + error);
  }
}

export async function getRestaurants(city) {
  //const encodedCity = encodeURIComponent(city);
  try {
    const url = `https://api.content.tripadvisor.com/api/v1/location/search?key=${apiKey}&searchQuery=${city}&category=restaurants&language=en`;
    const response = await fetch(url);
    const data = await response.json();
  
    if (data?.data) {
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
  } catch (error) {
    console.error("Error fetching restaurants: " + error);
  }
}

export async function getReviewAndLinkAndPrice(id) {
  try {
    const url = `https://api.content.tripadvisor.com/api/v1/location/${id}/details?key=${apiKey}&language=en&currency=USD`;
    const response = await fetch(url);
    const data = await response.json();

    const detail = data;
    if (!detail) {
      console.warn(`No details available for ID: ${id}`);
      return {
        description: "No description available",
        link: "No link available",
        price: "No price available",
      };
    }

    const description = detail.description || "No description available";
    const link = detail.web_url || "No link available";
    const price = detail.price_level || "No price available";

    return {
      description,
      link,
      price,
    };
  } catch (error) {
    console.error(
      `Error fetching review, link, and price for ID ${id}:`,
      error
    );
    return {
      description: "No description available",
      link: "No link available",
      price: "No price available",
    };
  }
}

export async function getAttractions(city) {
  const url =
    `https://api.content.tripadvisor.com/api/v1/location/search?key=${apiKey}&searchQuery=` +
    city +
    `&category=attractions&language=en`;
  const respons = await fetch(url);
  const data = await respons.json();
  //console.log(data);

  if (data?.data) {
    const attractionPromises = data.data.map(async (attraction) => {
      const { location_id, name, address_obj } = attraction;
      const addressString = address_obj.address_string;
      const imageUrl = await fetchImageUrlByLocationId(location_id);
      const { description, link, price } = await getReviewAndLinkAndPrice(
        location_id
      );

      return {
        name,
        address_string: addressString,
        imageUrl,
        description,
        link,
        price,
      };
    });

    return Promise.all(attractionPromises);
  }
  return null;
}
