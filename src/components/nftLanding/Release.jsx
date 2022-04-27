import React from "react";
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";
import release1 from "../../assets/release1.png";
import release2 from "../../assets/Throwback.jpeg";
import Card from "./Card";

export default function Release() {
  const openInNewTab = (url) => {
    const newWindow = window.open(url, "_blank", "noopener,noreferrer");
    if (newWindow) newWindow.opener = null;
  };
  return (
    <div className="releases">
      <div className="release green">
        <div className="event__card-container">
          <Card
            image={release2}
            series="Throwback threads 2020"
            title="Computer Science and Engineering"
            price={3.95}
            tag="1094"
            time={2}
          />
          <div className="ellipse orange"></div>
        </div>
        <div className="content">
          <h2 className="title">Department of CSE</h2>
          <p className="description">
            Plays a major role in Preparing our students for lifelong personal
            and professional development and that enable them to exercise
            leadership and make lasting contributions in their disciplines.
          </p>
          <p className="description">
            Our dept always Provide the educational resources to keep pace with
            developments in the field.
          </p>
          <p className="description">
            Or department also provide enough support To initiate the
            development of e-Services for Social Welfare Activities.
          </p>
          <div
            onClick={() => openInNewTab("https://www.sonatech.ac.in/cse/")}
            className="link"
          >
            Check us out <BsArrowRight />
          </div>
        </div>
      </div>
    </div>
  );
}
