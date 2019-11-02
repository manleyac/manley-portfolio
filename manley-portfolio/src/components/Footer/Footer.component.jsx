import React from "react"

import social from "./social.json"

import "./Footer.styles.css";

export const Footer = () => (
  <div className="footer">
    <div className="rights">
      <h2>Andrew Manley</h2>
      <span>© All rights are reserved | {new Date().getFullYear()}</span>
    </div>
    <div>
      {social.map(({ id, name, link, icon }) => (
        <a
          key={id}
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`follow me on ${icon}`}
        >
          <img width="24" src={icon} alt={name} />
        </a>
      ))}
    </div>
  </div>
)
