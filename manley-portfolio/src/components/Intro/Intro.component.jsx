import React from "react";
import reader from "../../images/reader.svg";
import "./Intro.styles.css";

export const Intro = () => (
  <div className="intro"> 
    <div className="introText">
      <h3 className="introH">Hi!</h3>
      <h6 className="introH">My name is Andrew, and I’m a web developer!</h6>
    </div>
    <div className="introImgDiv">
      <img className="introImg" src={reader} />
    </div>
  </div>
)
