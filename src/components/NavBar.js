import React from "react";
import { Link, useLocation } from 'react-router-dom';

function NavBar() {
    const location = useLocation();
    return (
      <ul className="nav-tabs">
        <li className="nav-item">
          <Link
            to="/main"
            className={
              location.pathname === "/main"
            }
          >
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/contact"
            className={
              location.pathname === "/contact"
            }
          >
            Contact
          </Link>
        </li>
        <li className="nav-item">
          <a href="mailto:nettles.code@gmail.com"> Interview me </a>
        </li>
        <li className="nav-item">
          <a href="https://docs.google.com/document/d/1rZTdMHXoYecmSNbChSI7nFcBPrlTpaK_6MDB1pvIWIY/edit?usp=sharing">
            Resume
          </a>
        </li>
      </ul>
    );
}

export default NavBar;