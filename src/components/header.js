import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';

import logo from '../images/Logo.png';

const Header = () => (
  <div className="header-wrapper">
    <Link className="logo" to="/">
      <img src={logo} alt="KSU Robotics Logo" />
    </Link>
    <div className="nav-wrapper">
      <nav className="main-nav">
        <ul>
          <li>
            <Link exact activeClassName="current-url" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link activeClassName="current-url" to="/about">
              About Us
            </Link>
          </li>
          <li>
            <Link activeClassName="current-url" to="/competitions">
              Competitions
            </Link>
          </li>
        </ul>
      </nav>
      <button>Contact Us!</button>
    </div>
  </div>
);

export default Header;
