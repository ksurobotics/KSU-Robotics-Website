import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';

import logo from '../images/logo.jpg';

const Header = ({ props }) => {
  const { location } = props;
  return (
    <div className="header-wrapper">
      <div className="header-container">
        <h1>
          <Link to="/">
            <img src={logo} alt="Logo" />
          </Link>
        </h1>
        <nav className="main-nav">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <Link to="/competition">Competitions</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Header;
