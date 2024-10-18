import React, { useState, useContext, useEffect } from "react";
import { AuthContext } from "../context/AuthProvider";
import { useParams, useNavigate } from "react-router-dom";

const EditEmployee = () => {
  const { id } = useParams(); // Get employee id from URL params
  const { employee, updateEmployee } = useContext(AuthContext); // Get employee list and update function from context
  const navigate = useNavigate();

  // Convert id to a number to match employee IDs
  const currentEmployee = employee.find((emp) => emp.id === Number(id)); // Find employee by id

  // Initialize updatedEmployee state with current employee data
  const [updatedEmployee, setUpdatedEmployee] = useState({
    name: currentEmployee?.name || "",
    position: currentEmployee?.position || "",
    email: currentEmployee?.email || "",
    salary: currentEmployee?.salary || "", // Include salary
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUpdatedEmployee({ ...updatedEmployee, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateEmployee(id, updatedEmployee); // Call update function from context
    navigate("/"); // Navigate back to the employee list
  };

  return (
    <div className="container mx-auto my-8">
      <h2 className="text-2xl font-bold mb-4">Edit Employee</h2>
      <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
        <div className="mb-4">
          <label className="block text-sm font-bold mb-2" htmlFor="name">
            Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={updatedEmployee.name}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-bold mb-2" htmlFor="position">
            Position:
          </label>
          <input
            type="text"
            id="position"
            name="position"
            value={updatedEmployee.position}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-bold mb-2" htmlFor="email">
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={updatedEmployee.email}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-bold mb-2" htmlFor="salary">
            Salary:
          </label>
          <input
            type="number"
            id="salary"
            name="salary"
            value={updatedEmployee.salary}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
            required
          />
        </div>
        <div className="flex justify-end">
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
          >
            Update Employee
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditEmployee;
