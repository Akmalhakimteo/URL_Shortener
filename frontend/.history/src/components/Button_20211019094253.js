import React from "react";
import PropTypes from 'prop-types';

const Button = ({ text,color }) => {
  return <button className="btn">{text}</button>;
};

Button.defaultProps = {
  color:'black'

}

Button.propTypes = {
  text: PropTypes.string,
  color: PropTypes.string
}

export default Button;

