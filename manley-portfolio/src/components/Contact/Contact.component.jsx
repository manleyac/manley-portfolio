import React from "react"
import coder from "../../../public/images/coder.svg"
import "./Contact.styles.css"

export const Contact = () => (
  <div>
    <h1>Contact Me</h1>
    <div className="contactBody">
      <form
        className="contactForm"
        name="contact"
        method="POST"
        data-netlify="true"
      >
        <p>
          <label>
            <input
              type="text"
              name="name"
              placeholder="Name"
              className="input"
            />
          </label>
        </p>
        <p>
          <label>
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="input"
            />
          </label>
        </p>
        <p>
          <label>
            <textarea
              name="message"
              placeholder="Message"
              className="input"
            ></textarea>
          </label>
        </p>
        <p>
          <button className="contactButton" type="submit">Send</button>
        </p>
      </form>
      <div className="imgDiv">
        <img className="coderImg" src={coder} />
      </div>
    </div>
  </div>
)
