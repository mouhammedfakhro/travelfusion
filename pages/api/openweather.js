import { useState } from 'react';

export default function CurrentWeather() {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);

  const fetchWeather = async () => {
    setError(null); 
    try {
      const apiKey = process.env.NEXT_PUBLIC_OPENWEATHER_API_KEY; 
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`
      );

      if (!res.ok) {
        throw new Error('Kunde inte hämta väderdata. Kontrollera stadens namn.');
      }

      const data = await res.json();
      setWeather(data); // Uppdatera väderdata
    } catch (err) {
      setWeather(null); // Töm väderdata vid fel
      setError(err.message); // Visa felmeddelande
    }
  };

  return (
    <div>
      <h1>Aktuellt väder</h1>
      <input
        type="text"
        placeholder="Ange stad"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button onClick={fetchWeather}>Hämta väder</button>

      {error && <p style={{ color: 'red' }}>Fel: {error}</p>}

      {weather && (
        <div>
          <h2>Väder i {weather.name}</h2>
          <p>{weather.weather[0].description}</p>
          <p>Temperatur: {weather.main.temp}°C</p>
          <p>Fuktighet: {weather.main.humidity}%</p>
        </div>
      )}
    </div>
  );
}
