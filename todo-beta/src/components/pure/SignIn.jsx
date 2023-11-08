import React, { useState } from "react";
import PropTypes from "prop-types";
// Let's import styles from '../../styles/css/signin.css;
import "../../styles/css/sign.in.css";

const SignIn = () => {
  // Let's define a state to store the values of the user registration.
  const [user, setUser] = useState({
    email: "",
    name: "",
    phone: "",
    password: "",
    passwordConfirm: "",
    showpwd: false,
  });
  return (
    <div className="t-signin-container">
      <div className="t-logo">logo</div>
      <div className="t-signin-box">
        <h2>sign in</h2>
        <span></span>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            console.log("submiting the values to server");
          }}
        >
          <div className="t-s-row-1">
            <input
              type="email"
              value={user.email}
              name="email"
              placeholder="Email"
            />
          </div>
          <div className="t-s-row-2">
            <input
              type="text"
              value={user.name}
              name="name"
              placeholder="name"
            />
          </div>
          <div className="t-s-row-3">
            <input
              type="password"
              value={user.password}
              name="password"
              placeholder="Password"
            />
          </div>
          <div className="t-s-row-4">
            <input
              type="password"
              value={user.passwordConfirm}
              name="passwordConfirm"
              placeholder="Repeat password"
            />
            <input type="checkbox" name="show-pwd" value={user.showpwd} />
          </div>
          <div className="t-s-row-5">
            <input
              type="phone"
              value={user.phone}
              name="phone"
              placeholder="Phone number"
            />
            <input type="checkbox" name="show-pwd" value={user.showpwd} />
          </div>
          <div className="t-s-row-6">
            <button type="submit">Create account</button>
          </div>
        </form>
      </div>
    </div>
  );
};

SignIn.propTypes = {};

export default SignIn;
