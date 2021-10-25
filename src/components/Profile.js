import React from "react";
import { Link } from "react-router-dom";
import Update from "./Update";
import "./Profile.css";
import NewTestimonial from "../components/pages/NewTestimonial";
import Logo from "../components/images/logo.svg";

const Profile = (props) => {
  const { handleLogout, user, updateUser } = props;
  const { id, name, email, exp } = user;
  const expirationTime = new Date(exp * 1000);
  let currentTime = Date.now();

  if (currentTime >= expirationTime) {
    handleLogout();
    alert("Session has ended. Please login to continue.");
  }

  const userData = user ? (
    <div id="profile-container">
      <div className="profile-info-div">
        <h1>Your Info</h1>
        <p>Name: {name}</p>
        <p>Email: {email}</p>
        <p>ID: {id}</p>
      </div>
      <div id="profile-update-div">
        <Update id={id} name={name} email={email} updateUser={updateUser} />
      </div>
      <div id="profile-test-div">
        <NewTestimonial />
      </div>
      <div id="profile-logo">
        <img src={Logo} alt="" className="logo" />
      </div>
    </div>
  ) : (
    <h2>Loading...</h2>
  );

  const errorDiv = () => {
    return (
      <div className="text-center pt-4">
        <h3>
          Please <Link to="/login">login</Link> to view this page
        </h3>
      </div>
    );
  };

  return <div className="text-center pt-4">{user ? userData : errorDiv()}</div>;
};

export default Profile;
