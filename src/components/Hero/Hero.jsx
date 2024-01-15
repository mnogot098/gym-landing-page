import React from "react";
import "./Hero.css";
import Header from "../Header/Header";
import hero_image from "../../assets/hero_image.png";
import hero_image_back from "../../assets/hero_image_back.png";
import heart from "../../assets/heart.png";
import calories from "../../assets/calories.png";
import runner from "../../assets/runner.png";

const Hero = () => {
  return (
    <div className="hero">
      <div className="left-h">
        <Header />
        <div className="adv">
          <div></div>
          <span>
            <strong>The best fintness</strong>&nbsp; club ever
          </span>
          <div></div>
        </div>
        <div className="heading">
          <div>
            <span className="stroke-text">Shape </span>
            <span>Your</span>
          </div>
          <div>
            <span>Ideal body</span>
          </div>
          <div>
            <span>
              Transform your physique with us – your ultimate destination for
              sculpting the perfect body. Embrace the journey to a healthier,
              fitter you at our premier fitness haven
            </span>
          </div>
        </div>
        {/* figures */}
        <div className="figures">
          <div>
            <span>+140</span>
            <span>expert coachs</span>
          </div>
          <div>
            <span>+999</span>
            <span>memebrs joined</span>
          </div>
          <div>
            <span>+250</span>
            <span>fitness programs</span>
          </div>
        </div>
        {/* buttons */}
        <div className="buttons">
          <button className="btn">Get started</button>
          <button className="btn">Learn more</button>
        </div>
      </div>
      <div className="right-h">
        <button className="btn">Join now</button>
        <div className="heart-rate">
          <img src={heart} alt="" />
          <span>Heart rate</span>
          <span>116 bpm</span>
        </div>

        <img src={runner} alt="" className="hero-image" />
        <img src={hero_image_back} alt="" className="hero-image-back" />
        <div className="calories">
          <img src={calories} alt="" />
          <div>
            <span>Calories burned</span>
            <span>270kcal</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
