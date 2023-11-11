import React, { useState } from "react";
import PropTypes from "prop-types";
// Let's import styles from '../../styles/css/signin.css;
import "../../styles/css/sign.in.css";
import emailValidator from "../../utils/validators/emailValidator";
import nameValidator from "../../utils/validators/nameValidator";
import passwordValidator from "../../utils/validators/pwdValidator";
import matchConfirmPassword from "../../utils/validators/pwdConfirmValidation";
import phoneValidation from "../../utils/validators/phoneValidator";

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

  const handleInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  console.log(user);
  return (
    <div className="t-signin-container">
      <div className="t-logo">logo</div>
      <div className="t-signin-box">
        <h2>sign in</h2>
        <span id="t-s-separator"></span>
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
              onChange={handleInputChange}
              placeholder="Email"
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
              placeholder="Name"
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
              placeholder="Password"
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
              placeholder="Repeat password"
            />
            {matchConfirmPassword(user.password, user.passwordConfirm) ? (
              <div>
                {matchConfirmPassword(user.password, user.passwordConfirm)}
              </div>
            ) : null}
          </div>
          <div className="t-s-row-5">
            <input
              type="phone"
              value={user.phone}
              name="phone"
              onChange={handleInputChange}
              placeholder="Phone number"
            />

            {phoneValidation(user.phone) ? (
              <div>{phoneValidation(user.phone)}</div>
            ) : null}
          </div>
          <div className="t-s-row-6">
            <input type="checkbox" name="agree" />{" "}
            <span>
              Accept{" "}
              <a href="#">
                <b>term & conditions</b>
              </a>
            </span>
          </div>
          <div className="t-s-row-7">
            <button type="submit">register</button>
          </div>
        </form>
      </div>
    </div>
  );
};

SignIn.propTypes = {};

export default SignIn;
