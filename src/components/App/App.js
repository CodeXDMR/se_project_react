import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import FormModal from "../FormModal/FormModal";
import ItemModal from "../ItemModal/ItemModal";
import { useEffect, useState } from "react";
import { getForecastWeather } from "../../utils/weatherApi";
import { parseWeatherDataAPI } from "../../utils/weatherApi";

function App() {
  const [location, setLocation] = useState("");
  const [temp, setTemp] = useState(0);
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});

  const handleCreateModal = () => {
    setActiveModal("create");
  };

  const handleCloseModal = () => {
    setActiveModal("");
  };

  const handleSelectedCard = (card) => {
    setActiveModal("preview");
    setSelectedCard(card);
  };

  useEffect(() => {
    getForecastWeather()
      .then((data) => {
        // console.log(data);
        const temperature = parseWeatherDataAPI(data);
        const location = data.name;
        setLocation(location);
        setTemp(temperature);
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
      <Header
        location={location}
        onCreateModal={handleCreateModal}
        temp={temp}
      />
      <Main weatherTemp={temp} onSelectCard={handleSelectedCard} temp={temp} />
      <Footer />
      {activeModal === "create" && (
        <FormModal onClose={handleCloseModal} buttonText="Add garment">
          <div className="form-modal__input">
            <label>
              Name{" "}
              <input
                className="form-modal__input-field"
                type="text"
                name="name"
                placeholder="Name"
                minLength="1"
                maxLength="30"
              />
            </label>
            <label>
              Image{" "}
              <input
                className="form-modal__input-field"
                type="url"
                name="link"
                placeholder="Image URL"
                minLength="1"
                maxLength="30"
              />
            </label>
          </div>
          <p>Select the weather type: </p>
          <div>
            <input
              className="form-modal__radio-button"
              type="radio"
              id="hot"
              value="hot"
              name="temperature"
            />
            <label className="form-modal__radio-label">Hot</label>
          </div>
          <div>
            <input
              className="form-modal__radio-button"
              type="radio"
              id="warm"
              value="warm"
              name="temperature"
            />
            <label className="form-modal__radio-label">Warm</label>
          </div>
          <div>
            <input
              className="form-modal__radio-button"
              type="radio"
              id="cold"
              value="cold"
              name="temperature"
            />
            <label className="form-modal__radio-label">Cold</label>
          </div>
        </FormModal>
      )}
      {activeModal === "preview" && (
        <ItemModal selectedCard={selectedCard} onClose={handleCloseModal} />
      )}
    </div>
  );
}

export default App;
