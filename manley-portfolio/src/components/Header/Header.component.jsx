import React, { useState } from "react"
import { Link } from "gatsby"
import { Navbar } from "./Navbar/Navbar.component.jsx"

import "./Header.styles.css"

export const Header = () => {
  // const [sidebar, toggle] = useState(false);
  return (
    <div className="header">
      <Link to="/">MANLEY WEB DEV</Link>
      <Navbar />
    </div>
  )
}
