import React, { useContext, useState } from "react";
import { CartContext } from "../CartContext";

const AddProduct = () => {
  const { addCart } = useContext(CartContext);
  const [pro, setPro] = useState({
    name: "",
    price: "",
  });
  const handleValueChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    setPro({ ...pro, [name]: value });
  };
  const handleSubmit = (event) => {
    event.preventDefault();

    addCart(pro);
    setPro({
      name: "",
      price: "",
    });
  };
  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Enter Product Name"
          value={pro.name}
          onChange={handleValueChange}
        />
        <label htmlFor="price">Price</label>
        <input
          type="number"
          name="price"
          id="price"
          placeholder="Enter Product Price"
          value={pro.price}
          onChange={handleValueChange}
        />
        <button type="submit">Add Product</button>
      </form>
    </div>
  );
};

export default AddProduct;
