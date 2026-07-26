import { useState } from "react";
import "./App.css";

import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";
import GuestPage from "./GuestPage";
import UserPage from "./UserPage";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <div className="container">
      {isLoggedIn ? (
        <>
          <UserPage />
          <br />
          <LogoutButton onClick={handleLogout} />
        </>
      ) : (
        <>
          <GuestPage />
          <br />
          <LoginButton onClick={handleLogin} />
        </>
      )}
    </div>
  );
}

export default App;