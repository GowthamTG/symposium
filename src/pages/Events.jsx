import React, { useContext } from "react";
import EventCard from "../components/card/Card";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { EventsContext } from "../EventsContext";

import Slider from "react-slick";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

const Events = () => {
  const events = useContext(EventsContext);
  console.log(events);
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
    <>
      <div className="super-rare">
        <div className="title-container">
          <h2 className="page--title">Workshops</h2>
          {/* <p className="description">
            The list of events that are going to be hosted by CSE
          </p> */}
        </div>
        <div className="event__cards">
          <div className="container testimonial">
            <Slider {...settings}>
              {events.map((event) => (
                <EventCard
                  key={event.time}
                  id={event.id}
                  posterImg={event.cardLogo}
                  title={event.title}
                  desc={event.cardDesc}
                  tech={event.tech}
                />
              ))}
            </Slider>
          </div>
        </div>
      </div>
      <div className="super-rare">
        <div className="title-container">
          <h2 className="page--title">Events</h2>
          {/* <p className="description">
            The list of events that are going to be hosted by CSE
          </p> */}
        </div>
        <div className="event__cards">
          <div className="container testimonial">
            <Slider {...settings}>
              {events.map((event) => (
                <EventCard
                  key={event.time}
                  id={event.id}
                  posterImg={event.cardLogo}
                  title={event.title}
                  desc={event.cardDesc}
                  tech={event.tech}
                />
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
};

export default Events;
