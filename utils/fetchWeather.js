const apiKey = process.env.OPENWEATHER_API_KEY;

async function convertLocationToLatLon(location) {
  try {
    const res = await fetch(
      `http://api.openweathermap.org/geo/1.0/direct?q=${location}&appid=${apiKey}`
    );

    if (!res.ok) {
      throw new Error(
        "Kunde inte hämta longitude och latitude. Kontrollera stadens namn."
      );
    }

    const data = await res.json();
    if (data.length > 0 && data[0].lat && data[0].lon) {
      return { lat: data[0].lat, lon: data[0].lon };
    }

    return null;
  } catch (error) {
    console.log("Error fetching lon, lat data: ", error);
    return null;
  }
}

export async function getWeather(location) {
  try {
    const { lon, lat } = await convertLocationToLatLon(location);
    if (!lon || !lat) {
      throw new Error("Invalid latitude or longitude.");
    }

    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`
    );

    if (!res.ok) {
      throw new Error("Failed to fetch weather data.");
    }

    const data = await res.json();

    const dailyForecast = data.list.reduce((acc, entry) => {
      const date = entry.dt_txt.split(" ")[0];
      if (!acc[date]) {
        acc[date] = [];
      }
      acc[date].push(entry);
      return acc;
    }, {});

    const fiveDayForecast = Object.keys(dailyForecast).map((date) => {
      const dayData = dailyForecast[date];

      const middayData =
        dayData.find((entry) => entry.dt_txt.includes("12:00:00")) || dayData[0];

      return {
        date,
        condition: middayData.weather[0].main,
        description: middayData.weather[0].description,
        temperature: middayData.main.temp, 
      };
    });

    return fiveDayForecast;
  } catch (error) {
    console.log("Error fetching weather data: ", error);
    return null;
  }
}

