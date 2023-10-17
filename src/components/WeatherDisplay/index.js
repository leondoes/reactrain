import React from 'react';

const WeatherDisplay = ({ weatherData }) => {
  if (!weatherData) return null;
  console.log(weatherData);

  return (
    <div>
      <h2>Weather for {weatherData.name}</h2>
      <p>Temperature: {Math.round(weatherData.main.temp)}°C</p>
      <p>Weather: {weatherData.weather[0].description}</p>
    </div>
  );
};

export default WeatherDisplay;
