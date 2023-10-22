import React, { useState } from "react";
import SearchForm from "../SearchForm";
import WeatherDisplay from "../WeatherDisplay";
import { Copy, Title } from "./styled";
import PageLayout from "../../layout/pageLayout";
import { fetchCurrentWeather, fetchWeatherForecast } from "../../common/helpers/weatherAPI"; // Update the import path

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
