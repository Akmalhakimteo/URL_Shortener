import React from "react";
import PropTypes from "prop-types";

const Button = ({ text, color }) => {

  const onClick = ( ) => {
    console.log('click')
  }

  return <button className="btn" style= {{backgroundColor:color}} onClick = >{text}</button>;
};

Button.defaultProps = {
  color: "black",
};

Button.propTypes = {
  text: PropTypes.string,
  color: PropTypes.string,
};

export default Button;
