import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

import { Button, EmailModal } from 'Elements';
import { Icon, Toggle } from 'Utilities';

const Logo = ({ location }) => {
  let color = '#512888';
  if (location === '/') color = '#FFFFFF';
  return (
    <NavLink className="logo" to="/">
      <Icon name="wildcat" color={color} />
      <span className={`text ${color}`}>KSU Robotics</span>
    </NavLink>
  );
};
Logo.propTypes = {
  location: PropTypes.string.isRequired,
};

// The Header has urls that have an active state and an inactive state.
// The Contact us button does not display on the home page because there
// Is already a contact us button on the home page
const Header = ({ location }) => (
  <div className={`header-wrapper ${location === '/' ? 'home' : 'general'}`}>
    <Logo location={location} />
    <ul className="main-nav">
      <li>
        <NavLink exact activeClassName="current-url" to="/">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink activeClassName="current-url about-us" to="/About-Us">
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
    <Toggle>
      {({ on, toggle }) => (
        <Fragment>
          <Button onClick={toggle} className={`contact-us primary ${location === '/' ? 'hidden' : ''}`}>
            Contact Us!
          </Button>
          <EmailModal render={on} toggle={toggle} />
        </Fragment>
      )}
    </Toggle>
  </div>
);
Header.propTypes = {
  location: PropTypes.string.isRequired,
};

export default Header;
