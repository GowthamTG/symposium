import React from "react";
import eth1 from "../../assets/eth1.png";
import eth2 from "../../assets/eth2.png";

export default function Like() {
  return (
    <div className="like">
      <div className="container">
        <div className="content">
          <div className="image">
            <img src={eth1} alt="eth1" />
          </div>
          <h2 className="title">Workshops</h2>
          <p className="description">
            We conducting workshops on various grooming technologies like
            Internet Of Things, Robotic Process Automation, App Development
          </p>
          <p className="description">
            These events are held on the idea of providing students a good
            knowledge and helping them to build their career in those
            technologies.
          </p>
        </div>
        <div className="content">
          <div className="image">
            <img src={eth2} alt="eth2" />
          </div>
          <h2 className="title">Events</h2>
          <p className="description">
            We conducting various technical and non technical events like Blind
            code,Tech Quiz,Merge warehouse,Treasure Hunt etc...
          </p>
          <p className="description">
            We are coducting these events on behalf of encouraging their
            participation and to stimulate their knowledge.
          </p>
        </div>
      </div>
    </div>
  );
}
