import React, { useState } from "react";
import styled from "styled-components";
import { LoginForm } from "./loginForm";
import { motion } from "framer-motion";
import { AccountContext } from "./accountContext";
import { SignupForm } from "./signupForm";
import "./index.css";

const BoxContainer = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 19px;
  background-color: #fff;
  box-shadow: 0 0 2px rgba(15, 15, 15, 0.28);
  position: relative;
  overflow: hidden;
  margin-top: 50px;
`;

const TopContainer = styled.div`
  width: 100%;
  height: 250px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 0 1.8em;
  padding-bottom: 5em;
`;

const BackDrop = styled(motion.div)`
  width: 160%;
  height: 550px;
  position: absolute;
  display: flex;
  flex-direction: column;
  border-radius: 50%;
  transform: rotate(60deg);
  top: -290px;
  left: -70px;
  background: rgb(241, 196, 15);
  background: linear-gradient(
    58deg,
    rgba(241, 196, 15, 1) 20%,
    rgba(243, 172, 18, 1) 100%
  );
`;

const HeaderContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const HeaderText = styled.h2`
  font-size: 30px;
  font-weight: 600;
  line-height: 1.24;
  color: #fff;
  z-index: 10;
  margin: 0;
`;

const SmallText = styled.h5`
  color: #fff;
  font-weight: 500;
  font-size: 11px;
  z-index: 10;
  margin: 0;
  margin-top: 7px;
`;

const InnerContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 0 1.8em;
  margin: 1rem 0rem;
`;

const MainContainer = styled.div`
  min-height: 692px;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  top: 50;
  overflow: hidden;
  padding-top: 200px;
  display: -ms-grid;
  display: grid;
  justify-content: center;
  margin: 0 -2%;
  transform: rotate(-12deg) skew(-12deg);
`;

const LayerOne = styled.div`
  box-sizing: border-box;
  display: flex;
`;

const LayerTwo = styled.div`
  display: flex;
  grid-area: top / start / 8 / end;
  flex-grow: 1;
  box-shadow: inset 0 0 0 2px #e3e8ee;
  flex-grow: 1;
`;

const backdropVariants = {
  expanded: {
    width: "233%",
    height: "1400px",
    borderRadius: "20%",
    transform: "rotate(60deg)",
  },
  collapsed: {
    width: "60%",
    height: "600px",
    borderRadius: "50%",
    transform: "rotate(60deg)",
  },
};

const expandingTransition = {
  type: "spring",
  duration: 2.3,
  stiffness: 30,
};

export function AccountBox(props) {
  const [isExpanded, setExpanded] = useState(false);
  const [active, setActive] = useState("signin");

  const playExpandingAnimation = () => {
    setExpanded(true);
    setTimeout(() => {
      setExpanded(false);
    }, expandingTransition.duration * 1000 - 1500);
  };

  const switchToSignup = () => {
    playExpandingAnimation();
    setTimeout(() => {
      setActive("signup");
    }, 400);
  };

  const switchToSignin = () => {
    playExpandingAnimation();
    setTimeout(() => {
      setActive("signin");
    }, 400);
  };

  const contextValue = { switchToSignup, switchToSignin };
  // console.log(active);
  //   if(active === "signup")
  //   {
  //     return <SignupForm />
  //   }

  return (
    <AccountContext.Provider value={contextValue}>
      <div className="login-root">
        <MainContainer className="gridContainer">
          <LayerOne style={{ "grid-area": " 4 / 2 / auto / 5" }}>
            <LayerTwo
              style={{ "background-color": "rgb(241, 216, 15)" }}
              className="animationLeftRight tans3s"
            />
          </LayerOne>
          <LayerOne style={{ "grid-area": "6 / start / auto / 2" }}>
            <LayerTwo
              style={{ "background-color": "rgb(241, 196, 15)" }}
              className="animationRightLeft tans4s"
            />
          </LayerOne>
          <LayerOne style={{ "grid-area": "7 / start / auto / 4" }}>
            <LayerTwo
              style={{ "background-color": "#e3e8ee" }}
              className="animationLeftRight"
            />
          </LayerOne>
          <LayerOne style={{ "grid-area": "8 / 4 / auto / 6" }}>
            <LayerTwo
              style={{ "background-color": "rgb(241, 190, 15)" }}
              className="animationRightLeft tans4s"
            />
          </LayerOne>
          <LayerOne style={{ "grid-area": "2 / 15 / auto / end" }}>
            <LayerTwo
              style={{ "background-color": "rgb(241, 216, 15)" }}
              className="animationRightLeft"
            />
          </LayerOne>
          <LayerOne style={{ "grid-area": "3 / 14 / auto / end" }}>
            <LayerTwo
              style={{ "background-color": "#e3e8ee" }}
              className="animationRightLeft tans4s"
            />
          </LayerOne>
          <LayerOne style={{ "grid-area": "4 / 17 / auto / 20" }}>
            <LayerTwo
              style={{ "background-color": "rgb(241, 196, 15)" }}
              className="animationRightLeft tans3s"
            />
          </LayerOne>
        </MainContainer>
        <div className="form">
          <BoxContainer>
            <TopContainer>
              <BackDrop
                initial={false}
                animate={isExpanded ? "expanded" : "collapsed"}
                variants={backdropVariants}
                transition={expandingTransition}
              />
              {active === "signin" && (
                <HeaderContainer>
                  <HeaderText>Welcome</HeaderText>
                  <HeaderText>Back</HeaderText>
                  <SmallText>Please sign-in to continue!</SmallText>
                </HeaderContainer>
              )}
              {active === "signup" && (
                <HeaderContainer>
                  <HeaderText>Create</HeaderText>
                  <HeaderText>Account</HeaderText>
                  <SmallText>Please sign-up to continue!</SmallText>
                </HeaderContainer>
              )}
            </TopContainer>
            <InnerContainer>
              {active === "signin" && <LoginForm />}
              {active === "signup" && <SignupForm />}
            </InnerContainer>
          </BoxContainer>{" "}
        </div>
      </div>
    </AccountContext.Provider>
  );
}
