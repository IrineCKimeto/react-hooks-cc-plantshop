import React, { useState } from "react";

function PlantCard({ plant, plants, setPlants }) {
  const [isInStock, setIsInStock] = useState(true);

  function handleStockClick() {
    setIsInStock((prevStatus) => !prevStatus);
  }

  return (
    <li className="card">
      <img src={plant.image} alt={plant.name} />
      <h4>{plant.name}</h4>
      <p>Price: ${plant.price}</p>
      <button className="primary" onClick={handleStockClick}>
        {isInStock ? "In Stock" : "Out of Stock"}
      </button>
    </li>
  );
}

export default PlantCard;
