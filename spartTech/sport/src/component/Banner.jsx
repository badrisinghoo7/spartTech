import React from "react";

import "./Banner.css";

const Banner = () => {
  return (
    <div className="banner-container">
      <div className="banner-text">
        <h1>
          Find the Best <br /> Activity for your <br /> Child!
        </h1>
      </div>
      <div className="button-div">
        <button className="btn">For Academies</button>
        <button className="btn">SpArts in your home</button>
      </div>
      
    </div>
  );
};

export default Banner;
