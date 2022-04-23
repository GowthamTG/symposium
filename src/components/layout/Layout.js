import React, { useState } from "react";
import Header from "../header/Header";

import classes from "./Layout.module.scss";
import { useLocation } from "react-router-dom";
import Navbar from "../nftLanding/Navbar";

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
  return (
    <>
      <Header />

      {/* <div data-theme={theme} className="app-container">
        <Navbar changeTheme={changeTheme} currentTheme={theme} />
      </div> */}
      <div className={classes.container}>{children}</div>
    </>
  );
};

export default Layout;
