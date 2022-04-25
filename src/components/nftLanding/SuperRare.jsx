import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import poster from "../../assets/poster.jpeg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "./SuperRareStyle/styles.css";

// import required modules
import { Pagination } from "swiper";

export default function App() {
  const images = [poster, poster, poster, poster, poster, poster];
  return (
    <>
      <Swiper
        // height={400}
        slidesPerView={4}
        centeredSlides={false}
        spaceBetween={30}
        grabCursor={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {/* <SwiperSlide>
          <img src={poster} alt="home" />
        </SwiperSlide>
        ;<SwiperSlide>Slide1</SwiperSlide>;<SwiperSlide>Slide1</SwiperSlide>;
        <SwiperSlide>Slide1</SwiperSlide>;<SwiperSlide>Slide1</SwiperSlide>;
        <SwiperSlide>Slide1</SwiperSlide>;<SwiperSlide>Slide1</SwiperSlide>;
        <SwiperSlide>Slide1</SwiperSlide>; */}
        {images.map((image) => (
          <SwiperSlide>
            <img src={image} alt="home" />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
