import React from "react";
import PropTypes from "prop-types";

// "--c": "#b5fbfe"
const FilterOption = ({ text, color, icon }) => {
  return (
    <li style={{ "--c": `${color}` }}>
      {icon}
      <span>{text}</span>
    </li>
  );
};

FilterOption.propTypes = {
    text: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    icon: PropTypes.object
};

export default FilterOption;
