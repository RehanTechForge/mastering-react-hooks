import React, { useContext } from "react";
import { UserContext } from "../UserContext";

const UserProfile = () => {
  const { user } = useContext(UserContext);
  return (
    <div>
      <h1>{user.name}</h1>
    </div>
  );
};

export default UserProfile;
