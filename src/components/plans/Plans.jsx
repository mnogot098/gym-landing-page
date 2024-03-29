import React from "react";
import "./Plans.css";
import { plansData } from "../../data/plansData";
import whiteTick from "../../assets/whiteTick.png";

const Plans = () => {
  return (
    <div className="plans-container">
      <div
        className="programs-header"
        style={{
          gap: "2rem",
        }}
      >
        <span className="stroke-text">READY TO START</span>
        <span>YOUR JOURNY</span>
        <span className="stroke-text">NOW WITH US</span>
      </div>

      <div className="plans">
        {plansData.map((plan, index) => {
          return (
            <div className="plan" key={index}>
              {plan.icon}
              <span>{plan.name}</span>
              <span>$ {plan.price}</span>
              <div className="features">
                {plan.features.map((feature, index) => {
                  return (
                    <div className="feature" key={index}>
                      <img src={whiteTick} alt="" />
                      <span key={index}>{feature}</span>
                    </div>
                  );
                })}
              </div>
              <div>
                <span>See more benefits</span>
              </div>
              <button className="btn">Join now</button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Plans;
