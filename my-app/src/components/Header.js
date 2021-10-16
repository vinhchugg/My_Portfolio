import React from "react";
// import NavBar from "./NavBar";
import "./header.css";
function Header() {
  return (
    <header className="header">
      <a className="name" href="#">
        Vinh Chu
      </a>
      <div className="nav-container">
        <div className="icons">
          <a className="" href="#">
            github
          </a>
          <a className="" href="#">
            linkedin
          </a>
        </div>
        <div className="menu-icon"></div>
      </div>
    </header>
  );
}

export default Header;
