import "./SideBar.css";
import avatarImage from "../../images/avatar.svg";

const SideBar = () => {
  return (
    <main>
      <div className="sidebar">
        <img
          src={avatarImage}
          className="sidebar__avatar"
          alt="Profile Avatar"
        />
        <div>Terrence Tegegne</div>
      </div>
    </main>
  );
};

export default SideBar;
