import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar__text">
        <div className="logo">
          <img src="/img/snsit_logo.png" alt="logo" />
        </div>
        <ul className="navbar__ul">
          <li>
          <Link to="/">Home</Link>
            
          </li>
          <li>
          <Link to="/Aboutp">About</Link>
            
          </li>
          <li>
          <Link to="/Team">Team</Link>
            
          </li>
          <li>
            <a href="">News</a>
          </li>
          <li>
            <a href="">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
