import React from "react";
import PropTypes from "prop-types";
// import styles
import "../../styles/css/select.option.css";

const OptionComponent = ({ name, value, onChange, priority }) => {
  const returnOption = () => {
    const arrayOptions = [];
    for (let i in priority) {
      arrayOptions.push(<option key={i}>{i}</option>);
    }
    return arrayOptions;
  };

  return (
    <select
      className="t-f-select"
      name={name}
      value={value}
      onChange={onChange}
    >
      <option selected>
        * {name.slice(0, 1).toUpperCase() + name.slice(1)}
      </option>
      {returnOption()}
    </select>
  );
};

OptionComponent.propTypes = {
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  priority: PropTypes.object,
};

export default OptionComponent;
