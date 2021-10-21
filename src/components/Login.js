// Imports
import React, { useState } from "react";
import axios from "axios";
import jwt_decode from "jwt-decode";
import { Redirect } from "react-router-dom";
import setAuthToken from "../utils/setAuthToken";
import { Link } from "react-router-dom";
import "./Login.css";

const { REACT_APP_SERVER_URL } = process.env;

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const userData = { email, password };

    axios
      .post(`${REACT_APP_SERVER_URL}/users/login`, userData)
      .then((response) => {
        const { token } = response.data;
        localStorage.setItem("jwtToken", token);
        setAuthToken(token);
        const decoded = jwt_decode(token);
        props.nowCurrentUser(decoded);
      })
      .catch((error) => {
        console.log("===> Error on login", error);
        alert("Either email or password is incorrect. Please try again");
      });
  };

  if (props.user) return <Redirect to="/profile" />; // double check

  return (
    <div className="login-container">
      <div className="login-form-container">
        <h2 className="login-title">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="email-form-group">
            {/* <label id="email-label" htmlFor="email">
              Email
            </label> */}
            <input
              placeholder="EMAIL"
              type="email"
              name="email"
              value={email}
              onChange={handleEmail}
              className="login-form-control"
            />
          </div>
          <div className="password-form-group">
            {/* <label id="password-label" htmlFor="password">
              Password
            </label> */}
            <input
              placeholder="PASSWORD"
              type="password"
              name="password"
              value={password}
              onChange={handlePassword}
              className="login-form-control"
            />
          </div>
          <button type="submit" className="login-button">
            Submit
          </button>
          <div className="signup-div">
            <p>Dont have an account yet?</p>
            <Link to="./Signup">
              <button type="submit" className="signup-button">
                Signup!
              </button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
