import React, { useState, useCallback } from 'react';

const apiKey = process.env.REACT_APP_WEATHER_API_KEY;
const currentWeatherApiUrl = "https://api.weatherapi.com/v1/current.json";
const forecastApiUrl = "https://api.weatherapi.com/v1/forecast.json"; // API endpoint for weather forecast

const ReactRain = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [forecastData, setForecastData] = useState(null);
  const [city, setCity] = useState('');

  const fetchCurrentWeatherData = useCallback(async () => {
    try {
      const response = await fetch(`${currentWeatherApiUrl}?key=${apiKey}&q=${city}`);
      if (response.ok) {
        const data = await response.json();
        setWeatherData(data);
      } else {
        console.error('Error fetching current weather data');
      }
    } catch (error) {
      console.error('Error fetching current weather data:', error);
    }
  }, [city]);

  const fetchWeatherForecast = useCallback(async () => {
    try {
      const response = await fetch(`${forecastApiUrl}?key=${apiKey}&q=${city}&days=3`);
      if (response.ok) {
        const data = await response.json();
        setForecastData(data);
      } else {
        console.error('Error fetching weather forecast data');
      }
    } catch (error) {
      console.error('Error fetching weather forecast data:', error);
    }
  }, [city]);

  const handleCityChange = (e) => {
    setCity(e.target.value);
  };

  const handleSearchClick = () => {
    if (city) {
      setWeatherData(null);
      setForecastData(null);
      fetchCurrentWeatherData();
      fetchWeatherForecast();
    }
  };

  return (
    <div>
      <h1>Weather App</h1>
      <div>
        <input
          type="text"
          placeholder="Enter city"
          value={city}
          onChange={handleCityChange}
        />
        <button onClick={handleSearchClick}>Search</button>
      </div>
      {weatherData && forecastData && (
        <div>
          <h2>Current Weather in {weatherData.location.name}</h2>
          <img src={`http:${weatherData.current.condition.icon}`} alt="Weather Icon"  />
          <p>Temperature: {weatherData.current.temp_c}°C</p>
          <p>Condition: {weatherData.current.condition.text}</p>
          
          <h2>Next Three Days Forecast</h2>
          <ul>
            {forecastData.forecast.forecastday.map((day, index) => (
              <li key={index}>
                <p>Date: {day.date}</p>
                <p>Max Temperature: {day.day.maxtemp_c}°C</p>
                <p>Min Temperature: {day.day.mintemp_c}°C</p>
                <p>Condition: {day.day.condition.text}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default ReactRain;
