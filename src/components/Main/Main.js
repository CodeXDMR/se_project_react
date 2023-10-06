import WeatherStrip from "../WeatherStrip/WeatherStrip";
import ItemCard from "../ItemCard/ItemCard";
import { defaultClothingItems } from "../util/constants";
import { useMemo } from "react";

function Main({ weatherTemp, onSelectCard }) {
  const weatherType = useMemo(() => {
    if (weatherTemp >= 86) {
      return "hot";
    } else if (weatherTemp >= 66 && weatherTemp <= 85) {
      return "warm";
    } else if (weatherTemp <= 65) {
      return "cold";
    }
  }, [weatherTemp]);

  // console.log(weatherType);

  const filteredCards = defaultClothingItems.filter((item) => {
    // console.log(item);
    return item.weather.toLowerCase() === weatherType;
  });

  // console.log(filteredCards);

  return (
    <main>
      <WeatherStrip day={true} type="sunny" weatherTemp={weatherTemp} />
      <section className="card_section" id="card-section">
        Today is {weatherTemp} °F / You may want to wear:
        <div className="card_items">
          {filteredCards.map((item) => (
            <ItemCard item={item} onSelectCard={onSelectCard} />
          ))}
        </div>
      </section>
    </main>
  );
}

export default Main;
