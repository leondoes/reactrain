import React, { useState, useEffect } from "react";
import SearchBar from "../SearchBar";
import WeatherDisplay from "../WeatherDisplay";

const apiKey = process.env.REACT_APP_WEATHER_API_KEY;
const apiUrl = "https://api.openweathermap.org/data/2.5/weather";
const geoApiUrl = "https://api.openweathermap.org/geo/1.0/direct";
const forecastApiUrl = "https://api.openweathermap.org/data/2.5/forecast";

const ReactRain = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [cityNotFound, setCityNotFound] = useState(false);
  const [matchingCities, setMatchingCities] = useState([]);
  const [dailyHigh, setDailyHigh] = useState(null);
  const [dailyLow, setDailyLow] = useState(null);

  const fetchWeatherByLatLng = async (lat, lon) => {
    try {
      const response = await fetch(
        `${apiUrl}?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`
      );

      if (response.ok) {
        const data = await response.json();
        setWeatherData(data);
        setCityNotFound(false);
      } else {
        setCityNotFound(true);
        console.error("Failed to fetch weather data");
      }
    } catch (error) {
      console.error("Error while fetching weather data", error);
    }
  };

  const fetchForecastData = async (lat, lon) => {
    try {
      const response = await fetch(
        `${forecastApiUrl}?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`
      );

      if (response.ok) {
        const data = await response.json();
        const dailyTemperatures = data.list
          .slice(0, 8)
          .map((item) => item.main.temp);
        const dailyHighTemp = Math.round(Math.max(...dailyTemperatures));
        const dailyLowTemp = Math.round(Math.min(...dailyTemperatures));

        setDailyHigh(dailyHighTemp);
        setDailyLow(dailyLowTemp);
      } else {
        console.error("Failed to fetch forecast data");
      }
    } catch (error) {
      console.error("Error while fetching forecast data", error);
    }
  };

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(({ coords }) => {
        const { latitude, longitude } = coords;
        fetchWeatherByLatLng(latitude, longitude);
        fetchForecastData(latitude, longitude);
      });
    }
  }, []);

  const resetCitySearch = () => {
    setCityNotFound(false);
    setWeatherData(null);
  };

  const handleCitySearch = async (city) => {
    resetCitySearch();

    try {
      const geoResponse = await fetch(
        `${geoApiUrl}?q=${city}&limit=5&appid=${apiKey}&type=city`
      );

      if (geoResponse.ok) {
        const geoData = await geoResponse.json();

        if (geoData.length > 0) {
          setMatchingCities(geoData);
          fetchWeatherByLatLng(geoData[0].lat, geoData[0].lon); // Fetch weather for the first city
        } else {
          setCityNotFound(true);
          console.error("City not found");
        }
      } else {
        setCityNotFound(true);
        console.error("Failed to fetch city data");
      }
    } catch (error) {
      console.error("Error while fetching city data", error);
    }
  };

  return (
    <div>
      <h1>Weather App</h1>
      <SearchBar onSearch={handleCitySearch} />
      {cityNotFound ? (
        <div>City not found</div>
      ) : (
        <>
          <ul>
            {matchingCities.map((city, index) => (
              <li
                key={index}
                onClick={() => fetchWeatherByLatLng(city.lat, city.lon)}
              >
                {`${city.name}, ${city.state}, ${city.country}`}
              </li>
            ))}
          </ul>

          {weatherData && (
            <WeatherDisplay
              weatherData={weatherData}
              dailyHigh={dailyHigh}
              dailyLow={dailyLow}
            />
          )}
        </>
      )}
    </div>
  );
};

export default ReactRain;
