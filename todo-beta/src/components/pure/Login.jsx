import React, { useState } from "react";
import PropTypes from "prop-types";
// import the style sheet for the login page.
import "../../styles/css/login.css";
// Let's import the icons for the login services options.
import { BsFacebook } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import emailValidator from "../../utils/validators/emailValidator";

const Login = ({ textBtn }) => {
  // Define the local state for the user credentials.
  const [auth, setAuth] = useState({
    email: "",
    password: "",
    remember: "",
  });

  console.log(emailValidator(auth.email));

  const handleLoginSubmit = () => {
    console.log("hola");
  };
  return (
    <div className="t-login-container">
      <div className="t-login-logo">logo</div>
      <div className="t-login-box">
        <h1 className="t-login-title">log in</h1>
        <span></span>
        <form onSubmit={handleLoginSubmit}>
          <div className="t-f-login-email t-l-row-1">
            <input
              type="email"
              name="email"
              value={auth.email}
              placeholder="Email"
              onChange={(e) =>
                setAuth({ ...auth, [e.target.name]: e.target.value })
              }
            />

            {/* // Here goes the validator item for the email input */}
            
            {
              emailValidator(auth.email) ? <div>{emailValidator(auth.email)}</div> : null 
            }
          </div>

          <div className="t-f-login-password t-l-row-2">
            <input
              type="password"
              name="password"
              value={auth.password}
              placeholder="Password"
              onChange={(e) =>
                setAuth({ ...auth, [e.target.name]: e.target.value })
              }
            />
          </div>
          <div className="t-login-btn t-l-row-3">
            <button type="submit">login</button>
          </div>
          <div className="t-l-row-4">
            <input type="checkbox" name="remember" value={auth.remember} />
            <span>remember</span>
          </div>
          <span className="t-l-row-5">Or login with</span>
          <div className="t-l-row-6">
            <button className="btn-fb">
              <BsFacebook />
            </button>
            <button className="btn-google">
              <FcGoogle />
            </button>
            <button className="btn-github">
              <FaGithub />
            </button>
          </div>
          <div className="t-l-row-7">
            <span>Are you new here,</span>
            <a href="#">sign in</a>
          </div>
        </form>
      </div>
    </div>
  );
};

Login.propTypes = {};

export default Login;
