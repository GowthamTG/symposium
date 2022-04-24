import React from "react";
import EventCard from "../components/card/Card";

import LeftArrow from "../assets/left-arrow.svg";
import RightArrow from "../assets/right-arrow.svg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import super1 from "../assets/super1.png";
import super2 from "../assets/super2.png";
import super3 from "../assets/super3.png";
import super4 from "../assets/super4.png";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
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
      time: 2,
    },
    {
      image: super4,
      series: "Gloop Series",
      title: "Non Technical",
      price: 2.99,
      tag: 12983,
      time: 3,
    },
    {
      image: super4,
      series: "Gloop Series",
      title: "Non Technical",
      price: 2.99,
      tag: 12983,
      time: 4,
    },
  ];

  const PreviousBtn = (props) => {
    console.log(props);
    const { className, onClick } = props;
    return (
      <div className={className} onClick={onClick}>
        <ArrowBackIosIcon style={{ color: "gray", fontSize: "45px" }} />
      </div>
    );
  };
  const NextBtn = (props) => {
    const { className, onClick } = props;
    return (
      <div className={className} onClick={onClick}>
        <ArrowForwardIosIcon style={{ color: "gray", fontSize: "45px" }} />
      </div>
    );
  };
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          dots: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
        },
      },
    ],
    nextArrow: <NextBtn />,
    prevArrow: <PreviousBtn />,
  };
  return (
    <div className="super-rare">
      <div className="title-container">
        <h2 className="page--title">EVENTS</h2>
        <p className="description">
          The list of events that are going to be hosted by CSE
        </p>
      </div>
      <div className="event__cards">
        <div className="container testimonial">
          <Slider {...settings}>
            {events.map((event) => (
              <EventCard
                key={event.time}
                image={event.image}
                series={event.series}
                title={event.title}
                price={event.price}
                tag={event.tag}
                time={event.time}
              />
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Events;
