import React from 'react';
import PropTypes from 'prop-types';

import { SlClose } from "react-icons/sl";

//Import styles sheets for this component.
import './alerts.css';

const Alert = ({ text, stroke, fill, icon }) => {    
    console.log('this is the icon', icon);
    const mainStyles = {
        background: fill,
        color: stroke,
        border: `1px solid ${stroke}`
    }

    return (
        <div className='alert-box' style={mainStyles}>
            {icon}
            <span id='alert-text'>{text}</span>
            <SlClose />
        </div>
    );
};

Alert.propTypes = {
    text: PropTypes.string.isRequired,
    stoke: PropTypes.string.isRequired,
    fill: PropTypes.string.isRequired,
    icon: PropTypes.object,
};


export default Alert;
