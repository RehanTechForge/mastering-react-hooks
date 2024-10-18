import { BrowserRouter, Route, Routes } from "react-router-dom";
import EmployeeList from "./pages/EmployeeList";
import AddEmployee from "./pages/AddEmployee";
import EditEmployee from "./pages/EditEmployee";
import Login from "./pages/Login";
import { useContext } from "react";
import { AuthContext } from "./context/AuthProvider";
import Header from "./components/Header";

function App() {
  const { managerLoginState } = useContext(AuthContext);
  return (
    <BrowserRouter>
      {managerLoginState && <Header />}
      <Routes>
        {managerLoginState ? (
          <>
            <Route path="/" element={<EmployeeList />} />
            <Route path="/add-employee" element={<AddEmployee />} />
            <Route path="/edit-employee/:id" element={<EditEmployee />} />
          </>
        ) : (
          <Route path="/" element={<Login />} />
        )}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
