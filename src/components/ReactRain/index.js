import React, { useState, useEffect } from 'react';
import SearchBar from '../SearchBar'; // Import SearchBar component
import WeatherDisplay from '../WeatherDisplay'; // Import WeatherDisplay component

const apiKey = process.env.REACT_APP_WEATHER_API_KEY;
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather';
const geoApiUrl = 'https://api.openweathermap.org/geo/1.0/direct';

const ReactRain = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [cityNotFound, setCityNotFound] = useState(false);
  const [matchingCities, setMatchingCities] = useState([]);

  const fetchWeatherByLatLng = async (lat, lon) => {
    try {
      const response = await fetch(`${apiUrl}?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`);
      if (response.ok) {
        const data = await response.json();
        setWeatherData(data);
        setCityNotFound(false); // Reset city not found error if data is fetched.
      } else {
        setCityNotFound(true); // Set city not found error to true.
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
      const geoResponse = await fetch(`${geoApiUrl}?q=${city}&limit=5&appid=${apiKey}&type=city`);
      if (geoResponse.ok) {
        const geoData = await geoResponse.json();
        console.log(geoData)
        if (geoData.length > 0) {
          setMatchingCities(geoData);
        } else {
          setCityNotFound(true);
          console.error('City not found');
        }
      } else {
        setCityNotFound(true);
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
      {cityNotFound ? (
        <div>City not found</div>
      ) : (
        <>
          <ul>
            {matchingCities.map((city, index) => (
              <li key={index} onClick={() => fetchWeatherByLatLng(city.lat, city.lon)}>
                {city.name}, {city.state}, {city.country}
              </li>
            ))}
          </ul>
          {weatherData && <WeatherDisplay weatherData={weatherData} />}
        </>
      )}
    </div>
  );
};

export default ReactRain;
