// weatherAPI.js

const apiKey = process.env.REACT_APP_WEATHER_API_KEY;
const currentWeatherApiUrl = "https://api.weatherapi.com/v1/current.json";
const forecastApiUrl = "https://api.weatherapi.com/v1/forecast.json";

export const fetchCurrentWeather = async (city) => {
  try {
    const response = await fetch(
      `${currentWeatherApiUrl}?key=${apiKey}&q=${city}`
    );
    if (response.ok) {
      return await response.json();
    } else {
      console.error("Error fetching current weather data");
      return null;
    }
  } catch (error) {
    console.error("Error fetching current weather data:", error);
    return null;
  }
};

export const fetchWeatherForecast = async (city) => {
  try {
    const response = await fetch(
      `${forecastApiUrl}?key=${apiKey}&q=${city}&days=3`
    );
    if (response.ok) {
      return await response.json();
    } else {
      console.error("Error fetching weather forecast data");
      return null;
    }
  } catch (error) {
    console.error("Error fetching weather forecast data:", error);
    return null;
  }
};
