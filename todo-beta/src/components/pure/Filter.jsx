import React from "react";
import PropTypes from "prop-types";

const Filter = ({ onFilter, children }) => {
  return (
    <button onClick={onFilter} className="t-btn-filter">
      {children}
    </button>
  );
};

Filter.propTypes = {
    onFilter: PropTypes.func.isRequired,
    children: PropTypes.node,
};

export default Filter;
