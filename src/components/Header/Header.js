import "./Header.css";
import { parseWeatherDataAPI } from "../../utils/weatherApi";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import { Link } from "react-router-dom";

const Header = ({ location, onCreateModal }) => {
  if (!parseWeatherDataAPI) return null;

  const currentDate = new Date().toLocaleString("default", {
    month: "long",
    day: "numeric",
  });

  return (
    <header className="header">
      <div className="header__site-logo">
        <div className="header__logo">
          <Link to="/">
            <img src={require("../../images/logo.svg").default} alt="Logo" />
          </Link>
        </div>
        <div className="header__date-location">
          {currentDate}, {location}
        </div>
      </div>
      <div className="header__avatar-logo">
        <ToggleSwitch />
        <div>
          <button
            className="header__button"
            type="button"
            onClick={onCreateModal}
          >
            + Add New Clothes
          </button>
        </div>
        <Link to="/profile">
          <div>Terrence Tegegne</div>
        </Link>
        <div>
          <img
            src={require("../../images/avatar.svg").default}
            className="header__avatar"
            alt="Avatar"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
