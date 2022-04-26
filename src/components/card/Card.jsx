import React from "react";

import { Link } from "react-router-dom";
import classes from "./card.module.scss";

export default function Card({ id, posterImg, title, desc, tech }) {
  return (
    <div className="event__card">
      <div className="event__card-image">
        <img src={posterImg} alt="super1" />
      </div>
      <div className="event__card-content">
        <div className="event__card-heading">
          {/* <span className="event__card-series">{series}</span> */}
          <div className={classes.box}>
            <div className={classes.title}>
              <span className={classes.block}></span>
              <h1>
                {title}
                <span></span>
              </h1>
            </div>
          </div>
          {/* <span className="event__card-top">Top bid</span> */}
        </div>
        <div className="event__card-details">
          <h4 className="event__card-title">{tech}</h4>
          <div className="event__card-price">
            {/* <img src={superEth} alt="super eth" />
            <h4>{price} ETH</h4> */}
          </div>
        </div>
        <div className="event__card-sub-details">
          {/* <span>#{tag}</span> */}
          <span>{desc}</span>

          {/* <span>{time} day left</span> */}
        </div>
        <div className="event__card--button__container">
          <Link to={`/events/${id}`}>
            <button className={classes.glowonhover}>Know More</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
