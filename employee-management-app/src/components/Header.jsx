import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider";

const Header = () => {
  const navigate = useNavigate();
  const { handleLogout } = useContext(AuthContext);

  const logout = () => {
    handleLogout();
    navigate("/");
  };

  return (
    <header className="bg-blue-500 p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-white text-xl font-bold">Employee Management</h1>
        <nav className="space-x-4">
          <Link
            to="/"
            className="text-white hover:bg-blue-700 px-3 py-2 rounded-md transition duration-300"
          >
            Show All Employees
          </Link>
          <Link
            to="/add-employee"
            className="text-white hover:bg-blue-700 px-3 py-2 rounded-md transition duration-300"
          >
            Add Employee
          </Link>
          <button
            onClick={logout}
            className="bg-red-500 text-white px-3 py-2 rounded-md hover:bg-red-600 transition duration-300"
          >
            Logout
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
