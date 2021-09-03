import React, { useState } from "react";
import "./App.css";
import RestrictedPage from "./components/RestrictedPage";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const user = "Marcus";

  const login = () => {
    return setIsLoggedIn(true);
  };

  const logout = () => {
    return setIsLoggedIn(false);
  };

  return (
    <div className="App">
      <RestrictedPage
        isLoggedIn={isLoggedIn}
        user={user}
        login={login}
        logout={logout}
      />
    </div>
  );
}

export default App;
