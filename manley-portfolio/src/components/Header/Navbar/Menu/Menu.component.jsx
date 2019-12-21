import React, { useEffect } from "react"
import AnchorLink from "react-anchor-link-smooth-scroll"
import { Link } from "gatsby"

import "./Menu.styles.css";

export const Menu = ({ open }) => {
  return (
    <nav open={open} className={`${open ? "openStyle" : "closedStyle"}`}>
      <Link className="menuLink navFirstL" to="/blog">
        Blog
      </Link>

      <AnchorLink className="menuLink" href="#projects">
        Projects
      </AnchorLink>

      <AnchorLink className="menuLink" href="#about">
        About
      </AnchorLink>

      <AnchorLink className="menuLink" href="#contact">
        Contact
      </AnchorLink>
    </nav>
  )
}


