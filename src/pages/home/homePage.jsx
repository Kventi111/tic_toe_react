import React from "react";
import { Link } from "react-router-dom";

import SmallStar from "../../assets/smal_start.png";
import BigStar from "../../assets/big_star.png";
import StarShip from "../../assets/star_ship.png";
import Nlo from "../../assets/nlo.png";

import "./home.css";

export function HomePage() {
  return (
    <div className="wrapper">
      <div className="homeHeader">
        <div className="starsLeft">
          <img src={SmallStar} alt="" />
          <img src={SmallStar} alt="" />
        </div>
        <div className="title">
          <span>TIC</span>
          <span>TAC</span>
          <span>TOE</span>
        </div>
        <div className="starsRight">
          <img src={SmallStar} alt="" />
          <img src={SmallStar} alt="" />
        </div>
      </div>

      <div className="bigStartsBlock">
        <img src={BigStar} alt="" />
        <img src={BigStar} alt="" />
        <img src={BigStar} alt="" />
      </div>

      <Link className="button primary homeButton" to="/selectGame">
        Let’s play
      </Link>

      <img className="starShip" src={StarShip} alt="starShip" />
      <img className="nlo" src={Nlo} alt="nlo" />
    </div>
  );
}
