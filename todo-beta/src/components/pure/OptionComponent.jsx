import React from "react";
import { LEVELS } from "../../models/levels.enum";
import PropTypes from 'prop-types';
// import styles
import '../../styles/css/select.option.css';

const OptionComponent = ({ onChange, name, value }) => {
  const returnOption = () => {
    const arrayOptions = [];
    for (let i in LEVELS) {
      arrayOptions.push(<option key={i}>{i}</option>);
    }
    return arrayOptions;
  };

  return (
    <select className='t-f-select' name={name} value={value} onChange={onChange}>
      <option selected>* Level</option>
      {returnOption()}
    </select>
  );
};

OptionComponent.propTypes = {
    onChange: PropTypes.func.isRequired,
}

export default OptionComponent;
