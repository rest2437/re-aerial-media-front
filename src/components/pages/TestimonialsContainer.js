import axios from "axios";
import React from "react";
import "../Profile.css";

const { REACT_APP_SERVER_URL } = process.env;

const TestimonialsContainer = (props) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    window.location.reload();

    axios
      .delete(`${REACT_APP_SERVER_URL}/testimonials/delete/${props._id}`)
      .then((response) => {
        console.log("===> DELETED");
        console.log(response);
      });
  };
  return (
    <div className="each-post">
      <h2 id="name-of-test">{props.name}</h2>
      <p>{props.content}</p>
      <button id="test-form-button" onClick={handleSubmit}>
        Delete
      </button>
    </div>
  );
};

export default TestimonialsContainer;
