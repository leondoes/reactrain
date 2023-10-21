import React, { useState, useCallback } from "react";
import SearchForm from "../SearchForm";
import WeatherDisplay from "../WeatherDisplay";
import { Copy, Title } from "./styled";
import PageLayout from "../../layout/pageLayout";

const apiKey = process.env.REACT_APP_WEATHER_API_KEY;
const currentWeatherApiUrl = "https://api.weatherapi.com/v1/current.json";
const forecastApiUrl = "https://api.weatherapi.com/v1/forecast.json";

const ReactRain = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [forecastData, setForecastData] = useState(null);

  const fetchCurrentWeatherData = useCallback(async (city) => {
    try {
      const response = await fetch(
        `${currentWeatherApiUrl}?key=${apiKey}&q=${city}`
      );
      if (response.ok) {
        const data = await response.json();
        setWeatherData(data);
      } else {
        console.error("Error fetching current weather data");
      }
    } catch (error) {
      console.error("Error fetching current weather data:", error);
    }
  }, []);

  const fetchWeatherForecast = useCallback(async (city) => {
    try {
      const response = await fetch(
        `${forecastApiUrl}?key=${apiKey}&q=${city}&days=3`
      );
      if (response.ok) {
        const data = await response.json();
        setForecastData(data);
      } else {
        console.error("Error fetching weather forecast data");
      }
    } catch (error) {
      console.error("Error fetching weather forecast data:", error);
    }
  }, []);

  const handleSearch = (city) => {
    setWeatherData(null);
    setForecastData(null);
    fetchCurrentWeatherData(city);
    fetchWeatherForecast(city);
  };

  return (
    <PageLayout>
      <Title>ReactRain</Title>
      <Copy>
        <SearchForm onSearch={handleSearch} />
        {weatherData && forecastData && (
          <WeatherDisplay
            weatherData={weatherData}
            forecastData={forecastData}
          />
        )}
      </Copy>
    </PageLayout>
  );
};

export default ReactRain;
