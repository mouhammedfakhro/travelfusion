export default async function handler(req, res) {
  const { city, date } = req.query; 
  const apiKey = process.env.NEXT_PUBLIC_OPENWEATHER_API_KEY;


  if (!city) {
    return res.status(400).json({ error: 'City parameter is required' });
  }


  try {
    const forecastRes = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${apiKey}`
    );


    if (!forecastRes.ok) {
      throw new Error('Error fetching data from OpenWeather API');
    }

    const forecastData = await forecastRes.json();


    if (date) {
      const filteredData = forecastData.list.filter((item) => {
        const forecastDate = new Date(item.dt * 1000).toISOString().split('T')[0]; 
        return forecastDate === date; 
      });

      return res.status(200).json({
        city,
        forecast: filteredData, 
      });
    }


    return res.status(200).json({
      city,
      forecast: forecastData.list, 
    });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}
