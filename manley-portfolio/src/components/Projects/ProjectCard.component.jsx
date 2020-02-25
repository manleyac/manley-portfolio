import React from "react"

import github from "../Footer/icons/github.svg";
import {IoIosGlobe} from "react-icons/io";
import {FaGithub} from "react-icons/fa";

import "./ProjectCard.styles.css"

export const ProjectCard = props => {
  const relativeImg = String(props.image.split("/").slice(-1))
  return (
    <div className="project-card">
      <img
        className="card-image"
        src={require("../../images/" + relativeImg)}
      />
      <div className="card-body">
        <h3 className="project-title">{props.title}</h3>
        <div dangerouslySetInnerHTML={{ __html: props.body }}></div>
        <p>Tech: {props.tags.join(", ")}</p>
        <div className="project-links">
          <a href={props.repo}><FaGithub size={25} color={"#3da9fc"}/></a>
          <a href-={props.deploy}><IoIosGlobe size={25} color={"#3da9fc"}/></a>
        </div>
      </div>
    </div>
  )
}
