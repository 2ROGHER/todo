import React, { useState } from "react";
import PropTypes from "prop-types";
// Let's import styles from '../../styles/css/signin.css;
import "../../styles/css/sign.in.css";
import Logo from "./logo/Logo";

import emailValidator from "../../utils/validators/emailValidator";
import nameValidator from "../../utils/validators/nameValidator";
import passwordValidator from "../../utils/validators/pwdValidator";
import matchConfirmPassword from "../../utils/validators/pwdConfirmValidation";
import Separator from "./separator/Separator";

const SignIn = () => {
  // Let's define a state to store the values of user registration input.
  const [user, setUser] = useState({
    email: "",
    name: "",
    phone: "",
    password: "",
    passwordConfirm: "",
    showpwd: false,
  });

  /**
   * This function allows us to handle the user input in the registration process.
   * @param {Event} e 
   */
  const handleInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  return (
    <div className="t-signin-container">
      <Logo />
      <div className="t-signin-box">
        <h1>Create an account</h1>
        <span>Get started managment your tasks now!</span>
        <form
          id="t-signin-form"
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
              onChange={handleInputChange}
              placeholder="enter your email"
            />
            {/* / Here goes all validation errors to fix  when the user registe in the page */}
            {emailValidator(user.email) ? (
              <div>{emailValidator(user.email)}</div>
            ) : null}
          </div>
          <div className="t-s-row-2">
            <input
              type="text"
              value={user.name}
              name="name"
              onChange={handleInputChange}
              placeholder="enter your name"
            />

            {nameValidator(user.name) ? (
              <div>{nameValidator(user.name)}</div>
            ) : null}
          </div>
          <div className="t-s-row-3">
            <input
              type="password"
              value={user.password}
              name="password"
              onChange={handleInputChange}
              placeholder="enter your password"
            />
            {passwordValidator(user.password) ? (
              <div>{passwordValidator(user.password)}</div>
            ) : null}
          </div>
          <div className="t-s-row-4">
            <input
              type="password"
              value={user.passwordConfirm}
              name="passwordConfirm"
              onChange={handleInputChange}
              placeholder="repeat your password"
            />
            {matchConfirmPassword(user.password, user.passwordConfirm) ? (
              <div>
                {matchConfirmPassword(user.password, user.passwordConfirm)}
              </div>
            ) : null}
          </div>

          <div className="t-s-row-5">
            <button type="submit">sig up</button>
          </div>
          <Separator />
          <div className="t-s-row-6">
            <span>Already have an account?</span>
            <a href="/login">Login</a>
          </div>
        </form>
      </div>
    </div>
  );
};

SignIn.propTypes = {};

export default SignIn;
