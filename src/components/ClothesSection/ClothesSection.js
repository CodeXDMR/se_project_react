import ItemCard from "../ItemCard/ItemCard";
import { parseWeatherDataAPI } from "../../utils/weatherApi";
import { defaultClothingItems } from "../../utils/constants";
import { parseClothingDataAPI } from "../../utils/api";

import "./ClothesSection.css";

const ClothesSection = ({ onCreateModal, onSelectCard, clothing }) => {
  if (!parseWeatherDataAPI) return null;

  // console.log(defaultClothingItems);

  return (
    <section className="clothes__section">
      <div className="clothes__section-header">
        <p>Your items</p>
        <button
          className="clothes__section-button"
          type="button"
          onClick={onCreateModal}
        >
          + Add New
        </button>
      </div>
      <div className="clothes__grid">
        {clothing.map((item) => (
          // console.log(item._id),
          <ItemCard
            key={`Item Card${item._id}`}
            item={item}
            onSelectCard={onSelectCard}
          />
        ))}
      </div>
    </section>
  );
};

export default ClothesSection;
