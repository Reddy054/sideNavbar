import React from "react";
import { Link } from "react-router-dom";
import "../../pages/styles/sidenav.css";

const SideNav = () => {
  return (
    <nav className="sidebar_container">
      <ul className="menu_list">
        <li>
          <Link to="/" className="link">
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" className="link">
            About
          </Link>
        </li>
        <li>
          <Link to="/services" className="link">
            Services
          </Link>
        </li>
        <li>
          <Link to="/contact" className="link">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default SideNav;
