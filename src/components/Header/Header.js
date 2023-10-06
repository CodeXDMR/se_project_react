import "./Header.css";
import { parseWeatherDataAPI } from "../../utils/weatherApi";

const Header = ({ location, onCreateModal }) => {
  console.log("Header");
  if (!parseWeatherDataAPI) return null;
  const currentDate = new Date().toLocaleString("default", {
    month: "long",
    day: "numeric",
  });

  return (
    <header className="header">
      <div className="header__site-logo">
        <div className="header__logo">
          <img src={require("../../images/logo.svg").default} alt="Logo" />
        </div>
        <div className="header__date-location">
          {currentDate}, {location}
        </div>
      </div>
      <div className="header__avatar-logo">
        <div>
          <button
            className="header__button"
            type="text"
            onClick={onCreateModal}
          >
            + Add New Clothes
          </button>
        </div>
        <div>Terrence Tegegne</div>
        <div className="header__avatar">
          <img src={require("../../images/avatar.svg").default} alt="Avatar" />
        </div>
      </div>
    </header>
  );
};

export default Header;
