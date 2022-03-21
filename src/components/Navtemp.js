import React, { useState } from "react";
import "./extracss/Navtemp.css";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaYoutubeSquare,
} from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";

import { NavLink } from "react-router-dom";

const Navtemp = () => {
  const [showMediaIcons, setShowMediaIcons] = useState(false);
  return (
    <>
      <nav className="main-nav">
        {/* 1st logo part  */}
        <div className="logo">
          <img src="/img/logo.png" />
        </div>

        {/* 2nd menu part  */}
        <div
          className={
            showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"
          }>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/Aboutp">about</NavLink>
            </li>
            <li>
              <NavLink to="/Team">Team</NavLink>
            </li>
            <li>
              <NavLink to="/Team">Contact Us</NavLink>
            </li>
            <li>
              <NavLink to="/Events">Events</NavLink>
            </li>
            {/* <li>
              <NavLink to="/contact">contact</NavLink>
            </li> */}
          </ul>
        </div>

        {/* 3rd social media links */}
        <div className="social-media">
          <ul className="social-media-desktop">
            <li>
              <a
                href=""
                target="_t">
                <FaFacebookSquare className="facebook" />
              </a>
            </li>
            <li>
              <a
                href=""
                target="_t">
                <FaInstagramSquare className="instagram" />
              </a>
            </li>
            <li>
              <a
                href=""
                target="_t">
                <FaYoutubeSquare className="youtube" />
              </a>
            </li>
          </ul>

          {/* hamburget menu start  */}
          <div className="hamburger-menu">
            <a href="#" onClick={() => setShowMediaIcons(!showMediaIcons)}>
              <GiHamburgerMenu />
            </a>
          </div>
        </div>
      </nav>

      {/* hero section  */}
      {/* <section className="hero-section">
        <p>Welcome to </p>
        <h1>Thapa Technical</h1>
      </section> */}
    </>
  );
};

export default Navtemp;