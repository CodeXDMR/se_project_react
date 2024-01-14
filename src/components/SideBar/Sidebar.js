import "./SideBar.css";

const SideBar = () => {
  return (
    <main>
      <div className="sidebar">
        <img
          src={require("../../images/avatar.svg").default}
          className="sidebar__avatar"
          alt="Profile Avatar"
        />
        <div>Terrence Tegegne</div>
      </div>
    </main>
  );
};

export default SideBar;
