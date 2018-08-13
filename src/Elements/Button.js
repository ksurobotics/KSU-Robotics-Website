import React from 'react';
import PropTypes from 'prop-types';

const Button = props => (
  <button onClick={props.onClick || ''} className={`button ${props.className}`}>
    {props.children}
  </button>
);
export default Button;

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.any,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  className: '',
  children: '',
  onClick: () => {},
};
