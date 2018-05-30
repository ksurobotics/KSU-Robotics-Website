import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

import Button from '../../components/Elements/Button';
import logo from '../../images/Logo.png';

// The Header has urls that have an active state and an inactive state.
// The Contact us button does not display on the home page because there
// Is alreadya contact us button on the home page
const Header = props => (
  <div className={`header-wrapper ${props.location === '/' ? 'home' : 'general'}`}>
    <NavLink className="logo" to="/">
      <img src={logo} alt="KSU Robotics Logo" />
    </NavLink>
    <div className="nav-wrapper">
      <nav className="main-nav">
        <ul>
          <li>
            <NavLink exact activeClassName="current-url" to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="current-url" to="/about-us">
              About Us
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="current-url" to="/competitions">
              Competitions
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="current-url" to="/robots">
              Robots
            </NavLink>
          </li>
        </ul>
      </nav>
      <Button text="Contact Us!" className={`secondary ${props.location === '/' ? 'hidden' : ''}`} />
    </div>
  </div>
);

Header.propTypes = {
  location: PropTypes.string.isRequired,
};

export default Header;
