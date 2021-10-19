import React from "react";
import PropTypes from 'prop-types';

const Button = ({ text,color }) => {
  return <button className="btn">{text}</button>;
};

Button.defaultProps = {
  color:'black'

}

Button.PropTypes = {
  
}

export default Button;

