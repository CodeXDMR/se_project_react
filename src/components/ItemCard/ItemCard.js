import "./ItemCard.css";

const ItemCard = ({ item, onSelectCard }) => {
  return (
    <div className="card">
      <div>
        <img
          src={item.imageUrl}
          className="card_image"
          onClick={() => onSelectCard(item)}
          alt="Clothing Item"
        />
      </div>
      <div className="card_name">{item.name}</div>
    </div>
  );
};

export default ItemCard;
