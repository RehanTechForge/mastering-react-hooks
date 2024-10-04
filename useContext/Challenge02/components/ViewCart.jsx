import React, { useContext } from "react";
import { CartContext } from "../CartContext";

const ViewCart = () => {
  const { cart, removeItem } = useContext(CartContext);
  return (
    <div>
      {cart.length > 0 && (
        <div>
          <h1>Cart Details</h1>

          {cart.map((pro) => (
            <ul key={Math.random()}>
              <li>{pro.name}</li>
              <li>{pro.price}</li>
              <button onClick={() => removeItem(pro.name)}>Remove</button>
            </ul>
          ))}
        </div>
      )}
    </div>
  );
};

export default ViewCart;
