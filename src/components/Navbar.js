import React, { useState, useEffect } from "react";
import { Button } from "./Button";
import { Link } from "react-router-dom";
import "./Navbar.css";
// import smallLogo from "./photos/small-logo.png";

const Navbar = (props) => {
  console.info(props);
  const { isAuth, currentUser, handleLogout } = props;
  const [click, setClick] = useState(false);
  const [button] = useState(true);
  const closeMobileMenu = () => setClick(false);

  if (isAuth && currentUser) {
    if (currentUser.volunteer) {
      return (
        <>
          <nav className="navbar">
            <div className="navbar-container">
              <ul className={click ? "nav-menu active" : "nav-menu"}>
                <li className="nav-item">
                  <Link
                    className="nav-links"
                    to="/WalkerProfile"
                    onClick={closeMobileMenu}
                  >
                    Walker Profile
                  </Link>
                </li>
                <li className="nav-item">
                  <span onClick={handleLogout} className="nav-links">
                    Logout
                  </span>
                </li>
              </ul>
            </div>
          </nav>
        </>
      );
    } else {
      return (
        <>
          <nav className="navbar">
            <div className="navbar-container">
              <ul className={click ? "nav-menu active" : "nav-menu"}>
                <li className="nav-item">
                  <Link
                    to="/ShelterProfile"
                    className="nav-links"
                    onClick={closeMobileMenu}
                  >
                    Shelter Profile
                  </Link>
                </li>
                <li className="nav-item">
                  <span onClick={handleLogout} className="nav-links">
                    Logout
                  </span>
                </li>
              </ul>
            </div>
          </nav>
        </>
      );
    }
  } else {
    // Not logged in and isAuth is false
    return (
      <>
        <nav className="navbar">
          <div className="navbar-container">
            <ul className={click ? "nav-menu active" : "nav-menu"}>
              <li className="nav-item">
                <Link
                  to="/WalkerHub"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  Volunteer's Hub
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/ShelterHub"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  Shelter's Hub
                </Link>
              </li>
              <Link to="/Login">
                {button && <Button buttonStyle="btn--outline">SIGN-IN</Button>}
              </Link>
            </ul>
          </div>
        </nav>
      </>
    );
  }
};

const NavbarContainer = (props) => {
  console.log("NavbarContainer: ", props);
  const { handleLogout, isAuth, currentUser } = props;
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 600) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            {/* <img src={smallLogo} alt="" className="navbar-logo" /> */}
            <i className="fab fa-typo3" />
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/about" className="nav-links" onClick={closeMobileMenu}>
                About Us
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/Dogs" className="nav-links" onClick={closeMobileMenu}>
                Dogs
              </Link>
            </li>
          </ul>
          <Navbar
            isAuth={isAuth}
            currentUser={currentUser}
            handleLogout={handleLogout}
            closeMobileMenu={closeMobileMenu}
          />
          {/* <Link to="/Login">
            {button && <Button buttonStyle="btn--outline">SIGN-IN</Button>}
          </Link> */}
        </div>
      </nav>
    </>
  );
};

export default NavbarContainer;
