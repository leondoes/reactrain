import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar';
import WeatherDisplay from './WeatherDisplay.js';

const apiKey = process.env.REACT_APP_WEATHER_API_KEY;
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather';
const geoApiUrl = 'https://api.openweathermap.org/geo/1.0/direct';

function App() {
  const [weatherData, setWeatherData] = useState(null);

  const fetchWeatherByLatLng = async (lat, lon) => {
    try {
      const response = await fetch(`${apiUrl}?lat=${lat}&lon=${lon}&appid=${apiKey}`);
      if (response.ok) {
        const data = await response.json();
        setWeatherData(data);
      } else {
        console.error('Failed to fetch weather data');
      }
    } catch (error) {
      console.error('Error while fetching weather data', error);
    }
  };

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords;
        fetchWeatherByLatLng(latitude, longitude);
      });
    }
  }, []);

  const handleCitySearch = async (city) => {
    try {
      const geoResponse = await fetch(`${geoApiUrl}?q=${city}&limit=5&appid=${apiKey}`);
      if (geoResponse.ok) {
        const geoData = await geoResponse.json();
        if (geoData.length > 0) {
          const firstCity = geoData[0];
          fetchWeatherByLatLng(firstCity.lat, firstCity.lon);
        } else {
          console.error('City not found');
        }
      } else {
        console.error('Failed to fetch city data');
      }
    } catch (error) {
      console.error('Error while fetching city data', error);
    }
  };

  return (
    <div>
      <h1>Weather App</h1>
      <SearchBar onSearch={handleCitySearch} />
      <WeatherDisplay weatherData={weatherData} />
    </div>
  );
}

export default App;
