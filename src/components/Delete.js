// Imports
import React, { useState } from "react";
import axios from "axios";
import "./Login.css";

const { REACT_APP_SERVER_URL } = process.env;

const Delete = (props) => {
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
      .delete(`${REACT_APP_SERVER_URL}/users/delete/${props.id}`, userData)
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
      <button type="submit" value="Save changes" className="btn">
        Delete profile
      </button>
    </div>
  );
};

export default Delete;
