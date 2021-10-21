// Imports
import React, { useState } from "react";
import axios from "axios";
import "./Login.css";

const { REACT_APP_SERVER_URL } = process.env;

const refreshPage = () => {
  window.location.reload(false);
};

const Update = (props) => {
  const [name, setName] = useState(props.name);
  const [email, setEmail] = useState(props.email);

  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const userData = { name, email };

    axios
      .put(`${REACT_APP_SERVER_URL}/users/update/${props.id}`, userData)
      .then((response) => {
        console.log(response);
        props.updateUser();
      })
      .catch((error) => {
        console.log("===> Error on login", error);
      });
  };

  return (
    <div className="profile-container">
      <div className="edit-info">
        <h2>Edit your info</h2>
      </div>
      <form className="profile-form" onSubmit={(e) => handleSubmit(e)}>
        <input
          type="text"
          value={name}
          onChange={handleName}
          name="firstName"
          className="edit-input-name"
        />
        <br />
        <input
          type="text"
          value={email}
          onChange={handleEmail}
          name="lastName"
          className="edit-input-email"
        />
        <div className="button-container">
          <button type="submit" value="Save changes" className="submit-button">
            Submit
          </button>
          <button
            onClick={refreshPage}
            value="Save changes"
            className="refresh-button"
          >
            Refresh
          </button>
        </div>
      </form>
    </div>
  );
};

export default Update;
