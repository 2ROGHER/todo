import React from "react";
import { LEVELS } from "../../models/levels.enum";
import PropTypes from 'prop-types';

const OptionComponent = ({ onChange, name, value }) => {
  const returnOption = () => {
    const arrayOptions = [];
    for (let i in LEVELS) {
      arrayOptions.push(<option key={i}>{i}</option>);
    }
    return arrayOptions;
  };

  return (
    <select name={name} value={value} onChange={onChange}>
      {returnOption()}
    </select>
  );
};

OptionComponent.propTypes = {
    onChange: PropTypes.func.isRequired,
}

export default OptionComponent;
