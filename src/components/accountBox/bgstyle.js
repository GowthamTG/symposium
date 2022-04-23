import React from "react";
import "./bgstyle.css";
export default function bgstyle() {
  return (
    <div className="loginbackground box-background--white padding-top--64">
      <div className="loginbackground-gridContainer">
        <div
          className="box-root flex-flex"
          style={{ "grid-area": "top / start / 8 / end" }}
        >
          <div
            className="box-root"
            style={{
              "background-image":
                "linear-gradient(white 0%, rgb(247, 250, 252) 33%); flex-grow: 1",
            }}
          ></div>
        </div>
        <div
          className="box-root flex-flex"
          style={{ "grid-area": " 4 / 2 / auto / 5" }}
        >
          <div
            className="box-root box-divider--light-all-2 animationLeftRight tans3s"
            style={{ "flex-grow": 1 }}
          ></div>
        </div>
        <div
          className="box-root flex-flex"
          style={{ "grid-area": "6 / start / auto / 2" }}
        >
          <div
            className="box-root box-background--blue800"
            style={{ "flex-grow": 1 }}
          ></div>
        </div>
        <div
          className="box-root flex-flex"
          style={{ "grid-area": "7 / start / auto / 4" }}
        >
          <div
            className="box-root box-background--blue animationLeftRight"
            style={{ "flex-grow": 1 }}
          ></div>
        </div>
        <div
          className="box-root flex-flex"
          style={{ "grid-area": "8 / 4 / auto / 6" }}
        >
          <div
            className="box-root box-background--gray100 animationLeftRight tans3s"
            style={{ "flex-grow": 1 }}
          ></div>
        </div>
        <div
          className="box-root flex-flex"
          style={{ "grid-area": " 2 / 15 / auto / end" }}
        >
          <div
            className="box-root box-background--cyan200 animationRightLeft tans4s"
            style={{ "flex-grow": 1 }}
          ></div>
        </div>
        <div
          className="box-root flex-flex"
          style={{ "grid-area": "3 / 14 / auto / end" }}
        >
          <div
            className="box-root box-background--blue animationRightLeft"
            style={{ "flex-grow": 1 }}
          ></div>
        </div>
        <div
          className="box-root flex-flex"
          style={{ "grid-area": "4 / 17 / auto / 20" }}
        >
          <div
            className="box-root box-background--gray100 animationRightLeft tans4s"
            style={{ "flex-grow": 1 }}
          ></div>
        </div>
        <div
          className="box-root flex-flex"
          style={{ "grid-area": "5 / 14 / auto / 17" }}
        >
          <div
            className="box-root box-divider--light-all-2 animationRightLeft tans3s"
            style={{ "flex-grow": 1 }}
          ></div>
        </div>
      </div>
    </div>
  );
}
