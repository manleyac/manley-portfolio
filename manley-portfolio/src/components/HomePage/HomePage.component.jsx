import React from "react"

import { Header } from "../Header/Header.component.jsx"
import { Footer } from "../Footer/Footer.component.jsx"

import "./HomePage.styles.css"

export const HomePage = ({ children, styleClass, open, setOpen }) => (
  <div className={`homepage ${styleClass}`}>
    <Header open={open} setOpen={setOpen} />
    {children}
    <Footer/>
  </div>
)
