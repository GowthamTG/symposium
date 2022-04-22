import React, { useContext } from "react";
import "./Intro.css";
import TypeWritterText from "../TypeWriterText/TypeWriterText";
// import Vector1 from "../../../assets/img/Vector1.png";
// import Vector2 from "../../../assets/img/Vector2.png";
// import boy from "../../../assets/img/boy.png";
// import glassesimoji from "../../../assets/img/glassesimoji.png";
import thumbup from "../../../assets/img/thumbup.png";
import crown from "../../../assets/img/crown.png";
import FloatinDiv from "../FloatingDiv/FloatingDiv";
import Github from "../../../assets/img/github.png";
import LinkedIn from "../../../assets/img/linkedin.png";
import Instagram from "../../../assets/img/instagram.png";
import { themeContext } from "../../../Context";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
const Intro = () => {
  // Transition
  const transition = { duration: 2, type: "spring" };

  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="Intro" id="Intro">
      {/* left name side */}
      <div className="i-left">
        <div className="i-name">
          {/* yahan change hy darkmode ka */}
          <span style={{ color: darkMode ? "white" : "" }}>
            Computer Science Engineering
          </span>
          <span>
            <TypeWritterText />
          </span>
          <span>
            We are excited to present you Threads'22🔥 - A National Level
            Technical symposium loaded with workshops on technologies, and
            Events in Technical and Non- Technical verticals!
          </span>
        </div>
        <Link to="contact" smooth={true} spy={true}>
          <button className="button i-button">Sign in</button>
        </Link>
        {/* social icons */}
        <div className="i-icons">
          <img src={Github} alt="" />
          <img src={LinkedIn} alt="" />
          <img src={Instagram} alt="" />
        </div>
      </div>
      {/* right image side */}
      <div className="i-right">
        {/* <img src={Vector1} alt="" />
        <img src={Vector2} alt="" /> */}
        {/* <img src={boy} alt="" /> */}
        {/* animation */}
        {/* <motion.img
          initial={{ left: "-36%" }}
          whileInView={{ left: "-24%" }}
          transition={transition}
          src={glassesimoji}
          alt=""
        /> */}

        <motion.div
          initial={{ top: "-4%", left: "74%" }}
          whileInView={{ left: "68%" }}
          transition={transition}
          className="floating-div"
        >
          <FloatinDiv img={crown} text1="CSE" text2="Dept" />
        </motion.div>

        {/* animation */}
        <motion.div
          initial={{ left: "9rem", top: "18rem" }}
          whileInView={{ left: "0rem" }}
          transition={transition}
          className="floating-div"
        >
          {/* floatinDiv mein change hy dark mode ka */}
          <FloatinDiv img={thumbup} text1="Welcome" text2="All" />
        </motion.div>

        <div className="blur" style={{ background: "rgb(238 210 255)" }}></div>
        <div
          className="blur"
          style={{
            background: "#C1F5FF",
            top: "17rem",
            width: "21rem",
            height: "11rem",
            left: "-9rem",
          }}
        ></div>
      </div>
    </div>
  );
};

export default Intro;
