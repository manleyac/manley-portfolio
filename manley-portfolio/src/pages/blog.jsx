import React from "react"
import { Link, graphql } from "gatsby"
import { HomePage } from "../components/HomePage/HomePage.component.jsx"

import "./app.styles.css"

export default function Blog({ data }) {
  const { edges: posts } = data.allMarkdownRemark
  return (
   <div className="app">
      <HomePage>
        <div className="blog-posts">
          {posts
            .filter(post => post.node.frontmatter.title.length > 0)
            .map(({ node: post }) => {
              return (
                <div className="blog-post-preview" key={post.id}>
                  <h1>
                    <Link to={post.frontmatter.path}>
                      {post.frontmatter.title}
                    </Link>
                  </h1>
                  <h2>{post.frontmatter.date}</h2>
                  <p>{post.excerpt}</p>
                </div>
              )
            })}
        </div>
      </HomePage>
   </div>
  )
}

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          excerpt(pruneLength: 250)
          id
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            path
          }
        }
      }
    }
  }
`
