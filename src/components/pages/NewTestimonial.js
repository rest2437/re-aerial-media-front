// Imports
import React, { useState } from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";
const { REACT_APP_SERVER_URL } = process.env;

const NewTestimonial = () => {
  const [name, setName] = useState("");
  const [content, setContent] = useState("");

  const [redirect, setRedirect] = useState(false);

  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleContent = (e) => {
    setContent(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTestimonial = { name, content };
    axios
      .post(`${REACT_APP_SERVER_URL}/users/add`, newTestimonial)
      .then((response) => {
        console.log("===> NEW POST WENT THROUGH");
        console.log(response);
        setRedirect(true);
      })
      .catch((error) => console.log("===> Error Adding a new post", error));
  };
  if (redirect) return <Redirect to="/Testimonials" />;

  return (
    <div className="test-container">
      <h2 className="review-title">Add a Review</h2>
      <form onSubmit={handleSubmit}>
        <div className="test-name-group">
          <input
            placeholder="NAME"
            type="text"
            name="name"
            value={name}
            onChange={handleName}
            className="test-name-form-control"
          />
        </div>
        <div className="test-text-group">
          <textarea
            placeholder="PLEASE WRITE MESSAGE HERE"
            value={content}
            onChange={handleContent}
            required
            className="test-text-form-control"
          />
        </div>
        <button id="test-form-button" type="submit" className="">
          Submit
        </button>
      </form>
    </div>
  );
};

export default NewTestimonial;
