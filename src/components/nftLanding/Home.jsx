import React from "react";
import home from "../../assets/home.png";
// import home from "../../assets/ThreadsLogo.png";

import TypeWriterText from "../landingPage/TypeWriterText/TypeWriterText";

export default function Home() {
  return (
    <div className="home">
      <div className="container">
        <div className="content">
          <h1 className="title">
            <TypeWriterText />
          </h1>

          <div className="blinker">On May 5 and 6</div>

          <p className="description">
            Don't miss out on the release of our new NFT. Sign up below to
            recieve updates when we go live.
          </p>
          <button>Sign Up</button>
        </div>
        <div className="image-container">
          <div className="image">
            <img src={home} alt="home image" />
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
