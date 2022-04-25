import React from "react";
import superEth from "../../assets/supereth.png";
import { Link } from "react-router-dom";

export default function Card({ id, image, series, title, price, tag, time }) {
  return (
    <Link to={`event/${id}`} style={{ textDecoration: "none" }}>
      <div className="event__card">
        <div className="event__card-image">
          <img src={image} alt="super1" />
        </div>
        <div className="event__card-content">
          <div className="event__card-heading">
            <span className="event__card-series">{series}</span>
            <span className="event__card-top">Top bid</span>
          </div>
          <div className="event__card-details">
            <h4 className="event__card-title">{title}</h4>
            <div className="event__card-price">
              <img src={superEth} alt="super eth" />
              <h4>{price} ETH</h4>
            </div>
          </div>
          <div className="event__card-sub-details">
            <span>#{tag}</span>
            <span>{time} day left</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
