import React, { useContext } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Sidebar from "../../../assets/img/sidebar.png";
import Ecommerce from "../../../assets/img/ecommerce.png";
import HOC from "../../../assets/img/hoc.png";
import MusicApp from "../../../assets/img/musicapp.png";
import { themeContext } from "../../../Context";
const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="portfolio" id="portfolio">
      {/* heading */}
      <span style={{ color: darkMode ? "white" : "" }}>ThrowBacks</span>
      <span>Threads</span>

      {/* slider */}
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >
        <SwiperSlide>
          {/* <img src={Sidebar} alt="" /> */}ThrowBack 1
        </SwiperSlide>
        <SwiperSlide>
          {/* <img src={Ecommerce} alt="" />*/}ThrowBack 2
        </SwiperSlide>
        <SwiperSlide>
          {/* <img src={MusicApp} alt="" /> */}ThrowBack 3
        </SwiperSlide>
        <SwiperSlide>{/* <img src={HOC} alt="" /> */}ThrowBack 4</SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Portfolio;
