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
  if (redirect) return <Redirect to="/Testimonials" />; // You can have them redirected to profile (your choice)

  return (
    <div className="add-a-dog">
      <div className="row mt-4">
        <div className="col-md-7 offset-md-3">
          <div className="card card-body">
            <h2 className="py-2">Add a Review</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label className="profile-form-label" htmlFor="name">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={name}
                  onChange={handleName}
                  className="profile-form-control"
                />
              </div>
              <div className="form-group">
                {/* <label className="profile-form-label" htmlFor="breed">
                  Review
                </label> */}
                <textarea
                  placeholder="PLEASE WRITE MESSAGE HERE"
                  value={content}
                  onChange={handleContent}
                  id="contact-message"
                  required
                />
              </div>
              <button id="profile-form-button" type="submit" className="">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewTestimonial;
