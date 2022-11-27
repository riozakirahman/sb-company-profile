import React from "react";
import "../css/navbar.css";
// import "../script";
// import { Helmet } from "react-helmet";
//rafce
const Navbar = () => {
  return (
    <nav className="navbar">
      <a href="#" className="logo"></a>
      <div className="hamburger">
        <span className="hamburger__item"></span>
        <span className="hamburger__item"></span>
        <span className="hamburger__item"></span>
      </div>
      <ul className="menu">
        <li className="menu__list">
          <a href="" className="menu__link">
            About
          </a>
        </li>
        <li className="menu__list">
          <a href="" className="menu__link">
            Collection
          </a>
        </li>
        <li className="menu__list">
          <a href="" className="menu__link menu__link_contact">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
