import React from "react"
import { graphql } from "gatsby"

import { HomePage } from "../../../components/HomePage/HomePage.component.jsx";
import {PageHead} from "../../../components/PageHead/PageHead.component.jsx";

import "../../../pages/app.styles.css";
import "./BlogPost.styles.css";

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark
  return (
    <div className="app footerBackground">
      <PageHead />
      <HomePage styleClass="blogPage">
        <div className="blog-post-container">
          <div className="blog-post">
            <h1>{frontmatter.title}</h1>
            <h2>{frontmatter.date}</h2>
            <div
              className="blog-post-content"
              dangerouslySetInnerHTML={{ __html: html }}
            />
          </div>
        </div>
      </HomePage>
    </div>
  )
}
export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
  }
`
