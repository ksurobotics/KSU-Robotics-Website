import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';

import logo from '../images/logo.jpg';

const Header = () => (
  <div className="header-wrapper">
    <Link className="site-title" to="/">
      <h1>KSU Robotics</h1>
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
    </div>
    <button>Contact Us!</button>
  </div>
);

export default Header;
