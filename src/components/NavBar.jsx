import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import "./NavBar.css";

function NavBar() {
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);

  const toggleHamburger = () => {
    setIsHamburgerOpen(!isHamburgerOpen);
  };

  return (
    <>
      <nav className="navbar">
        <div className="leftLogo">
          <Link to="/" className="logoLink">
            KH
          </Link>
        </div>
        <div className="hamburger" onClick={toggleHamburger}>
          ☰
        </div>
        <div className={`navbarRight ${isHamburgerOpen ? "active" : ""}`}>
          <ul className="navLinks">
            <li>
              <Link to="/Hobbies" onClick={() => setIsHamburgerOpen(false)}>
                Personal Life
              </Link>
            </li>
            <li>
              <Link to="/Experience" onClick={() => setIsHamburgerOpen(false)}>
                Experience
              </Link>
            </li>
            <li>
              <Link to="/Resume" onClick={() => setIsHamburgerOpen(false)}>
                Resume
              </Link>
            </li>
            <li>
              <Link to="/Contacts" onClick={() => setIsHamburgerOpen(false)}>
                Contacts
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
