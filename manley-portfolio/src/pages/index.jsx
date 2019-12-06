import React, { useState, useEffect } from "react";

import {PageHead} from "../components/Helmet/Helmet.component.jsx";
import { HomePage } from "../components/HomePage/HomePage.component.jsx";
import { Intro } from "../components/Intro/Intro.component.jsx";
import { BlogPreview } from "../components/Blog/BlogPreview.component.jsx";
import { Projects } from "../components/Projects/Projects.component.jsx";
import { About } from "../components/About/About.component.jsx";
import { Contact } from "../components/Contact/Contact.component.jsx";

import "./app.styles.css"

export default () => {
  const [open, setOpen] = useState(false)
  useEffect(() => {
    const listener = () => {
      setOpen(false);
    }
    window.addEventListener('scroll', listener);
    return () => {
      window.removeEventListener('scroll', listener);
    };
  }, [])

  return (
    <div className="app footerBackground">
      <PageHead/>
      <HomePage open={open} setOpen={setOpen} styleClass="columnSpace">
        <Intro />
        <BlogPreview />
        <Projects />
        <About />
        <Contact />
      </HomePage>
    </div>
  )
}
