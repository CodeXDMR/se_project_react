import "./ItemModal.css";
import "../../block/modal.css";

const ItemModal = ({ selectedCard, handleCloseModal, handleDeleteCard }) => {
  return (
    <div className="modal" id="modal">
      <div className="item-modal__content">
        <button
          className="item-modal__close-button"
          type="button"
          onClick={handleCloseModal}
        ></button>
        <div>
          <img
            className="item-modal__image"
            src={selectedCard.imageUrl}
            alt="Card Item"
          />
        </div>
        <div className="item-modal__info">
          <div>
            <div>{selectedCard.name}</div>
            <div>Weather type: {selectedCard.weather}</div>
          </div>
          <button
            className="item-modal__delete-button"
            type="button"
            onClick={() => handleDeleteCard(selectedCard)}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default ItemModal;
