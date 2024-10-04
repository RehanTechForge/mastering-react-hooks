import UpdateProfile from "./components/UpdateProfile";
import UserProfile from "./components/UserProfile";
import { UserProvider } from "./UserContext";

function App() {
  return (
    <>
      <UserProvider>
        <h1>Hooks Challenges</h1>
        <UserProfile />
        <UpdateProfile />
      </UserProvider>
    </>
  );
}

export default App;
