import React, { useState } from "react";
import Header from "../header/Header";

import classes from "./Layout.module.scss";
import { useLocation } from "react-router-dom";
import Navbar from "../nftLanding/Navbar";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const Layout = ({ children }) => {
  const [theme, setTheme] = useState("dark");
  const changeTheme = () => {
    theme === "dark" ? setTheme("light") : setTheme("dark");
  };
  const location = useLocation();
  console.log(location.pathname);
  if (location.pathname === "/" || location.pathname === "") {
    return <div>{children}</div>;
  }
  const particlesInit = async (main) => {
    console.log(main);

    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(main);
  };

  const particlesLoaded = (container) => {
    console.log(container);
  };
  return (
    <>
      {/* <Header /> */}

      <div data-theme={theme} className="app-container">
        <Particles
          id="tsparticles"
          init={particlesInit}
          loaded={particlesLoaded}
          options={{
            particles: {
              number: {
                value: 600,
                density: {
                  enable: true,
                  value_area: 800,
                },
              },
              color: {
                value: "#ffffff",
              },
              shape: {
                type: "circle",
                stroke: {
                  width: 0,
                  color: "#B3B3B3",
                },
                polygon: {
                  nb_sides: 5,
                },
              },
              opacity: {
                value: 0.5,
                random: false,
                anim: {
                  enable: false,
                  speed: 0.2,
                  opacity_min: 0,
                  sync: false,
                },
              },
              size: {
                value: 2,
                random: true,
                anim: {
                  enable: true,
                  speed: 2,
                  size_min: 0,
                  sync: false,
                },
              },
              line_linked: {
                enable: false,
                distance: 150,
                color: "#ffffff",
                opacity: 0.4,
                width: 1,
              },
              move: {
                enable: true,
                speed: 0.2,
                direction: "none",
                random: true,
                out_mode: "out",
                attract: {
                  enable: false,
                  rotateX: 600,
                  rotateY: 1200,
                },
              },
            },
            interactivity: {
              events: {
                onhover: {
                  enable: true,
                  mode: "bubble",
                },
                onclick: {
                  enable: true,
                  mode: "push",
                },
                resize: true,
              },
              modes: {
                grab: {
                  distance: 400,
                  line_linked: {
                    opacity: 1,
                  },
                },
                bubble: {
                  distance: 84,
                  size: 1,
                  duration: 3,
                  opacity: 1,
                  speed: 3,
                },
                repulse: {
                  distance: 200,
                  duration: 0.4,
                },
                push: {
                  particles_nb: 4,
                },
                remove: {
                  particles_nb: 2,
                },
              },
            },
            retina_detect: true,
          }}
        />{" "}
        <Navbar changeTheme={changeTheme} currentTheme={theme} />
        <div>{children}</div>
      </div>
    </>
  );
};

export default Layout;
