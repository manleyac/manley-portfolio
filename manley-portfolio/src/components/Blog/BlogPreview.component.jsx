import React from "react"

import { Link } from "gatsby"
import { BlogPostPreview } from "./BlogPostPreview/BlogPostPreview.component.jsx"

export const BlogPreview = () => (
  <div>
    <Link to="./blog">
      <h1>Blog</h1>
    </Link>
    <p>Check out posts I write now and then about interesting topics.</p>
    <BlogPostPreview />
  </div>
)
