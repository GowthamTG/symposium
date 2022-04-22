import React from "react";
import Navbar from "../components/landingPage/Navbar/Navbar";
import Intro from "../components/landingPage/Intro/Intro";
import Services from "../components/landingPage/Services/Services";
import "../App.css";
import Experience from "../components/landingPage/Experience/Experience";
import Works from "../components/landingPage/Works/Works";
import Portfolio from "../components/landingPage/Portfolio/Portfolio";
import Testimonial from "../components/landingPage/Testimonials/Testimonial";
import Contact from "../components/landingPage/Contact/Contact";
import Footer from "../components/landingPage/Footer/Footer";
import { useContext } from "react";
import { themeContext } from "../Context";

function Home() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div
      className="Home"
      style={{
        background: darkMode ? "black" : "",
        color: darkMode ? "white" : "",
      }}
    >
      <Navbar />
      <Intro />
      <Services />
      <Experience />
      <Works />
      <Portfolio />
      <Testimonial />
      <Contact />
      <Footer />
    </div>
  );
}

export default Home;
