import React from "react";
import Header from "../header/Header";

import classes from "./Layout.module.scss";
import { useLocation } from "react-router-dom";

const Layout = ({ children }) => {
  const location = useLocation();
  console.log(location.pathname);
  if (location.pathname == "/" || location.pathname == "") {
    return <div>{children}</div>;
  }
  return (
    <>
      <Header />
      <div className={classes.container}>{children}</div>
    </>
  );
};

export default Layout;
