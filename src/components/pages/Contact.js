import React, { useState } from "react";
import "./Contact.css";
import Peytan from "../images/peytan.jpg";
// import City from "../images/city.mp4";

const Contact = () => {
  const [status, setStatus] = useState("Submit");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleMessage = (e) => {
    setMessage(e.target.value);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    const details = { name, email, message };

    let response = await fetch("http://localhost:8000/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(details),
    });
    setStatus("Submit");
    let result = await response.json();
    alert(result.status);
  };
  return (
    <div className="welcome-body">
      <div className="contact-container">
        <div id="form-container">
          <img src={Peytan} alt="" className="peytan" />

          <div id="form-title">
            <h1>Contact us for your quote today!</h1>
          </div>
          <form id="contact-form" onSubmit={handleSubmit}>
            <div className="contact-name-div">
              <label id="contact-label" htmlFor="name">
                Name:
              </label>
              <input
                value={name}
                onChange={handleName}
                type="text"
                id="contact-name"
                required
              />
            </div>
            <div className="contact-email-div">
              <label id="contact-label" htmlFor="email">
                Email:
              </label>
              <input
                value={email}
                onChange={handleEmail}
                type="email"
                id="contact-email"
                required
              />
            </div>
            <div className="contact-message-div">
              <label id="contact-label" htmlFor="message">
                Message:
              </label>
              <textarea
                value={message}
                onChange={handleMessage}
                id="contact-message"
                required
              />
            </div>
            <button type="submit">{status}</button>
          </form>
        </div>
      </div>
      {/* <video className="city" src={City} autoPlay loop muted /> */}
    </div>
  );
};

export default Contact;
