import { useState } from 'react';

export default function GooglePlacesSearch() {
  const [query, setQuery] = useState('');
  const [places, setPlaces] = useState([]);
  const [error, setError] = useState(null);

  const fetchPlaces = async () => {
    setError(null); // Reset previous errors
    try {
      const apiKey = process.env.NEXT_PUBLIC_GOOGLE_PLACES_API_KEY;
      const res = await fetch(
        `https://maps.googleapis.com/maps/api/place/textsearch/json?query=${encodeURIComponent(
          query
        )}&key=${apiKey}`
      );

      if (!res.ok) {
        throw new Error('Failed to fetch places. Please try again.');
      }

      const data = await res.json();

      if (data.status !== 'OK') {
        throw new Error(data.error_message || 'No places found.');
      }

      setPlaces(data.results); // Update places state
    } catch (err) {
      setPlaces([]); // Clear results on error
      setError(err.message); // Display error message
    }
  };

  return (
    <div>
      <h1>Google Places Search</h1>
      <input
        type="text"
        placeholder="Search for a place"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button onClick={fetchPlaces}>Search</button>

      {error && <p style={{ color: 'red' }}>{error}</p>}

      {places.length > 0 && (
        <ul>
          {places.map((place, index) => (
            <li key={index}>
              <h2>{place.name}</h2>
              <p>{place.formatted_address}</p>
              {place.rating && <p>Rating: {place.rating} / 5</p>}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
