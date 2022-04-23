import React from "react";
import EventCard from "../components/card/Card";
// import Carousel from "react-multi-carousel";
// import "react-multi-carousel/lib/styles.css";

import LeftArrow from "../assets/left-arrow.svg";
import RightArrow from "../assets/right-arrow.svg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import super1 from "../assets/super1.png";
import super2 from "../assets/super2.png";
import super3 from "../assets/super3.png";
import super4 from "../assets/super4.png";
import { Link } from "react-router-dom";

import Grid from "@mui/material/Grid";

const Events = () => {
  const events = [
    {
      image: super1,
      series: "Gloop Series",
      title: "Technical",
      price: 2.99,
      tag: 12983,
      time: 1,
    },
    {
      image: super2,
      series: "Gloop Series",
      title: "Non Technical",
      price: 2.99,
      tag: 12983,
      time: 1,
    },
    {
      image: super3,
      series: "Gloop Series",
      title: "Technical",
      price: 2.99,
      tag: 12983,
      time: 1,
    },
    {
      image: super4,
      series: "Gloop Series",
      title: "Non Technical",
      price: 2.99,
      tag: 12983,
      time: 1,
    },
    {
      image: super4,
      series: "Gloop Series",
      title: "Non Technical",
      price: 2.99,
      tag: 12983,
      time: 1,
    },
  ];

  const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
    <img src={LeftArrow} alt="prevArrow" {...props} />
  );

  const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
    <img src={RightArrow} alt="nextArrow" {...props} />
  );

  return (
    <>
      <div className="super-rare">
        <div className="title-container">
          <h2 className="page--title">EVENTS</h2>
          <p className="description">
            We have released four limited edition NFT's early which which can be
            bid on via <Link to="">OpenSea</Link>.
          </p>
        </div>
        <div className="event__card--container">
          <Grid container spacing={1} justify="center">
            {events.map((event) => (
              <Grid item xs={12} sm={6} md={3}>
                <EventCard
                  key={event.title}
                  image={event.image}
                  series={event.series}
                  title={event.title}
                  price={event.price}
                  tag={event.tag}
                  time={event.time}
                />
              </Grid>
            ))}
          </Grid>
        </div>
      </div>
    </>
  );
};

export default Events;
