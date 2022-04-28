import React from "react";

export default function Free() {
  return (
    <div className="free">
      <div className="container">
        {/* <div className="background">
          <div className="ellipse pink"></div>
          <div className="ellipse green"></div>
        </div> */}
        <div className="content">
          <div className="image">{/* <img src={icon} alt="icon" /> */}</div>
          <h2 className="title"> About </h2>
          <p className="description">
            The aim of symposium is to offer an authentic experience just like a
            teaching and learning event.Symposium provides a lot of benefits to
            the students and some are mentioned below. The benefits for students
            are, Increased confidence Appreciation of the importance of telling
            the story of their research. Understanding of the relevance of their
            own work in relation to others the chance to see their peers present
            and to reflect on how far they have come in three years.
          </p>

          {/* <p className="description--points">
            <b>Excitement</b>
          </p>
          <p className="description--points">
            <b>Enjoyment</b>
          </p>
          <p className="description--points">
            <b>Enthusiasm</b>
          </p>  */}
        </div>
      </div>
      {/* <div className="event__cards">
        <div className="event__card1">
          <Card
            image={super1}
            series="Gloop Series"
            title="Purple Man"
            price={2.99}
            tag={12983}
            time={1}
          />
        </div>
        <div className="event__card2">
          <Card
            image={release2}
            series="Gloop Series"
            title="Purple Man"
            price={3.95}
            tag="1094"
            time={2}
          />
        </div>
      </div> */}
    </div>
  );
}
