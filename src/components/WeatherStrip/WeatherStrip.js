import "./WeatherStrip.css";
import { weatherOptions } from "../../utils/constants";

const WeatherStrip = ({ day, type, weatherTemp = "" }) => {
  const weatherOption = weatherOptions.find((option) => {
    return option.day === day && option.type === type;
  });

  const weatherOptionUrl = weatherOption.url || "";

  return (
    <section className="weather" id="weather">
      <div className="weather__info">{weatherTemp} °F</div>
      <img
        src={weatherOptionUrl}
        className="weather_image"
        alt="Weather Icon"
      />
    </section>
  );
};

export default WeatherStrip;
