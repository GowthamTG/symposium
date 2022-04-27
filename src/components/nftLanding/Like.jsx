import React from "react";
import eth1 from "../../assets/eth1.png";
import eth2 from "../../assets/eth2.png";

export default function Like() {
  return (
    <div className="like">
      <div className="container">
        <div className="content">
          <div className="image">
            <img src={eth1} alt="eth1" />
          </div>
          <h2 className="title">Workshop</h2>
          <p className="description">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem
            illo dolores natus et suscipit distinctio sequi nulla provident
            maiores tenetur?
          </p>
          <p className="description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
            quidem, explicabo fuga reprehenderit quibusdam adipisci sint
            ratione! Dicta tempore sunt saepe reiciendis quae, aliquid, nihil
            quia iste quis animi pariatur!
          </p>
        </div>
        <div className="content">
          <div className="image">
            <img src={eth2} alt="eth2" />
          </div>
          <h2 className="title">Events</h2>
          <p className="description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
            quibusdam dolor officia laboriosam sequi, eius veritatis nemo
            architecto eaque ea culpa dicta reiciendis sed debitis.
          </p>
          <p className="description">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
            ex incidunt atque libero itaque corporis et corrupti illum ducimus.
            Accusamus repellat nemo sunt ipsa ea?
          </p>
        </div>
      </div>
    </div>
  );
}
