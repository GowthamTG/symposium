import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";
import { ImSun } from "react-icons/im";
import { BsFillMoonFill } from "react-icons/bs";

import { Link } from "react-router-dom";
export default function Navbar({ changeTheme, currentTheme }) {
  const [navState, setNavState] = useState(false);
  return (
    <nav>
      <div className="brand-container">
        <div className=" brand blinker">
          {/* <img src={logo} alt="logo" /> */}Threads
        </div>
        <div className="toggle-container">
          <div className="toggle">
            {navState ? (
              <MdClose onClick={() => setNavState(false)} />
            ) : (
              <GiHamburgerMenu onClick={() => setNavState(true)} />
            )}
          </div>
          <div className="mode" onClick={changeTheme}>
            {currentTheme === "dark" ? (
              <ImSun className="light" />
            ) : (
              <BsFillMoonFill className="dark" />
            )}
          </div>
        </div>
      </div>
      <div className={`links-container ${navState ? "nav-visible" : ""}`}>
        <ul className="links">
          {/* <li>
            <Link to="">Features</Link>
          </li> */}
          <li>
            <Link to="">Home</Link>
          </li>
          <li>
            <Link to="events">Events | Workshops</Link>
          </li>
          {/* <li>
            <Link to="auth">Sign Up</Link>
          </li> */}
          <li onClick={changeTheme}>
            {currentTheme === "dark" ? (
              <ImSun className="light" />
            ) : (
              <BsFillMoonFill className="dark" />
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
}
