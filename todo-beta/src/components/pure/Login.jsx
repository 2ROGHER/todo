import React, { useState } from "react";
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

// 3. We need to initialize the Firebase Authentication and get a reference to the service.
const auth = getAuth(app);

const Login = ({ textBtn }) => {
  // Define the local state for the user credentials.
  const [user, setUser] = useState({
    email: "",
    password: "",
    remember: "",
  });

  const handleLoginSubmit = (e) => {
    e.preventDefault();
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
              value={user.email}
              placeholder="Email"
              onChange={(e) =>
                setUser({ ...user, [e.target.name]: e.target.value })
              }
            />
          </div>

          <div className="t-f-login-password t-l-row-2">
            <input
              type="password"
              name="password"
              value={user.password}
              placeholder="Password"
              onChange={(e) =>
                setUser({ ...user, [e.target.name]: e.target.value })
              }
            />
          </div>
          <div className="t-login-btn t-l-row-3">
            <button type="submit">login</button>
          </div>
          <div className="t-l-row-4">
            <input type="checkbox" name="remember" value={user.remember} />
            <span>remember</span>
          </div>
          <span className="t-l-row-5">Or login with</span>
          <div className="t-l-row-6">
            <button
              className="btn-fb"
              onClick={() =>
                signWithFacebookService(auth)
              }
            >
              <BsFacebook />
            </button>
            <button
              className="btn-google"
              onClick={() => signWithGoogleService(auth)}
            >
              <FcGoogle />
            </button>
            <button className="btn-github" onClick={() => signWithGithubService(auth)}>
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
