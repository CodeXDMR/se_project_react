import "./ModalWithForm.css";
import "../../block/modal.css";

const ModalWithForm = ({
  title,
  children,
  buttonText,
  onClose,
  name,
  isOpen,
  onSubmit,
}) => {
  return (
    <div className={`modal modal__type_${name}`}>
      <div className="form-modal__content">
        <h1 className="form-modal__title">{title}</h1>
        <button
          className="form-modal__button-close"
          type="button"
          onClick={onClose}
        ></button>
        <form onSubmit={onSubmit}>
          {children}
          <button className="button__add-garment" type="submit">
            {buttonText}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ModalWithForm;
