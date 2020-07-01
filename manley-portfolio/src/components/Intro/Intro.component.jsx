import React from "react"
import reader from "../../images/reader.svg"
import Img from "gatsby-image";
import "./Intro.styles.css"

export const Intro = () => (
  <div className="intro">
    <div className="introText">
      <p className="introP">Hi! My name is Andrew, and I’m a web developer!</p>
    </div>

    <Img className="coderImg" fixed={reader} loading="eager" alt="coder"/>
  </div>
)
