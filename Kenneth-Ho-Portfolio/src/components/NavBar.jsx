import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import "./NavBar.css";

function NavBar() {
  return (
    <>
      <nav className="navbar">
        <div className="leftLogo">
          <Link to="/" className="logoLink">
            KH
          </Link>
        </div>
        <div className="navbarRight">
          <ul className="navLinks">
            <li>
              <Link to="/Hobbies">Personal Life</Link>
            </li>
            <li>
              <Link to="/Experience">Experience</Link>
            </li>
            <li>
              <Link to="/Resume">Resume</Link>
            </li>
            <li>
              <Link to="/Contacts">Contacts</Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
