import React, { useEffect, useRef } from "react";
import poster from "../../assets/poster.jpeg";
import Tilt from "react-parallax-tilt";
import { gsap } from "gsap";
import "./eventsDetails.scss";

const DisplayEvents = ({ eve }) => {
  const descRef = useRef(null);
  const posterRef = useRef(null);
  useEffect(() => {
    gsap.fromTo(
      descRef.current,
      {
        opacity: 0,
        y: 50,
      },
      {
        opacity: 1,
        duration: 1,
        stagger: 0.2,
        y: 0,
      }
    );
    gsap.fromTo(
      posterRef.current,
      {
        opacity: 0,
        y: 50,
      },
      {
        opacity: 1,
        duration: 1,
        stagger: 0.2,
        y: 0,
      }
    );
  });

  return (
    <div className="events">
      <div className="display-events__container">
        <div className="display-events__image-container">
          <div className="image">
            <Tilt>
              <img src={poster} alt="home" ref={posterRef} />
            </Tilt>
          </div>
          <div className="ellipse-container">
            <div className="ellipse pink"></div>
            <div className="ellipse orange"></div>
          </div>
        </div>
        <div className="display-events__content" ref={descRef}>
          <h1 className="title">{eve.title}</h1>
          <p className="description">{eve.desc}</p>
          <p className="hall">Hall no: {eve.Hall}</p>
          <p className="hall">Timing: {eve.timing}</p>
          <div>
            <p className="hall">Organizers:</p>
            <div className="org-list">
              {eve.organiser.map((org) => (
                <p className="description">{org}</p>
              ))}
            </div>
          </div>
          <button>Register Now</button>
        </div>
      </div>
    </div>
  );
};

export default DisplayEvents;
