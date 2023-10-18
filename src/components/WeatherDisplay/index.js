import React from 'react';
import WeatherIcon from '../WeatherIcons';

const WeatherDisplay = ({ weatherData }) => {
  if (!weatherData) return null;
  console.log(weatherData);

  return (
    <div>
      <h2>Weather for {weatherData.name} {weatherData.sys.country}</h2>
      <p>Temperature: {Math.round(weatherData.main.temp)}°C</p>
      <p>Feels Like: {Math.round(weatherData.main.temp)}°C</p>
      <p>Weather: {weatherData.weather[0].description}</p>
      <WeatherIcon iconCode={weatherData.weather[0].icon} />
    </div>
  );
};

export default WeatherDisplay;
