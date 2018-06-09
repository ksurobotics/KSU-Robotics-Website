import React from 'react';
import PropTypes from 'prop-types';

const Button = props => <button className={`button ${props.className}`}>{props.children}</button>;
export default Button;

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.any,
};

Button.defaultProps = {
  className: '',
  children: '',
};
