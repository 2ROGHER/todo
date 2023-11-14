import React from "react";
import PropTypes from "prop-types";
// Let's import the main icon for this app
import icon from "../../../../public/star-icon.svg";
// Import the respective styles for this component.
import './logo.css';

const Logo = () => {
  return (
    <div className="t-logo">
      <img src={icon} alt="icon"  />
    </div>
  );
};

Logo.propTypes = {};

export default Logo;
