import React from 'react';
import { PageContainer, InsideContainer,ForecastContainer, Icon, Copy,Title } from './styled';

const WeatherDisplay = ({ weatherData, forecastData }) => {
  const formatDayOfWeek = (dateString) => {
    const options = { weekday: 'long' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  // Extract today's forecast data from the forecastData
  const todayForecast = forecastData.forecast.forecastday[0];

  const roundToWhole = (value) => Math.round(value);

  return (
    <PageContainer>
    <InsideContainer>
      <Title>Current Weather in {weatherData.location.name}</Title>
      <Icon src={`http:${weatherData.current.condition.icon}`} alt="Weather Icon" />
      <Copy>Temperature: {roundToWhole(weatherData.current.temp_c)}°C</Copy>
      <Copy>Feels Like: {roundToWhole(weatherData.current.feelslike_c)}°C</Copy>
      <Copy>Min/Max: {roundToWhole(todayForecast.day.mintemp_c)}°C / {roundToWhole(todayForecast.day.maxtemp_c)}°C</Copy>
      <Copy>Condition: {weatherData.current.condition.text}</Copy>
      <Copy>Humidity: {weatherData.current.humidity}%</Copy> {/* Add humidity */}
      <Copy>Precipitation: {weatherData.current.precip_mm} mm</Copy> {/* Add precipitation */}
      <Copy>Wind: {weatherData.current.wind_kph} km/h</Copy> {/* Add wind speed */}
      </InsideContainer>
      
      
      <InsideContainer>
        {forecastData.forecast.forecastday.slice(1).map((day, index) => (
          <ForecastContainer key={index}>
            <Title>{formatDayOfWeek(day.date)}</Title>
            <Icon src={`http:${day.day.condition.icon}`} alt="Weather Icon" />
            <Copy>Min/Max: {roundToWhole(day.day.mintemp_c)}°C / {roundToWhole(day.day.maxtemp_c)}°C</Copy>
            <Copy>Condition: {day.day.condition.text}</Copy>
            <Copy>Humidity: {day.day.avghumidity}%</Copy>
            <Copy>Precipitation: {day.day.totalprecip_mm} mm</Copy>
            <Copy>Wind: {day.day.maxwind_kph} km/h</Copy>
          </ForecastContainer>
        ))}
      </InsideContainer>
    </PageContainer>
  );
};

export default WeatherDisplay;
