import "./ItemCard.css";

const ItemCard = ({ item, onSelectCard }) => {
  // console.log(item);
  return (
    <div className="card" id={item._id} alt={`${item.name} Card`}>
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
