import React, { useState } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

const AddItemModal = ({ isOpen, onAddItem, handleCloseModal }) => {
  const [name, setName] = useState("");
  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const [imageUrl, setURL] = useState("");
  const handleURLChange = (e) => {
    setURL(e.target.value);
  };

  const [weather, setWeather] = useState("");
  const handleSelectWeatherType = (e) => {
    setWeather(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddItem({ name, weather, imageUrl });
    // handleCloseModal();
  };

  // console.log(isOpen);

  return (
    <ModalWithForm
      onClose={handleCloseModal}
      isOpen={isOpen}
      onSubmit={handleSubmit}
      title={"New Garment"}
      buttonText="Add garment"
    >
      <div className="form-modal__input">
        <label>
          Name{" "}
          <input
            className="form-modal__input-field"
            type="text"
            name="name"
            placeholder="Name"
            minLength="1"
            maxLength="50"
            value={name}
            onChange={handleNameChange}
          />
          <span
            className="form-modal__input-error"
            id="modal-name-error"
          ></span>
        </label>
        <label>
          Image{" "}
          <input
            className="form-modal__input-field"
            type="url"
            name="link"
            placeholder="Image URL"
            minLength="1"
            maxLength="300"
            value={imageUrl}
            onChange={handleURLChange}
          />
          <span className="form-modal__input-error" id="modal-URL-error"></span>
        </label>
      </div>
      <p>Select the weather type: </p>
      <div>
        <input
          className="form-modal__radio-button"
          type="radio"
          name="temperature"
          id="hot"
          value="hot"
          onChange={handleSelectWeatherType}
        />
        <label className="form-modal__radio-label">Hot</label>
      </div>
      <div>
        <input
          className="form-modal__radio-button"
          type="radio"
          name="temperature"
          id="warm"
          value="warm"
          onChange={handleSelectWeatherType}
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
          onChange={handleSelectWeatherType}
        />
        <label className="form-modal__radio-label">Cold</label>
      </div>
    </ModalWithForm>
  );
};

export default AddItemModal;
