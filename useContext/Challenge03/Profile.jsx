import React, { useContext } from "react";
import { AuthContext } from "../AuthContext";

const Profile = () => {
  const { authenticated, login } = useContext(AuthContext);
  return (
    <div>
      {authenticated ? (
        <p>Welcome User To Our Page</p>
      ) : (
        <button onClick={login}>Login</button>
      )}
    </div>
  );
};

export default Profile;
