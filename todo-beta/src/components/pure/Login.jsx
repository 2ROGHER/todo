import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
// import the style sheet for the login page.
import "../../styles/css/login.css";
// Let's import the icons for the login services options.
import { BsFacebook } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

// 1. Let's import the auth methods to work with Firebase
import {
  getAuth,
  FacebookAuthProvider,
  GoogleAuthProvider,
} from "firebase/auth";

// 2. We need to import the 'firebase app' to user in the project.
import { app } from "../../firebase/index.js";
import signWithGoogleService from "../../auth/googleAuth.js";
import signWithFacebookService from "../../auth/facebookAuth.js";
import signWithGithubService from "../../auth/githubAuth.js";
import Logo from "./logo/Logo.jsx";

import Separator from "./separator/Separator.jsx";

// 3. We need to initialize the Firebase Authentication and get a reference to the service.
const auth = getAuth(app);


const Login = ({ textBtn }) => {
  // Define a navigation hook.
  const navigate = useNavigate();

  // Define the local state for the user credentials.
  const [user, setUser] = useState({
    email: "",
    password: "",
    remember: "",
  });

  /**
   * This function allows us to send the server the values to
   * authenticate the user or if the user is not registered, he needs to register first.
   * @param {Event} e Event value for send to server the form values.
   */
  const handleLoginSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="t-login-container">
      <Logo />
      <div className="t-login-box">
        <h1 className="t-login-title">hi, welcome back!</h1>
        <span></span>
        <form onSubmit={handleLoginSubmit}>
          <div className="t-f-login-email t-l-row-1">
            <label>email</label>
            <input
              type="email"
              name="email"
              value={user.email}
              placeholder="example@gmail.com *"
              onChange={(e) =>
                setUser({ ...user, [e.target.name]: e.target.value })
              }
            />
          </div>

          <div className="t-f-login-password t-l-row-2">
            <label>password</label>
            <input
              type="password"
              name="password"
              value={user.password}
              placeholder="Enter Your Password * "
              onChange={(e) =>
                setUser({ ...user, [e.target.name]: e.target.value })
              }
            />
          </div>
          <div className="t-l-row-4">
            <input type="checkbox" name="remember" value={user.remember} />
            <span>remember me</span>
          </div>
          <div className="t-login-btn t-l-row-3">
            <button type="submit">login</button>
          </div>

          <Separator />

          <div className="t-l-row-6">
            <button
              className="btn-fb"
              onClick={() => signWithFacebookService(auth)}
            >
              <BsFacebook /> <span>login with facebook</span>
            </button>
            <button
              className="btn-google"
              onClick={() => signWithGoogleService(auth)}
            >
              <FcGoogle /> <span>login with google</span>
            </button>
            <button
              className="btn-github"
              onClick={() => signWithGithubService(auth)}
            >
              <FaGithub /> <span>login with github</span>
            </button>
          </div>
          <div className="t-l-row-7">
            <span>Don’t have an account ?</span>
            <a href="/sign-in">sign up</a>
          </div>
        </form>
      </div>
    </div>
  );
};

Login.propTypes = {};

export default Login;
