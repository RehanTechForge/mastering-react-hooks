import React, { useState } from "react";

const Profile = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [user, setUser] = useState({
    name: "",
    age: "",
  });

  const handleNameChange = (event) => {
    const updatedName = event.target.value;
    setName(updatedName);

    // Directly use the updated name
    setUser({ ...user, name: updatedName });
  };

  const handleAgeChange = (event) => {
    const updatedAge = event.target.value;
    setAge(updatedAge);

    // Directly use the updated age
    setUser({ ...user, age: updatedAge });
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={handleNameChange}
      />
      <input
        type="text"
        placeholder="Age"
        value={age}
        onChange={handleAgeChange}
      />
      <h1>Name: {user.name}</h1>
      <h1>Age: {user.age}</h1>
    </div>
  );
};

export default Profile;
