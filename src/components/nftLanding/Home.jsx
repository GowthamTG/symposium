import React from "react";
// import home from "../../assets/home.png";
import home from "../../assets/ThreadsLogo.png";
import Tilt from "react-parallax-tilt";

import TypeWriterText from "../TypeWriterText/TypeWriterText";

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
            Threads'22 - A National Level Technical symposium hosted by the
            Department of Computer Science and Engineering in Sona College of
            Technology, Salem. It provides a dias to exhibit the talents of the
            student enthusiasts of numerous facets of computer science.
          </p>
          <button>Sign Up</button>
        </div>
        <div className="image-container">
          <div className="image">
            <Tilt perspective={800} gyroscope={true}>
              <img src={home} className="landing__image" alt="home" />
            </Tilt>
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
