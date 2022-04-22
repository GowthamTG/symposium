import React, { useContext } from "react";
import { themeContext } from "../../../Context";
import "./Experience.css";
const Experience = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="experience" id="experience">
      <div className="achievement">
        {/* darkMode */}
        <div
          className="circle"
          style={{ color: darkMode ? "var(--orange)" : "" }}
        >
          5,6
        </div>
        <span style={{ color: darkMode ? "white" : "" }}>May</span>
        {/* <span>Experience</span> */}
      </div>
      <div className="achievement">
        <div
          className="circle"
          style={{ color: darkMode ? "var(--orange)" : "" }}
        >
          1000+
        </div>
        <span style={{ color: darkMode ? "white" : "" }}>Participants </span>
        {/* <span>Projects</span> */}
      </div>
      <div className="achievement">
        <div
          className="circle"
          style={{ color: darkMode ? "var(--orange)" : "" }}
        >
          40+
        </div>
        <span style={{ color: darkMode ? "white" : "" }}>Events</span>
        {/* <span>Work</span> */}
      </div>
    </div>
  );
};

export default Experience;
