import { Link, useLocation } from "react-router-dom";
import { RingLoader } from "react-spinners";
import { useState, useEffect } from "react";
import "./NavBar.css";

function NavBar() {
  const [loading, setLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 1000);

    return () => clearTimeout(timer);
  }, [location]);

  return (
    <>
      {loading && (
        <div className="spinnerContainer">
          <RingLoader color="blue" size={150} />
          <p>Loading ...</p>
        </div>
      )}
      <nav className="navbar">
        <div className="leftLogo">
          <Link to="/" className="logoLink">
            KH
          </Link>
        </div>
        <div className="navbarRight">
          <ul className="navLinks">
            <li>
              <Link to="/Hobbies">Personal</Link>
            </li>
            <li>
              <Link to="/Experience">Experience</Link>
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
