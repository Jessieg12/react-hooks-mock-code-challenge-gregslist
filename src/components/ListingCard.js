import React, { useState } from "react";

function ListingCard({item, onDeleteItem}) {
  const [isFavorited, setIsFavorited] = useState(false)
  
  function handleDelete(){
    fetch(`http://localhost:6001/listings/${item.id}`, {
      method:"DELETE",
    })
    .then((resp) => resp.json())
    .then(() => onDeleteItem(item.id))
  }

  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={item.image} alt={item.description} />
      </div>
      <div className="details">
        {isFavorited ? (
          <button onClick={() => setIsFavorited(false)} className="emoji-button favorite active">★</button>
        ) : (
          <button onClick={() => setIsFavorited(true)} className="emoji-button favorite">☆</button>
        )}
        <strong>{item.description}</strong>
        <span> · {item.location}</span>
        <button onClick={handleDelete}className="emoji-button delete">🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
