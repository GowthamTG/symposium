import React from "react";
import logo from "../../assets/CollegeLogo.jpg";
import logo1 from "../../assets/csi.png";
import logo2 from "../../assets/ISTE.png";
import { BsFacebook, BsTwitter, BsInstagram } from "react-icons/bs";
import { FaTiktok } from "react-icons/fa";
export default function Footer() {
  const links = [
    // {
    //   title: "About",
    //   data: ["About", "Terms", "Legal"],
    // },
    // {
    //   title: "NFT",
    //   data: ["OpenSea", "Maker", "Learn"],
    // },
    {
      title: "Contact",
      data: ["Shameel", "Babuji"],
    },
    {
      title: "Number",
      data: ["79041 29628", "63825 25719"],
    },
  ];
  const socialLink = [
    // <BsFacebook />,
    // <BsTwitter />,
    // <BsInstagram />,
    // <FaTiktok />,
  ];
  return (
    <footer>
      <div className="upper">
        <div className="brand-container">
          <div className="brand">
            <img className="mr-4" src={logo} alt="logo" />{" "}
            <img className="mr-4" src={logo1} alt="logo" />{" "}
            <img src={logo2} alt="logo" />
          </div>
          <p>Exclusive Event by SONA</p>
          <ul>
            {socialLink.map((link, index) => (
              <li key={index}>{link}</li>
            ))}
          </ul>
        </div>
        <div className="links">
          {links.map(({ title, data }, index) => {
            return (
              <div className="link" key={index}>
                <h4>{title}</h4>
                <ul>
                  {data.map((link, index2) => (
                    <li key={index2}>{link}</li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
      {/* <div className="lower">
        <span>&copy; Copyright 2022 NFT</span>
        <span>Launching August 2022</span>
      </div> */}
    </footer>
  );
}
