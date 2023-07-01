import React, { useState } from "react";
import Signup from "./Signup";
import LoginItem from "./LoginItem";
import "./Login.css";
import NavBar from "../NavBar_Icons/NavBar";

const Login = (props) => {
  const [isSignUpActive, setIsSignUpActive] = useState(false);

  const handleSignUpClick = () => {
    setIsSignUpActive(true);
  };

  const handleSignInClick = () => {
    setIsSignUpActive(false);
  };

  return (
    <>
      {/* <NavBar /> */}
      <div
        className={`container ${
          isSignUpActive ? "right-panel-active" : ""
        } full-page`}
        id="container"
      >
        <div className="form-container sign-in-container">
          <LoginItem showAlert={props.showAlert} />
        </div>
        <div className="form-container sign-up-container">
          <Signup showAlert={props.showAlert} />
        </div>
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <h1>Welcome Back!</h1>
              <p>
                To keep connected with us please login with your personal info
              </p>
              <button className="ghost" id="signIn" onClick={handleSignInClick}>
                Login In
              </button>
            </div>
            <div className="overlay-panel overlay-right">
              <h1>Hello, Friend!</h1>
              <p>Enter your personal details and start journey with us</p>
              <button className="ghost" id="signUp" onClick={handleSignUpClick}>
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
