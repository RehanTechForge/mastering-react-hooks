import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import MyProvider from "./context/MyContext.tsx";

createRoot(document.getElementById("root")!).render(
  <MyProvider>
    <App />
  </MyProvider>
);
