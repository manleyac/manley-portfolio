import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import { ProjectCard } from "./ProjectCard.component.jsx"

import "./Projects.styles.css"

export const Projects = () => {
  const data = useStaticQuery(graphql`
    query ProjectQuery {
      allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/Projects/" } }) {
        edges {
          node {
            html
            frontmatter {
              deploy
              image
              path
              repo
              tags
              title
            }
          }
        }
      }
    }
  `)
  const projects = data.allMarkdownRemark.edges
  return (
    <div name="projects">
      <h1>Projects</h1>
      <div className="projects-collection">
        {projects.map(({ node }) => {
          return (
            <ProjectCard
              title={node.frontmatter.title}
              image={node.frontmatter.image}
              deploy={node.frontmatter.deploy}
              repo={node.frontmatter.repo}
              tags={node.frontmatter.tags}
              body={node.html}
            />
          )
        })}
      </div>
    </div>
  )
}
