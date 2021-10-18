import React from "react";
// import NavBar from "./NavBar";
import "./header.css";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function Header() {
  return (
    <header className="header">
      <a className="name" href="#">
        Vinh Chu
      </a>
      <div className="nav-container">
        <div className="icons">
          <a className="" href="#">
            <FaGithub />
          </a>
          <a className="" href="#">
            <FaLinkedin />
          </a>
        </div>
        <div className="menu-icon"></div>
      </div>
    </header>
  );
}

export default Header;
