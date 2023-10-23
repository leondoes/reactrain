import React, { useState, useEffect } from "react";
import {
  PageContainer,
  InsideContainer,
  ForecastContainer,
  Icon,
  Copy,
  Highlight,
  Title,
} from "./styled";

const WeatherDisplay = ({ weatherData, forecastData }) => {
  const formatDayOfWeek = (dateString) => {
    const options = { weekday: "long" };
    return new Date(dateString).toLocaleDateString("en-US", options);
  };

  // Extract today's forecast data from the forecastData
  const todayForecast = forecastData.forecast.forecastday[0];

  const roundToWhole = (value) => Math.round(value);

  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setAnimate(true);
    }, 100);
  }, []);

  return (
    <PageContainer animate={animate}>
      <InsideContainer>
        <Title>Weather in {weatherData.location.name}</Title>
        <Icon
          src={`http:${weatherData.current.condition.icon}`}
          alt="Weather Icon"
        />
        <Copy>
          Temperature
          <Highlight>{roundToWhole(weatherData.current.temp_c)}°C</Highlight>
        </Copy>
        <Copy>
          Feels Like{" "}
          <Highlight>
            {roundToWhole(weatherData.current.feelslike_c)}°C
          </Highlight>
        </Copy>
        <Copy>
          Min/Max{" "}
          <Highlight>
            {roundToWhole(todayForecast.day.mintemp_c)}°C/
            {roundToWhole(todayForecast.day.maxtemp_c)}°C
          </Highlight>
        </Copy>
        <Copy>
          Condition <Highlight>{weatherData.current.condition.text}</Highlight>
        </Copy>
        <Copy>
          Humidity <Highlight>{weatherData.current.humidity}%</Highlight>
        </Copy>
        <Copy>
          Precipitation{" "}
          <Highlight>{weatherData.current.precip_mm} mm</Highlight>
        </Copy>
        <Copy>
          Wind <Highlight>{weatherData.current.wind_kph} km/h</Highlight>
        </Copy>
      </InsideContainer>

      <InsideContainer>
        {forecastData.forecast.forecastday.slice(1).map((day, index) => (
          <ForecastContainer key={index}>
            <Title>{formatDayOfWeek(day.date)}</Title>
            <Icon src={`http:${day.day.condition.icon}`} alt="Weather Icon" />
            <Copy>
              Min/Max {roundToWhole(day.day.mintemp_c)}°C /{" "}
              {roundToWhole(day.day.maxtemp_c)}°C
            </Copy>
            <Copy>Condition {day.day.condition.text}</Copy>
            <Copy>Humidity {day.day.avghumidity}%</Copy>
            <Copy>Precipitation {day.day.totalprecip_mm} mm</Copy>
            <Copy>Wind {day.day.maxwind_kph} km/h</Copy>
          </ForecastContainer>
        ))}
      </InsideContainer>
    </PageContainer>
  );
};

export default WeatherDisplay;
