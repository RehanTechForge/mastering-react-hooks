import React, { useContext, useState } from "react";
import { UserContext, UserProvider } from "../UserContext";

const UpdateProfile = () => {
  const { updateUser } = useContext(UserContext);
  const [name, setName] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    updateUser(name);
    setName("");
  };
  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          name=""
          id=""
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        <button type="submit">Update Name</button>
      </form>
    </div>
  );
};

export default UpdateProfile;
