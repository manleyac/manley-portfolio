import React, { useEffect } from "react"
import AnchorLink from "react-anchor-link-smooth-scroll"
import { Link } from "gatsby"

import "./Menu.styles.css";

export const Menu = ({ open }) => {
  return (
    <nav open={open} className={`${open ? "openStyle" : "closedStyle"}`}>
      <Link className="navlink navFirstL" to="/blog">
        Blog
      </Link>

      <AnchorLink className="navlink" href="#projects">
        Projects
      </AnchorLink>

      <AnchorLink className="navlink" href="#about">
        About
      </AnchorLink>

      <AnchorLink className="navlink" href="#contact">
        Contact
      </AnchorLink>
    </nav>
  )
}


