import React, { useState } from "react";
import PropTypes from "prop-types";
// Import styles for this component
import './login.verification.css';
import { useNavigate } from "react-router-dom"

const LoginVerification = () => {
  const [user, setUser] = useState(false);
    const navigate = useNavigate();
  return (
    <div className="t-l-v-container active">
      <div className="t-l-v-box">
        <h2><span>warningicon</span>You don have a ative acont in this app.</h2>
        <div>Please, login</div>
        <button onClick={() => navigate('/login')}>sign up</button>
      </div>
    </div>
  );
};

LoginVerification.propTypes = {
};

export default LoginVerification;
