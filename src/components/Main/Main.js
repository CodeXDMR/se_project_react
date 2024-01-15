import ItemCard from "../ItemCard/ItemCard";
// import { defaultClothingItems } from "../../utils/constants";
import { useContext } from "react";
import { CurrentTemperatureUnitContext } from "../../contexts/CurrentTemperatureUnitContext";
import WeatherStrip from "../WeatherStrip/WeatherStrip";

function Main({ weatherTemp, onSelectCard, day, type, clothing }) {
  const { currentTemperatureUnit } = useContext(CurrentTemperatureUnitContext);
  const temp = weatherTemp?.temperature?.[currentTemperatureUnit] || 999;
  const timeOfDay = day;
  const typeOfWeather = type;

  const getTemperatureTypeF = () => {
    if (temp >= 86) {
      return "hot";
    } else if (temp >= 66 && temp <= 85) {
      return "warm";
    } else if (temp <= 65) {
      return "cold";
    }
  };

  const getTemperatureTypeC = () => {
    if (temp >= 30) {
      return "hot";
    } else if (temp >= 20 && temp <= 30) {
      return "warm";
    } else if (temp <= 19) {
      return "cold";
    }
  };

  const weatherType =
    currentTemperatureUnit === "F"
      ? getTemperatureTypeF()
      : getTemperatureTypeC();

  const filteredCards = clothing.filter((item) => {
    return item.weather.toLowerCase() === weatherType;
  });

  return (
    <main>
      <WeatherStrip
        day={timeOfDay}
        type={typeOfWeather}
        weatherTemp={temp}
        currentTemperatureUnit={currentTemperatureUnit}
      />
      <section className="card_section" id="card-section">
        Today is {temp} °{currentTemperatureUnit} / You may want to wear:
        <div className="card_items">
          {filteredCards.map((item) => (
            // console.log(item),
            <ItemCard
              key={`Item Card${item._id}`}
              item={item}
              onSelectCard={onSelectCard}
            />
          ))}
        </div>
      </section>
    </main>
  );
}

export default Main;
