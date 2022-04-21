import React from "react";
import superEth from "../../assets/supereth.png";

import classes from "./card.module.scss";

export default function Card({ image, series, title, price, tag, time }) {
  return (
    <div className="card">
      <div className="card-image">
        <img src={image} alt="super1" />
      </div>
      <div className="card-content">
        <div className="card-heading">
          {/* <span className="card-series">{series}</span> */}
          <div class={classes.box}>
            <div class={classes.title}>
              <span class={classes.block}></span>
              <h1>
                Event Name<span></span>
              </h1>
            </div>
          </div>
          {/* <span className="card-top">Top bid</span> */}
        </div>
        <div className="card-details">
          <h4 className="card-title">{title}</h4>
          <div className="card-price">
            {/* <img src={superEth} alt="super eth" />
            <h4>{price} ETH</h4> */}
          </div>
        </div>
        <div className="card-sub-details">
          {/* <span>#{tag}</span> */}
          <span>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
            laboriosam ea nemo blanditiis reprehenderit, vel laudantium
          </span>

          {/* <span>{time} day left</span> */}
        </div>
        <div className="card--button__container">
          <button className={classes.glowonhover}>Know More</button>
        </div>
      </div>
    </div>
  );
}
