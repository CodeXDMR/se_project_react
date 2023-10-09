import "./FormModal.css";
import "../../block/modal.css";

const FormModal = ({ children, buttonText, title, onClose, name }) => {
  return (
    <div className={`modal modal__type_${name}`}>
      <div className="form-modal__content">
        <h1 className="form-modal__title">New Garment</h1>
        <button
          className="form-modal__button-close"
          type="button"
          onClick={onClose}
        ></button>
        <h3> {title}</h3>
        <form>{children}</form>
        <button className="button__add-garment" type="submit">
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default FormModal;
