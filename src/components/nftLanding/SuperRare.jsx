import React, { useContext } from "react";
import { EventsContext } from "../../EventsContext";

import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

import Slider from "react-slick";

import Card from "./Card";
export default function App() {
  // const images = [poster, poster, poster, poster, poster, poster];
  // return (
  //   <>
  //     <Swiper
  //       // height={400}
  //       slidesPerView={4}
  //       centeredSlides={false}
  //       spaceBetween={30}
  //       grabCursor={true}
  //       pagination={{
  //         clickable: true,
  //       }}
  //       modules={[Pagination]}
  //       className="mySwiper"
  //     >
  //       {/* <SwiperSlide>
  //         <img src={poster} alt="home" />
  //       </SwiperSlide>
  //       ;<SwiperSlide>Slide1</SwiperSlide>;<SwiperSlide>Slide1</SwiperSlide>;
  //       <SwiperSlide>Slide1</SwiperSlide>;<SwiperSlide>Slide1</SwiperSlide>;
  //       <SwiperSlide>Slide1</SwiperSlide>;<SwiperSlide>Slide1</SwiperSlide>;
  //       <SwiperSlide>Slide1</SwiperSlide>; */}
  //       {images.map((image) => (
  //         <SwiperSlide>
  //           <img src={image} alt="home" />
  //         </SwiperSlide>
  //       ))}
  //     </Swiper>
  //   </>
  // );
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
    // <div className="grid">
    //   {events.map((event) => (
    //     <Link to={`/admin${event.url}`} replace>
    //       <div className="card">{event.name}</div>
    //     </Link>
    //   ))}
    // </div>
    <div className="super-rare">
      <div className="title-container">
        <h2 className="page--title small mb-5">Events | Workshops</h2>
      </div>

      <div className="event__cards">
        <div className="container testimonial">
          <Slider {...settings}>
            {events.map((event) => (
              // <Link to={`event/${event.id}`} style={{ textDecoration: "none" }}>
              <Card
                id={event.id}
                key={event.time}
                image={require(`../../assets/cards/event${event.id}.png`)}
                series={event.series}
                title={event.title}
                price={event.price}
                tag={event.tag}
                time={event.time}
                style={{ textDecoration: "none" }}
              />
              // </Link>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}
