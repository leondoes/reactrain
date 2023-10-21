import React from 'react';

const WeatherDisplay = ({ weatherData, forecastData }) => {
  const formatDayOfWeek = (dateString) => {
    const options = { weekday: 'long' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  // Extract today's forecast data from the forecastData
  const todayForecast = forecastData.forecast.forecastday[0];

  return (
    <div>
      <h2>Current Weather in {weatherData.location.name}</h2>
      <img src={`http:${weatherData.current.condition.icon}`} alt="Weather Icon" />
      <p>Temperature: {weatherData.current.temp_c}°C</p>
      <p>Max Temperature Today: {todayForecast.day.maxtemp_c}°C</p>
      <p>Min Temperature Today: {todayForecast.day.mintemp_c}°C</p>
      <p>Condition: {weatherData.current.condition.text}</p>

      <h2>Coming up</h2>
      <ul>
        {forecastData.forecast.forecastday.slice(1).map((day, index) => (
          <li key={index}>
            <p>{formatDayOfWeek(day.date)}</p>
            <img src={`http:${day.day.condition.icon}`} alt="Weather Icon" />
            <p>Max Temperature: {day.day.maxtemp_c}°C</p>
            <p>Min Temperature: {day.day.mintemp_c}°C</p>
            <p>Condition: {day.day.condition.text}</p>
            
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WeatherDisplay;
