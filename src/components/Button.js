import React from 'react';

const Button = (props) => <button className={`button ${props.className}`}>{props.text}</button>;
export default Button;
