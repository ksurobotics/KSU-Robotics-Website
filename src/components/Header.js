import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';

import Button from '../components/Button';

import logo from '../images/Logo.png';

// The Header has urls that have an active state and an inactive state.
// The Contact us button does not display on the home page because there
// Is alreadya contact us button on the home page
const Header = props => (
  <div className={`header-wrapper ${props.location === '/' ? 'home' : 'general'}`}>
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
            <Link activeClassName="current-url" to="/about-us">
              About Us
            </Link>
          </li>
          <li>
            <Link activeClassName="current-url" to="/competitions">
              Competitions
            </Link>
          </li>
          <li>
            <Link activeClassName="current-url" to="/robots">
              Robots
            </Link>
          </li>
        </ul>
      </nav>
      <Button text="Contact Us!" className={`secondary ${props.location === '/' ? 'hidden' : ''}`} />
    </div>
  </div>
);

export default Header;
