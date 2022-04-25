// import React from "react";
// import Navbar from "../components/landingPage/Navbar/Navbar";
// import Intro from "../components/landingPage/Intro/Intro";
// import Services from "../components/landingPage/Services/Services";
// import "../App.css";
// import Experience from "../components/landingPage/Experience/Experience";
// import Works from "../components/landingPage/Works/Works";
// import Portfolio from "../components/landingPage/Portfolio/Portfolio";
// import Testimonial from "../components/landingPage/Testimonials/Testimonial";
// import Contact from "../components/landingPage/Contact/Contact";
// import Footer from "../components/landingPage/Footer/Footer";
// import { useContext } from "react";
// import { themeContext } from "../Context";

// function HomePage() {
//   const theme = useContext(themeContext);
//   const darkMode = theme.state.darkMode;
//   return (
//     <div
//       className="Home"
//       style={{
//         background: darkMode ? "black" : "",
//         color: darkMode ? "white" : "",
//       }}
//     >
//       <Navbar />
//       <Intro />
//       <Services />
//       <Experience />
//       <Works />
//       <Portfolio />
//       <Testimonial />
//       <Contact />
//       <Footer />
//     </div>
//   );
// }

// export default HomePage;

import React, { useState, useEffect } from "react";
import Clients from "../components/nftLanding/Clients";
import Footer from "../components/nftLanding/Footer";
import Free from "../components/nftLanding/Free";
import Home from "../components/nftLanding/Home";
import Like from "../components/nftLanding/Like";
import Navbar from "../components/nftLanding/Navbar";
import Release from "../components/nftLanding/Release";
import ScrollToTop from "../components/nftLanding/ScrollToTop";
import Signup from "../components/nftLanding/Signup";
import SuperRare from "../components/nftLanding/SuperRare";
import scrollreveal from "scrollreveal";

function HomePage() {
  const [theme, setTheme] = useState("dark");
  const changeTheme = () => {
    theme === "dark" ? setTheme("light") : setTheme("dark");
  };
  useEffect(() => {
    const registerAnimations = () => {
      const sr = scrollreveal({
        origin: "bottom",
        distance: "80px",
        duration: 2000,
        reset: false,
      });
      sr.reveal(
        `
        nav,
        .home,
        .free,
        .clients,
        .super-rare,
        .releases,
        .like,
        .signup,
        footer
    `,
        {
          interval: 500,
        }
      );
    };
    registerAnimations();
  }, []);
  window.setTimeout(() => {
    const home = document.getElementsByClassName("home");
    home[0].style.transform = "none";
    const nav = document.getElementsByTagName("nav");
    nav[0].style.transform = "none";
  }, 1500);
  return (
    <div data-theme={theme} className="app-container">
      <ScrollToTop />
      <Navbar changeTheme={changeTheme} currentTheme={theme} />
      <Home />
      <Free />
      {/* <Clients /> */}
      <SuperRare />
      <Release />
      <Like />
      <Signup />
      <Footer />
    </div>
  );
}

export default HomePage;
