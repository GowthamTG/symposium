import React from "react";
import Card from "../components/card/Card";

import super1 from "../assets/super1.png";
import super2 from "../assets/super2.png";
import super3 from "../assets/super3.png";
import super4 from "../assets/super4.png";
import { Link } from "react-router-dom";

const PageThree = () => {
  const events = [
    {
      image: super1,
      series: "Gloop Series",
      title: "Purple Man",
      price: 2.99,
      tag: 12983,
      time: 1,
    },
    {
      image: super2,
      series: "Gloop Series",
      title: "Beige",
      price: 2.99,
      tag: 12983,
      time: 1,
    },
    {
      image: super3,
      series: "Gloop Series",
      title: "Red Man",
      price: 2.99,
      tag: 12983,
      time: 1,
    },
    {
      image: super4,
      series: "Gloop Series",
      title: "Green",
      price: 2.99,
      tag: 12983,
      time: 1,
    },
  ];
  return (
    <main>
      <section className="section-tours" id="section-tours">
        <div className="row">
          <div className="col-1-of-3">
            <div className="card">
              <div className="card__side card__side--front">
                <div className="card__picture card__picture--1">&nbsp;</div>
                <h4 className="card__heading">
                  <span className="card__heading-span card__heading-span--1">
                    Data Pre-Processing
                  </span>
                </h4>
                <div className="card__details">
                  <ul>
                    <li>Sci-Kit Learn</li>
                    <li>Pandas</li>
                    <li>Numpy</li>
                    <li>Matplotlib</li>
                    <li>Seaborn</li>
                  </ul>
                </div>
              </div>
              <div className="card__side card__side--back card__side--back-1">
                <div className="card__cta">
                  <div className="card__details white">
                    <ul>
                      <li className="card__links">
                        Pandas
                        <i className="card__icons icon-basic-paperplane"></i>
                      </li>
                      <li className="card__links">
                        Seaborn
                        <i className="card__icons icon-basic-paperplane"></i>
                      </li>
                      <li className="card__links">
                        Sci-Kit Learn
                        <i className="card__icons icon-basic-paperplane"></i>
                      </li>
                    </ul>
                  </div>

                  <Link to={``} className="btn btn--white">
                    Know More
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="col-1-of-3">
            <div className="card">
              <div className="card__side card__side--front">
                <div className="card__picture card__picture--2">&nbsp;</div>
                <h4 className="card__heading">
                  <span className="card__heading-span card__heading-span--2">
                    Artificial Intelligence
                  </span>
                </h4>
                <div className="card__details">
                  <ul>
                    <li>Artificial Neural Network</li>
                    <li>Adam</li>
                    <li>Dense Layer</li>
                    <li>Sigmoid Layer</li>
                    <li>Early Stopping</li>
                  </ul>
                </div>
              </div>
              <div className="card__side card__side--back card__side--back-2">
                <div className="card__cta">
                  <div className="card__details white">
                    <ul>
                      <li className="card__links">
                        Artificial NN
                        <i className="card__icons icon-basic-paperplane"></i>
                      </li>
                      <li className="card__links">
                        Adam Optimizer
                        <i className="card__icons icon-basic-paperplane"></i>
                      </li>
                      <li className="card__links">
                        Early Stopping
                        <i className="card__icons icon-basic-paperplane"></i>
                      </li>
                    </ul>
                  </div>

                  <Link to={``} className="btn btn--white">
                    Know More
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="col-1-of-3">
            <div className="card">
              <div className="card__side card__side--front">
                <div className="card__picture card__picture--3">&nbsp;</div>
                <h4 className="card__heading">
                  <span className="card__heading-span card__heading-span--3">
                    Plugins & Features
                  </span>
                </h4>
                <div className="card__details">
                  <ul>
                    <li>TensorFlow</li>
                    <li>D3 JS</li>
                    <li>Angular</li>
                    <li>SCSS</li>
                    <li>RXJS</li>
                  </ul>
                </div>
              </div>
              <div className="card__side card__side--back card__side--back-3">
                <div className="card__cta">
                  <div className="card__details white">
                    <ul>
                      <li className="card__links">
                        TensorFlow
                        <i className="card__icons icon-basic-paperplane"></i>
                      </li>
                      <li className="card__links">
                        D3 JS
                        <i className="card__icons icon-basic-paperplane"></i>
                      </li>
                      <li className="card__links">
                        Angular
                        <i className="card__icons icon-basic-paperplane"></i>
                      </li>
                    </ul>
                  </div>

                  <Link to={``} className="btn btn--white">
                    Know More
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default PageThree;
