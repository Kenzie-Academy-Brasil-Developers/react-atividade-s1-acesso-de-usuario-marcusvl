import React from "react";
import "./RestrictedPage.css";
const RestrictedPage = ({ isLoggedIn, user, login, logout }) => {
  return (
    <div className="container">
      {isLoggedIn ? (
        <div className="userPanel">
          <p>Bem vindo, {user}!</p>
          <button onClick={() => logout()}>Logout</button>
        </div>
      ) : (
        <div className="userPanel">
          <p>Você precisa logar para ter acesso à página.</p>
          <button onClick={() => login()}>Login</button>
        </div>
      )}
    </div>
  );
};

export default RestrictedPage;
