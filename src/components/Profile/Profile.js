import "./Profile.css";
import SideBar from "../SideBar/Sidebar";
import ClothesSection from "../ClothesSection/ClothesSection";

function Profile({ onCreateModal, onSelectCard, clothing }) {
  // console.log({ onCreateModal });

  return (
    <main className="profile">
      <div>
        <SideBar />
      </div>
      <div>
        <ClothesSection
          onCreateModal={onCreateModal}
          onSelectCard={onSelectCard}
          clothing={clothing}
        />
      </div>
    </main>
  );
}

export default Profile;
