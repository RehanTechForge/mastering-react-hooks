import { useState } from "react";

const UserProfile = () => {
  interface UserInt {
    name: string;
    age: number;
    email: string;
  }
  const [user, setUser] = useState<UserInt>({
    name: "",
    age: 0,
    email: "",
  });
  const updateName = (name: string) => {
    setUser((prevProfile) => ({ ...prevProfile, name }));
  };

  const updateAge = (age: string) => {
    setUser((prevProfile) => ({ ...prevProfile, age: +age }));
  };
  const updateEmail = (email: string) => {
    setUser((prevProfile) => ({ ...prevProfile, email }));
  };

  return (
    <div>
      <input
        type="text"
        name=""
        id=""
        placeholder="Enter Name"
        value={user.name}
        onChange={(e) => updateName(e.target.value)}
      />

      <input
        type="text"
        name=""
        id=""
        placeholder="Age"
        value={user.age}
        onChange={(e) => updateAge(e.target.value)}
      />
      <input
        type="text"
        name=""
        id=""
        placeholder="Email"
        value={user.email}
        onChange={(e) => updateEmail(e.target.value)}
      />

      <h1>Name : {user.name}</h1>
      <h1>{user.age}</h1>
      <h1>{user.email}</h1>
    </div>
  );
};

export default UserProfile;
