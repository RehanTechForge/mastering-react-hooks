import { useContext } from "react";
import { AuthContext } from "./AuthContext";
import Profile from "./components/Profile";

function App() {
  const { login, logout, authenticated } = useContext(AuthContext);
  return (
    <>
      <h1>Hooks Challenges</h1>
      <button onClick={login}>Login</button>
      <button onClick={logout}>Logout</button>
      {authenticated ? <Profile /> : null}
      {/* <Profile /> */}
    </>
  );
}

export default App;
