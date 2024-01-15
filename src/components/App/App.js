import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Profile from "../Profile/Profile";
import Footer from "../Footer/Footer";
import ItemModal from "../ItemModal/ItemModal";
import { useEffect, useState } from "react";
import { getForecastWeather } from "../../utils/weatherApi";
import { parseWeatherDataAPI } from "../../utils/weatherApi";
import { timeOfDayAPI } from "../../utils/weatherApi";
import {
  getClothingItems,
  parseClothingDataAPI,
  addItemCardAPI,
  deleteItemCardAPI,
} from "../../utils/api";
import { CurrentTemperatureUnitContext } from "../contexts/CurrentTemperatureUnitContext";
import { Switch, Route } from "react-router-dom";
import AddItemModal from "../AddItemModal/AddItemModal";

function App() {
  const [location, setLocation] = useState("");
  const [temp, setTemp] = useState(0);
  const [type, setType] = useState("clear");
  const [day, setDay] = useState(true);
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});
  const [clothingItems, setClothingItems] = useState([]);
  const [currentTemperatureUnit, setCurrentTemperatureUnit] = useState("F");

  const handleCreateModal = () => {
    setActiveModal("create");
  };

  const handleCloseModal = () => {
    setActiveModal("");
  };

  const handleToggleSwitchChange = () => {
    if (currentTemperatureUnit === "F") setCurrentTemperatureUnit("C");
    if (currentTemperatureUnit === "C") setCurrentTemperatureUnit("F");
  };

  const handleSelectedCard = (card) => {
    setActiveModal("preview");
    setSelectedCard(card);
  };

  const handleDeleteCard = (card) => {
    deleteItemCardAPI(card._id)
      .then(() => {
        setClothingItems((cards) => cards.filter((c) => c._id !== card._id));
      })
      .catch((err) => {
        alert("Unexpected error, please try again.");
        console.error("There was an error -", err);
      });
    handleCloseModal();
  };

  const handleAddItemSubmit = (item) => {
    setClothingItems([item, ...clothingItems]);
    addItemCardAPI(item);
    handleCloseModal();
  };

  useEffect(() => {
    getClothingItems()
      .then((data) => {
        const clothing = parseClothingDataAPI(data);
        setClothingItems(clothing);
      })
      .catch((err) => {
        alert("Unexpected error, please try again.");
        console.error("There was an error -", err);
      });
  }, []);

  useEffect(() => {
    getForecastWeather()
      .then((data) => {
        const location = data.name;
        const temperature = parseWeatherDataAPI(data);
        const day = timeOfDayAPI(data);
        const type = data.weather[0].main.toLowerCase();

        setLocation(location);
        setTemp(temperature);
        setDay(day);
        setType(type);
      })
      .catch((err) => {
        alert("Unexpected error, please try again.");
        console.error("There was an error -", err);
      });
  }, []);

  useEffect(() => {
    function handleEscapeKey(event) {
      if (event.code === "Escape") {
        handleCloseModal();
      }
    }

    document.addEventListener("keydown", handleEscapeKey);
    return () => document.removeEventListener("keydown", handleEscapeKey);
  }, []);

  useEffect(() => {
    function handleClickOffModal(event) {
      if (event.target.classList.contains("modal")) {
        handleCloseModal();
      }
    }

    document.addEventListener("click", handleClickOffModal);
    return () => document.removeEventListener("click", handleClickOffModal);
  }, []);

  return (
    <div className="app">
      <CurrentTemperatureUnitContext.Provider
        value={{ currentTemperatureUnit, handleToggleSwitchChange }}
      >
        <Header location={location} onCreateModal={handleCreateModal} />
        <Switch>
          <Route exact path="/">
            <Main
              weatherTemp={temp}
              onSelectCard={handleSelectedCard}
              type={type}
              day={day}
              clothing={clothingItems}
            />
          </Route>
          <Route path="/profile">
            <Profile
              onCreateModal={handleCreateModal}
              onSelectCard={handleSelectedCard}
              clothing={clothingItems}
            />
          </Route>
        </Switch>
        <Footer />
        {activeModal === "create" && (
          <AddItemModal
            isOpen={activeModal === "create"}
            onAddItem={handleAddItemSubmit}
            handleCloseModal={handleCloseModal}
          />
        )}
        {activeModal === "preview" && (
          <ItemModal
            selectedCard={selectedCard}
            handleCloseModal={handleCloseModal}
            handleDeleteCard={handleDeleteCard}
          />
        )}
      </CurrentTemperatureUnitContext.Provider>
    </div>
  );
}

export default App;
