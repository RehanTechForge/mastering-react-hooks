import { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [managerLoginState, setManagerLoginState] = useState(null);
  const [employee, setEmployee] = useState([]);
  // Check localStorage on component mount
  useEffect(() => {
    const savedLoginState = localStorage.getItem("managerLoginState");
    if (savedLoginState) {
      setManagerLoginState(JSON.parse(savedLoginState));
    }
    const savedEmployeeState = localStorage.getItem("employees");
    if (savedEmployeeState) {
      setEmployee(JSON.parse(savedEmployeeState));
    }
  }, []);

  const handleManagerLoginState = () => {
    setManagerLoginState(true);
    localStorage.setItem("managerLoginState", JSON.stringify(true)); // Save login state in localStorage
  };

  const handleLogout = () => {
    setManagerLoginState(false);
    localStorage.removeItem("managerLoginState"); // Remove login state from localStorage on logout
  };

  const addEmployee = (newEmployee) => {
    const updatedEmployees = [...employee, newEmployee]; // Create new array with the new employee
    setEmployee(updatedEmployees); // Update state
    localStorage.setItem("employees", JSON.stringify(updatedEmployees)); // Save the updated array in localStorage
  };

  const deleteEmployee = (id) => {
    // Filter out the employee with the matching id
    const filteredEmployees = employee.filter((emp) => emp.id !== id);

    // Update the state with the filtered employees
    setEmployee(filteredEmployees);

    // Save the updated array in localStorage
    localStorage.setItem("employees", JSON.stringify(filteredEmployees));
  };

  const updateEmployee = (id, updatedData) => {
    const updatedEmployees = employee.map((emp) =>
      emp.id === Number(id) ? { ...emp, ...updatedData } : emp
    );

    setEmployee(updatedEmployees);
    localStorage.setItem("employees", JSON.stringify(updatedEmployees));
  };

  return (
    <AuthContext.Provider
      value={{
        managerLoginState,
        handleManagerLoginState,
        handleLogout,
        addEmployee,
        employee,
        deleteEmployee,
        updateEmployee,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
