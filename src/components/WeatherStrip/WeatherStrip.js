import "./WeatherStrip.css";
import { weatherOptions } from "../../utils/constants";

const WeatherStrip = ({
  type = "",
  weatherTemp = "",
  day = "",
  currentTemperatureUnit = "",
}) => {
  const weatherOption = weatherOptions.find(
    (option) => option.day === day && option.type === type,
    console.log(type)
  );

  console.log(weatherOption);

  const weatherOptionUrl =
    weatherOption?.url || require("../../images/day/default.svg").default;

  return (
    <section className="weather" id="weather">
      <div className="weather__info">
        {weatherTemp} °{currentTemperatureUnit}
      </div>
      <img
        src={weatherOptionUrl}
        className="weather_image"
        alt="Weather Icon"
      />
    </section>
  );
};

export default WeatherStrip;
