import "./ItemModal.css";
import "../../block/modal.css";

const ItemModal = ({ selectedCard, onClose }) => {
  return (
    <div className="modal" id="modal">
      <div className="item-modal__content">
        <button
          className="item-modal__close-button"
          type="button"
          onClick={onClose}
        ></button>
        <div>
          <img
            className="item-modal__image"
            src={selectedCard.link}
            alt="Card Item"
          />
        </div>
        <div className="item-modal__info">
          <div>{selectedCard.name}</div>
          <div>Weather type: {selectedCard.weather}</div>
        </div>
      </div>
    </div>
  );
};

export default ItemModal;
