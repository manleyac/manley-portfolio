import React, { useEffect } from "react"
import { Link } from "gatsby"

import "./Menu.styles.css";

export const Menu = ({ open }) => {
  return (
    <nav open={open} className={`${open ? "openStyle" : "closedStyle"}`}>
      <Link className="menuLink navFirstL" to="blog">
        Blog
      </Link>

      <Link className="menuLink" to="#projects">
        Projects
      </Link>

      <Link className="menuLink" to="#about">
        About
      </Link>

      <Link className="menuLink" to="#contact">
        Contact
      </Link>
    </nav>
  )
}


