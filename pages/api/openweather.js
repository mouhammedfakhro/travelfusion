import { useState } from 'react';

export default function WeatherForecast() {
  const [city, setCity] = useState('');
  const [forecast, setForecast] = useState(null);
  const [error, setError] = useState(null);

  const fetchForecast = async () => {
    setError(null); // Rensa tidigare fel
    try {
      const apiKey = process.env.NEXT_PUBLIC_OPENWEATHER_API_KEY; // Hämta API-nyckel från miljövariabler
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${apiKey}`
      );

      if (!res.ok) {
        throw new Error('Kunde inte hämta väderdata. Kontrollera stadens namn.');
      }

      const data = await res.json();
      setForecast(data); // Uppdatera prognosdata
    } catch (err) {
      setForecast(null); // Töm prognosdata vid fel
      setError(err.message); // Visa felmeddelande
    }
  };

  return (
    <div>
      <h1>Weather Forecast</h1>
      <input
        type="text"
        placeholder="Enter city"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button onClick={fetchForecast}>Get weather</button>

      {error && <p style={{ color: 'red' }}>Fel: {error}</p>}

      {forecast && (
        <div>
          <h2>{forecast.city.name}</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px' }}>
            {forecast.list
              .filter((_, index) => index % 8 === 0) // Filtrera ut 1 tidpunkt per dag
              .map((weather, index) => (
                <div key={index} style={{ border: '1px solid #ccc', padding: '10px' }}>
                  <h3>{new Date(weather.dt * 1000).toLocaleDateString()}</h3>
                  <p>{weather.weather[0].description}</p>
                  <p>Temperature: {Math.round(weather.main.temp)}°C</p>
                  <p>Humidity: {weather.main.humidity}%</p>
                </div>
              ))}
          </div>
        </div>
      )}
    </div>
  );
}
