import React, { useState } from "react";
import SearchForm from "../SearchForm";
import WeatherDisplay from "../WeatherDisplay";
import { Title, TopContainer } from "./styled";
import PageLayout from "../../layout/pageLayout";
import { fetchCurrentWeather, fetchWeatherForecast } from "../../common/helpers/weatherAPI";

const ReactRain = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [forecastData, setForecastData] = useState(null);

  const handleSearch = async (city) => {
    setWeatherData(null);
    setForecastData(null);

    const currentWeatherData = await fetchCurrentWeather(city);
    const weatherForecastData = await fetchWeatherForecast(city);

    if (currentWeatherData && weatherForecastData) {
      setWeatherData(currentWeatherData);
      setForecastData(weatherForecastData);
    }
  };

  return (
    <PageLayout><TopContainer>
      <Title>ReactRain</Title>
        <SearchForm onSearch={handleSearch} /></TopContainer>
        {weatherData && forecastData && (
          <WeatherDisplay
            weatherData={weatherData}
            forecastData={forecastData}
          />
        )}
    </PageLayout>
  );
};

export default ReactRain;
