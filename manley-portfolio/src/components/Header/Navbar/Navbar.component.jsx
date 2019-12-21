import React, { useState, useEffect } from "react"
import { Burger } from "./Burger/Burger.component.jsx"
import { Menu } from "./Menu/Menu.component.jsx"
import AnchorLink from "react-anchor-link-smooth-scroll"
import { Link } from "gatsby"


import "./Navbar.styles.css"

export const Navbar = () => {
  
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 700px)");
    mediaQuery.addListener(handleMediaQueryChange);
    handleMediaQueryChange(mediaQuery);
    const listener = () => {
      setOpen(false)
    }
    window.addEventListener("scroll", listener)
    return () => {
      window.removeEventListener("scroll", listener)
    }
  },[])

  const handleMediaQueryChange = mediaQuery => {
    if (mediaQuery.matches) {
      setIsSmallScreen(true)
    } else {
      setIsSmallScreen(false)
    }
  }

  const largeScreen = () => (
    <div className="">
      <Link className="navlink" to="/blog">
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
    </div>
  )

  const smallScreen = () => (
    <div>
      <Burger open={open} setOpen={setOpen} />
      <Menu open={open} setOpen={setOpen} />
    </div>
  )
  

  return <>{isSmallScreen ? smallScreen() : largeScreen()}</>
}
