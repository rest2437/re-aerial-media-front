import React, { useEffect, useState } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import Navbar from "./components/Navbar";
import Home from "./components/Welcome";
import About from "./components/About";
import Automotive from "./components/pages/Automotive";
import Profile from "./components/Profile";
import RealEstate from "./components/pages/RealEstate";
import Footer from "./components/Footer";
import Contact from "./components/pages/Contact";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Testimonials from "./components/pages/Testimonials";
import axios from "axios";
import "./App.css";

const { REACT_APP_SERVER_URL } = process.env;

const PrivateRoute = ({ component: Component, ...rest }) => {
  let token = localStorage.getItem("jwtToken");
  console.log("===> Hitting a Private Route");
  return (
    <Route
      {...rest}
      render={(props) => {
        return token ? (
          <Component {...rest} {...props} />
        ) : (
          <Redirect to="/Login" />
        );
      }}
    />
  );
};

function App() {
  const [currentUser, setCurrentUser] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  console.log(currentUser);
  useEffect(() => {
    let token;

    if (!localStorage.getItem("jwtToken")) {
      setIsAuthenticated(false);
      console.log("====> Authenticated is now FALSE");
    } else {
      token = jwt_decode(localStorage.getItem("jwtToken"));
      setAuthToken(localStorage.getItem("jwtToken"));
      setCurrentUser(token);
    }
  }, []);

  const nowCurrentUser = (userData) => {
    console.log("===> nowCurrent is here.");
    setCurrentUser(userData);
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    if (localStorage.getItem("jwtToken")) {
      localStorage.removeItem("jwtToken");
      setCurrentUser(null);
      setIsAuthenticated(false);
    }
  };
  const updateUser = (e) => {
    axios
      .get(`${REACT_APP_SERVER_URL}/users/token`)
      .then((response) => {
        const { token } = response.data;
        localStorage.setItem("jwtToken", token);
        setAuthToken(token);
      })
      .catch((error) => {
        console.log("===> Error on login", error);
      });
  };

  return (
    <>
      <div className="app-body">
        <Navbar
          currentUser={currentUser}
          handleLogout={handleLogout}
          isAuth={isAuthenticated}
        />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/Signup" exact component={Signup} />
          <Route path="/Automotive" component={Automotive} />
          <Route path="/RealEstate" component={RealEstate} />
          <Route path="/Contact" exact component={Contact} />
          <Route path="/About" component={About} />
          <Route path="/Testimonials" component={Testimonials} />

          <Route
            path="/Login"
            render={(props) => (
              <Login
                {...props}
                nowCurrentUser={nowCurrentUser}
                setIsAuthenticated={setIsAuthenticated}
                user={currentUser}
              />
            )}
          />
          <PrivateRoute
            path="/Profile"
            component={Profile}
            user={currentUser}
            handleLogout={handleLogout}
            updateUser={updateUser}
          />
        </Switch>
        <Footer />
      </div>
    </>
  );
}

export default App;
