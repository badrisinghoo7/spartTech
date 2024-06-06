import React from "react";

import "./StayUpdate.css";

const StayUpdate = () => {
  return (
    <div className="StayUpdate-container">
      <div className="StayUpdate-text">
        <h1>Stay Updated</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima,
          architecto!
        </p>
      </div>
      <div className="subscribe">
        <input type="text" className="input-subscribe" placeholder="Write your mail Here --->" />
        <button className="Subcribe-btn">Subscribe</button>
      </div>
    </div>
  );
};

export default StayUpdate;
