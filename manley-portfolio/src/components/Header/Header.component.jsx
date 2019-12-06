import React, { useState } from "react"
import { Link } from "gatsby"
import { Navbar } from "./Navbar/Navbar.component.jsx"

import "./Header.styles.css"

export const Header = ({open,setOpen}) => {
  return (
    <div className="header">
      <Link id="logo" to="/">MANLEY WEB DEV</Link>
      <Navbar open={open} setOpen={setOpen}/>
    </div>
  )
}
