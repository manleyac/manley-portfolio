import React from "react"

import { HomePage } from "../components/HomePage/HomePage.component.jsx"
import { Header } from "../components/Header/Header.component.jsx"
import { Intro } from "../components/Intro/Intro.component.jsx"
import { Blog } from "../components/Blog/Blog.component.jsx"
import { Projects } from "../components/Projects/Projects.component.jsx"
import { About } from "../components/About/About.component.jsx"
import { Contact } from "../components/Contact/Contact.component.jsx"
import { Footer } from "../components/Footer/Footer.component.jsx"

import "./app.styles.css"

export default () => (
  <div className="app">
    <HomePage>
      <Header />
      <Intro />
      <Blog />
      <Projects />
      <About />
      <Contact />
      <Footer />
    </HomePage>
  </div>
)
