import React from "react";
import "./App.css";

const Header = () => {
  return (
    <div className="header">
      <nav className="navbar">
        <div className="mainIcon"> Shopping App</div>
        <div className="rightSection">
          <button className="buttons login">Login</button>
          <button className="buttons signup">SignUp</button>
        </div>
      </nav>
    </div>
  );
};

export default Header;
