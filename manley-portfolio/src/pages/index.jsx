import React from "react"

import { PageHead } from "../components/PageHead/PageHead.component.jsx"
import { HomePage } from "../components/HomePage/HomePage.component.jsx"
import { Intro } from "../components/Intro/Intro.component.jsx"
import { BlogPreview } from "../components/Blog/BlogPreview.component.jsx"
import { Projects } from "../components/Projects/Projects.component.jsx"
import { About } from "../components/About/About.component.jsx"
import { Contact } from "../components/Contact/Contact.component.jsx"

import "./app.styles.css"

export default () => {
  return (
    <div className="app footerBackground">
      <PageHead />
      <HomePage styleClass="columnSpace">
        <Intro />
        <BlogPreview />
        <Projects />
        <About />
        <Contact />
      </HomePage>
    </div>
  )
}
