import React, { useState } from "react";
import "./Contact.css";
import Peytan from "../images/peytan.jpg";

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
            <h1>
              We're happy to see that you think our work is as epic as we do. If
              you want to book us or have any questions please contact us today
              and explain what your project questions or goals are!
            </h1>
          </div>
          <form id="contact-form" onSubmit={handleSubmit}>
            <div className="contact-name-div">
              <input
                placeholder="NAME"
                value={name}
                onChange={handleName}
                type="text"
                id="contact-name"
                required
              />
            </div>
            <div className="contact-email-div">
              <input
                placeholder="EMAIL@EMAIL.COM"
                value={email}
                onChange={handleEmail}
                type="email"
                id="contact-email"
                required
              />
            </div>
            <div className="contact-message-div">
              <textarea
                placeholder="PLEASE WRITE MESSAGE HERE"
                value={message}
                onChange={handleMessage}
                id="contact-message"
                required
              />
            </div>
            <button id="contact-sub" type="submit">
              {status}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
