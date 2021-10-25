import React, { useState } from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";
import "./Signup.css";
const { REACT_APP_SERVER_URL } = process.env;

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [redirect, setRedirect] = useState(false);

  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPassword = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === confirmPassword && password.length >= 8) {
      const newUser = { name, email, password };
      axios
        .post(`${REACT_APP_SERVER_URL}/users/signup`, newUser)
        .then((response) => {
          console.log("===> Yay, new user");
          console.log(response);
          setRedirect(true);
        })
        .catch((error) => console.log("===> Error in Signup", error));
    } else {
      if (password !== confirmPassword) return alert("Passwords don't match");
      alert("Password needs to be at least 8 characters. Please try again.");
    }
  };

  if (redirect) return <Redirect to="/login" />;

  return (
    <div>
      <div className="signup-container">
        <div id="signup-form-container">
          <h2 className="signup-title">Signup</h2>
          <form id="signup-form" onSubmit={handleSubmit}>
            <div className="email-form-group">
              <input
                placeholder="NAME"
                type="text"
                name="name"
                value={name}
                onChange={handleName}
                className="signup-form-control"
              />
            </div>
            <div className="email-form-group">
              <input
                placeholder="EMAIL"
                type="email"
                name="email"
                value={email}
                onChange={handleEmail}
                className="signup-form-control"
              />
            </div>
            <div className="password-form-group">
              <input
                placeholder="PASSWORD"
                type="password"
                name="password"
                value={password}
                onChange={handlePassword}
                className="signup-form-control"
              />
            </div>
            <div className="password-form-group">
              <input
                placeholder="CONFIRM PASSWORD"
                type="password"
                name="confirmPassword"
                value={confirmPassword}
                onChange={handleConfirmPassword}
                className="signup-form-control"
              />
            </div>
            <button type="submit" className="login-button">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
