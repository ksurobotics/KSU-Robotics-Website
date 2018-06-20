import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

import { Button } from 'Elements';
import logo from 'assets/images/Logo.png';
import purpleLogo from 'assets/images/Purple-Logo.png';

// The Header has urls that have an active state and an inactive state.
// The Contact us button does not display on the home page because there
// Is already a contact us button on the home page
const Header = ({ location }) => (
  <div className={`header-wrapper ${location === '/' ? 'home' : 'general'}`}>
    <NavLink className="logo" to="/">
      <img src={location === '/' ? logo : purpleLogo} alt="KSU Robotics Logo" />
    </NavLink>
    <ul className={`main-nav ${location.toLowerCase() === '/competitions' ? 'active-competitions' : ''}`}>
      <li>
        <NavLink exact activeClassName="current-url" to="/">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink activeClassName="current-url" to="/About-Us">
          About Us
        </NavLink>
      </li>
      <li>
        <NavLink activeClassName="current-url" to="/Competitions">
          Competitions
        </NavLink>
      </li>
      <li>
        <NavLink activeClassName="current-url" to="/Robots">
          Robots
        </NavLink>
      </li>
    </ul>
    <Button className={`primary ${location === '/' ? 'hidden' : ''}`}>Contact Us!</Button>
  </div>
);

Header.propTypes = {
  location: PropTypes.string.isRequired,
};

export default Header;
