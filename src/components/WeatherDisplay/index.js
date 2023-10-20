import React from 'react';

const weatherIconBaseUrl = 'https://openweathermap.org/img/wn/';

const WeatherDisplay = ({ weatherData, dailyHigh, dailyLow }) => {
  if (!weatherData) return null;

  // Construct the URL for the weather icon based on the icon code
  const iconUrl = `${weatherIconBaseUrl}${weatherData.weather[0].icon}@2x.png`;

  return (
    <div>
      <h2>Weather for {weatherData.name}, {weatherData.sys.country}</h2>
      <img src={iconUrl} alt="Weather Icon" />
      <p>Temperature: {Math.round(weatherData.main.temp)}°C</p>
      <p>Feels Like: {Math.round(weatherData.main.feels_like)}°C</p>
      <p>Weather: {weatherData.weather[0].description}</p>
      <p>Daily High: {dailyHigh}°C</p> {/* Display daily high temperature */}
      <p>Daily Low: {dailyLow}°C</p>   {/* Display daily low temperature */}
    </div>
  );
};

export default WeatherDisplay;
