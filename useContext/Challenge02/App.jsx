import { useContext } from "react";
import { CartContext } from "./CartContext";
import AddProduct from "./components/AddProduct";
import ViewCart from "./components/ViewCart";

function App() {
  const { clearCart } = useContext(CartContext);
  return (
    <>
      <h1>Hooks Challenges</h1>
      <AddProduct />
      <ViewCart />
      <button onClick={() => clearCart()}>Clear Cart</button>
    </>
  );
}

export default App;
