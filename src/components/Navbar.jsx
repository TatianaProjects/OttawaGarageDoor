
import { NavLink } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { FaChevronDown } from "react-icons/fa";
import { useState } from "react";


function Navbar() {

const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="navbar">

      <div className="nav-container">

        <NavLink to="/" className="logo">
          Ottawa Garage Door
        </NavLink>

        <nav className={menuOpen ? "nav-links mobile-open" : "nav-links"}>

          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            Home
          </NavLink>

          <div className="dropdown">

                <NavLink
                  to="/reviews"
                  className={({ isActive }) =>
                    isActive ? "nav-link active" : "nav-link"
                  }
                >
                  <span>Our Work </span>
                 <FaChevronDown className="dropdown-icon" />
                </NavLink>

                <div className="dropdown-menu">

                  <HashLink smooth to="/reviews#projects">
                    Recent Repair Projects
                  </HashLink>

                  <HashLink smooth to="/reviews#reviews">
                    Customer Reviews
                  </HashLink>

                  <HashLink smooth to="/reviews#faq">
                    FAQ
                  </HashLink>

                </div>

              </div>

          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            Contact
          </NavLink>

        </nav>

        <button
          className="menu-btn"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "✕" : "☰"}
        </button>

        <div className="nav-actions">

          
          <a
            href="tel:+16131234567"
            className="phone-btn"
          >
            +1 (613) 854-2109
          </a>

          <NavLink
            to="/contact"
            className="quote-btn"
          >
            Get Free Quote
          </NavLink>

        </div>

      </div>
    </header>
  );
}

export default Navbar;