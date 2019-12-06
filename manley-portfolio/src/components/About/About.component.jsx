import React from "react"
import builder from "../../../public/images/page-under-construction.svg"

import "./about.styles.css";

export const About = () => (
  <div>
    <h1>About</h1>
    <p>
      The Modern Web can be difficult to navigate. Hire an experience web
      developer who will understand your needs, and can guide you through an
      ever changing environment.
    </p>
    <div className="imgDiv">
      <img src={builder} className="coderImg"/>
    </div>
  </div>
)
