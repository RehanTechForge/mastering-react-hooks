import React, { useState } from "react";

const ShoppingList = () => {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState("");

  const [product, setProduct] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const newProducts = {
      name: name,
      quantity: quantity,
    };
    setName("");
    setQuantity("");
    setProduct([...product, newProducts]);
  };

  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="name">Enter Products</label>
        <input
          type="text"
          name=""
          id="name"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        <label htmlFor="quantity">Enter Quantity</label>
        <input
          type="text"
          name=""
          id="quantity"
          value={quantity}
          onChange={(event) => setQuantity(event.target.value)}
        />
        <button>Add</button>
      </form>
      {product.length > 0 && (
        <div>
          <h1>Display Products</h1>
          {product.map((pro) => (
            <ul key={Math.random()}>
              <li>Name: {pro.name}</li>
              <li>Quantity: {pro.quantity}</li>
            </ul>
          ))}
        </div>
      )}
    </div>
  );
};

export default ShoppingList;
