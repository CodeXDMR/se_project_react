import { latitude, longitude, APIkey } from "../utils/constants";
import processServerResponse from "./processServerResponse";

const getForecastWeather = () => {
  const weatherApi = fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=imperial&appid=${APIkey}
  `
  ).then(processServerResponse);
  return weatherApi;
};

const parseWeatherDataAPI = (data) => {
  const main = data.main;
  const temperature = main && main.temp;
  const weather = {
    temperature: {
      F: Math.round(temperature),
      C: Math.round(((temperature - 32) * 5) / 9),
    },
  };
  return weather;
};

const timeOfDayAPI = (data) => {
  const dayTime = data.dt;
  const sunSet = data.sys.sunset;
  const sunRise = data.sys.sunrise;

  if (sunRise < dayTime && dayTime < sunSet) {
    return true;
  } else return false;
};

export { getForecastWeather, parseWeatherDataAPI, timeOfDayAPI };
