import React, { useState } from "react";

const UseForm = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [show, setShow] = useState(false);

  const handlerChange = (event) => {
    const { name, value } = event.target;
    console.log(name, value);
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setShow(true);
  };

  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Enter Name"
          value={user.name}
          onChange={handlerChange}
        />
        <label htmlFor="email">Email</label>
        <input
          type="text"
          name="email"
          id="email"
          placeholder="Enter Email"
          value={user.email}
          onChange={handlerChange}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Enter Password"
          value={user.password}
          onChange={handlerChange}
        />
        <button>Submit</button>
      </form>
      {show && (
        <div>
          <h1>Personal Details</h1>
          <ul>
            <li>Name: {user.name}</li>
            <li>Email: {user.email}</li>
            <li>Password: {user.password}</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default UseForm;
