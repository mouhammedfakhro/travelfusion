const apiKey = "e2122c11dee270408b1b8a473b2d4e70";

export async function getWeather(location) {
  try {
    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${apiKey}`
    );

    if (!res.ok) {
      throw new Error("Kunde inte hämta väderdata. Kontrollera stadens namn.");
    }

    const data = await res.json();
    if (data && data.weather) {
      return {
        condition: data.weather[0].main,
        description: data.weather[0].description,
        temperature: data.main?.temp,
      }
    }

    return null;
  } catch (error) {
    console.log("Error fetching weather data: ", error);
  }
}
