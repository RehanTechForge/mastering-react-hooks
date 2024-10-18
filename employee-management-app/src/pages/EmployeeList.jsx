import React, { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";
import { useNavigate } from "react-router-dom";

const EmployeeList = () => {
  const navigate = useNavigate();

  const handleEdit = (id) => {
    navigate(`/edit-employee/${id}`);
  };
  const { employee, deleteEmployee } = useContext(AuthContext);
  return (
    <div className="container mx-auto my-8">
      <h2 className="text-2xl font-bold mb-4">Employee List</h2>
      {employee.length > 0 ? (
        <table className="min-w-full bg-white border border-gray-300 shadow-md">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b">#</th>
              <th className="py-2 px-4 border-b">Name</th>
              <th className="py-2 px-4 border-b">Position</th>
              <th className="py-2 px-4 border-b">Email</th>
              <th className="py-2 px-4 border-b">Actions</th>
            </tr>
          </thead>
          <tbody>
            {employee.map((emp, index) => (
              <tr key={index} className="text-center">
                <td className="py-2 px-4 border-b">{index + 1}</td>
                <td className="py-2 px-4 border-b">{emp.name}</td>
                <td className="py-2 px-4 border-b">{emp.position}</td>
                <td className="py-2 px-4 border-b">{emp.email}</td>
                <td className="py-2 px-4 border-b">
                  <button
                    onClick={() => handleEdit(emp.id)}
                    className="text-blue-600 hover:text-blue-800"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => deleteEmployee(emp.id)}
                    className="ml-4 text-red-600 hover:text-red-800"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No employees found.</p>
      )}
    </div>
  );
};

export default EmployeeList;
