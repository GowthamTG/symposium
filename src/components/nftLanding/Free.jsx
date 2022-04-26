import React from "react";
import Card from "./Card";
import icon from "../../assets/icon.png";
import super1 from "../../assets/super1.png";
import release2 from "../../assets/release2.png";

export default function Free() {
  return (
    <div className="free">
      <div className="container">
        <div className="background">
          <div className="ellipse pink"></div>
          <div className="ellipse green"></div>
        </div>
        <div className="content">
          <div className="image">{/* <img src={icon} alt="icon" /> */}</div>
          <h2 className="title"> Event for All</h2>
          <p className="description">
            Register today and get ready for excitement, enjoyment and
            enthusiasm.
          </p>
          <p className="description--points">
            <b>Excitement</b>
          </p>
          <p className="description--points">
            <b>Enjoyment</b>
          </p>
          <p className="description--points">
            <b>Enthusiasm</b>
          </p>
        </div>
      </div>
      <div className="event__cards">
        <div className="event__card1">
          <Card
            image={super1}
            series="Gloop Series"
            title="Purple Man"
            price={2.99}
            tag={12983}
            time={1}
          />
        </div>
        <div className="event__card2">
          <Card
            image={release2}
            series="Gloop Series"
            title="Purple Man"
            price={3.95}
            tag="1094"
            time={2}
          />
        </div>
      </div>
    </div>
  );
}
