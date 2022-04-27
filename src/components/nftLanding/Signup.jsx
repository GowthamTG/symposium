import React from "react";
import signup from "../../assets/signup.png";
export default function Signup() {
  return (
    <div className="signup">
      <div className="container">
        <div className="content">
          {/* <p className="sub-title">Launching Soon</p> */}
          <h1 className="title">An Event like no other</h1>
          <p className="description">
            Don't miss out on one of the most exiting event that you will ever
            experience. Get ready to be <bold>exited</bold> and
            <bold> enhaced.</bold>
          </p>
          {/* <button>Sign Up</button> */}
        </div>
        <div className="image-container">
          <div className="image">
            <img src={signup} alt="home" />
          </div>
          <div className="ellipse-container">
            <div className="ellipse pink"></div>
            <div className="ellipse orange"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
