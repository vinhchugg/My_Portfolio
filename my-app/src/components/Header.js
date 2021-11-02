import React from "react";
// import NavBar from "./NavBar";
import "./header.css";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function Header() {
  return (
    <header className="header">
      <a className="name" href="https://vinhchugg.github.io/My_Portfolio/">
        Vinh Chu
      </a>
      <div className="nav-container">
        <a className="" href="https://github.com/vinhchugg">
          <FaGithub />
        </a>
        <a className="" href="https://www.linkedin.com/in/vinh-chu-7502b81b3/">
          <FaLinkedin />
        </a>
        <div className="menu-icon"></div>
      </div>
    </header>
  );
}

export default Header;
