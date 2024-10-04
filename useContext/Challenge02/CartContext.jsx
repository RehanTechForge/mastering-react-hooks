import { createContext, useState } from "react";

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([{ name: "Computer", price: 1300 }]);

  const addCart = (newObj) => {
    setCart([...cart, newObj]);
  };

  const clearCart = () => {
    setCart([]);
  };

  const removeItem = (name) => {
    const filterPro = cart.filter((pro) => pro.name !== name);
    setCart(filterPro);
  };

  return (
    <CartContext.Provider value={{ addCart, cart, removeItem, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};

export { CartContext, CartProvider };
